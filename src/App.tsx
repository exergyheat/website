import { useEffect, type ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import { GridLines } from './components/GridLines'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import { LINKS } from './lib/site'
import About from './pages/About'
import Commercial from './pages/Commercial'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Homes from './pages/Homes'
import HomesApply from './pages/HomesApply'
import Industry from './pages/Industry'
import NotFound from './pages/NotFound'
import OpenTools from './pages/OpenTools'
import Operations from './pages/Operations'
import PrivacyPolicy from './pages/PrivacyPolicy'

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <GridLines className="fixed" />
      <a className="skip button-sm" href="#content">Skip to content</a>
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
    </div>
  )
}

function ExternalRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href)
  }, [href])
  return (
    <p className="body-3 redirect-note">
      Continuing to <a href={href}>{href}</a>
    </p>
  )
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/homes" element={<Homes />} />
      <Route path="/homes/apply" element={<HomesApply />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/open-tools" element={<OpenTools />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/partners" element={<Navigate to="/industry" replace />} />
      <Route path="/apply" element={<Navigate to="/homes/apply" replace />} />
      <Route path="/products" element={<Navigate to="/" replace />} />
      <Route path="/services" element={<Navigate to="/commercial" replace />} />
      <Route path="/learn" element={<Navigate to="/" replace />} />
      <Route path="/faq" element={<Navigate to="/contact" replace />} />
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
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Shell>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </Shell>
      </BrowserRouter>
    </ThemeProvider>
  )
}
