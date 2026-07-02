const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Static routes — keep in sync with src/App.tsx
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/learn', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/newsroom', priority: '0.8', changefreq: 'weekly' },
  { path: '/case-studies', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/book-call', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' }
];

const baseUrl = 'https://exergyheat.com';
const blogDir = path.join(__dirname, '..', 'src', 'blog-posts');

// Last git commit date for a file (YYYY-MM-DD), falling back to today
function gitLastMod(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${filePath}"`, {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8'
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
  } catch {
    // not a git checkout (e.g. some CI tarballs) — fall through
  }
  return new Date().toISOString().split('T')[0];
}

// Newsroom posts: derive URL id and lastmod from each post's frontmatter
function blogPostEntries() {
  if (!fs.existsSync(blogDir)) return [];

  return fs.readdirSync(blogDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
      const fields = {};
      if (fm) {
        for (const line of fm[1].split(/\r?\n/)) {
          const sep = line.indexOf(':');
          if (sep === -1) continue;
          const key = line.slice(0, sep).trim();
          const value = line.slice(sep + 1).trim().replace(/^["']|["']$/g, '');
          fields[key] = value;
        }
      }
      const id = fields.id || file.replace(/\.md$/, '');
      const date = /^\d{4}-\d{2}-\d{2}/.test(fields.date || '') ? fields.date.slice(0, 10) : null;
      return {
        path: `/newsroom/${id}`,
        priority: '0.7',
        changefreq: 'yearly',
        lastmod: date || gitLastMod(path.join('src', 'blog-posts', file))
      };
    });
}

const generateSitemap = () => {
  const staticEntries = routes.map(route => ({
    ...route,
    // Real signal: last commit touching the page component (or the repo for '/')
    lastmod: gitLastMod('src')
  }));

  const entries = [...staticEntries, ...blogPostEntries()];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${entry.path}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

const sitemapContent = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('✅ Sitemap generated successfully at:', sitemapPath);
console.log('📊 Generated', sitemapContent.match(/<url>/g).length, 'URLs');
