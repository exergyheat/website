import { useRef, useEffect } from 'react'
import { mediaHighlights } from '../data/mediaHighlights'
import { useTheme } from '../contexts/ThemeContext'

const MediaHighlights = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const { effectiveTheme } = useTheme()

  // Duplicate the array to create seamless infinite scroll
  const duplicatedHighlights = [...mediaHighlights, ...mediaHighlights]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Respect the OS-level reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const scrollSpeed = 0.64 // pixels per frame
    let rafId: number

    const autoScroll = () => {
      if (!isPausedRef.current && !document.hidden) {
        const maxScroll = container.scrollWidth / 2 // Half way point for seamless loop
        const newPosition = container.scrollLeft + scrollSpeed
        container.scrollLeft = newPosition >= maxScroll ? 0 : newPosition
      }
      rafId = requestAnimationFrame(autoScroll)
    }

    rafId = requestAnimationFrame(autoScroll)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(resumeTimeoutRef.current)
    }
  }, [])

  const handleUserInteractionStart = () => {
    clearTimeout(resumeTimeoutRef.current)
    isPausedRef.current = true
  }

  const handleUserInteractionEnd = () => {
    // Resume auto-scroll after a short delay
    clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false
    }, 2000)
  }

  return (
    <div className="py-16 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">
            Featured In
          </h2>
          <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Expertise that's been recognized by leading media outlets
          </p>
        </div>

        {/* Scrolling Media Logos */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-50 dark:from-surface-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-50 dark:from-surface-900 to-transparent pointer-events-none z-10"></div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleUserInteractionStart}
            onMouseLeave={handleUserInteractionEnd}
            onTouchStart={handleUserInteractionStart}
            onTouchEnd={handleUserInteractionEnd}
            onFocus={handleUserInteractionStart}
            onBlur={handleUserInteractionEnd}
          >
            {duplicatedHighlights.map((highlight, index) => (
              <a
                key={`${highlight.id}-${index}`}
                href={highlight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 transition-all duration-300 hover:scale-110 group whitespace-nowrap"
                title={highlight.description}
                aria-hidden={index >= mediaHighlights.length ? true : undefined}
                tabIndex={index >= mediaHighlights.length ? -1 : undefined}
              >
                <img
                  src={highlight.logo}
                  alt={`${highlight.name} logo - EXERGY featured in ${highlight.name}`}
                  className={`h-8 w-auto object-contain transition-all duration-300 ${
                    highlight.id === 'TFTC'
                      ? effectiveTheme === 'dark'
                        ? 'filter invert brightness-50 opacity-60 group-hover:invert group-hover:brightness-100 group-hover:opacity-100'
                        : 'filter-none brightness-50 opacity-60 group-hover:filter-none group-hover:brightness-100 group-hover:opacity-100'
                      : 'filter grayscale brightness-50 opacity-60 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 dark:brightness-100 dark:opacity-70 dark:group-hover:opacity-100'
                  }`}
                  loading="lazy"
                  decoding="async"
                  height={32}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaHighlights
