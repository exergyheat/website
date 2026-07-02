import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { projects } from '../data/portfolioProjects'

// Take only the first 5 projects for the carousel
const carouselProjects = projects.slice(0, 5)

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselProjects.length)
    }, 7500)

    return () => clearInterval(timer)
    // currentIndex in deps restarts the timer after manual navigation
  }, [isPaused, currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselProjects.length) % carouselProjects.length)
  }

  return (
    <div className="bg-white dark:bg-surface-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">See it in Action</h2>
          <p className="text-xl text-surface-600 dark:text-surface-400">
            Explore some of our most recent building-integrated mining projects
          </p>
        </div>

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Recent building-integrated mining projects"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselProjects.map((project, slideIndex) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                  aria-hidden={slideIndex !== currentIndex}
                  // @ts-expect-error - inert is valid HTML but not yet in React 18's types
                  inert={slideIndex !== currentIndex ? '' : undefined}
                >
                  <div className="mx-4">
                    {project.id === 'small-business' ? (
                      <a
                        href="https://x.com/tylerkstevens/status/1958609126881468896"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-surface-50 dark:bg-surface-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
                      >
                        <div className="relative h-[450px] md:h-96">
                          <img
                            src={project.image}
                            alt={`${project.title} - ${project.description}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Light blue tint overlay using website's primary blue color */}
                          <div 
                            className="absolute inset-0 bg-primary-500 opacity-40"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="mb-2">
                              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-lg text-surface-100 mb-4">{project.description}</p>
                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                              <div>
                                <span className="text-surface-200">Size:</span>
                                <span className="ml-2 font-bold text-secondary-400">{project.size}</span>
                              </div>
                              <div>
                                <span className="text-surface-200">Savings:</span>
                                <span className="ml-2 font-bold text-secondary-400">{project.savings}</span>
                              </div>
                              <div>
                                <span className="text-surface-200">Payback:</span>
                                <span className="ml-2 font-bold text-secondary-400">{project.payback}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-surface-50 dark:bg-surface-700 rounded-lg overflow-hidden shadow-xl">
                        <div className="relative h-[450px] md:h-96">
                          <img
                            src={project.image}
                            alt={`${project.title} - ${project.description}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Light blue tint overlay using website's primary blue color */}
                          <div 
                            className="absolute inset-0 bg-primary-500 opacity-40"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="mb-2">
                              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-lg text-surface-100 mb-4">{project.description}</p>
                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                              <div>
                                <span className="text-surface-200">Size:</span>
                                <span className="ml-2 font-bold text-secondary-400">{project.size}</span>
                              </div>
                              <div>
                                <span className="text-surface-200">Savings:</span>
                                <span className="ml-2 font-bold text-secondary-400">{project.savings}</span>
                              </div>
                              <div>
                                <span className="text-surface-200">Payback:</span>
                                <span className="ml-2 font-bold text-secondary-400">{project.payback}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-surface-900 dark:text-surface-100" aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
          >
            <ArrowRight className="h-6 w-6 text-surface-900 dark:text-surface-100" aria-hidden="true" />
          </button>

          {/* View All Projects Button */}
          <div className="text-center mt-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-base font-subheading"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel