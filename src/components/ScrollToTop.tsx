import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation (anchor links)
    if (location.hash) {
      // Extract the element ID from the hash (remove the # symbol)
      const elementId = location.hash.substring(1)
      
      // Use setTimeout to ensure the target component has rendered
      const scrollToElement = () => {
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
      
      // Try immediately first
      scrollToElement()
      
      // If that doesn't work, try again after a short delay
      const timeoutId = setTimeout(scrollToElement, 100)
      
      return () => clearTimeout(timeoutId)
    } else {
      // Scroll to top when pathname changes and no hash is present
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  // This component doesn't render anything
  return null
}

export default ScrollToTop