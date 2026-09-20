'use client';

import { useState } from 'react';

/* ─────────────────────────────────────────────────────────
   CATALOG DATA
   Every product carries the category it files under; the
   side panel filters this one list rather than holding a
   second copy of the products per category.
───────────────────────────────────────────────────────── */
export const CATEGORIES = [
  { id: 'cpaas', label: 'CPaaS', blurb: 'Communication platform as a service' },
  { id: 'iot', label: 'IoT / IIoT', blurb: 'Connected assets and industrial telemetry' },
  { id: 'business', label: 'Business', blurb: 'Agentic systems for running the company' },
];

export const PRODUCTS = [
  {
    name: 'Skylark',
    category: 'cpaas',
    desc: 'CPaaS platform solutions for all kinds of businesses — WhatsApp, RCS and SMS on one programmable layer.',
    href: 'https://skylark.tasaar.com',
    status: 'live',
    accent: 'teal',
    icon: 'signal',
  },
  {
    name: 'SPV-Protect',
    category: 'iot',
    desc: 'IIoT asset protection for solar plants — live tracking, tamper detection and anti-theft loop back.',
    href: '/coming-soon/',
    status: 'soon',
    accent: 'gold',
    icon: 'shield',
  },
  {
    name: 'Agentic CRM',
    category: 'business',
    desc: 'A CRM where agents do the follow-up — pipeline, conversations and next actions handled end to end.',
    href: '/coming-soon/',
    status: 'soon',
    accent: 'crimson',
    icon: 'pipeline',
  },
  {
    name: 'ERP',
    category: 'business',
    desc: 'Operations, inventory and finance in one ledger, with agents reconciling what usually needs a spreadsheet.',
    href: '/coming-soon/',
    status: 'soon',
    accent: 'ink',
    icon: 'ledger',
  },
];

/* Line-art marks in the house geometry — one per product, drawn on the
   same 24-grid so they stay optically equal inside the tiles. */
function ProductIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (name === 'signal') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="2.2" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4" />
        <path d="M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
      </svg>
    );
  }
  if (name === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9.5-4.1-1.9-7-5.3-7-9.5V6l7-3z" />
        <path d="M9.2 12.1l2 2 3.6-3.9" />
      </svg>
    );
  }
  if (name === 'pipeline') {
    return (
      <svg {...common}>
        <path d="M4 5h16l-6 6.8V20l-4-2.2v-6z" />
        <circle cx="18.5" cy="17.5" r="2.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M5 4h14v16H5z" />
      <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="catalog-tile-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductsCatalog() {
  /* null = no filter applied, i.e. the default "everything" view. */
  const [active, setActive] = useState(null);

  const shown = active ? PRODUCTS.filter((p) => p.category === active) : PRODUCTS;
  const countFor = (id) => PRODUCTS.filter((p) => p.category === id).length;

  return (
    <div className="catalog-layout">
      {/* ── SIDE PANEL ── */}
      <aside className="catalog-panel" aria-label="Filter products by category">
        <div className="catalog-panel-title font-mono">Categories</div>

        <nav className="catalog-filters">
          <button
            type="button"
            className={'catalog-filter' + (active === null ? ' is-active' : '')}
            aria-pressed={active === null}
            onClick={() => setActive(null)}
          >
            <span className="catalog-filter-label">All products</span>
            <span className="catalog-filter-count font-mono">{PRODUCTS.length}</span>
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={'catalog-filter' + (active === cat.id ? ' is-active' : '')}
              aria-pressed={active === cat.id}
              onClick={() => setActive(active === cat.id ? null : cat.id)}
            >
              <span className="catalog-filter-label">{cat.label}</span>
              <span className="catalog-filter-count font-mono">{countFor(cat.id)}</span>
              <span className="catalog-filter-blurb">{cat.blurb}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* ── GRID ── */}
      <div className="catalog-main">
        <div className="catalog-main-head">
          <h2 className="catalog-main-title">
            {active ? CATEGORIES.find((c) => c.id === active).label : 'All products'}
          </h2>
          <span className="catalog-main-count font-mono" aria-live="polite">
            {shown.length} {shown.length === 1 ? 'product' : 'products'}
          </span>
        </div>

        <ul className="catalog-grid">
          {shown.map((product) => {
            const external = product.href.startsWith('http');
            const category = CATEGORIES.find((c) => c.id === product.category);
            return (
              <li key={product.name}>
                <a
                  className={`catalog-tile accent-${product.accent}`}
                  href={product.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <span className="catalog-tile-icon">
                    <ProductIcon name={product.icon} />
                  </span>
                  <span className="catalog-tile-body">
                    <span className="catalog-tile-top">
                      <span className="catalog-tile-name">{product.name}</span>
                      {product.status === 'soon' && (
                        <span className="catalog-tag font-mono">Coming soon</span>
                      )}
                    </span>
                    <span className="catalog-tile-cat font-mono">{category.label}</span>
                    <span className="catalog-tile-desc">{product.desc}</span>
                  </span>
                  <Arrow />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
