import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Radiation as Radiator, Fan, Droplets, Cpu, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '../data/products'

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

  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
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
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">{product.title}</h3>
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
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-subheading rounded-md text-white hover:bg-white hover:text-primary-500 transition-colors"
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