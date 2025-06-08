import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const projects = [
  {
    id: 'commercial-office',
    title: 'Commercial Office Building',
    description: 'Complete heating solution for a 50,000 sq ft office building in downtown Denver.',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      savings: '65%',
      payback: '18 months'
    }
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Facility',
    description: 'Industrial-scale heating for a manufacturing plant with high thermal demands.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      savings: '72%',
      payback: '14 months'
    }
  },
  {
    id: 'residential',
    title: 'Luxury Home',
    description: 'Whole-home heating solution including pool and spa heating.',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      savings: '58%',
      payback: '24 months'
    }
  },
  {
    id: 'greenhouse',
    title: 'Commercial Greenhouse',
    description: 'Year-round heating for a large commercial greenhouse operation.',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      savings: '70%',
      payback: '16 months'
    }
  },
  {
    id: 'data-center',
    title: 'Data Center Heat Recovery',
    description: 'Heat recovery system for a major data center, providing district heating.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      savings: '80%',
      payback: '12 months'
    }
  }
]

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="bg-white dark:bg-surface-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">See it in Action</h2>
          <p className="text-xl text-surface-600 dark:text-surface-400">
            Explore our successful implementations across various industries
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="mx-4">
                    <div className="bg-surface-50 dark:bg-surface-700 rounded-lg overflow-hidden shadow-xl">
                      <div className="relative h-96">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-lg text-surface-100 mb-4">{project.description}</p>
                          <div className="flex space-x-4">
                            <div>
                              <span className="text-surface-200">Savings:</span>
                              <span className="ml-2 font-bold text-primary-400">{project.stats.savings}</span>
                            </div>
                            <div>
                              <span className="text-surface-200">Payback:</span>
                              <span className="ml-2 font-bold text-primary-400">{project.stats.payback}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-surface-900 dark:text-surface-100" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
          >
            <ArrowRight className="h-6 w-6 text-surface-900 dark:text-surface-100" />
          </button>

          {/* View All Projects Button */}
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel