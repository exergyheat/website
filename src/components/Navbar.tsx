import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Laptop } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-surface-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Laptop className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-surface-900">EXERGY</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-surface-600 hover:text-primary-600 transition-colors">Products</Link>
            <Link to="/services" className="text-surface-600 hover:text-primary-600 transition-colors">Services</Link>
            <Link to="/about" className="text-surface-600 hover:text-primary-600 transition-colors">About</Link>
            <Link to="/learn" className="text-surface-600 hover:text-primary-600 transition-colors">Learn</Link>
            <Link to="/contact" className="text-surface-600 hover:text-primary-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-surface-600 hover:text-primary-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-surface-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-surface-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-surface-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/learn"
                className="block px-3 py-2 text-surface-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-surface-600 hover:text-primary-600 transition-colors"
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