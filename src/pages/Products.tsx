import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Radiator, Fan, Droplets, Cpu, ChevronDown, ChevronUp } from 'lucide-react'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('space-heating')
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const categories = [
    {
      id: 'space-heating',
      name: 'Space Heating',
      icon: Radiator,
      description: 'Standalone heating solutions for rooms, garages, and homes. Our space heaters combine efficient heat distribution with cryptocurrency mining capabilities.',
      products: [
        {
          id: 'sh-1000',
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
        }
      ]
    },
    {
      id: 'forced-air',
      name: 'Forced Air',
      icon: Fan,
      description: 'Integrated heating solutions that work with your existing HVAC system or replace traditional furnaces. Perfect for whole-home heating applications.',
      products: [
        {
          id: 'fa-5000',
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
        }
      ]
    },
    {
      id: 'hydronic',
      name: 'Hydronic',
      icon: Droplets,
      description: 'Water-based heating solutions for radiant heat, hot water, pools, and more. Seamlessly integrates with existing hydronic systems.',
      products: [
        {
          id: 'hw-3000',
          name: 'EXERGY HydroHeat 3000',
          image: 'https://images.pexels.com/photos/8293769/pexels-photo-8293769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          specs: {
            power: '3000W',
            hashrate: '300 TH/s',
            heating: '10,236 BTU/hr',
            waterTemp: '180°F max',
            dimensions: '30" x 20" x 20"'
          },
          price: '$8,999',
          description: 'Versatile hydronic heating solution for multiple applications.',
          features: [
            'Boiler integration',
            'Multiple pump outputs',
            'Temperature monitoring',
            'Freeze protection'
          ]
        }
      ]
    },
    {
      id: 'control',
      name: 'Control Systems',
      icon: Cpu,
      description: 'Smart control systems and hardware for managing your hashrate heating infrastructure. From sensors to servers, we provide complete control solutions.',
      products: [
        {
          id: 'cs-hub',
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
    }
  ]

  return (
    <div className="bg-surface-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative Hashrate Heating Solutions
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Transform your heating infrastructure with our cutting-edge products
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-100 text-surface-700 hover:bg-primary-50'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {categories.map((category) => (
          <div
            key={category.id}
            className={activeCategory === category.id ? 'block' : 'hidden'}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-surface-900 mb-4">{category.name}</h2>
              <p className="text-xl text-surface-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[400px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-surface-900 mb-4">{product.name}</h3>
                      <p className="text-xl font-semibold text-primary-600 mb-4">{product.price}</p>
                      <p className="text-surface-600 mb-6">{product.description}</p>

                      <button
                        onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                        className="flex items-center justify-between w-full text-left mb-4"
                      >
                        <span className="text-lg font-semibold text-surface-900">Technical Specifications</span>
                        {expandedProduct === product.id ? (
                          <ChevronUp className="h-5 w-5 text-surface-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-surface-600" />
                        )}
                      </button>

                      {expandedProduct === product.id && (
                        <div className="bg-surface-50 rounded-lg p-4 mb-6">
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <div key={key}>
                                <dt className="text-sm font-medium text-surface-500 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </dt>
                                <dd className="text-lg font-semibold text-surface-900">{value}</dd>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-2 mb-8">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-surface-700">
                            <ArrowRight className="h-5 w-5 text-primary-600 mr-2" />
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
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-surface-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Heating Infrastructure?
          </h2>
          <p className="text-xl text-surface-300 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our products and find the perfect solution for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products