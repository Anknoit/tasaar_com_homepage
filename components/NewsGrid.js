'use client';

import { useState } from 'react';

/* Homepage "Latest from the workbench" grid. The post cards are built at
   build time in app/page.js and handed down as plain data; this component
   exists only for the one thing the markup can't do on its own — swap a
   cover image that fails to load for a themed tile, so a missing file
   (or a slow one) never shows a broken-image icon on the landing page. */

const CAT_LABELS = {
  networks: 'Networks',
  energy: 'Energy',
  ai: 'AI',
  company: 'Company',
};

function Arrow() {
  return (
    <svg className="news-card-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cover({ post }) {
  /* Start in the fallback state when there is no image at all, so the tile
     renders its motif immediately instead of flashing an empty frame. */
  const [failed, setFailed] = useState(!post.coverImage);
  const cat = CAT_LABELS[post.category] ? post.category : 'company';

  return (
    <div className={`news-card-cover news-cat-bg-${cat}${failed ? ' is-fallback' : ''}`}>
      {!failed && (
        <img
          className="news-card-img"
          src={post.coverImage}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      {/* The fallback mark: the post initial, large and faint, over the
          category-tinted void tile. */}
      <span className="news-card-glyph" aria-hidden="true">
        {(post.title || '·').trim().charAt(0).toUpperCase()}
      </span>
      <span className={`news-card-tag font-mono news-cat news-cat-${cat}`}>
        {CAT_LABELS[cat]}
      </span>
    </div>
  );
}

export default function NewsGrid({ posts }) {
  return (
    <div className="news-grid">
      {posts.map((post) => (
        <a className="news-card" key={post.slug} href={`/blog/${post.slug}/`}>
          <Cover post={post} />
          <div className="news-card-body">
            <span className="news-card-date font-mono">{post.dateLabel}</span>
            <h3 className="news-card-title">{post.title}</h3>
            {post.excerpt && <p className="news-card-excerpt">{post.excerpt}</p>}
            <span className="news-card-read font-mono">
              Read <Arrow />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
