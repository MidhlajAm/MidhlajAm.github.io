const blogModules = import.meta.glob('../content/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const parseValue = (value) => {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed
      .slice(1, -1)
      .split(',')
      .map((item) => item.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return trimmed.replace(/^["']|["']$/g, '');
};

export const calculateReadingTime = (content) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

const parseMarkdownPost = (filePath, raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const slug = filePath.split('/').pop().replace('.md', '');

  if (!match) {
    return {
      slug,
      title: slug,
      description: '',
      image: '/images/MIDHLAJ AM.PNG',
      content: raw,
      categories: [],
      readingTime: calculateReadingTime(raw),
    };
  }

  const meta = match[1].split('\n').reduce((acc, line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) return acc;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);
    acc[key] = parseValue(value);
    return acc;
  }, {});

  const content = match[2].trim();

  return {
    slug,
    image: '/images/MIDHLAJ AM.PNG',
    ...meta,
    content,
    categories: meta.categories || [],
    readingTime: meta.readingTime || calculateReadingTime(content),
  };
};

export const blogPosts = Object.entries(blogModules)
  .map(([path, raw]) => parseMarkdownPost(path, raw))
  .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

export const getBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (post, limit = 3) => {
  if (!post) return [];
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      ...candidate,
      score: candidate.categories.filter((category) => post.categories.includes(category)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};
