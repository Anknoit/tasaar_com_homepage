'use client';

import { useEffect } from 'react';
import Nav from '../components/Nav';
import StatusBar from '../components/StatusBar';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled runtime error caught by app/error.js:', error);
  }, [error]);

  return (
    <>
      <Nav />
      <main className="content-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px' }}>
        <div className="inner" style={{ maxWidth: '600px' }}>
          <div className="section-label" style={{ color: 'var(--crimson)', marginBottom: '16px' }}>500 · Server Error</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '300', marginBottom: '20px', color: 'var(--white)' }}>
            Something went wrong.
          </h1>
          <p style={{ color: 'var(--dim)', marginBottom: '32px', fontSize: '16px', lineHeight: '1.6' }}>
            An unexpected error occurred while loading this page. Our team has been notified.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => reset()}
              className="nav-cta"
              style={{ background: 'var(--crimson)', color: 'var(--white)', cursor: 'pointer', border: 'none', padding: '12px 24px', fontSize: '12px' }}
            >
              Try Again
            </button>
            <a
              href="/"
              className="nav-link"
              style={{ border: '1px solid var(--border)', padding: '12px 24px', fontSize: '12px' }}
            >
              Return Home
            </a>
          </div>
        </div>
      </main>
      <StatusBar />
    </>
  );
}
