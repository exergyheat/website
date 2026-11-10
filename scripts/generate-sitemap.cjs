const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Static routes — keep in sync with src/App.tsx. Redirected legacy URLs are omitted.
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/commercial', priority: '0.9', changefreq: 'monthly' },
  { path: '/partners', priority: '0.8', changefreq: 'monthly' },
  { path: '/operations', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' }
];

const baseUrl = 'https://exergyheat.com';

function gitLastMod(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${filePath}"`, {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8'
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
  } catch {
    // not a git checkout
  }
  return new Date().toISOString().split('T')[0];
}

const generateSitemap = () => {
  const lastmod = gitLastMod('src');
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
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
console.log('Sitemap generated at', sitemapPath);
console.log('URLs', sitemapContent.match(/<url>/g).length);
