'use client';

import { useEffect, useRef, useState } from 'react';

/* Skylark waitlist capture.

   The site is a static export (no serverless functions), so submissions go
   through Netlify Forms: the encoded POST below lands on the deploy and
   Netlify emails it on. The matching detection form lives in
   components/WaitlistNetlifyForm.js — Netlify only registers a form it can
   see in the built HTML, and this modal's markup is not there until it opens.

   NOTE: the "email a submission to hello@tasaar.com" step is a Netlify
   dashboard setting — Site configuration → Forms → Form notifications. */

const FORM_NAME = 'skylark-waitlist';

const BUSINESS_TYPES = [
  'Retail / D2C',
  'BFSI',
  'Healthcare',
  'Education',
  'Travel & Hospitality',
  'Logistics',
  'Real Estate',
  'Telecom',
  'Other',
];

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  businessType: '',
  message: '',
};

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

export default function WaitlistModal({ className = '', children = 'Join Waitlist' }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setStatus('idle');
  };

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...form }),
      });
      if (!res.ok) throw new Error(`Netlify returned ${res.status}`);
      setStatus('done');
      setForm(EMPTY);
    } catch (err) {
      console.error('Waitlist submission failed:', err);
      setStatus('error');
    }
  };

  /* If Netlify is unreachable (local dev, or forms not yet enabled) the user
     still gets a working path: their own mail client, pre-filled. */
  const mailtoFallback =
    'mailto:hello@tasaar.com?subject=' +
    encodeURIComponent('Skylark Founding Access — Waitlist') +
    '&body=' +
    encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Company: ${form.company}\nBusiness type: ${form.businessType}\n\n${form.message}`
    );

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div
          className="waitlist-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-heading"
          onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="waitlist-modal font-plex-sans">
            <button type="button" className="waitlist-close" aria-label="Close" onClick={close}>
              &times;
            </button>

            {status === 'done' ? (
              <div className="waitlist-done">
                <div className="waitlist-seal font-plex-mono" aria-hidden="true">01</div>
                <h2 id="waitlist-heading" className="waitlist-title">Welcome to the first circle.</h2>
                <p className="waitlist-sub">
                  Your place is held — and so is your <strong>first month, free</strong>. A founding
                  member of the Skylark team will write to you personally from hello@tasaar.com to
                  set up your workspace and walk your first conversation flow with you.
                </p>
                <button type="button" className="cadence-btn btn-crimson btn-lg font-plex-mono" onClick={close}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="waitlist-kicker font-plex-mono">SKYLARK · FOUNDING ACCESS</div>
                <h2 id="waitlist-heading" className="waitlist-title">
                  Be one of the first to run on Skylark.
                </h2>
                <p className="waitlist-sub">
                  We are onboarding a small first group by hand — not a queue, a shortlist. You get a
                  named person from our team, direct input into what we build next, and your platform
                  configured around your business rather than a template.
                </p>

                <div className="waitlist-offer">
                  <div className="waitlist-offer-tag font-plex-mono">FOUNDING MEMBER OFFER</div>
                  <div className="waitlist-offer-line">
                    <strong>Your first month is on us.</strong> Thirty days to watch enquiries turn into
                    booked, paid conversations inside a single WhatsApp thread — before you spend a rupee.
                  </div>
                </div>

                <form className="waitlist-form" name={FORM_NAME} onSubmit={submit}>
                  <input type="hidden" name="form-name" value={FORM_NAME} readOnly />

                  <label className="waitlist-field">
                    <span className="font-plex-mono">Full name *</span>
                    <input
                      ref={firstFieldRef}
                      type="text" name="name" required autoComplete="name"
                      value={form.name} onChange={set('name')} placeholder="Your name"
                    />
                  </label>

                  <label className="waitlist-field">
                    <span className="font-plex-mono">Work email *</span>
                    <input
                      type="email" name="email" required autoComplete="email"
                      value={form.email} onChange={set('email')} placeholder="you@company.com"
                    />
                  </label>

                  <div className="waitlist-row">
                    <label className="waitlist-field">
                      <span className="font-plex-mono">Phone</span>
                      <input
                        type="tel" name="phone" autoComplete="tel"
                        value={form.phone} onChange={set('phone')} placeholder="+91 ..."
                      />
                    </label>

                    <label className="waitlist-field">
                      <span className="font-plex-mono">Company</span>
                      <input
                        type="text" name="company" autoComplete="organization"
                        value={form.company} onChange={set('company')} placeholder="Company name"
                      />
                    </label>
                  </div>

                  <label className="waitlist-field">
                    <span className="font-plex-mono">Business type</span>
                    <select name="businessType" value={form.businessType} onChange={set('businessType')}>
                      <option value="">Select if applicable</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <label className="waitlist-field">
                    <span className="font-plex-mono">What would you fix first?</span>
                    <textarea
                      name="message" rows={3} value={form.message} onChange={set('message')}
                      placeholder="Which conversation costs you the most customers today?"
                    />
                  </label>

                  {status === 'error' && (
                    <p className="waitlist-error">
                      We couldn&apos;t submit that. Please{' '}
                      <a href={mailtoFallback}>email us directly</a> and we&apos;ll add you manually.
                    </p>
                  )}

                  <div className="waitlist-actions">
                    <button
                      type="submit"
                      className="cadence-btn btn-crimson btn-lg font-plex-mono"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending…' : 'Claim My Free Month'}
                    </button>
                    <button type="button" className="cadence-btn btn-teal-outline btn-lg font-plex-mono" onClick={close}>
                      Cancel
                    </button>
                  </div>

                  <p className="waitlist-fineprint">
                    Places are limited and reviewed personally. We only use these details to talk to
                    you about Skylark — never anything else, never sold on.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
