'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/* Auto-advancing slideshow for the Featured section — photos from the
   5G Hackathon presentations. Lives under public/hackathon_images and is
   referenced here by clean sequential filenames. Pauses on hover and when
   the tab is hidden; respects prefers-reduced-motion. */
const SLIDES = [
  { src: '/hackathon_images/hackathon-1.jpeg', alt: '5G Hackathon presentation — slide 1' },
  { src: '/hackathon_images/hackathon-2.jpeg', alt: '5G Hackathon presentation — slide 2' },
  { src: '/hackathon_images/hackathon-3.jpeg', alt: '5G Hackathon presentation — slide 3' },
  { src: '/hackathon_images/hackathon-4.jpeg', alt: '5G Hackathon presentation — slide 4' },
  { src: '/hackathon_images/hackathon-6.jpeg', alt: '5G Hackathon presentation — slide 6' },
];

const INTERVAL_MS = 5000;

export default function HackathonSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((next) => {
    setIndex((prev) => (next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <div className="hackathon-kicker-wrap">
      <div className="featured-card-kicker font-mono teal hackathon-eyebrow">
        5G HACKATHON
      </div>
      <div
        className="hackathon-slideshow"
        role="group"
        aria-roledescription="carousel"
        aria-label="5G Hackathon presentation photos"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hackathon-stage">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className={`hackathon-slide${i === index ? ' is-active' : ''}`}
              aria-hidden={i === index ? 'false' : 'true'}
            >
              <img
                src={slide.src}
                alt=""
                aria-hidden="true"
                className="hackathon-slide-bg"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <img
                src={slide.src}
                alt={slide.alt}
                className="hackathon-slide-img"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          <button
            type="button"
            className="hackathon-nav prev"
            aria-label="Previous photo"
            onClick={() => go(index - 1)}
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="hackathon-nav next"
            aria-label="Next photo"
            onClick={() => go(index + 1)}
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="hackathon-dots" role="tablist" aria-label="Choose photo">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index ? 'true' : 'false'}
              aria-label={`Go to photo ${i + 1}`}
              className={`hackathon-dot${i === index ? ' is-active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
