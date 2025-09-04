import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, Users, Zap, Bitcoin, Cpu, HelpCircle, Eye, FileText, PenTool, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const Learn = () => {
  const [currentApplicationIndex, setCurrentApplicationIndex] = React.useState(0)

  const resources = [
    {
      title: "Calculators",
      description: "Estimate your own savings and earnings with our interactive tools",
      icon: Calculator,
      link: "/calculators"
    },
    {
      title: "Documentation",
      description: "Service documents, contracts, payment information, technical guides and more",
      icon: FileText,
      link: "https://docs.exergyheat.com",
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about hashrate heating technology",
      icon: HelpCircle,
      link: "/faq"
    },
    {
      title: "Content",
      description: "Explore hashrate heating content, videos, guides, tutorials and more",
      icon: BookOpen,
      link: "/content"
    },
    {
      title: "Blog",
      description: "Company updates and insights on the hashrate heating industry",
      icon: PenTool,
      link: "/blog"
    },
    {
      title: "Social Media",
      description: "See what the talk is all about on our X page",
      icon: Users,
      link: "https://x.com/exergy_llc",
    }
  ]

  const concepts = [
    {
      title: "Electricity In - Heat Out",
      icon: Zap,
      description: "Electric heaters convert power into heat with no waste. Typically, electric heat is more expensive than gas heat, and thus less popular. Hashrate Heating changes the norm.",
      image: "electric_heat_conversion.png",
      details: [
        "100% energy conversion efficiency",
        "No gas or liquid heating infrastructure",
        "Zero wasted energy",
        "Zero emissions"
      ]
    },
    {
      title: "Open Monetary Protocol",
      icon: Bitcoin,
      description: "Bitcoin mining is an open source protocol (like the world wide web) that rewards participants for contributing energy to process bitcoin transactions. The more energy you contribute, the more you earn, and the more heat you generate.",
      image: "bitcoin_miners.png",
      details: [
        "Anyone can participate - like anyone can use the internet",
        "Earnings are proportional to the work you contribute ~ heat demand",
        "Automated reward payouts in a nativie digital asset",
        "All the energy used to mine is converted to heat anyways"
      ]
    },
    {
      title: "Combining the Two: Smart Heat",
      icon: Cpu,
      description: "Regular bitoin miners are purposefully power hungry to maximize earnings. This inherently makes them great for heating. Hashrate Heating does the obvious - put bitcoin miners into heating systems. The result? Heat that pays.",
      image: "bitcoin_home_heat.png",
      details: [
        "Maximum efficiency. No waste - plus revenue",
        "Digital heat = better control and optimal performance",
        "Win-Win. Heat + revenue at no extra operating cost",
        "Consistent passive revenue every time you turn on the heat"
      ]
    }
  ]

  const applications = [
    {
      id: 'space-heating',
      title: 'Room Space Heating',
      description: 'Standalone units for heating individual rooms, garages, workshops, or specific areas. Plug-and-play simplicity.',
      image: 'https://images.pexels.com/photos/7745932/pexels-photo-7745932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      description: 'Replace or supplement your traditional furnace with hashrate heating. Perfect for whole-building heating with existing ductwork.',
      image: 'https://images.pexels.com/photos/5505931/pexels-photo-5505931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Integrates with existing HVAC',
        'Optimized temperature control',
        'Smart thermostat connectivity',
        'Completely hidden passive income'
      ]
    },
    {
      id: 'radiant-systems',
      title: 'Radiant Floor Heating',
      description: 'Underfloor heating systems that provide comfortable, even heat distribution throughout your space from the ground up.',
      image: 'https://cdn11.bigcommerce.com/s-8s3kdqoux2/product_images/uploaded_images/expert-thumb-pros-and-cons-of-in-floor-radiant-heating-.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Even heat distribution',
        'Increased efficiency',
        'Silent operation',
        'Luxury comfort'
      ]
    },
    {
      id: 'pools-spas',
      title: 'Pools & Hot Tubs',
      description: 'Keep your pool or spa at the perfect temperature year-round while generating revenue from the heating process.',
      image: 'https://images.pexels.com/photos/6667425/pexels-photo-6667425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Year-round swimming',
        'Precise temperature control',
        'Offset heating costs',
        'Digital control'
      ]
    },
    {
      id: 'Industrial',
      title: 'C&I Systems',
      description: 'Commercial and industrial heating systems for businesses with low-grade heating applications.',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Breweries & distilleries',
        'Greenhouses',
        'Apartments and large warehouses',
        'District heating'
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
      <Helmet>
        <title>EXERGY | Learn Hashrate Heating</title>
        <meta name="description" content="Learn about hashrate heating technology - the revolutionary heating system that generates Bitcoin while warming your space. Educational resources, guides, and expert insights." />
        <meta name="keywords" content="hashrate heating education, bitcoin mining heat technology, learn cryptocurrency heating, heating technology guides" />
      </Helmet>
      
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn The Technology
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
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
                className="bg-white dark:bg-surface-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative"
              >
                {/* External Badge */}
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  External
                </div>
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
                  className="w-full md:w-1/2 flex justify-center"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="w-full max-w-lg">
                    <img
                      src={concept.image}
                      alt={`${concept.title} - ${concept.description}`}
                      className="rounded-lg shadow-2xl w-full h-auto object-contain"
                    />
                  </div>
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
                            alt={`${application.title} hashrate heating application showing ${application.description}`}
                            className="w-full h-full object-cover"
                          />
                          {/* Light blue tint overlay using website's primary blue color */}
                          <div 
                            className="absolute inset-0 bg-primary-500 opacity-40"
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

      {/* See it in Action Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            See it in Action
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore real-world implementations of hashrate heating technology.
          </p>
          
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
          >
            See our Portfolio
            <Eye className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Learn