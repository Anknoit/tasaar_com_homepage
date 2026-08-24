'use client';

import { useEffect } from 'react';

/* Scroll behaviour for the product pages, modelled on twenty.com.
 *
 * Three things, in their vocabulary rather than a generic fade-in:
 *
 *   1. The hero pins at full height while the next band scrolls up over it,
 *      its content drifting and dissolving as it goes (their hero is
 *      `min-height:100vh; position:sticky; top:0; overflow:hidden`).
 *   2. Content arrives in short, fast, staggered reveals — 8px and 0.5s on
 *      cubic-bezier(.22,1,.36,1), the easing that dominates their stylesheet.
 *   3. Hover micro-interactions in their .14–.22s timing band.
 *
 * The markup stays untouched: this tags nodes at runtime, so it works across
 * every product page without editing their JSX. All of it is additive — with
 * JS off, or prefers-reduced-motion set, the page renders exactly as before.
 */
export default function ProductMotion() {
  useEffect(() => {
    const page = document.querySelector('.cadence-editorial-page');
    if (!page) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    /* Only opt the page into the motion stylesheet once JS is running —
       otherwise a no-JS visitor would get elements stuck at opacity 0. */
    page.classList.add('has-motion');

    const hero = page.querySelector('.cadence-editorial-hero');
    const heroInner = hero?.querySelector('.cadence-wrap');
    if (heroInner) heroInner.classList.add('hero-parallax');

    /* ── Staggered reveals ────────────────────────────────
       Reveal the meaningful blocks inside each band: the direct children of
       its wrap, plus any grid items, which stagger against each other. */
    const bands = page.querySelectorAll(
      '.cadence-editorial-section, .cadence-dark-band, .cadence-final-cta',
    );

    const groups = [];
    bands.forEach((band) => {
      const wrap = band.querySelector('.cadence-wrap') || band;
      const grid = wrap.querySelector(
        '.impact-grid-3, .concrete-grid, .editorial-journeys-grid, .editorial-doors-grid',
      );
      /* Grid items reveal as their own run so cards cascade rather than
         arriving as one block with the heading. */
      const items = [
        ...Array.from(wrap.children).filter((el) => el !== grid),
        ...(grid ? Array.from(grid.children) : []),
      ];
      if (items.length) groups.push(items);
    });

    groups.forEach((items) => {
      items.forEach((el, i) => {
        el.setAttribute('data-reveal', '');
        el.style.setProperty('--d', `${Math.min(i, 6) * 60}ms`);
      });
    });

    let io = null;
    const revealAll = () =>
      groups.flat().forEach((el) => el.classList.add('is-in'));

    if (reduced.matches || !('IntersectionObserver' in window)) {
      revealAll();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
      );
      groups.flat().forEach((el) => io.observe(el));
    }

    /* ── Hero parallax ────────────────────────────────────
       --p runs 0 → 1 across the hero's own height; the stylesheet turns it
       into drift, scale and fade. rAF-throttled, and skipped entirely when
       the hero isn't pinned (mobile / reduced motion). */
    let ticking = false;
    let raf = null;

    const onFrame = () => {
      ticking = false;
      if (!hero || !heroInner) return;
      if (reduced.matches || window.innerWidth <= 860) {
        heroInner.style.removeProperty('--p');
        return;
      }
      const h = hero.offsetHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      heroInner.style.setProperty('--p', p.toFixed(4));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(onFrame);
      }
    };

    onFrame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    /* Honour a mid-session change to the OS motion setting. */
    const onPrefChange = () => {
      if (reduced.matches) revealAll();
      onFrame();
    };
    reduced.addEventListener?.('change', onPrefChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reduced.removeEventListener?.('change', onPrefChange);
      if (raf) cancelAnimationFrame(raf);
      if (io) io.disconnect();
      page.classList.remove('has-motion');
    };
  }, []);

  return null;
}
