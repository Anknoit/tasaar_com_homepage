'use client';

import { useState } from 'react';

/* Shared top navigation. On the homepage links are in-page anchors
   (scroll-spy toggles .active); elsewhere they point back to /#section. */
export default function Nav({ active = null, onHome = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const p = onHome ? '' : '/';
  const cls = (id) => 'nav-link' + (active === id ? ' active' : '');

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`nav${isOpen ? ' menu-open' : ''}`} aria-label="Main navigation">
      <a className="nav-logo" href={`${p}#home`} onClick={closeMenu}>TASAAR</a>
      
      <button 
        className={`nav-toggle${isOpen ? ' active' : ''}`} 
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </button>

      <div className={`nav-links${isOpen ? ' open' : ''}`}>
        <a className={cls('home')} href={`${p}#home`} onClick={closeMenu}>Home</a>
        <a className={cls('products')} href="/products/" onClick={closeMenu}>Products</a>
        <a className={cls('featured')} href={`${p}#featured`} onClick={closeMenu}>Featured</a>
        <a className={cls('blog')} href="/blog/" onClick={closeMenu}>Blog</a>
        <a className="nav-cta nav-cta-mobile" href="mailto:hello@tasaar.com" onClick={closeMenu}>Get in touch</a>
      </div>

      <a className="nav-cta nav-cta-desktop" href="mailto:hello@tasaar.com">Get in touch</a>
    </nav>
  );
}

