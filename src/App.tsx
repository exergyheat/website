import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import { LINKS } from './lib/site'
import Home from './pages/Home'

const Commercial = lazy(() => import('./pages/Commercial'))
const Partners = lazy(() => import('./pages/Partners'))
const Operations = lazy(() => import('./pages/Operations'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <div className="page-frame" role="status" aria-label="Loading page">
      <div className="flow-rail" aria-hidden="true" />
      <div className="page-body section">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line short" />
      </div>
    </div>
  )
}

function ExternalRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href)
  }, [href])
  return (
    <div className="page-frame">
      <div className="page-body section">
        <p className="body-3">
          Continuing to{' '}
          <a className="inline-link" href={href}>
            {href}
          </a>
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <a className="skip button-sm" href="#content">
          Skip to content
        </a>
        <div className="site">
          <Navbar />
          <main id="content">
            <ErrorBoundary>
              <Suspense fallback={<RouteFallback />}>
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
                  <Route path="/calculators" element={<ExternalRedirect href={LINKS.calculators} />} />
                  <Route path="/docs" element={<ExternalRedirect href={LINKS.docs} />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
