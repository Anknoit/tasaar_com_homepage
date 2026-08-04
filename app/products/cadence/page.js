import Nav from '../../../components/Nav';
import StatusBar from '../../../components/StatusBar';

export const metadata = {
  title: 'Cadence.ai — The Numbers & Business Impact | Tasaar Networks',
  description: 'Communications Intelligence — the rhythm of every customer conversation. One AI-native platform that turns high-friction journeys into verified two-way conversations.',
  alternates: { canonical: 'https://tasaar.com/products/cadence' },
};

export default function CadencePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet" />

      {/* ═══════ SHARED SITE NAV ═══════ */}
      <Nav active="products" />

      <main className="cadence-editorial-page font-plex-sans">
        {/* ═══════ HERO SECTION (60% DRAFTING WHITE #FFFFFF) ═══════ */}
        <section className="cadence-editorial-hero bg-white">
          <div className="cadence-wrap">
            {/* <div className="hero-badge-pill font-plex-mono">
              <span className="pill-dot"></span>
              COMMUNICATIONS INTELLIGENCE — THE PLATFORM
            </div> */}

            <h1 className="editorial-title font-plex-sans">
              Cadence.ai <em>— the rhythm of every customer conversation.</em>
            </h1>

            <p className="editorial-lede">
              One AI-native platform that turns high-friction journeys — booking, enquiry, payment, support — into verified, two-way conversations. For those who want to close deals instantly, without multiple layers.
            </p>

            <div className="cadence-defrow font-plex-mono">
              <span>WhatsApp</span>
              <span>SMS</span>
              <span>RCS</span>
              <span>Smart Chatbots</span>
            </div>

            <div className="hero-cta-group">
              <a href="mailto:hello@tasaar.com?subject=Cadence.ai%20Start" className="cadence-btn btn-crimson btn-lg font-plex-mono">
                Start free
              </a>
              <a href="mailto:hello@tasaar.com?subject=Cadence.ai%20Demo" className="cadence-btn btn-teal-outline btn-lg font-plex-mono">
                Book a demo
              </a>
            </div>

            {/* SENTINEL TRUST BANNER (TEAL TINT #E7F2F1) */}
            <div className="sentinel-trust-banner">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="trust-text">
                <strong>Secured by Sentinel</strong> — fraud screening, opt-in consent, and DPDP compliance built in by default.
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THE NUMBERS & CLIENT BUSINESS IMPACT SECTION ═══════ */}
        <section id="numbers" className="cadence-editorial-section bg-white">
          <div className="cadence-wrap">
            <div className="section-meta">
              {/* <span className="meta-kicker font-plex-mono">THE NUMBERS</span> */}
              <h2 className="editorial-title-md">A conversation is not a marginal gain</h2>
              <p className="meta-sub">
                What verified, AI-native journeys deliver when a website, an app, or a call centre becomes a single WhatsApp thread.
              </p>
            </div>

            {/* CHANNEL BENCHMARKS GRID */}
            <div className="benchmarks-block">
              <div className="block-label font-plex-mono">CHANNEL BENCHMARKS</div>
              <div className="numbers-grid-4">
                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">98%</div>
                  <div className="num-title font-plex-sans">message open rate</div>
                  <div className="num-sub font-plex-mono">vs ~20% email</div>
                </div>

                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">45–60%</div>
                  <div className="num-title font-plex-sans">conversion in-thread</div>
                  <div className="num-sub font-plex-mono">up to 12× traditional</div>
                </div>

                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">90%+</div>
                  <div className="num-title font-plex-sans">lower cost per resolution</div>
                  <div className="num-sub font-plex-mono">$0.62 vs $7.40 human</div>
                </div>

                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">3–6 mo</div>
                  <div className="num-title font-plex-sans">payback period</div>
                  <div className="num-sub font-plex-mono">tier-1 deflection ~41%→59%</div>
                </div>
              </div>
            </div>

            {/* PROVEN IN DEPLOYMENT GRID */}
            {/* <div className="benchmarks-block mt-48">
              <div className="block-label font-plex-mono">PROVEN IN DEPLOYMENT</div>
              <div className="numbers-grid-4">
                <div className="num-card proven-card">
                  <div className="num-stat dark font-plex-mono">+29%</div>
                  <div className="num-title font-plex-sans">conversions</div>
                  <div className="num-sub font-plex-mono">insurance · Apollo 24|7</div>
                </div>

                <div className="num-card proven-card">
                  <div className="num-stat dark font-plex-mono">200%</div>
                  <div className="num-title font-plex-sans">more bookings</div>
                  <div className="num-sub font-plex-mono">healthcare · Al Habib</div>
                </div>

                <div className="num-card proven-card">
                  <div className="num-stat dark font-plex-mono">45%</div>
                  <div className="num-title font-plex-sans">cross-sell enabled</div>
                  <div className="num-sub font-plex-mono">banking · Axis Bank</div>
                </div>

                <div className="num-card proven-card">
                  <div className="num-stat dark font-plex-mono">54%</div>
                  <div className="num-title font-plex-sans">re-engagement</div>
                  <div className="num-sub font-plex-mono">travel · MakeMyTrip</div>
                </div>
              </div>
            </div> */}

            {/* CITATION FOOTNOTE BOX */}
            {/* <div className="citation-footnote-box">
              <div className="citation-badge font-plex-mono">ER CS</div>
              <div className="citation-text font-plex-sans">
                Figures are 2026 industry benchmarks for WhatsApp and RCS conversational commerce and results from published Karix / Tanla deployments — shown as category evidence, not Cadence.ai&apos;s own results. Sources: Meta, McKinsey, IBM, Zendesk, Salesforce, and client case studies.
              </div>
            </div> */}

            {/* CLIENT BUSINESS IMPACT ANALYSIS */}
            <div className="client-impact-block">
              <div className="block-label font-plex-mono teal">EXECUTIVE ANALYSIS — HOW THIS IMPACTS CLIENT BUSINESS</div>
              <div className="impact-grid-3">
                <div className="impact-card">
                  <div className="impact-tag font-plex-mono">01 · REVENUE ACCELERATION</div>
                  <h3>Eliminate 72% Redirect Drop-off</h3>
                  <p>
                    By executing slot selection, application form fill, and UPI/card payment settlement inside WhatsApp, clients remove external browser redirect friction and achieve up to <strong>12x higher conversion</strong> rates.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-tag font-plex-mono">02 · SUPPORT COST COLLAPSE</div>
                  <h3>90% Lower Resolution Overhead</h3>
                  <p>
                    Automated AI agents resolve routine enquiries and booking workflows at <strong>$0.62 per interaction</strong> vs $7.40 for human call centre agents, deflecting 41% to 59% of Tier-1 support tickets automatically.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-tag font-plex-mono">03 · CAPITAL PAYBACK SPEED</div>
                  <h3>Complete Payback in 3 to 6 Months</h3>
                  <p>
                    With an industry-leading <strong>98% message open rate</strong> (vs ~20% email), conversational AI campaigns generate immediate cashflow velocity, fully recovering platform investment within 3 to 6 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ CONCRETE PROBLEM VS SOLUTION ═══════ */}
        <section id="platform" className="cadence-editorial-section bg-tint">
          <div className="cadence-wrap">
            <div className="section-meta center">
              <span className="meta-kicker font-plex-mono">CONCRETE VALUE</span>
              <h2>Why send customers to a website when you can close the deal in WhatsApp?</h2>
              <p className="meta-sub">
                Traditional customer funnels lose 70% of users at external web redirects. Cadence keeps the entire transaction inside natural conversation.
              </p>
            </div>

            <div className="concrete-grid">
              <div className="concrete-card traditional">
                <div className="card-tag font-plex-mono">Traditional Flow</div>
                <h3>High-friction web redirects</h3>
                <ul>
                  <li>Customer receives static SMS with external URL link</li>
                  <li>Opens mobile browser, waits for heavy page load</li>
                  <li>Re-enters credentials, phone number, and OTP</li>
                  <li>72% drop-off before completion</li>
                </ul>
              </div>

              <div className="concrete-card cadence-way">
                <div className="card-tag teal font-plex-mono">The Cadence Way</div>
                <h3>In-thread 2-way resolution</h3>
                <ul>
                  <li>Customer chats naturally in free-text on WhatsApp</li>
                  <li>Agentic engine detects intent and selects journey</li>
                  <li>Slot selection and instant payment directly in chat</li>
                  <li>Zero app downloads · 4x higher completion rate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ LIVE CONVERSATION SHOWCASE (APPLE STYLE) ═══════ */}
        <section className="cadence-editorial-section bg-white">
          <div className="cadence-wrap">
            <div className="section-meta center">
              <span className="meta-kicker font-plex-mono">INTERACTIVE SHOWCASE</span>
              <h2>Conversational commerce in action</h2>
              <p className="meta-sub">A real patient appointment reschedule and in-thread payment flow.</p>
            </div>

            <div className="apple-chat-window">
              <div className="window-header">
                <div className="header-status">
                  <span className="online-indicator"></span>
                  <strong>Cadence Verified Agent</strong> · WhatsApp Business API
                </div>
                <span className="sentinel-badge font-plex-mono">Sentinel™ Protected</span>
              </div>

              <div className="window-body">
                <div className="chat-bubble user-bubble">
                  <div className="bubble-text">Hi, can I reschedule my appointment to Friday afternoon and pay the fee?</div>
                  <div className="bubble-meta font-plex-mono">14:02 · Delivered</div>
                </div>

                <div className="chat-bubble agent-bubble">
                  <div className="bubble-tag font-plex-mono">Sentinel™ Screening Passed</div>
                  <div className="bubble-text">
                    Hello Ankit! I found an open slot with Dr. Sharma on <strong>Friday, Aug 7th at 2:30 PM</strong>.
                    <br /><br />
                    I have reserved this slot for you. Tap below to confirm and settle your registration fee directly:
                  </div>

                  <div className="inthread-payment-card">
                    <div className="pay-header">
                      <span className="pay-title">Appointment Confirmation Deposit</span>
                      <span className="pay-price font-plex-mono">₹500.00</span>
                    </div>
                    <a href="mailto:hello@tasaar.com?subject=Cadence%20Payment%20Demo" className="pay-action-btn font-plex-mono">
                      Pay via UPI / Card →
                    </a>
                  </div>

                  <div className="bubble-meta font-plex-mono">14:02 · Read</div>
                </div>

                <div className="chat-bubble user-bubble">
                  <div className="bubble-text">Payment completed! Thank you.</div>
                  <div className="bubble-meta font-plex-mono">14:03 · Delivered</div>
                </div>

                <div className="chat-bubble agent-bubble">
                  <div className="bubble-text">
                    Confirmed! Your PDF confirmation pass has been issued. See you on Friday at 2:30 PM.
                  </div>
                  <div className="bubble-meta font-plex-mono">14:03 · Read</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THE 8 REUSABLE JOURNEYS (FROM CADENCE.HTML) ═══════ */}
        <section id="journeys" className="cadence-editorial-section bg-tint">
          <div className="cadence-wrap">
            <div className="section-meta">
              {/* <span className="meta-kicker font-plex-mono">THE EIGHT JOURNEYS</span> */}
              <h2>Where Cadence.ai helps your business</h2>
              <p className="meta-sub">
                Every client engagement is one of these patterns, re-skinned and connected to their data — not a new build. Distilled from proven conversational-commerce deployments across healthcare, banking, insurance and travel.
              </p>
            </div>

            <div className="editorial-journeys-grid">
              <div className="journey-tile">
                <span className="tile-num font-plex-mono">01</span>
                <h4>Book / reschedule / cancel</h4>
                <p>Slot selection, OTP, live-agent handoff</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">02</span>
                <h4>Enquire → apply</h4>
                <p>Product enquiry into in-chat application</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">03</span>
                <h4>In-chat calculator</h4>
                <p>Interactive estimator or quote tool</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">04</span>
                <h4>Pay in-thread</h4>
                <p>Complete the transaction, no redirect</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">05</span>
                <h4>Deliver documents</h4>
                <p>Reports, PDFs, benefit cards in-chat</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">06</span>
                <h4>Cross-sell in-conversation</h4>
                <p>Right offer at the decision moment</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">07</span>
                <h4>Feedback / survey</h4>
                <p>Post-transaction, in-channel</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">08</span>
                <h4>Re-engage / nurture</h4>
                <p>Win back lapsed or churned users</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SENTINEL TRUST LAYER (TASAAR NAVY #0C1F34 BAND) ═══════ */}
        <section id="sentinel" className="cadence-dark-band">
          <div className="cadence-wrap">
            <div className="section-meta dark">
              <span className="meta-kicker teal font-plex-mono">SENTINEL™ TRUST</span>
              <h2 style={{ color: "white" }}>Trust sits under everything.</h2>
              <p className="meta-sub light">
                Not a feature of one door — the floor beneath all of them. Every message passes the gate before the engine acts. The capability incumbents reserve for enterprise, given to every client by default.
              </p>
            </div>

            <div className="sentinel-grid">
              <div className="sentinel-card">
                <div className="sentinel-badge-chip font-plex-mono">Fraud &amp; scam screening</div>
                <h3>Real-time Message Verification</h3>
                <p>
                  Real-time screening of inbound and outbound messages — phishing, smishing, impersonation — so a small client&apos;s verified channel stays safe and their customers stay protected.
                </p>
              </div>

              <div className="sentinel-card">
                <div className="sentinel-badge-chip font-plex-mono">Consent &amp; compliance</div>
                <h3>Auditable DPDP Protection</h3>
                <p>
                  Opt-in state tracked and auditable; message policy and India&apos;s DPDP obligations enforced at the gate. Compliance becomes a property of the platform, not the client&apos;s problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THREE DOORS / OFFERINGS (FROM CADENCE.HTML) ═══════ */}
        <section id="doors" className="cadence-editorial-section bg-white">
          <div className="cadence-wrap">
            <div className="section-meta">
              {/* <span className="meta-kicker font-plex-mono">OFFERINGS</span> */}
              <h2>Three doors onto the same product</h2>
              <p className="meta-sub">
                The client chooses how much they touch. Same core underneath — the door only changes who does the work and how it&apos;s priced.
              </p>
            </div>

            <div className="editorial-doors-grid">
              <div className="door-column">
                <span className="door-tag font-plex-mono">CONSOLE</span>
                <h3>Managed &amp; self-serve</h3>
                <p className="door-sub font-plex-mono">for direct clients</p>
                <p className="door-desc">A no-code workspace built on the eight journey templates. The client configures and runs it — or hands it to us to run for them.</p>
                <ul className="door-check-list">
                  <li>No-code journey builder</li>
                  <li>Brand, escalation &amp; hours setup</li>
                  <li>Live dashboards — CTR, conversion, deflection</li>
                  <li>Done-for-you managed tier</li>
                </ul>
              </div>

              <div className="door-column featured-door">
                <span className="door-tag teal font-plex-mono">API + SDK</span>
                <h3>Embed in their app</h3>
                <p className="door-sub font-plex-mono">for builders</p>
                <p className="door-desc">Business-ready REST APIs and SDKs. The client bakes journeys, the agent, and fraud-check straight into their own product.</p>
                <ul className="door-check-list">
                  <li>REST API + client SDKs</li>
                  <li>Sandbox keys &amp; full docs</li>
                  <li>Webhooks into their systems</li>
                  <li>Highest margin, lowest support</li>
                </ul>
              </div>

              <div className="door-column">
                <span className="door-tag font-plex-mono">SOLUTION PACKS</span>
                <h3>Drop-in by vertical</h3>
                <p className="door-sub font-plex-mono">for vertical buyers</p>
                <p className="door-desc">Pre-built journey packs per industry — healthcare booking, lending enquiry, BFSI service, travel — live in days, not months.</p>
                <ul className="door-check-list">
                  <li>Vertical-tuned templates</li>
                  <li>Pre-mapped integrations</li>
                  <li>Fastest path to live</li>
                  <li>The "integrate in days" promise, literal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ FINAL CALL TO ACTION ═══════ */}
        <section className="cadence-final-cta">
          <div className="cadence-wrap center">
            <h2>Ready to transform customer conversations?</h2>
            <p>Deploy Cadence.ai to convert inquiries into verified transactions.</p>
            <div className="hero-cta-group">
              <a href="mailto:hello@tasaar.com?subject=Cadence.ai%20Start" className="cadence-btn btn-crimson btn-lg font-plex-mono">
                Start free
              </a>
              <a href="mailto:hello@tasaar.com?subject=Cadence.ai%20Demo" className="cadence-btn btn-teal-outline btn-lg font-plex-mono">
                Book a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ SHARED SITE FOOTER ═══════ */}
      <StatusBar />
    </>
  );
}
