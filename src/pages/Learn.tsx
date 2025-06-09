import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, Users, Zap, Bitcoin, Cpu, HelpCircle, Eye, FileText, PenTool, ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Learn = () => {
  const [currentApplicationIndex, setCurrentApplicationIndex] = React.useState(0)

  const resources = [
    {
      title: "Blog",
      description: "Company updates and insights on the hashrate heating industry",
      icon: PenTool,
      link: "/blog"
    },
    {
      title: "Education",
      description: "Educate yourself with hashrate heating content, videos, guides, tutorials and more",
      icon: BookOpen,
      link: "/education"
    },
    {
      title: "Calculators",
      description: "Estimate rough savings and earnings with our interactive tools",
      icon: Calculator,
      link: "/calculators"
    },
    {
      title: "Documentation",
      description: "Terms of service, contracts, payment processes, and more",
      icon: FileText,
      link: "/docs"
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about hashrate heating technology",
      icon: HelpCircle,
      link: "/faq"
    },
    {
      title: "Technical Forum",
      description: "Deep dive with industry experts on the Hashrate Heatpunk forum",
      icon: Users,
      link: "https://heatpunks.org",
      external: true
    }
  ]

  const concepts = [
    {
      title: "Electricity In - Heat Out",
      icon: Zap,
      description: "Electric heaters and Bitcoin miners consume the same energy to produce heat. The key difference? Bitcoin miners reward you for supporting the network while heating your space.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: [
        "100% energy conversion efficiency",
        "Zero wasted electricity",
        "Zero emissions",
        "No gas or liquid infrastructure"
      ]
    },
    {
      title: "Open Monetary Protocol",
      icon: Bitcoin,
      description: "Bitcoin is a secure, ethical protocol that rewards participants for maintaining network security. Your heater earns these rewards while providing the same warmth as traditional heaters.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: [
        "Decentralized network participation",
        "Transparent reward system",
        "Secure mining operations",
        "Automated payouts"
      ]
    },
    {
      title: "Combining the Two: Smart vs Dumb Heat",
      icon: Cpu,
      description: "All electricity used in Bitcoin mining converts to heat - there's no waste. This heat is then captured and distributed throughout your space, making it a perfectly efficient heating solution.",
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: [
        "Intelligent heat distribution",
        "Real-time monitoring",
        "Adaptive performance",
        "Optimized efficiency"
      ]
    }
  ]

  const applications = [
    {
      id: 'space-heating',
      title: 'Room Space Heating',
      description: 'Standalone units for heating individual rooms, garages, workshops, or specific areas. Plug-and-play simplicity.',
      image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Portable and flexible',
        'Quiet operation',
        'WiFi connectivity',
        'Mobile app control'
      ]
    }, 
    {
      id: 'forced-air',
      title: 'Forced Air Furnaces',
      description: 'Replace or supplement your traditional furnace with hashrate heating. Perfect for whole-home heating with existing ductwork.',
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Integrates with existing HVAC',
        'Zoned temperature control',
        'High-capacity heating',
        'Smart thermostat compatible'
      ]
    },
    {
      id: 'radiant-systems',
      title: 'Radiant Floor Heating',
      description: 'Underfloor heating systems that provide comfortable, even heat distribution throughout your space from the ground up.',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Even heat distribution',
        'Energy efficient',
        'Silent operation',
        'Luxury comfort'
      ]
    },
    {
      id: 'pools-spas',
      title: 'Pools & Hot Tubs',
      description: 'Keep your pool and spa at the perfect temperature year-round while generating revenue from the heating process.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Year-round swimming',
        'Precise temperature control',
        'Reduced heating costs',
        'Extended swimming season'
      ]
    },
    {
      id: 'Industrial',
      title: 'Industrial Systems',
      description: 'Water-based heating systems for radiators, baseboard heaters, and hot water supply. Seamless integration with existing plumbing.',
      image: 'https://images.pexels.com/photos/8293769/pexels-photo-8293769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Boiler integration',
        'Multiple zone control',
        'Consistent heat distribution',
        'Hot water generation'
      ]
    }
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentApplicationIndex((prevIndex) => (prevIndex + 1) % applications.length)
    }, 7500)

    return () => clearInterval(timer)
  }, [])

  const nextApplication = () => {
    setCurrentApplicationIndex((prevIndex) => (prevIndex + 1) % applications.length)
  }

  const prevApplication = () => {
    setCurrentApplicationIndex((prevIndex) => (prevIndex - 1 + applications.length) % applications.length)
  }

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn The Technology
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            The most revolutionary heating tech in over a century - heat that pays
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">
          Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            resource.external ? (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-surface-600 dark:text-surface-400">{resource.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                to={resource.link}
                className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 ml-4">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-surface-600 dark:text-surface-400">{resource.description}</p>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Core Concepts */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 text-center mb-12">
            The Basics
          </h2>
          <div className="space-y-32">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <img
                    src={concept.image}
                    alt={concept.title}
                    className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                  />
                </motion.div>
                <div className="w-full md:w-1/2 space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  >
                    <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <concept.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mt-4">
                      {concept.title}
                    </h3>
                    <p className="text-lg text-surface-600 dark:text-surface-400 mt-4">
                      {concept.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {concept.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                          className="flex items-center text-surface-600 dark:text-surface-400"
                        >
                          <div className="h-2 w-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Example Applications Carousel */}
      <div className="bg-surface-50 dark:bg-surface-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">Example Applications</h2>
            <p className="text-xl text-surface-600 dark:text-surface-400">
              Discover the versatility of hashrate heating across different applications
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentApplicationIndex * 100}%)` }}
              >
                {applications.map((application) => (
                  <div key={application.id} className="w-full flex-shrink-0">
                    <div className="mx-4">
                      <div className="bg-white dark:bg-surface-800 rounded-lg overflow-hidden shadow-xl">
                        <div className="relative h-96">
                          <img
                            src={application.image}
                            alt={application.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Blue filter overlay */}
                          <div 
                            className="absolute inset-0"
                            style={{
                              backgroundColor: 'rgba(47, 59, 105, 0.4)',
                              mixBlendMode: 'overlay'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{application.title}</h3>
                            <p className="text-lg text-surface-100 mb-4">{application.description}</p>
                            <div className="grid grid-cols-2 gap-2">
                              {application.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-sm text-surface-200">
                                  <div className="h-1.5 w-1.5 bg-primary-400 rounded-full mr-2" />
                                  {feature}
                                </div>
                              ))}
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
              onClick={prevApplication}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-surface-900 dark:text-surface-100" />
            </button>
            <button
              onClick={nextApplication}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-surface-800 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
            >
              <ArrowRight className="h-6 w-6 text-surface-900 dark:text-surface-100" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {applications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentApplicationIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentApplicationIndex
                      ? 'bg-primary-600'
                      : 'bg-surface-300 dark:bg-surface-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* See it in Action Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            See it in Action
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore real-world implementations of hashrate heating technology across various industries and applications.
          </p>
          
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            View Project Portfolio
            <Eye className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Learn