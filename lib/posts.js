import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/* Build-time blog loader. Every .md file in content/blog becomes a post */

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

const DEFAULT_COVERS = {
  networks: 'constellation',
  energy: 'waveform',
  ai: 'stack',
  company: 'orbit',
};

function formatDate(date) {
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Coming soon';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    return 'Coming soon';
  }
}

export function getPosts() {
  try {
    if (!fs.existsSync(BLOG_DIR)) return [];
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md')).sort();

    const posts = files.map((file) => {
      try {
        const fileContent = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
        const { data, content } = matter(fileContent);
        const category = DEFAULT_COVERS[data.category] ? data.category : 'company';
        
        const isDraft = data.draft === true || String(data.draft).toLowerCase() === 'true';
        const isFeatured = data.featured === true || String(data.featured).toLowerCase() === 'true';
        
        let dateVal = 0;
        if (data.date) {
          const parsed = new Date(data.date).getTime();
          if (!isNaN(parsed)) dateVal = parsed;
        }

        return {
          slug: file.replace(/\.md$/, '').replace(/^\d+-/, ''),
          title: data.title || 'Untitled',
          category,
          excerpt: data.excerpt || '',
          author: data.author || 'Tasaar',
          cover: data.cover || DEFAULT_COVERS[category],
          coverImage: data.coverImage || data.cover_image || null,
          featured: isFeatured,
          draft: isDraft,
          date: dateVal,
          dateLabel: isDraft || !data.date || dateVal === 0 ? 'Coming soon' : formatDate(data.date),
          content: content || '',
        };
      } catch (fileErr) {
        console.error(`[getPosts] Error reading post ${file}:`, fileErr);
        return null;
      }
    }).filter(Boolean);

    /* published posts first, newest first; drafts after, in filename order */
    return posts.sort((a, b) => {
      if (a.draft !== b.draft) return a.draft ? 1 : -1;
      return b.date - a.date;
    });
  } catch (err) {
    console.error('[getPosts] Unexpected error loading posts:', err);
    return [];
  }
}

export function getPublishedPosts() {
  return getPosts().filter((p) => !p.draft);
}

export function getPost(slug) {
  if (!slug) return null;
  return getPosts().find((p) => p.slug === slug || p.slug === slug.replace(/^\d+-/, '')) || null;
}

/* The featured slot: an explicitly pinned post wins, else the newest. */
export function splitFeatured(posts) {
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return { featured: null, rest: [] };
  }
  const pinned = posts.find((p) => p.featured);
  const featured = pinned || posts[0] || null;
  return { featured, rest: posts.filter((p) => p !== featured) };
}
