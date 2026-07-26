import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/* Build-time blog loader. Every .md file in content/blog becomes a post:

   ---
   title: The post title
   category: networks | energy | ai | company
   excerpt: One or two sentences shown on the card.
   cover: constellation | waveform | stack | route | spike | orbit | orbitLarge  (optional)
   date: 2026-07-15        (publish date; omit while drafting)
   featured: true          (optional — pins the post to the featured slot)
   draft: true             (keeps it as a "Coming soon" card with no page)
   ---

   Markdown body follows. Publishing = remove `draft: true`, add `date:`. */

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

const DEFAULT_COVERS = {
  networks: 'constellation',
  energy: 'waveform',
  ai: 'stack',
  company: 'orbit',
};

function formatDate(date) {
  return new Date(date)
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function getPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md')).sort();

  const posts = files.map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'));
    const category = DEFAULT_COVERS[data.category] ? data.category : 'company';
    const draft = data.draft === true;
    return {
      /* numeric filename prefixes order drafts without leaking into URLs */
      slug: file.replace(/\.md$/, '').replace(/^\d+-/, ''),
      title: data.title || 'Untitled',
      category,
      excerpt: data.excerpt || '',
      author: data.author || 'Tasaar',
      cover: data.cover || DEFAULT_COVERS[category],
      featured: data.featured === true,
      draft,
      date: data.date ? new Date(data.date).getTime() : 0,
      dateLabel: draft || !data.date ? 'Coming soon' : formatDate(data.date),
      content,
    };
  });

  /* published posts first, newest first; drafts after, in filename order */
  return posts.sort((a, b) => {
    if (a.draft !== b.draft) return a.draft ? 1 : -1;
    return b.date - a.date;
  });
}

export function getPublishedPosts() {
  return getPosts().filter((p) => !p.draft);
}

export function getPost(slug) {
  return getPosts().find((p) => p.slug === slug) || null;
}

/* The featured slot: an explicitly pinned post wins, else the newest. */
export function splitFeatured(posts) {
  const pinned = posts.find((p) => p.featured);
  const featured = pinned || posts[0] || null;
  return { featured, rest: posts.filter((p) => p !== featured) };
}
