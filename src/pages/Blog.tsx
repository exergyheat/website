import React from 'react'
import { PenTool, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PenTool className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            EXERGY Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Insights, updates, and deep dives into hashrate heating technology
          </p>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
              <PenTool className="h-10 w-10 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
              Welcome to the EXERGY Blog
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 mb-8">
              We're working on bringing you the latest insights, industry updates, and technical deep dives into hashrate heating technology. Check back soon for more content!
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-surface-600 dark:text-surface-400">
              In the meantime, explore our other resources:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/education"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Educational Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
              >
                FAQ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white dark:bg-surface-800 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Stay Updated
          </h3>
          <p className="text-surface-600 dark:text-surface-400 mb-8">
            Be the first to know when we publish new blog content and industry insights.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get Notified
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog