import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

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
        <div className="frame section">
          <div className="narrow">
            <p className="label">Field report</p>
            <h1 className="heading-1">Something went wrong.</h1>
            <p className="body-3">An unexpected error occurred. Reloading the page usually fixes it.</p>
            <a className="btn btn-secondary btn-md button-md" href="/">Back to the front page</a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
