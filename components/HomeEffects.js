'use client';

import { useEffect } from 'react';
import { initHeroScene } from '../lib/heroScene';
import { initProductScenes } from '../lib/productScenes';

/* Runs the homepage's scroll/animation behavior against the
   server-rendered markup: star canvas, product objects, hero text
   fade+drift, and nav scroll-spy. Renders nothing itself. */
export default function HomeEffects() {
  useEffect(() => {
    /* Always land on the hero — prevent browser scroll restoration */
    if (history.scrollRestoration) history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const heroEl = document.querySelector('.hero-section');
    const heroContent = document.getElementById('hero-content');
    const canvas = document.getElementById('hero-universe');

    /* WebGL context creation can throw (blocked GPU, disabled WebGL).
       The old site loaded these as standalone modules where a throw only
       killed the effect — never the page. Keep that contract: no stars
       is acceptable, a crashed page is not. */
    let cleanupHero = () => {};
    let cleanupProducts = () => {};
    try { cleanupHero = initHeroScene(canvas, heroEl); } catch (e) { console.warn('Hero scene disabled:', e); }
    try { cleanupProducts = initProductScenes(); } catch (e) { console.warn('Product scenes disabled:', e); }

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
      window.removeEventListener('scroll', onScroll);
      heroContent.removeEventListener('animationend', onEntranceEnd);
      cleanupHero();
      cleanupProducts();
    };
  }, []);

  return null;
}
