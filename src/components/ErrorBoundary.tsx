import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

// Without a boundary, any render-time throw unmounts the entire app
// (permanent white screen). Keep the fallback dependency-free.
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Unhandled render error:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
          <h1 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Something went wrong
          </h1>
          <p className="text-surface-600 dark:text-surface-400 mb-8">
            An unexpected error occurred. Reloading the page usually fixes it.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
