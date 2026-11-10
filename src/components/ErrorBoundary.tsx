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
        <div className="page-frame">
          <div className="page-body section stack-16">
            <h1 className="heading-4">This page failed to load.</h1>
            <p className="body-3 muted measure">Reload the page. If it happens again, email contact@exergyheat.com.</p>
            <a className="btn btn-copper button-md" href="/">
              Back to home
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
