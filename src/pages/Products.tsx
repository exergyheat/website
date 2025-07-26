import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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
      description: 'Standalone heating solutions for rooms, garages, and homes. Space heaters are the simplest way to monetize your heat.'
    },
    {
      id: 'forced-air',
      name: 'Forced Air',
      icon: Fan,
      description: 'Integrated heating solutions that work with your existing HVAC system or replace traditional furnaces. Perfect for whole-home hashrate heating.'
    },
    {
      id: 'hydronic',
      name: 'Hydronic & Water',
      icon: Droplets,
      description: 'Water-based heating solutions for radiant heat, hot water tanks, pools, and more. Seamlessly integrates with existing hydronic systems.'
    },
    {
      id: 'control',
      name: 'Control Systems',
      icon: Cpu,
      description: 'Smart control systems and hardware for managing your hashrate heating devices. From sensors to servers, we provide complete control solutions.'
    }
  ]

  const products = [
    {
      id: 'sh-heatbit',
      category: 'space-heating',
      name: 'Heatbit Trio & Maxi',
      image: 'https://heatbit.com/cdn/shop/files/6magnifics_upscale-AKYuF81EntKoAHcGWffL-untitled_3_2048x2048.jpg?v=1748042332',
      specs: {
        power: '400-1200 W: 110-240V AC 50/60Hz',
        hashrate: '13-39 TH/s',
        heating: '1,364-4,092 BTU/hr',
        capacity: '400 sqft',
        noise: '45 dB',
        dimensions: '30" x 4.1" x 8.5"'
      },
      price: '$799-$1399',
      description: 'Premium space heater & air purifier combo devices that harness hashrate heat to offset costs. The Heatbit Trio and Maxi are the most user friendly bitcoin mining heaters. Plug and play ready with an easy to use control panel and mobile application.',
      features: [
        'Plug-and-play setup',
        'WiFi connectivity',
        'Mobile app control',
        'Quiet operation'
      ]
    },
    {
      id: 'sh-800',
      category: 'space-heating',
      name: 'Canaan Avalon Mini 3',
      image: 'https://www.canaan.io/static/themes/default/images/official/official_mini3_index4.png',
      specs: {
        power: '800 W: 110-240V AC 50/60Hz',
        hashrate: '37.5 TH/s',
        heating: '2,730 BTU/hr',
        capacity: '400 sqft',
        noise: '45 dB',
        dimensions: '30" x 4.1" x 8.5"'
      },
      price: '$999',
      description: 'Perfect for heating small to medium-sized rooms while generating passive revenue. The Avalon Mini 3 is easy to setup, can be operated remotely, and has a whisper quiet fan. You won\'t even know it\'s there.',
      features: [
        'Simple to follow setup',
        'WiFi connectivity',
        'Mobile app control',
        'Quiet operation'
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
      description: 'Versatile electric boiler for hydronic hashrate heating applications. With a high water output temperature and smart control, this water boiler is great for a variety of use cases.',
      features: [
        'Radiant / hydronic loop applications',
        'Hot water tank integration',
        'Integrated heating loop pump',
        'Integrated PLC control'

      ]
    },
  ]

  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Hashrate Heating Products | EXERGY Bitcoin Mining Heaters</title>
        <meta name="description" content="Explore EXERGY's hashrate heating products including space heaters, forced air systems, hydronic boilers, and control systems. Bitcoin mining heaters that pay you while keeping you warm." />
        <meta name="keywords" content="hashrate heaters, bitcoin mining heaters, space heating, forced air heating, hydronic heating, mining heat reuse products" />
      </Helmet>
      
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Favorite Products
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We know which solutions are best - for every application
            </p>
          </div>
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
                    alt={`${product.name} - ${product.description}`}
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
                    to="/products"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                  >
                    Coming Soon
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not Sure What to Get?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Order a Heat Audit to size the right solution and optimize savings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
            >
              Explore Our Heat Audit Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-subheading rounded-md text-white hover:bg-white hover:text-primary-500 transition-colors"
            >
              Schedule Product Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products