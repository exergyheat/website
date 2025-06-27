import React from 'react'
import { ArrowRight, Building, Factory, Home, Thermometer } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    title: 'Rural Rocky Mountain Home',
    description: 'Hashrate heating electric boiler for mountain home radiant floor heat.',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Residential',
    icon: Home,
    stats: {
      size: '2,700 sq ft',
      savings: '58%',
      payback: '24 months',
      hashrate: '200 TH/s'
    },
    details: [
      'Hydronic boiler system',
      'Radiant floor heat',
      'Smart controls',
      'Mobile monitoring'
    ]
  },
  {
    id: 'commercial',
    title: 'Mountain Hot Spring Resort',
    description: 'Industrial-scale heating for a manufacturing plant with high thermal demands.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'commercial',
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

const Portfolio = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our successful implementations across various industries
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <project.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-xl font-bold text-surface-900 dark:text-surface-100 ml-3">
                    {project.title}
                  </h2>
                </div>
                <p className="text-surface-600 dark:text-surface-400 mb-6">
                  {project.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="bg-surface-50 dark:bg-surface-700 p-3 rounded-lg">
                      <dt className="text-sm text-surface-600 dark:text-surface-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </dt>
                      <dd className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                        {value}
                      </dd>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {project.details.map((detail, index) => (
                    <div key={index} className="flex items-center text-surface-600 dark:text-surface-400">
                      <ArrowRight className="h-4 w-4 text-primary-600 dark:text-primary-400 mr-2" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you implement hashrate heating in your facility
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolio