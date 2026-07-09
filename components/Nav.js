/* Shared top navigation. On the homepage links are in-page anchors
   (scroll-spy toggles .active); elsewhere they point back to /#section. */
export default function Nav({ active = null, onHome = false }) {
  const p = onHome ? '' : '/';
  const cls = (id) => 'nav-link' + (active === id ? ' active' : '');
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="nav-logo" href={`${p}#home`}>TASAAR</a>
      <div className="nav-links">
        <a className={cls('home')} href={`${p}#home`}>Home</a>
        <a className={cls('products')} href={`${p}#products`}>Products</a>
        <a className={cls('about')} href={`${p}#about`}>About</a>
        <a className={cls('blog')} href="/blog/">Blog</a>
      </div>
      <a className="nav-cta" href="mailto:hello@tasaar.com">Get in touch</a>
    </nav>
  );
}
