import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <nav className="bg-surface-50 dark:bg-surface-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/Logo1_black_horizontal.png"
                alt="EXERGY"
                className="h-10 w-auto dark:filter dark:brightness-0 dark:invert"
                width={600}
                height={251}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Products</Link>
            <Link to="/services" className="font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Services</Link>
            <Link to="/about" className="font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About</Link>
            <Link to="/learn" className="font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Learn</Link>
            <Link to="/newsroom" className="font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Newsroom</Link>
            <Link to="/contact" className="font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/products"
                className="block px-3 py-2 font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/learn"
                className="block px-3 py-2 font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
              <Link
                to="/newsroom"
                className="block px-3 py-2 font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Newsroom
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 font-subheading text-surface-600 dark:text-surface-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar