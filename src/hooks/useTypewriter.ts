import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Reset when text changes
    setDisplayText('')
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return displayText
}