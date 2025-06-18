import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Radiation as Radiator, Fan, Droplets, Cpu, ChevronDown, ChevronUp } from 'lucide-react'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const categories = [
    {
      id: 'space-heating',
      name: 'Space Heating',
      icon: Radiator,
      description: 'Standalone heating solutions for rooms, garages, and homes. Our space heaters combine efficient heat distribution with cryptocurrency mining capabilities.'
    },
    {
      id: 'forced-air',
      name: 'Forced Air',
      icon: Fan,
      description: 'Integrated heating solutions that work with your existing HVAC system or replace traditional furnaces. Perfect for whole-home heating applications.'
    },
    {
      id: 'hydronic',
      name: 'Hydronic & Water',
      icon: Droplets,
      description: 'Water-based heating solutions for radiant heat, hot water, pools, and more. Seamlessly integrates with existing hydronic systems.'
    },
    {
      id: 'control',
      name: 'Control Systems',
      icon: Cpu,
      description: 'Smart control systems and hardware for managing your hashrate heating infrastructure. From sensors to servers, we provide complete control solutions.'
    }
  ]

  const products = [
    {
      id: 'sh-1000',
      category: 'space-heating',
      name: 'EXERGY SpaceHeat 1000',
      image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specs: {
        power: '1000W',
        hashrate: '100 TH/s',
        heating: '3,412 BTU/hr',
        noise: '45 dB',
        dimensions: '15" x 8" x 8"'
      },
      price: '$2,999',
      description: 'Perfect for heating small to medium-sized rooms while generating passive income through mining.',
      features: [
        'Plug-and-play setup',
        'WiFi connectivity',
        'Mobile app control',
        'Quiet operation'
      ]
    },
    {
      id: 'sh-2000',
      category: 'space-heating',
      name: 'EXERGY SpaceHeat 2000',
      image: 'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specs: {
        power: '2000W',
        hashrate: '200 TH/s',
        heating: '6,824 BTU/hr',
        noise: '50 dB',
        dimensions: '24" x 12" x 12"'
      },
      price: '$5,499',
      description: 'High-capacity heater designed for large rooms and open spaces.',
      features: [
        'Dual heating zones',
        'Advanced temperature control',
        'Remote monitoring',
        'Enhanced security features'
      ]
    },
    {
      id: 'fa-5000',
      category: 'forced-air',
      name: 'EXERGY AirHeat 5000',
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specs: {
        power: '5000W',
        hashrate: '500 TH/s',
        heating: '17,060 BTU/hr',
        airflow: '2000 CFM',
        dimensions: '36" x 24" x 24"'
      },
      price: '$12,999',
      description: 'Complete furnace replacement solution with integrated mining capabilities.',
      features: [
        'HVAC integration',
        'Smart thermostat compatible',
        'Zoned heating control',
        'High-efficiency air handling'
      ]
    },
    {
      id: 'hyd-5000',
      category: 'hydronic',
      name: 'RY3T Mini',
      image: 'https://ry3t.com/wp-content/uploads/2025/03/2-1024x1024.png',
      specs: {
        power: '5000W',
        hashrate: '206 TH/s',
        heating: '17,060 BTU/hr',
        waterTemp: '149°F max',
        dimensions: '23.6" x 15.8" x 24.4"'
      },
      price: '$10,000',
      description: 'Versatile digital boiler for hydronic heating applications.',
      features: [
        'Boiler integration',
        'Hot water tank integration',
        'Integrated heating loop pump',
        'Integrated control'

      ]
    },
    {
      id: 'cs-hub',
      category: 'control',
      name: 'EXERGY Control Hub',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specs: {
        processor: 'Quad-core ARM',
        memory: '8GB RAM',
        storage: '256GB SSD',
        connectivity: 'WiFi/Ethernet'
      },
      price: '$799',
      description: 'Central control system for managing multiple hashrate heating devices.',
      features: [
        'Real-time monitoring',
        'Remote management',
        'Data logging',
        'API integration'
      ]
    },
    {
      id: 'cs-sensor',
      category: 'control',
      name: 'EXERGY Smart Sensor Pack',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specs: {
        sensors: 'Temp/Humidity/Flow',
        range: '100ft wireless',
        battery: '2-year life',
        quantity: '4 sensors/pack'
      },
      price: '$299',
      description: 'Comprehensive sensor package for monitoring your heating system.',
      features: [
        'Wireless connectivity',
        'Long battery life',
        'Easy installation',
        'Environmental monitoring'
      ]
    }
  ]

  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Favorite Products
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We've got what you need, from plug-and-play to integrated systems
            </p>
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Tailored Hashrate Heating Solutions</h2>
          <p className="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto">
            We’ve collaborated with top manufacturers to select the best products for your heating needs, scale, or application - so you don’t have to figure it out.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-white dark:bg-surface-800 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-primary-50 dark:hover:bg-surface-600'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-100 dark:bg-surface-700 text-surface-700 dark:text-surface-300 hover:bg-primary-50 dark:hover:bg-surface-600'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">{product.name}</h3>
                  <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">{product.price}</p>
                  <p className="text-surface-600 dark:text-surface-400 mb-6">{product.description}</p>

                  <button
                    onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                    className="flex items-center justify-between w-full text-left mb-4"
                  >
                    <span className="text-lg font-semibold text-surface-900 dark:text-surface-100">Technical Specifications</span>
                    {expandedProduct === product.id ? (
                      <ChevronUp className="h-5 w-5 text-surface-600 dark:text-surface-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-surface-600 dark:text-surface-400" />
                    )}
                  </button>

                  {expandedProduct === product.id && (
                    <div className="bg-surface-50 dark:bg-surface-700 rounded-lg p-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key}>
                            <dt className="text-sm font-medium text-surface-500 dark:text-surface-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </dt>
                            <dd className="text-lg font-semibold text-surface-900 dark:text-surface-100">{value}</dd>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-surface-700 dark:text-surface-300">
                        <ArrowRight className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-surface-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not Sure About your Heating Needs?
          </h2>
          <p className="text-xl text-surface-300 mb-8 max-w-2xl mx-auto">
            Get a Heat Audit to find the right system and optimize savings - or book an intro call for a quick opinion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products