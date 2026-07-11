import Nav from '../components/Nav';
import StatusBar from '../components/StatusBar';
import HomeEffects from '../components/HomeEffects';

export const metadata = {
  alternates: { canonical: 'https://tasaar.com/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: 'Tasaar',
  url: 'https://tasaar.com',
  description: 'Engineering the Intelligence layer for Infrastructure Efficiency',
  foundingDate: '2025',
};

function ProductArrow() {
  return (
    <svg className="product-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* React hoists this into <head>: the logo starts downloading with
          the document instead of waiting for layout/hydration */}
      <link rel="preload" href="/white_logo-Photoroom.png" as="image" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Nav active="home" onHome />

      {/* ═══════ HERO ═══════ */}
      <section id="home" className="hero-section" aria-label="Hero">
        <canvas className="hero-universe" id="hero-universe" aria-hidden="true"></canvas>
        <div className="hero-content" id="hero-content">
          <img src="/white_logo-Photoroom.png" alt="Tasaar" className="hero-logo" width="560" height="560" fetchPriority="high" decoding="async" />
          <p className="hero-thesis">
            <span className="hero-thesis-line">Engineering the Intelligence layer for</span>
            <span className="hero-highlight">Infrastructure Efficiency<span className="shoot-star" aria-hidden="true"></span></span>
          </p>
        </div>

        {/* ARC of Earth */}
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
            {/* Arc peak at y=0 (gradient=0 → invisible boundary), sides at y=120 → no hard line */}
            <path d="M0,120 Q720,0 1440,120 L1440,400 L0,400 Z" fill="url(#hg)" />
          </svg>
        </div>
      </section>

      {/* ═══════ PRODUCTS ═══════ */}
      <section id="products" className="products-section" aria-label="Products">
        <div className="products-inner">
          <div className="section-label">Products</div>
          <div className="products-grid">

            <div className="product-slot is-placeholder" aria-label="Reserved slot">
              <div className="product-canvas-wrap"><canvas className="product-canvas" data-shape="reserved"></canvas></div>
              <div className="product-name">—</div>
              <div className="product-tagline">Reserved.</div>
            </div>

            <a className="product-slot" href="/products/platform3/">
              <div className="product-canvas-wrap"><canvas className="product-canvas" data-shape="platform"></canvas></div>
              <div className="product-name">Platform3</div>
              <div className="product-tagline">In development.</div>
              <ProductArrow />
            </a>

            <div className="product-slot is-placeholder" aria-label="Reserved slot">
              <div className="product-canvas-wrap"><canvas className="product-canvas" data-shape="reserved"></canvas></div>
              <div className="product-name">—</div>
              <div className="product-tagline">Reserved.</div>
            </div>

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
