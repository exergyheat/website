/* eslint-disable react-refresh/only-export-components */
import { StrictMode, Suspense } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { Writable } from 'node:stream'
import { StaticRouter } from 'react-router-dom/server'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ThemeProvider } from './contexts/ThemeContext'
import About from './pages/About'
import Commercial from './pages/Commercial'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Operations from './pages/Operations'
import Partners from './pages/Partners'
import PrivacyPolicy from './pages/PrivacyPolicy'

function ServerApp({ url }: { url: string }) {
  return (
    <ThemeProvider>
      <StaticRouter location={url}>
        <div className="site">
          <Navbar />
          <main id="content">
            <ErrorBoundary>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/commercial" element={<Commercial />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/operations" element={<Operations />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="/products" element={<Navigate to="/" replace />} />
                  <Route path="/services" element={<Navigate to="/commercial" replace />} />
                  <Route path="/learn" element={<Navigate to="/" replace />} />
                  <Route path="/faq" element={<Navigate to="/#faq" replace />} />
                  <Route path="/book-call" element={<Navigate to="/contact" replace />} />
                  <Route path="/case-studies" element={<Navigate to="/" replace />} />
                  <Route path="/portfolio" element={<Navigate to="/" replace />} />
                  <Route path="/newsroom" element={<Navigate to="/about" replace />} />
                  <Route path="/newsroom/*" element={<Navigate to="/about" replace />} />
                  <Route path="/blog" element={<Navigate to="/about" replace />} />
                  <Route path="/blog/*" element={<Navigate to="/about" replace />} />
                  <Route path="/education" element={<Navigate to="/" replace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </StaticRouter>
    </ThemeProvider>
  )
}

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
      },
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
        },
      },
    )
  })
}
