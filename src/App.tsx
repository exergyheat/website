import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Learn from './pages/Learn'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Calculators from './pages/Calculators'
import Content from './pages/Content'
import FAQ from './pages/FAQ'
import Products from './pages/Products'
import BookCall from './pages/BookCall'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPostDetail from './pages/BlogPostDetail'

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Exergy | Heat That Pays</title>
        <meta name="description" content="Exergy provides hashrate heating hardware and services that generate warmth and bitcoin rewards simultaneously. Transform your heating system into a revenue-generating asset with our solutions." />
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-100">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/content" element={<Content />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/book-call" element={<BookCall />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App