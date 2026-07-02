// Build-time prerendering: renders every route to static HTML in dist/ so
// crawlers that don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot,
// social scrapers, etc.) see full page content, per-page meta tags, and
// JSON-LD instead of an empty <div id="root">.
//
// Runs after `vite build`. Vercel/serve check the filesystem before applying
// the SPA rewrite, so /services serves dist/services/index.html statically
// while client-side navigation keeps working (React attaches on load).
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrOut = path.join(root, 'dist-ssr')

// 1. Build the SSR bundle
execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-ssr --logLevel warn', {
  cwd: root,
  stdio: 'inherit'
})

const { render } = await import(path.join(ssrOut, 'entry-server.js'))

// 2. Routes: static pages + newsroom posts from frontmatter ids
const staticRoutes = [
  '/', '/products', '/services', '/about', '/contact', '/learn',
  '/privacy-policy', '/faq', '/book-call', '/case-studies', '/newsroom'
]

const blogDir = path.join(root, 'src', 'blog-posts')
const postRoutes = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.md'))
  .map(f => {
    const raw = fs.readFileSync(path.join(blogDir, f), 'utf8')
    const m = /^id:\s*["']?([^"'\n]+)["']?\s*$/m.exec(raw)
    return `/newsroom/${m ? m[1].trim() : f.replace(/\.md$/, '')}`
  })

const routes = [...staticRoutes, ...postRoutes]

// 3. Render each route into the built template
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const SEO_BLOCK = /<!-- seo:start[\s\S]*?<!-- seo:end -->/

let failures = 0
for (const route of routes) {
  try {
    const { html, helmet } = await render(route)
    const headTags = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString()
    ].filter(Boolean).join('\n    ')

    let page = template
      .replace(SEO_BLOCK, headTags)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    // The hero image preload only helps the homepage; drop it elsewhere
    if (route !== '/') {
      page = page.replace(/^\s*<link rel="preload" as="image" href="\/StockBackgroundHome_Tinted\.webp" \/>\n/m, '')
    }

    const outDir = route === '/' ? dist : path.join(dist, route.slice(1))
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), page)
    console.log(`prerendered ${route}`)
  } catch (err) {
    failures++
    console.error(`FAILED to prerender ${route}:`, err.message)
  }
}

// 4. Clean up the SSR bundle
fs.rmSync(ssrOut, { recursive: true, force: true })

if (failures > 0) {
  console.error(`${failures} route(s) failed to prerender`)
  process.exit(1)
}
console.log(`✅ Prerendered ${routes.length} routes`)
