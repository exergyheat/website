import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'

// Home stays eager for instant first paint; all other routes load on demand
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Learn = lazy(() => import('./pages/Learn'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Products = lazy(() => import('./pages/Products'))
const BookCall = lazy(() => import('./pages/BookCall'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Newsroom = lazy(() => import('./pages/Blog'))
const NewsroomPostDetail = lazy(() => import('./pages/BlogPostDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

const RouteFallback = () => (
  <div className="flex items-center justify-center py-32" role="status" aria-label="Loading page">
    <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Exergy | Building-Integrated Bitcoin Mining</title>
        <meta name="description" content="Building-integrated Bitcoin mining systems that displace heating costs and earn Bitcoin from excess solar. Real installs. Real data." />
      </Helmet>
      <Router>
        <ScrollToTop />
        {/* reducedMotion="user" disables framer-motion animations when the OS asks for it */}
        <MotionConfig reducedMotion="user">
        <div className="flex flex-col min-h-screen bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-100">
          <Navbar />
          <main className="flex-grow">
            <ErrorBoundary>
              <Suspense fallback={<RouteFallback />}>
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
      </Router>
    </ThemeProvider>
  )
}

export default App
