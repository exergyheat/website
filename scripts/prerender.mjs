// Build-time prerendering: renders every route to static HTML in dist/ so
// crawlers that don't execute JavaScript see full page content and meta tags.
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrOut = path.join(root, 'dist-ssr')

execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-ssr --logLevel warn', {
  cwd: root,
  stdio: 'inherit'
})

const { render } = await import(path.join(ssrOut, 'entry-server.js'))

const routes = [
  '/',
  '/commercial',
  '/partners',
  '/operations',
  '/about',
  '/contact',
  '/privacy-policy',
  '/404'
]

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

    const page = template
      .replace(SEO_BLOCK, headTags)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    const outDir = route === '/' ? dist : path.join(dist, route.slice(1))
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), page)
    if (route === '/404') {
      fs.writeFileSync(path.join(dist, '404.html'), page)
    }
    console.log(`prerendered ${route}`)
  } catch (err) {
    failures++
    console.error(`FAILED to prerender ${route}:`, err)
  }
}

fs.rmSync(ssrOut, { recursive: true, force: true })

if (failures > 0) {
  console.error(`${failures} route(s) failed to prerender`)
  process.exit(1)
}
console.log(`Prerendered ${routes.length} routes`)
