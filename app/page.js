import Nav from '../components/Nav';
import StatusBar from '../components/StatusBar';
import HomeEffects from '../components/HomeEffects';

function ProductArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="btn-icon">
      <path d="M10 3v10m0 0l-4-4m4 4l4-4M3 17h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

{/* Vector Illustration 1: Network Intelligence / Platform3 Telemetry & Self-Healing Nodes */}
function NetworkVectorIllustration() {
  return (
    <div className="product-vector-wrap" aria-hidden="true">
      <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-vector-svg">
        <defs>
          <radialGradient id="netGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="netLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0E7C86" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="240" cy="160" r="140" fill="url(#netGlow)" />

        {/* Grid Gridlines */}
        <path d="M40 80 H440 M40 160 H440 M40 240 H440" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M120 40 V280 M240 40 V280 M360 40 V280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Central Core & Outer Concentric Loops */}
        <circle cx="240" cy="160" r="85" stroke="rgba(201, 168, 76, 0.3)" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="240" cy="160" r="50" stroke="rgba(14, 124, 134, 0.5)" strokeWidth="1.5" />
        <circle cx="240" cy="160" r="14" fill="#0C1F34" stroke="#C9A84C" strokeWidth="2.5" />
        <circle cx="240" cy="160" r="4" fill="#C9A84C" />

        {/* Network Nodes */}
        <g className="node-group">
          {/* Top Node */}
          <line x1="240" y1="160" x2="240" y2="75" stroke="url(#netLineGrad)" strokeWidth="1.5" />
          <circle cx="240" cy="75" r="8" fill="#07080F" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="240" cy="75" r="3" fill="#C9A84C" />
          <text x="240" y="56" fill="#E2E8F0" fontSize="10" fontFamily="monospace" textAnchor="middle">CELL_01 [500ms]</text>

          {/* Bottom Left Node */}
          <line x1="240" y1="160" x2="140" y2="220" stroke="url(#netLineGrad)" strokeWidth="1.5" />
          <circle cx="140" cy="220" r="8" fill="#07080F" stroke="#0E7C86" strokeWidth="2" />
          <circle cx="140" cy="220" r="3" fill="#0E7C86" />
          <text x="140" y="242" fill="#E2E8F0" fontSize="10" fontFamily="monospace" textAnchor="middle">RAN_CORE</text>

          {/* Bottom Right Node */}
          <line x1="240" y1="160" x2="340" y2="220" stroke="url(#netLineGrad)" strokeWidth="1.5" />
          <circle cx="340" cy="220" r="8" fill="#07080F" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="340" cy="220" r="3" fill="#C9A84C" />
          <text x="340" y="242" fill="#E2E8F0" fontSize="10" fontFamily="monospace" textAnchor="middle">REPAIR_LOOP</text>
        </g>

        {/* Dynamic Telemetry Waveform */}
        <path d="M70 160 Q 115 120, 160 160 T 250 160 T 340 160 T 410 160" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeOpacity="0.6" />
        
        {/* Status Tag */}
        <rect x="180" y="265" width="120" height="24" rx="4" fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.4)" />
        <text x="240" y="281" fill="#F59E0B" fontSize="10" fontFamily="monospace" textAnchor="middle" letterSpacing="1.5" fontWeight="bold">● SELF-HEALING ACTIVE</text>
      </svg>
    </div>
  );
}

