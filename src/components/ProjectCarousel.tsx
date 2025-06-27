import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Building, Factory, Home, Thermometer } from 'lucide-react'

// Import the projects data from Portfolio page
const projects = [
  {
    id: 'small-business',
    title: 'Exergy\'s Office Building - The Space',
    description: 'Fully integrated hashrate heating for The Space, Denver\'s 5,850 sqft bitcoin hub and home of Exergy\'s office.',
    image: 'https://denver.space/assets/venue/3700Franklin_Back.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Small Business',
    icon: Building,
    stats: {
      size: '5,850 sq ft',
      savings: '65%',
      payback: '18 months',
      hashrate: '257 TH/s'
    },
    details: [
      'Radiant & forced air combination',
      'Custom control system & remote monitoring',
      'Integrated solar array',
      'Redundant natural gas backup'
    ]
  },
  {
    id: 'residential',
    title: 'High Desert Home',
    description: 'Whole-home heating solution including pool and spa heating.',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Residential',
    icon: Home,
    stats: {
      size: '8,500 sq ft',
      savings: '58%',
      payback: '24 months',
      hashrate: '500 TH/s'
    },
    details: [
      'Hydronic heating',
      'Pool integration',
      'Smart controls',
      'Mobile monitoring'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Facility',
    description: 'Industrial-scale heating for a manufacturing plant with high thermal demands.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Industrial',
    icon: Factory,
    stats: {
      size: '100,000 sq ft',
      savings: '72%',
      payback: '14 months',
      hashrate: '5 PH/s'
    },
    details: [
      'Process heat integration',
      'Heat recovery system',
      'Advanced monitoring',
      'Scalable design'
    ]
  },
  {
    id: 'greenhouse',
    title: 'Commercial Greenhouse',
    description: 'Year-round heating for a large commercial greenhouse operation.',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Agricultural',
    icon: Thermometer,
    stats: {
      size: '75,000 sq ft',
      savings: '70%',
      payback: '16 months',
      hashrate: '3 PH/s'
    },
    details: [
      'Climate control',
      'Humidity management',
      'Zone control',
      'Weather integration'
    ]
  },
  {
    id: 'data-center',
    title: 'Data Center Heat Recovery',
    description: 'Heat recovery system for a major data center, providing district heating.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Industrial',
    icon: Factory,
    stats: {
      size: '200,000 sq ft',
      savings: '80%',
      payback: '12 months',
      hashrate: '10 PH/s'
    },
    details: [
      'District heating',
      'Heat exchange network',
      'Automated controls',
      'Real-time optimization'
    ]
  }
]

// Take only the first 5 projects for the carousel
const carouselProjects = projects.slice(0, 5)

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselProjects.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

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
            Explore our projects across various applications
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="mx-4">
                    <div className="bg-surface-50 dark:bg-surface-700 rounded-lg overflow-hidden shadow-xl">
                      <div className="relative h-96">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Blue filter overlay matching the header */}
                        <div 
                          className="absolute inset-0"
                          style={{
                            backgroundColor: 'rgba(47, 59, 105, 0.4)',
                            mixBlendMode: 'overlay'
                          }}
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
                          <div className="flex space-x-4">
                            <div>
                              <span className="text-surface-200">Size:</span>
                              <span className="ml-2 font-bold text-secondary-400">{project.stats.size}</span>
                            </div>
                            <div>
                              <span className="text-surface-200">Savings:</span>
                              <span className="ml-2 font-bold text-secondary-400">{project.stats.savings}</span>
                            </div>
                            <div>
                              <span className="text-surface-200">Payback:</span>
                              <span className="ml-2 font-bold text-secondary-400">{project.stats.payback}</span>
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
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              View Project Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel