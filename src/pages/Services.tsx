import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Wrench, Activity, HeartPulse, ChevronDown, ChevronUp } from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const services = [
    {
      id: 'audit',
      name: "Heat Audit Analysis",
      description: "Get a comprehensive analysis of your heating infrastructure and discover your potential savings with hashrate heating.",
      price: "$400",
      features: [
        "Detailed heat loss analysis",
        "Cost savings projection",
        "ROI calculations",
        "1-hour consultation call"
      ],
      icon: FileText,
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: {
        inputs: [
          "Current heating bills",
          "Electricity costs and usage",
          "Building dimensions and layout",
          "Insulation specifications",
          "Location and weather data"
        ],
        deliverables: [
          "Comprehensive analysis report",
          "Heat loss calculations",
          "Cost savings projections",
          "ROI analysis",
          "Implementation recommendations",
          "1-hour consultation call"
        ]
      },
      buttonText: "Purchase Audit - $400",
      buttonLink: "/contact?service=audit"
    },
    {
      id: 'upgrade',
      name: "Hashrate Heating System Upgrades",
      description: "Get a complete heating system design tailored to your specific needs and requirements.",
      price: "$1,000 deposit",
      features: [
        "Custom system design",
        "Detailed cost analysis",
        "Installation planning",
        "Performance projections"
      ],
      icon: Wrench,
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: {
        process: [
          "Initial consultation",
          "Site assessment",
          "System design",
          "Cost analysis",
          "Implementation plan"
        ],
        includes: [
          "Detailed system specifications",
          "Installation guidelines",
          "Performance estimates",
          "Cost breakdown",
          "Timeline projection"
        ]
      },
      buttonText: "Place $1,000 Deposit",
      buttonLink: "/contact?service=upgrade"
    },
    {
      id: 'monitoring',
      name: "Hashrate Heater Health Monitoring",
      description: "24/7 monitoring and maintenance of your hashrate heating system to ensure optimal performance.",
      price: "Contact for pricing",
      features: [
        "Real-time monitoring",
        "Preventive maintenance",
        "Performance optimization",
        "24/7 support"
      ],
      icon: Activity,
      image: "https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: {
        monitoring: [
          "Real-time performance tracking",
          "System health checks",
          "Alert notifications",
          "Monthly reports"
        ],
        maintenance: [
          "Regular system updates",
          "Preventive maintenance",
          "Emergency support",
          "Performance optimization"
        ]
      },
      buttonText: "Contact Us",
      buttonLink: "/contact?service=monitoring"
    },
    {
      id: 'consulting',
      name: "Hashrate Heat Consulting",
      description: "Expert consultation for businesses looking to implement or optimize hashrate heating solutions.",
      price: "Contact for pricing",
      features: [
        "Expert guidance",
        "Strategy development",
        "Technical consulting",
        "Implementation support"
      ],
      icon: HeartPulse,
      image: "https://images.pexels.com/photos/7567620/pexels-photo-7567620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: {
        expertise: [
          "System architecture",
          "Performance optimization",
          "Integration strategies",
          "Cost optimization"
        ],
        services: [
          "Technical consultation",
          "Strategy development",
          "Implementation guidance",
          "Ongoing support"
        ]
      },
      buttonText: "Contact Us",
      buttonLink: "/contact?service=consulting"
    }
  ]

  return (
    <div className="bg-surface-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Hashrate Heating Services
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              From analysis to implementation, we provide comprehensive services to help you harness the power of hashrate heating
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.name}
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block p-3 bg-primary-100 rounded-lg">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-surface-900">{service.name}</h2>
                <p className="text-lg text-surface-600">{service.description}</p>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <p className="text-2xl font-bold text-primary-600 mb-4">{service.price}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-surface-700">
                        <ArrowRight className="h-5 w-5 text-primary-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable Details */}
                <div className="bg-surface-50 rounded-lg border border-surface-200">
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <span className="font-semibold text-surface-900">Service Details</span>
                    {expandedService === service.id ? (
                      <ChevronUp className="h-5 w-5 text-surface-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-surface-600" />
                    )}
                  </button>
                  {expandedService === service.id && (
                    <div className="px-6 py-4 border-t border-surface-200">
                      {Object.entries(service.details).map(([key, items]) => (
                        <div key={key} className="mb-4 last:mb-0">
                          <h4 className="text-lg font-semibold text-surface-900 capitalize mb-2">
                            {key}
                          </h4>
                          <ul className="space-y-2">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-center text-surface-700">
                                <ArrowRight className="h-4 w-4 text-primary-600 mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to={service.buttonLink}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors w-full justify-center"
                >
                  {service.buttonText}
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
            Contact our team to learn more about our services and how they can benefit your business.
          </p>
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
  )
}

export default Services