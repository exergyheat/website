import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Page Not Found | Exergy</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has moved.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-lg text-surface-600 dark:text-surface-300 mb-8">
          Try one of these instead:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-900 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
