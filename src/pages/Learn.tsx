import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, Users, MessageSquare, HelpCircle } from 'lucide-react'

const Learn = () => {
  const resources = [
    {
      title: "Educational Resources",
      description: "Comprehensive guides and tutorials about hashrate heating technology",
      icon: BookOpen,
      link: "/education"
    },
    {
      title: "ROI Calculators",
      description: "Calculate potential savings and earnings with our interactive tools",
      icon: Calculator,
      link: "/calculators"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share experiences",
      icon: Users,
      link: "/forum"
    },
    {
      title: "Discussion Board",
      description: "Engage in technical discussions and get expert advice",
      icon: MessageSquare,
      link: "/forum"
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about our technology",
      icon: HelpCircle,
      link: "/faq"
    }
  ]

  return (
    <div className="bg-surface-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn About Hashrate Heating
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Explore our comprehensive resources and join our community to master the future of heating technology
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.link}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <resource.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 ml-4">
                  {resource.title}
                </h3>
              </div>
              <p className="text-surface-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 mb-12 text-center">
            Featured Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-surface-900">For Beginners</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-surface-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Introduction to Hashrate Heating
                </li>
                <li className="flex items-center text-surface-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Basic Setup Guide
                </li>
                <li className="flex items-center text-surface-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Understanding ROI
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-surface-900">For Advanced Users</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-surface-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Advanced Optimization Techniques
                </li>
                <li className="flex items-center text-surface-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  System Integration Strategies
                </li>
                <li className="flex items-center text-surface-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  Performance Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn