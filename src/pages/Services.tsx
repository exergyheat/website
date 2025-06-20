import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Wrench, Activity, HeartPulse, ChevronDown, ChevronUp, X, Search, Cog, Monitor } from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [buildType, setBuildType] = useState<'residential' | 'commercial'>('residential')
  const [demoService, setDemoService] = useState<string | null>(null)
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const journeySteps = [
    {
      id: 'audit',
      title: 'Sizing and Savings',
      description: 'Curious? Get system sizing, estimated earnings, hardware options, costs, ROI and our recommendation.',
      icon: Search,
      flipText: 'Start at the Heat Audit if you\'re curious, seeking details, or weighing options.',
      targetSection: 'audit-service'
    },
    {
      id: 'design',
      title: 'Design & Project Plan',
      description: 'Ready? Get your integrated solution design, components, complete project plan and quote.',
      icon: Cog,
      flipText: 'Start with System Design if you\'re ready to heat with hashrate, We\'ll handle hardware, trades, timeline and install.',
      targetSection: 'upgrade-service'
    },
    {
      id: 'monitoring',
      title: 'Automate Health Monitoring',
      description: 'Opt in to remote monitoring. We\'ll tell you when it\'s time for maintenence with reports, alerts.',
      icon: Monitor,
      flipText: 'Start with Remote Monitoring if you already have a hashrate heating system, and want to get the most out of your heat that pays.',
      targetSection: 'monitoring-service'
    }
  ]

  const getAuditService = (type: 'residential' | 'commercial') => ({
    id: 'audit',
    name: "Heat Audit Analysis",
    description: "Get a comprehensive analysis of your heating infrastructure and discover your potential savings with hashrate heating.",
    price: type === 'residential' ? "$500" : "$2500",
    features: [
      "Detailed heating model",
      "Heat cost savings projection",
      "ROI calculations",
      "1-hour report walkthrough call"
    ],
    icon: FileText,
    image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    details: {
      inputs: type === 'residential' ? [
        "Current heating bills",
        "Electricity costs and usage",
        "Building dimensions and layout",
        "Insulation specifications",
        "Location and weather data"
      ] : [
        "Building plans and specifications",
        "Expected occupancy patterns",
        "Desired temperature zones",
        "Local energy rates",
        "Construction timeline"
      ],
      deliverables: [
        "Comprehensive analysis report",
        "Heat loss calculations",
        "Cost savings projections",
        "ROI analysis",
        type === 'residential' ? "Implementation recommendations" : "Integration specifications",
        "1-hour consultation call"
      ]
    },
    buttonText: `Purchase ${type === 'residential' ? 'Residential' : 'Commercial'} Heat Audit - ${type === 'residential' ? '$500' : '$2500'}`,
    buttonLink: `/contact?service=audit&type=${type}`,
    demo: {
      title: "Sample Heat Audit Report",
      content: (
        <div className="space-y-6">
          <div className="border-b border-surface-200 dark:border-surface-700 pb-4">
            <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">Building Overview</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-surface-600 dark:text-surface-400">Total Area</p>
                <p className="font-medium text-surface-900 dark:text-surface-100">{type === 'residential' ? '3,500 sq ft' : '50,000 sq ft'}</p>
              </div>
              <div>
                <p className="text-sm text-surface-600 dark:text-surface-400">Current Heating Load</p>
                <p className="font-medium text-surface-900 dark:text-surface-100">{type === 'residential' ? '120,000 BTU/hr' : '1.2M BTU/hr'}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">Cost Analysis</h3>
            <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Current Annual Cost</p>
                  <p className="font-medium text-surface-900 dark:text-surface-100">{type === 'residential' ? '$4,800' : '$48,000'}</p>
                </div>
                <div>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Projected Savings</p>
                  <p className="font-medium text-primary-600">{type === 'residential' ? '$3,120 (65%)' : '$31,200 (65%)'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">Recommendations</h3>
            <ul className="space-y-2">
              {type === 'residential' ? [
                'Install 2x EXERGY SpaceHeat 1000 units',
                'Integrate with existing HVAC system',
                'Add smart thermostat controls',
                'Implement zone management'
              ] : [
                'Install 4x EXERGY SpaceHeat 2000 units',
                'Integrate with existing HVAC system',
                'Add smart controls for zone management',
                'Implement heat recovery system'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-surface-600 dark:text-surface-400">
                  <ArrowRight className="h-4 w-4 text-primary-600 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  })

  const services = [
    getAuditService(buildType),
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
      buttonLink: "/contact?service=upgrade",
      demo: {
        title: "Sample System Design",
        content: (
          <div className="space-y-6">
            <div className="border-b border-surface-200 dark:border-surface-700 pb-4">
              <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">System Specifications</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Total Capacity</p>
                  <p className="font-medium text-surface-900 dark:text-surface-100">500 kW</p>
                </div>
                <div>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Mining Hashrate</p>
                  <p className="font-medium text-surface-900 dark:text-surface-100">15 PH/s</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">Integration Plan</h3>
              <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center text-surface-600 dark:text-surface-400">
                    <ArrowRight className="h-4 w-4 text-primary-600 mr-2" />
                    Primary heating loop integration
                  </li>
                  <li className="flex items-center text-surface-600 dark:text-surface-400">
                    <ArrowRight className="h-4 w-4 text-primary-600 mr-2" />
                    Backup system configuration
                  </li>
                  <li className="flex items-center text-surface-600 dark:text-surface-400">
                    <ArrowRight className="h-4 w-4 text-primary-600 mr-2" />
                    Control system architecture
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">Timeline</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-surface-200 dark:border-surface-700">
                  <span className="text-surface-600 dark:text-surface-400">Planning Phase</span>
                  <span className="text-surface-900 dark:text-surface-100">2 weeks</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-surface-200 dark:border-surface-700">
                  <span className="text-surface-600 dark:text-surface-400">Installation</span>
                  <span className="text-surface-900 dark:text-surface-100">3 weeks</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-surface-600 dark:text-surface-400">Testing & Commissioning</span>
                  <span className="text-surface-900 dark:text-surface-100">1 week</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
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
      buttonLink: "/contact?service=monitoring",
      demo: {
        title: "Sample Monitoring Dashboard",
        content: (
          <div className="space-y-6">
            <div className="border-b border-surface-200 dark:border-surface-700 pb-4">
              <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">System Status</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Overall Health</p>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <p className="font-medium text-surface-900 dark:text-surface-100">Optimal</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Uptime</p>
                  <p className="font-medium text-surface-900 dark:text-surface-100">99.9%</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                  <p className="text-sm text-surface-600 dark:text-surface-400">Heat Output</p>
                  <p className="text-xl font-bold text-primary-600">45,000 BTU/hr</p>
                  <p className="text-sm text-green-500">↑ 2.3% from last week</p>
                </div>
                <div className="bg-surface-50 dark:bg-surface-700 p-4 rounded-lg">
                  <p className="text-sm text-surface-600 dark:text-surface-400">Mining Efficiency</p>
                  <p className="text-xl font-bold text-primary-600">98.5%</p>
                  <p className="text-sm text-green-500">↑ 0.5% from last week</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100">Recent Alerts</h3>
              <div className="space-y-2">
                <div className="flex items-center text-surface-600 dark:text-surface-400 bg-surface-50 dark:bg-surface-700 p-3 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                  Filter maintenance recommended in 2 weeks
                </div>
                <div className="flex items-center text-surface-600 dark:text-surface-400 bg-surface-50 dark:bg-surface-700 p-3 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                  System update completed successfully
                </div>
              </div>
            </div>
          </div>
        )
      }
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
      // No demo property for consulting service
    }
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From curiosity to implementation, we'll help you harness hashrate heating
            </p>
          </div>
        </div>
      </div>

      {/* Your Hashrate Heating Journey Section */}
      <div className="bg-white dark:bg-surface-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">
              Your Hashrate Heating Journey
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto">
              Choose a starting point that suits you
            </p>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeySteps.map((step) => (
              <div
                key={step.id}
                className="relative perspective-1000"
                onMouseEnter={() => setFlippedCard(step.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                {/* Card Container with 3D flip effect */}
                <div className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === step.id ? 'rotate-y-180' : ''
                }`}>
                  
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="bg-white dark:bg-surface-700 rounded-lg shadow-lg p-6 border-2 border-surface-200 dark:border-surface-600 h-full flex flex-col justify-between cursor-pointer hover:shadow-xl transition-shadow">
                      {/* Step Number and Icon */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white">
                          <step.icon className="h-8 w-8" />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-3 text-center">
                          {step.title}
                        </h3>
                        <p className="text-surface-600 dark:text-surface-400 text-center text-sm">
                          {step.description}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="text-center mt-4">
                        <p className="text-xs text-surface-500 dark:text-surface-400">Hover to see why start here</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-primary-600 text-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-center items-center text-center">
                      <div className="mb-4">
                        <step.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                      </div>
                      <h3 className="text-lg font-bold mb-4">Start Here If:</h3>
                      <p className="text-primary-100 text-sm leading-relaxed mb-6">
                        {step.flipText}
                      </p>
                      <button
                        onClick={() => scrollToSection(step.targetSection)}
                        className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-6">
              Not sure where to start? Book a quick intro call to discuss your specific needs.
            </p>
            <Link
              to="/book-call"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div key={service.id} id={`${service.id}-service`} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.name}
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <service.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100">{service.name}</h2>
                
                {/* Build Type Toggle for Audit Service */}
                {service.id === 'audit' && (
                  <div className="flex items-center space-x-4 p-4 bg-surface-100 dark:bg-surface-800 rounded-lg">
                    <button
                      onClick={() => setBuildType('residential')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        buildType === 'residential'
                          ? 'bg-primary-600 text-white'
                          : 'bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-300'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      onClick={() => setBuildType('commercial')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        buildType === 'commercial'
                          ? 'bg-primary-600 text-white'
                          : 'bg-surface-200 dark:bg-surface-700 text-surface-700 dark:text-surface-300'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                )}

                <p className="text-lg text-surface-600 dark:text-surface-400">{service.description}</p>
                
                <div className="bg-white dark:bg-surface-800 rounded-lg p-6 shadow-lg space-y-6">
                  <div>
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">{service.price}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-surface-700 dark:text-surface-300">
                          <ArrowRight className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-surface-200 dark:border-surface-700">
                    <button
                      onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      className="w-full flex items-center justify-between text-surface-900 dark:text-surface-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <span className="font-semibold">Service Details</span>
                      {expandedService === service.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    
                    {expandedService === service.id && (
                      <div className="mt-4 space-y-4">
                        {Object.entries(service.details).map(([key, items]) => (
                          <div key={key}>
                            <h4 className="text-lg font-semibold text-surface-900 dark:text-surface-100 capitalize mb-2">
                              {key}
                            </h4>
                            <ul className="space-y-2">
                              {items.map((item, i) => (
                                <li key={i} className="flex items-center text-surface-700 dark:text-surface-300">
                                  <ArrowRight className="h-4 w-4 text-primary-600 dark:text-primary-400 mr-2" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`${service.demo ? 'flex gap-4' : ''} pt-6 border-t border-surface-200 dark:border-surface-700`}>
                    <Link
                      to={service.buttonLink}
                      className={`${service.demo ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading`}
                    >
                      {service.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    {service.demo && (
                      <button
                        onClick={() => setDemoService(service.id)}
                        className="px-6 py-3 bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors text-base font-subheading"
                      >
                        Example
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {demoService && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-surface-900 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-surface-50 dark:bg-surface-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-surface-50 dark:bg-surface-900 px-4 pt-5 pb-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                    {services.find(s => s.id === demoService)?.demo?.title}
                  </h3>
                  <button
                    onClick={() => setDemoService(null)}
                    className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                {services.find(s => s.id === demoService)?.demo?.content}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Maximize your Heating Revenue
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our favorite products - or book a call to find the right service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
            >
              Our Hardware Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-base font-subheading"
            >
              Book an Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

export default Services