import Nav from '../../components/Nav';
import StatusBar from '../../components/StatusBar';
import BlogList from '../../components/BlogList';
import { getPosts, splitFeatured } from '../../lib/posts';

export const metadata = {
  title: 'Blog — Tasaar',
  description: 'Writing on networks, energy and AI infrastructure from the team at Tasaar.',
  alternates: { canonical: 'https://tasaar.com/blog' },
  openGraph: {
    type: 'website',
    title: 'Blog — Tasaar',
    description: 'Writing on networks, energy and AI infrastructure from the team at Tasaar.',
    url: 'https://tasaar.com/blog',
    siteName: 'Tasaar',
  },
};

export default function BlogPage() {
  /* strip the markdown body — the client list only needs card fields */
  const { featured, rest } = splitFeatured(
    getPosts().map(({ content, ...card }) => card)
  );
  return (
    <>
      <Nav active="blog" />

      <main className="blog-main" aria-label="Blog">
        <div className="blog-inner">

          {/* ═══════ PAGE HEAD ═══════ */}
          <header className="blog-head">
            <div className="section-label">Blog</div>
            <h1 className="blog-title">Field notes from the intelligence&nbsp;layer.</h1>
            <p className="blog-sub">Writing on networks, energy and AI infrastructure — from the team building Tasaar.</p>
          </header>

          <BlogList featured={featured} posts={rest} />

          {/* ═══════ SUBSCRIBE STRIP ═══════ */}
          <div className="blog-subscribe">
            <p className="blog-subscribe-line">Want new posts in your inbox?</p>
            <a className="blog-subscribe-link" href="mailto:hello@tasaar.com?subject=Subscribe%20me%20to%20the%20Tasaar%20blog">hello@tasaar.com</a>
          </div>

        </div>
      </main>

      <StatusBar />
    </>
  );
}
