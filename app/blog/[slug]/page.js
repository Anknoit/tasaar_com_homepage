import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Nav from '../../../components/Nav';
import StatusBar from '../../../components/StatusBar';
import { getPosts, getPost } from '../../../lib/posts';

const catLabels = {
  networks: 'Networks',
  energy: 'Energy',
  ai: 'AI Infrastructure',
  company: 'Company',
};

/* Every post gets a page — drafts render a "still being written" note
   instead of a dead link. `output: 'export'` rejects an empty params
   list, so an empty content/blog emits one placeholder page instead. */
export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getPosts();
  if (posts.length === 0) return [{ slug: 'coming-soon' }];
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  if (post.draft) {
    /* draft pages are reachable but shouldn't be indexed */
    return { title: `${post.title} — Tasaar`, robots: 'noindex' };
  }
  return {
    title: `${post.title} — Tasaar`,
    description: post.excerpt,
    alternates: { canonical: `https://tasaar.com/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://tasaar.com/blog/${post.slug}`,
      siteName: 'Tasaar',
      images: post.coverImage ? [`https://tasaar.com${post.coverImage}`] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [`https://tasaar.com${post.coverImage}`] : undefined,
    }
  };
}

function BackLink() {
  return (
    <a className="post-back" href="/blog/">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      All posts
    </a>
  );
}

function renderMarkdown(content) {
  if (!content) return '';
  const parsed = marked.parse(content, { async: false });
  return typeof parsed === 'string' ? parsed : '';
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    if (slug !== 'coming-soon') notFound();
    return (
      <>
        <Nav active="blog" />
        <main className="post-main" aria-label="Coming soon">
          <article className="post-inner">
            <div className="blog-meta"><span>Blog</span></div>
            <h1 className="post-title">Nothing published yet.</h1>
            <div className="post-body">
              <p>The first posts are being written. New writing lands on the blog page first.</p>
            </div>
            <BackLink />
          </article>
        </main>
        <StatusBar />
      </>
    );
  }

  return (
    <>
      <Nav active="blog" />

      <main className="post-main" aria-label={post.title}>
        <article className="post-inner">
          <div className="blog-meta">
            <span className={`blog-cat ${post.category}`}>{catLabels[post.category]}</span>
            <span className="blog-meta-sep">·</span>
            <span>{post.dateLabel}</span>
            {post.author ? (
              <>
                <span className="blog-meta-sep">·</span>
                <span>By {post.author}</span>
              </>
            ) : null}
          </div>
          <h1 className="post-title">{post.title}</h1>
          {!post.draft && post.coverImage && (
            <img className="post-cover" src={post.coverImage} alt={post.title} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem' }} />
          )}
          {post.draft ? (
            <div className="post-body">
              <p>{post.excerpt}</p>
              <p>This post is still being written — it will land here soon.</p>
            </div>
          ) : (
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          )}
          <BackLink />
        </article>
      </main>

      <StatusBar />
    </>
  );
}
