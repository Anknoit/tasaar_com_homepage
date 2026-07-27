'use client';

import { useEffect, useState } from 'react';

/* Runs the homepage's scroll/animation behavior against the
   server-rendered markup: star canvas, product objects, hero text
   fade+drift, and nav scroll-spy. Renders nothing itself. */
export default function HomeEffects() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || typeof window === 'undefined' || typeof document === 'undefined') return;
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    /* Always land on the hero — prevent browser scroll restoration */
    if (history.scrollRestoration) history.scrollRestoration = 'manual';
    try {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch (e) {
      window.scrollTo(0, 0);
    }

    const heroEl = document.querySelector('.hero-section');
    const heroContent = document.getElementById('hero-content');
    const canvas = document.getElementById('hero-universe');

    if (!heroEl || !heroContent || !canvas) return;

    /* three.js is ~170KB gzipped — dynamic import keeps it out of the
       page's initial bundle, so the logo and text render immediately and
       the starfield fades in the moment its chunk arrives.

       WebGL context creation can throw (blocked GPU drivers, WebGL
       disabled). A throw must never crash the page — instead flip each
       area to its pure-CSS fallback (static starfield / line-art), which
       renders on any browser. */
    let cleanupHero = () => {};
    let cleanupProducts = () => {};
    let unmounted = false;

    (async () => {
      try {
        const { initHeroScene } = await import('../lib/heroScene');
        if (unmounted) return;
        cleanupHero = initHeroScene(canvas, heroEl);
        canvas.classList.add('is-live');
      } catch (e) {
        console.warn('Hero WebGL unavailable, using CSS starfield:', e);
        heroEl.classList.add('webgl-fallback');
      }
      try {
        const { initProductScenes } = await import('../lib/productScenes');
        if (unmounted) return;
        cleanupProducts = initProductScenes();
      } catch (e) {
        console.warn('Product WebGL unavailable, using static art:', e);
        const grid = document.querySelector('.products-grid');
        if (grid) grid.classList.add('webgl-fallback');
      }
    })();

    /* ─────────────────────────────────────────────
       SCROLL: text fade + nav active
    ───────────────────────────────────────────── */
    let ticking = false;

    function onFrame() {
      const scrollY = window.scrollY;
      const heroH = heroEl.offsetHeight;

      /* Text fade + drift: completes at 1/3 of hero scroll distance */
      const fadeEnd = heroH * 0.33;
      const progress = Math.min(1, Math.max(0, scrollY / fadeEnd));
      heroContent.style.opacity = (1 - progress).toFixed(3);
      heroContent.style.transform = 'translateY(' + (-progress * 22).toFixed(1) + 'px)';

      /* Nav active state */
      const threshold = scrollY + window.innerHeight * 0.35;
      let active = 'home';
      ['products', 'about'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + scrollY <= threshold) {
          active = id;
        }
      });
      document.querySelectorAll('.nav-link').forEach(function (link) {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === '#' + active);
      });

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(onFrame);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    /* The one-shot entrance animation uses fill-mode:forwards, which pins
       opacity/transform in the cascade above any inline style — silently
       blocking the scroll-driven fade/drift above once it finishes. Drop
       the animation once it has played, and immediately hand control to
       onFrame so there's no flash back to the stylesheet's base opacity:0. */
    function onEntranceEnd() {
      heroContent.style.animation = 'none';
      onFrame();
    }
    heroContent.addEventListener('animationend', onEntranceEnd);

    return () => {
      unmounted = true;
      window.removeEventListener('scroll', onScroll);
      heroContent.removeEventListener('animationend', onEntranceEnd);
      cleanupHero();
      cleanupProducts();
    };
  }, [ready]);

  return null;
}
