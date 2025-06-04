import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Gauge, Activity, BarChart3 } from 'lucide-react'

const Products = () => {
  const products = [
    {
      name: "EXERGY Heat Core",
      description: "Our flagship heat generation system that converts excess computing power into useful heat, saving you money while contributing to the blockchain network.",
      features: [
        "Advanced thermal management",
        "Real-time performance monitoring",
        "Automatic load balancing",
        "Smart temperature control"
      ],
      icon: Zap,
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "EXERGY Controller",
      description: "Smart control system that optimizes heat generation and distribution based on your specific needs and usage patterns.",
      features: [
        "AI-powered optimization",
        "Mobile app control",
        "Energy usage analytics",
        "Predictive maintenance"
      ],
      icon: Gauge,
      image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "EXERGY Analytics",
      description: "Comprehensive analytics platform that helps you track and optimize your heating efficiency and crypto mining performance.",
      features: [
        "Real-time monitoring",
        "Performance analytics",
        "ROI calculator",
        "Custom reporting"
      ],
      icon: Activity,
      image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <div className="bg-surface-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Heat Generation Products
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Transform your heating infrastructure with our innovative hashrate-based solutions
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {products.map((product, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block p-3 bg-primary-100 rounded-lg">
                  <product.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-surface-900">{product.name}</h2>
                <p className="text-lg text-surface-600">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-surface-700">
                      <BarChart3 className="h-5 w-5 text-primary-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-surface-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Heating Infrastructure?
          </h2>
          <p className="text-xl text-surface-300 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our products and how they can benefit your business.
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