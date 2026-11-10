import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const elementId = decodeURIComponent(location.hash.substring(1))
      const scrollToElement = () => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
      scrollToElement()
      const timeoutId = window.setTimeout(scrollToElement, 100)
      return () => window.clearTimeout(timeoutId)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToTop
