import Nav from './Nav';

export default function ProductDetail({ name, tagline }) {
  return (
    <>
      <Nav active="products" />
      <main className="detail-main" aria-label={name}>
        <div className="detail-inner">
          <div className="detail-eyebrow">
            <span>A Tasaar Product</span>
            <span className="stage">In Development</span>
          </div>
          <h1 className="detail-name">{name}</h1>
          <p className="detail-tagline">{tagline}</p>
          <p className="detail-body">Full details are still being written. Complete information — what it does, who it&apos;s for, and how it works — will land here soon.</p>
          <a className="detail-back" href="/#products">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All products
          </a>
        </div>
      </main>
    </>
  );
}
