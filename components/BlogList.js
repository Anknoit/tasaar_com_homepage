'use client';

import { useState } from 'react';

/* Cover motifs — thin-stroke drawings on the void tile, one per category. */
const covers = {
  orbitLarge: (
    <svg viewBox="0 0 640 400" fill="none" aria-hidden="true">
      <circle cx="320" cy="200" r="120" stroke="#EAE6DF" strokeOpacity=".22" strokeWidth="1" strokeDasharray="3 7" />
      <circle cx="320" cy="200" r="66" stroke="#EAE6DF" strokeOpacity=".14" strokeWidth="1" />
      <circle cx="425" cy="142" r="4" fill="#C9A84C" />
      <circle cx="266" cy="240" r="2.5" fill="#EAE6DF" fillOpacity=".8" />
      <circle cx="120" cy="90" r="1.5" fill="#EAE6DF" fillOpacity=".5" />
      <circle cx="540" cy="310" r="1.5" fill="#EAE6DF" fillOpacity=".5" />
      <circle cx="490" cy="70" r="1" fill="#EAE6DF" fillOpacity=".4" />
      <circle cx="90" cy="320" r="1" fill="#EAE6DF" fillOpacity=".4" />
    </svg>
  ),
  constellation: (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M42 152 L112 58 L192 110 L262 48" stroke="#C9A84C" strokeOpacity=".6" strokeWidth="1" />
      <path d="M112 58 L162 160 L192 110" stroke="#C9A84C" strokeOpacity=".3" strokeWidth="1" />
      <circle cx="42" cy="152" r="2.5" fill="#E0C070" />
      <circle cx="112" cy="58" r="4" fill="#E0C070" />
      <circle cx="112" cy="58" r="8" stroke="#E0C070" strokeOpacity=".4" />
      <circle cx="192" cy="110" r="2.5" fill="#E0C070" />
      <circle cx="262" cy="48" r="2.5" fill="#E0C070" />
      <circle cx="162" cy="160" r="2.5" fill="#E0C070" />
    </svg>
  ),
  waveform: (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M24 100 C60 100 60 44 96 44 S132 156 168 156 204 100 296 100" stroke="#1E8A6E" strokeOpacity=".75" strokeWidth="1.5" />
      <path d="M24 100 H296" stroke="#1E8A6E" strokeOpacity=".18" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="168" cy="156" r="3" fill="#1E8A6E" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M160 36 L232 72 L160 108 L88 72 Z" stroke="#D42848" strokeOpacity=".8" strokeWidth="1" />
      <path d="M160 70 L232 106 L160 142 L88 106 Z" stroke="#D42848" strokeOpacity=".45" strokeWidth="1" />
      <path d="M160 104 L232 140 L160 176 L88 140 Z" stroke="#D42848" strokeOpacity=".2" strokeWidth="1" />
      <circle cx="160" cy="36" r="2.5" fill="#D42848" />
    </svg>
  ),
  route: (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M60 140 L140 140 L140 60 L260 60" stroke="#C9A84C" strokeOpacity=".55" strokeWidth="1" />
      <path d="M60 140 L60 80 L140 60" stroke="#C9A84C" strokeOpacity=".25" strokeWidth="1" />
      <circle cx="60" cy="140" r="2.5" fill="#E0C070" />
      <circle cx="140" cy="140" r="2.5" fill="#E0C070" />
      <circle cx="140" cy="60" r="2.5" fill="#E0C070" />
      <circle cx="260" cy="60" r="4" fill="#E0C070" />
      <circle cx="260" cy="60" r="8" stroke="#E0C070" strokeOpacity=".4" />
      <circle cx="60" cy="80" r="2.5" fill="#E0C070" />
    </svg>
  ),
  spike: (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M40 160 L100 160 L124 60 L148 160 L296 160" stroke="#1E8A6E" strokeOpacity=".7" strokeWidth="1.5" />
      <path d="M124 60 L124 34" stroke="#1E8A6E" strokeOpacity=".4" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="124" cy="60" r="3" fill="#1E8A6E" />
    </svg>
  ),
  orbit: (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <circle cx="160" cy="100" r="58" stroke="#EAE6DF" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3 7" />
      <circle cx="211" cy="72" r="3.5" fill="#C9A84C" />
      <circle cx="132" cy="146" r="2" fill="#EAE6DF" fillOpacity=".7" />
      <circle cx="66" cy="52" r="1.2" fill="#EAE6DF" fillOpacity=".5" />
      <circle cx="262" cy="156" r="1.2" fill="#EAE6DF" fillOpacity=".5" />
    </svg>
  ),
};

const catLabels = {
  networks: 'Networks',
  energy: 'Energy',
  ai: 'AI Infrastructure',
  company: 'Company',
};

const filterDots = { networks: 'g', ai: 'cr' };

const postHref = (post) => `/blog/${post.slug}/`;

function Meta({ cat, date, author }) {
  return (
    <div className="blog-meta">
      <span className={`blog-cat ${cat}`}>{catLabels[cat]}</span>
      <span className="blog-meta-sep">·</span>
      <span>{date}</span>
      {author ? (
        <>
          <span className="blog-meta-sep">·</span>
          <span>By {author}</span>
        </>
      ) : null}
    </div>
  );
}

export default function BlogList({ featured, posts }) {
  const [filter, setFilter] = useState('all');

  const showFeatured = featured && (filter === 'all' || featured.category === filter);
  const visible = posts.filter((p) => filter === 'all' || p.category === filter);
  const anyShown = showFeatured || visible.length > 0;

  const filterBtn = (key, label) => (
    <button
      className={'blog-filter' + (filter === key ? ' active' : '')}
      onClick={() => setFilter(key)}
      type="button"
    >
      {filterDots[key] && <span className={`blog-filter-dot ${filterDots[key]}`}></span>}
      {label}
    </button>
  );

  return (
    <>
      {/* ═══════ FILTERS ═══════ */}
      <div className="blog-filters" role="group" aria-label="Filter posts by category">
        {filterBtn('all', 'All')}
        {filterBtn('networks', 'Networks')}
        {filterBtn('ai', 'AI Infrastructure')}
        {filterBtn('company', 'Company')}
      </div>

      {/* ═══════ FEATURED ═══════ */}
      {showFeatured && (
        <a className="blog-featured" href={postHref(featured)}>
          <div className="blog-cover">
            {featured.coverImage ? (
              <img src={featured.coverImage} alt={featured.title} className="blog-cover-img" />
            ) : (
              covers[featured.cover]
            )}
          </div>
          <div className="blog-featured-text">
            <Meta cat={featured.category} date={featured.dateLabel} author={featured.author} />
            <h2 className="blog-post-title">{featured.title}</h2>
            <p className="blog-excerpt">{featured.excerpt}</p>
            <span className="blog-read">
              Read the post
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
        </a>
      )}

      {/* ═══════ POST GRID ═══════ */}
      <div className="blog-grid">
        {visible.map((post) => (
          <a className="blog-card" href={postHref(post)} key={post.slug}>
            <div className="blog-cover">
              {post.coverImage ? (
                <img src={post.coverImage} alt={post.title} className="blog-cover-img" />
              ) : (
                covers[post.cover]
              )}
            </div>
            <div className="blog-card-text">
              <Meta cat={post.category} date={post.dateLabel} author={post.author} />
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>

      {/* ═══════ EMPTY STATE ═══════ */}
      {!anyShown && <p className="blog-empty">No posts in this category yet. New writing lands here first.</p>}
    </>
  );
}
