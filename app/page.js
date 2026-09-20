import Nav from '../components/Nav';
import StatusBar from '../components/StatusBar';
import HomeEffects from '../components/HomeEffects';
import { OrganizationSchema, WebSiteSchema } from '../components/JsonLd';

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

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <Nav active="home" onHome />

      {/* ═══════ HERO SECTION ═══════ */}
      <section className="hero-section" aria-label="Overview">
        <canvas className="hero-universe" id="hero-universe" aria-hidden="true"></canvas>

        <div className="hero-content" id="hero-content">
          <img src="/white_logo-Photoroom.png" alt="Tasaar - Intelligence Layer for Industrial IoT, AI Integration & Networks" className="hero-logo" width="560" height="560" fetchPriority="high" decoding="async" />
          <h1 className="hero-thesis">
            <span className="hero-thesis-line">Engineering the Intelligence layer for</span>
            <span className="hero-highlight">Infrastructure Efficiency<span className="shoot-star" aria-hidden="true"></span></span>
          </h1>
        </div>

        {/* The arc resolves the starfield into whatever section follows it.
            With the product index moved to /products that is now the dark
            Featured band, so the gradient lands on its navy, not white. */}
        <div className="hero-fade" aria-hidden="true">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0A1322" stopOpacity="0" />
                <stop offset="10%" stopColor="#0A1322" stopOpacity="0.01" />
                <stop offset="22%" stopColor="#0A1322" stopOpacity="0.05" />
                <stop offset="36%" stopColor="#0A1322" stopOpacity="0.13" />
                <stop offset="50%" stopColor="#0A1322" stopOpacity="0.28" />
                <stop offset="63%" stopColor="#0A1322" stopOpacity="0.50" />
                <stop offset="75%" stopColor="#0A1322" stopOpacity="0.72" />
                <stop offset="86%" stopColor="#0A1322" stopOpacity="0.90" />
                <stop offset="94%" stopColor="#0A1322" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#0A1322" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,120 Q720,0 1440,120 L1440,400 L0,400 Z" fill="url(#hg)" />
          </svg>
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
            <a className="featured-btn-primary font-mono" href="/coming-soon/">
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
