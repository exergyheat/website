import { StrictMode, Suspense } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { Writable } from 'node:stream'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider, HelmetServerState } from 'react-helmet-async'
import { Helmet } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

// Pages are imported statically here (React.lazy can't be awaited by
// renderToString). Keep this route table in sync with src/App.tsx.
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Learn from './pages/Learn'
import PrivacyPolicy from './pages/PrivacyPolicy'
import FAQ from './pages/FAQ'
import Products from './pages/Products'
import BookCall from './pages/BookCall'
import Portfolio from './pages/Portfolio'
import Newsroom from './pages/Blog'
import NewsroomPostDetail from './pages/BlogPostDetail'
import NotFound from './pages/NotFound'

function ServerApp({ url }: { url: string }) {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Exergy | Building-Integrated Bitcoin Mining</title>
        <meta name="description" content="Building-integrated Bitcoin mining systems that displace heating costs and earn Bitcoin from excess solar. Real installs. Real data." />
      </Helmet>
      <StaticRouter location={url}>
        <MotionConfig reducedMotion="user">
          <div className="flex flex-col min-h-screen bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-100">
            <Navbar />
            <main className="flex-grow">
              <ErrorBoundary>
                {/* Must mirror the client's Suspense boundary so hydration
                    markers line up (client routes are lazy) */}
                <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/learn" element={<Learn />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/book-call" element={<BookCall />} />
                  <Route path="/case-studies" element={<Portfolio />} />
                  <Route path="/portfolio" element={<Navigate to="/case-studies" replace />} />
                  <Route path="/newsroom" element={<Newsroom />} />
                  <Route path="/newsroom/:id" element={<NewsroomPostDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </MotionConfig>
      </StaticRouter>
    </ThemeProvider>
  )
}

// renderToPipeableStream (not renderToString) so Suspense boundary markers
// are emitted — without them the client's lazy-route Suspense boundary can't
// hydrate the server HTML and React falls back to a full client re-render.
export function render(url: string): Promise<{ html: string; helmet: HelmetServerState }> {
  const helmetContext: { helmet?: HelmetServerState } = {}

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    const sink = new Writable({
      write(chunk, _enc, cb) {
        chunks.push(Buffer.from(chunk))
        cb()
      },
      final(cb) {
        resolve({ html: Buffer.concat(chunks).toString('utf8'), helmet: helmetContext.helmet! })
        cb()
      }
    })

    const stream = renderToPipeableStream(
      <StrictMode>
        <HelmetProvider context={helmetContext}>
          <ServerApp url={url} />
        </HelmetProvider>
      </StrictMode>,
      {
        onAllReady() {
          stream.pipe(sink)
        },
        onError(err) {
          reject(err)
        }
      }
    )
  })
}