{/* Vector Illustration 2: Communication Intelligence / Cadence WhatsApp Chat & Sentinel Security */}
function CommunicationVectorIllustration() {
  return (
    <div className="product-vector-wrap" aria-hidden="true">
      <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="product-vector-svg">
        <defs>
          <radialGradient id="commGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0E7C86" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0E7C86" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="240" cy="160" r="140" fill="url(#commGlow)" />

        {/* Phone / Interface Wireframe Container */}
        <rect x="110" y="30" width="260" height="260" rx="16" fill="#0C0E18" stroke="rgba(14, 124, 134, 0.4)" strokeWidth="1.5" />

        {/* Header Bar */}
        <path d="M110 46 C110 37, 117 30, 126 30 H354 C363 30, 370 37, 370 46 V72 H110 V46 Z" fill="#0C1F34" />
        <circle cx="134" cy="51" r="5" fill="#25D366" />
        <text x="146" y="55" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="500">Cadence Verified Agent</text>
        <rect x="290" y="43" width="70" height="16" rx="8" fill="rgba(14,124,134,0.3)" />
        <text x="325" y="54" fill="#2DD4BF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SENTINEL™</text>

        {/* Message 1 (Incoming User Query) */}
        <g transform="translate(130, 90)">
          <rect x="0" y="0" width="180" height="34" rx="8" fill="#1A2232" stroke="rgba(255,255,255,0.12)" />
          <text x="12" y="21" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif">Book appointment for Friday at 2pm?</text>
        </g>

        {/* Message 2 (Outgoing AI Agent Response) */}
        <g transform="translate(160, 136)">
          <rect x="0" y="0" width="190" height="42" rx="8" fill="#0E7C86" />
          <text x="12" y="18" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="500">Slot confirmed! Settle fee below:</text>
          <text x="12" y="32" fill="#E7F2F1" fontSize="9" fontFamily="sans-serif">In-Thread Payment · ₹500</text>
        </g>

        {/* In-Thread Action Payment Card */}
        <g transform="translate(160, 190)">
          <rect x="0" y="0" width="190" height="36" rx="6" fill="#B01030" />
          <text x="95" y="22" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PAY VIA UPI / CARD →</text>
        </g>

        {/* Sentinel Shield Badge Overlay */}
        <g transform="translate(125, 240)">
          <rect x="0" y="0" width="230" height="32" rx="6" fill="rgba(14,124,134,0.18)" stroke="rgba(14,124,134,0.5)" />
          <path d="M14 10 L18 20 L28 8" stroke="#2DD4BF" strokeWidth="2" fill="none" />
          <text x="36" y="20" fill="#2DD4BF" fontSize="9.5" fontFamily="monospace" letterSpacing="0.5" fontWeight="bold">DPDP Compliant · 0 Redirect Loss</text>
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav active="home" onHome />

      {/* ═══════ HERO SECTION (UNTOUCHED ORIGINAL) ═══════ */}
      <section className="hero-section" aria-label="Overview">
        <canvas className="hero-universe" id="hero-universe" aria-hidden="true"></canvas>

        <div className="hero-content" id="hero-content">
          <img src="/white_logo-Photoroom.png" alt="Tasaar" className="hero-logo" width="560" height="560" fetchPriority="high" decoding="async" />
          <p className="hero-thesis">
            <span className="hero-thesis-line">Engineering the Intelligence layer for</span>
            <span className="hero-highlight">network efficiency<span className="shoot-star" aria-hidden="true"></span></span>
          </p>
        </div>

        <div className="hero-fade" aria-hidden="true">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                <stop offset="10%" stopColor="#fff" stopOpacity="0.01" />
                <stop offset="22%" stopColor="#fff" stopOpacity="0.05" />
                <stop offset="36%" stopColor="#fff" stopOpacity="0.13" />
                <stop offset="50%" stopColor="#fff" stopOpacity="0.28" />
                <stop offset="63%" stopColor="#fff" stopOpacity="0.50" />
                <stop offset="75%" stopColor="#fff" stopOpacity="0.72" />
                <stop offset="86%" stopColor="#fff" stopOpacity="0.90" />
                <stop offset="94%" stopColor="#fff" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#fff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,120 Q720,0 1440,120 L1440,400 L0,400 Z" fill="url(#hg)" />
          </svg>
        </div>
      </section>

      {/* ═══════ PRODUCTS & SOLUTIONS (ZIG-ZAG ALTERNATING LAYOUT WITH FEATURE BADGES) ═══════ */}
      <section id="products" className="products-section" aria-label="Products and Solutions">
        <div className="products-inner">
          <div className="section-label">Products &amp; Solutions</div>

          <div className="product-showcase-container">
            {/* ROW 1: CADENCE.AI — VISUAL LEFT, DESC RIGHT */}
            <div className="product-showcase-row">
              <div className="showcase-visual">
                <CommunicationVectorIllustration />
              </div>

              <div className="showcase-content">
                <span className="showcase-kicker font-mono teal">COMMUNICATION INTELLIGENCE</span>
                <h3 className="showcase-title">Cadence.ai</h3>
                <div className="showcase-subtitle font-mono teal">AI-Native Communication &amp; Commerce Platform</div>
                <p className="showcase-desc">
                  Replaces high-friction web redirects with verified 2-way AI conversations on WhatsApp, enabling in-thread booking, enquiry, and instant payment settlement.
                </p>

                <div className="product-feature-badges font-mono">
                  <span className="feature-badge teal">WHATSAPP</span>
                  <span className="feature-badge teal">SMS</span>
                  <span className="feature-badge teal">RCS</span>
                  <span className="feature-badge teal">SMART CHATBOTS</span>
                </div>

                <div className="showcase-action">
                  <a className="showcase-link teal font-mono" href="/products/cadence/" target="_blank" rel="noopener noreferrer">
                    Explore Cadence.ai <ProductArrow />
                  </a>
                </div>
              </div>
            </div>

            {/* ROW 2: NAVNET — DESC LEFT, VISUAL RIGHT */}
            <div className="product-showcase-row">
              <div className="showcase-content">
                <span className="showcase-kicker font-mono gold">NETWORK INTELLIGENCE</span>
                <h3 className="showcase-title">NavNet</h3>
                <div className="showcase-subtitle font-mono gold">AI-Native Network Monitoring &amp; Telemetry</div>
                <p className="showcase-desc">
                  Every network monitor watches your infrastructure. NavNet navigates it — combining table-stakes NMS reliability with gRPC high-frequency telemetry for AI workloads and NavAssist RAG for real-time fault resolution.
                </p>

                <div className="product-feature-badges font-mono">
                  <span className="feature-badge gold">AI-NATIVE NMS</span>
                  <span className="feature-badge gold">NAVASSIST (RAG AI)</span>
                  <span className="feature-badge gold">gRPC TELEMETRY</span>
                  <span className="feature-badge gold">REAL-TIME TELEMETRY</span>
                </div>

                <div className="showcase-action">
                  <a className="showcase-link font-mono" href="/products/navnet/">
                    Explore NavNet <ProductArrow />
                  </a>
                </div>
              </div>

              <div className="showcase-visual">
                <NetworkVectorIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED SECTION (DARK NAVY THEME - DO T LOGO TOP RIGHT & ACTION BUTTONS) ═══════ */}
      <section id="featured" className="featured-section" aria-label="Featured Recognition">
        <div className="featured-inner">
          <div className="featured-header-split">
            <div className="featured-header-main">
              <div className="featured-kicker font-mono">FEATURED</div>
              <h2 className="featured-headline">
                Flagship 5G Innovation, Supported by Government of India.
              </h2>
              <p className="featured-sub">
                Platform3 represents next-generation autonomous RAN intelligence, recognized and supported for enterprise telecom scale.
              </p>
            </div>

            {/* Top Right Corner Official Department of Telecom Logo Container */}
            <div className="featured-logo-topright">
              <div className="featured-logo-badge" title="Department of Telecommunications, Ministry of Communications, Govt. of India">
                <img src="/dot_ministry_logo.png" alt="Ministry of Communications, Govt of India" className="featured-logo-img ministry-logo" />
                <div className="logo-divider"></div>
                <img src="/dot_india_telecom_logo.png" alt="DoT India Telecom" className="featured-logo-img dot-logo" />
              </div>
            </div>
          </div>

          <div className="featured-grid">
            {/* CARD 1: FLAGSHIP O-RAN & RIC */}
            <div className="featured-card">
              <div className="featured-card-kicker font-mono">FLAGSHIP PROJECT</div>
              <h3 className="featured-card-title">Self-Healing 5G Network in RIC</h3>
              <p className="featured-card-desc">
                Platform3 is a flagship project designed for self-healing 5G networks using Open RAN (O-RAN) architectures, running natively inside the RAN Intelligent Controller (RIC).
              </p>
            </div>

            {/* CARD 2: DOT SELECTION & IMC 2026 SHOWCASE */}
            <div className="featured-card featured-highlight">
              <div className="featured-dot-header">
                <span className="featured-card-kicker font-mono teal">PROTOTYPE &amp; SHOWCASE</span>
                <span className="featured-badge-tag font-mono">IMC 2026 DELHI</span>
              </div>
              <h3 className="featured-card-title">Selected by DoT India</h3>
              <p className="featured-card-desc">
                Selected for prototype development by the Department of Telecommunications (DoT), Govt. of India, and chosen for live hosting at India Mobile Congress (IMC 2026) in New Delhi.
              </p>
            </div>

            {/* CARD 3: DOT SEED FUNDING */}
            <div className="featured-card">
              <div className="featured-card-kicker font-mono gold">STARTUP GRANT</div>
              <h3 className="featured-card-title">Seed Funding from DoT</h3>
              <p className="featured-card-desc">
                Received seed funding support from the Department of Telecommunications (DoT), Govt. of India, to accelerate startup R&amp;D and enterprise 5G deployment.
              </p>
            </div>
          </div>

          {/* Action Row: Know More & Download Brochure */}
          <div className="featured-actions-row">
            <a className="featured-btn-primary font-mono" href="/products/navnet/">
              Know More <ProductArrow />
            </a>
            <a 
              className="featured-btn-secondary font-mono" 
              href="/Platform_3_B2B_overview_Brochure-1.pdf" 
              download="Platform 3 B2B_overview Brochure-1.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Download Platform3 B2B Overview Brochure"
            >
              <DownloadIcon /> Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" className="content-section about-section" aria-label="About">
        <div className="inner">
          <div className="section-label">About</div>
          <p className="about-line">Founded on years inside telecom&apos;s core.</p>
          <p className="about-line">Built to do the same for what comes next.</p>
        </div>
      </section>

      <StatusBar />
      <HomeEffects />
    </>
  );
}
