import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import projects from '../src/data/projects.json' with { type: 'json' };

//here the previe link code
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const siteUrl = 'https://midhlajam.me';
const siteName = 'Midhlaj AM Portfolio';
const defaultImage = '/images/MIDHLAJ AM.PNG';
const defaultDescription = 'Midhlaj AM is a Flutter and Firebase developer building polished cross-platform mobile apps, developer projects, and technical writing.';

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const absoluteUrl = (value) => {
  const url = value.startsWith('http') ? value : `${siteUrl}${value.startsWith('/') ? value : `/${value}`}`;
  return encodeURI(url);
};

const parseFrontMatter = (raw, slug) => {
  const match = raw.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { slug, title: slug, description: defaultDescription, image: defaultImage };

  const meta = match[1].split('\n').reduce((acc, line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) return acc;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '');
    acc[key] = value;
    return acc;
  }, {});

  return {
    slug,
    title: meta.title || slug,
    description: meta.description || defaultDescription,
    image: meta.image || defaultImage,
    featured: meta.featured === 'true',
  };
};

const readBlogPosts = () => {
  const blogDir = path.join(root, 'src', 'content', 'blogs');
  return fs.readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      return parseFrontMatter(fs.readFileSync(path.join(blogDir, file), 'utf8'), slug);
    });
};

const createHead = ({ title, description, image = defaultImage, route, type = 'website' }) => {
  const canonical = absoluteUrl(route);
  const imageUrl = absoluteUrl(image);

  return [
    `<title data-rh="true">${escapeHtml(title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeHtml(description)}">`,
    `<link data-rh="true" rel="canonical" href="${escapeHtml(canonical)}">`,
    `<meta data-rh="true" property="og:type" content="${escapeHtml(type)}">`,
    `<meta data-rh="true" property="og:site_name" content="${escapeHtml(siteName)}">`,
    `<meta data-rh="true" property="og:title" content="${escapeHtml(title)}">`,
    `<meta data-rh="true" property="og:description" content="${escapeHtml(description)}">`,
    `<meta data-rh="true" property="og:url" content="${escapeHtml(canonical)}">`,
    `<meta data-rh="true" property="og:image" content="${escapeHtml(imageUrl)}">`,
    `<meta data-rh="true" property="og:image:alt" content="${escapeHtml(title)}">`,
    '<meta data-rh="true" name="twitter:card" content="summary_large_image">',
    `<meta data-rh="true" name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta data-rh="true" name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta data-rh="true" name="twitter:image" content="${escapeHtml(imageUrl)}">`,
  ].join('\n    ');
};

const injectMeta = (template, meta) => {
  const withoutExistingDynamicTags = template
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta name="description"[\s\S]*?>/i, '')
    .replace(/<link rel="canonical"[\s\S]*?>/i, '')
    .replace(/<meta property="og:[\s\S]*?>/gi, '')
    .replace(/<meta name="twitter:[\s\S]*?>/gi, '');

  return withoutExistingDynamicTags.replace('</head>', `    ${createHead(meta)}\n  </head>`);
};

const writeRoute = (template, meta) => {
  const outputDir = path.join(dist, meta.route === '/' ? '' : meta.route);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), injectMeta(template, meta));
};

const templatePath = path.join(dist, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');
const blogPosts = readBlogPosts();

const routes = [
  {
    route: '/',
    title: 'Midhlaj AM | Mobile App Developer',
    description: defaultDescription,
  },
  {
    route: '/projects',
    title: 'Projects | Midhlaj AM',
    description: "Explore Midhlaj AM's Flutter, Firebase, React, and mobile app development projects.",
  },
  {
    route: '/blog',
    title: 'Blog | Midhlaj AM',
    description: 'Technical articles from Midhlaj AM about Flutter, mobile app development, Firebase, and developer workflows.',
  },
  {
    route: '/experience',
    title: 'Experience | Midhlaj AM',
    description: 'Education, internship, open source, workshops, events, and FOSS Club experience from Midhlaj AM.',
  },
  {
    route: '/achievements',
    title: 'Achievements | Midhlaj AM',
    description: 'Certificates, workshops, volunteering, technical events, and leadership activities from Midhlaj AM.',
  },
  ...projects.map((project) => ({
    route: `/projects/${project.slug}`,
    title: `${project.title} | Flutter Project`,
    description: project.description,
    image: project.image,
  })),
  ...blogPosts.map((post) => ({
  route: `/blog/${post.slug}`,
  title: post.title,
  description: post.description,
  image: post.image,
  type: 'article',
})),
];

routes.forEach((route) => writeRoute(template, route));
fs.writeFileSync(path.join(dist, '404.html'), injectMeta(template, routes[0]));

const cnamePath = path.join(root, 'CNAME');
if (fs.existsSync(cnamePath)) {
  fs.copyFileSync(cnamePath, path.join(dist, 'CNAME'));
}

console.log(`Generated ${routes.length} static route shells for GitHub Pages.`);


