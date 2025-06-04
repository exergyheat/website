import React from 'react'
import { ArrowRight, Code, Globe, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTypewriter } from '../hooks/useTypewriter'

const Home = () => {
  const headlineText = useTypewriter("You  pay for heat every month.", 75)

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(47, 59, 105, 0.85)'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
              {headlineText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Upgrade to heat that pays you instead.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Learn How
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">Why Choose Us</h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              We're experts in an emerging industry. In fact, we wrote the book on it.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <Code className="h-12 w-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Custom Solutions</h3>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                Tailored heating solutions designed to meet your specific demand.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Maximize Savings</h3>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                Optimized devices that deliver the best bang for your buck.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-surface-900 dark:text-surface-100">Security First</h3>
              <p className="mt-2 text-surface-600 dark:text-surface-400">
                Enterprise-grade security to protect your business and data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get paid for heat?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home