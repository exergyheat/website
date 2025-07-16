import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Wrench, Activity, Users, ChevronDown, ChevronUp, X, Search, Cog, Monitor, ChevronLeft, ChevronRight, ExternalLink, Thermometer, Home } from 'lucide-react'
import { products } from '../data/products'

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [buildType, setBuildType] = useState<'residential' | 'commercial'>('residential')
  const [imageViewer, setImageViewer] = useState<{images: string[], titles: string[], currentIndex: number} | null>(null)
  const [flippedCard, setFlippedCard] = useState<string | null>(null)
  const [showHardwarePartnersModal, setShowHardwarePartnersModal] = useState(false)

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
      title: 'Sizing, Savings & Design',
      description: 'Curious? Get system sizing, estimated earnings, ROI, hardware recommendations, design & quote.',
      icon: Search,
      flipText: 'Start at the Heat Audit if you\'re curious, seeking details, or weighing options.',
      targetSection: 'audit-service'
    },
    {
      id: 'installation',
      title: 'Project Plan & Installation',
      description: 'Ready? Get your integrated solution project plan with professional installers that fit your timeline.',
      icon: Cog,
      flipText: 'Start with Plan & Installation if you\'re ready to heat with hashrate, We\'ll handle the rest.',
      targetSection: 'installation-service'
    },
    {
      id: 'monitoring',
      title: 'Automate Health Monitoring',
      description: 'Opted in? Remote monitoring tells us when it\'s time for maintenence, so you don\'t have to think about it.',
      icon: Monitor,
      flipText: 'Start with Remote Health Monitoring if you already have hashrate heat.',
      targetSection: 'monitoring-service'
    }
  ]

  // Hardware Partners Data
  const hardwarePartnersData = [
    {
      category: 'Space Heating',
      status: 'coming-soon',
      description: 'Standalone heating units for rooms, garages, and small spaces.',
      partners: []
    },
    {
      category: 'Forced Air Furnaces',
      status: 'coming-soon',
      description: 'Integrated heating solutions for existing HVAC systems.',
      partners: []
    },
    {
      category: 'Hot Water Heaters',
      status: 'coming-soon',
      description: 'Water heating solutions for domestic hot water applications.',
      partners: []
    },
    {
      category: 'Radiant Hydronic Boilers',
      status: 'available',
      description: 'Water-based heating solutions for radiant floor systems and hydronic loops.',
      partners: [
        {
          name: 'RY3T Mini',
          company: 'RY3T',
          image: 'https://ry3t.com/wp-content/uploads/2025/03/2-1024x1024.png',
          description: 'Versatile electric boiler for hydronic hashrate heating applications.',
          highlights: [
            '5000W heating capacity',
            '206 TH/s hashrate',
            '17,060 BTU/hr output',
            '149°F max water temperature',
            'Integrated PLC control'
          ],
          link: '/products',
          linkType: 'internal'
        }
      ]
    },
    {
      category: 'Pools & Spas',
      status: 'available',
      description: 'Heating solutions for pools, hot tubs, and spa applications.',
      partners: [
        {
          name: 'RY3T Systems',
          company: 'RY3T',
          image: 'https://ry3t.com/wp-content/uploads/2025/03/2-1024x1024.png',
          description: 'Scalable heating solutions for pool and spa applications.',
          highlights: [
            'Multiple capacity options',
            'High-temperature water output',
            'Pool-specific controls',
            'Weather-resistant design',
            'Remote monitoring capability'
          ],
          link: '/products',
          linkType: 'internal'
        }
      ]
    },
    {
      category: 'Commercial & Industrial',
      status: 'available',
      description: 'Large-scale heating solutions for commercial and industrial applications.',
      partners: [
        {
          name: 'Fog Hashing',
          company: 'Fog Hashing',
          image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          description: 'Industrial-scale hashrate heating solutions for large commercial applications.',
          highlights: [
            'Scalable industrial systems',
            'Custom integration design',
            'Enterprise-grade monitoring',
            'High-efficiency heat recovery',
            'Professional installation support'
          ],
          link: 'https://foghashing.io',
          linkType: 'external'
        }
      ]
    }
  ]

  const getAuditService = (type: 'residential' | 'commercial') => ({
    id: 'audit',
    name: "Heat Audit Analysis & Design",
    description: "Get a comprehensive analysis of your heating needs. The Heat Audit optimizes earnings and ROI for your heat demand with a tailored solution.",
    price: type === 'residential' ? "$500" : "$2500",
    features: [
      "Optimized heating system sizing",
      "Utility bill savings and revenue projections",
      "Upgrade project cost, total cost of ownership, and ROI estimates",
      "Personalized recommendations and next steps",
      "1-hour report walkthrough call"
    ],
    icon: FileText,
    image: "heating_subsidy.png",
    exampleImages: [
      "TheSpace_ExergyHeatAudit_pg0.png",
      "TheSpace_ExergyHeatAudit_pg1.png",
      "TheSpace_ExergyHeatAudit_pg2.png", 
      "TheSpace_ExergyHeatAudit_pg3.png"
    ],
    exampleTitles: [
      "Heat Audit Report - Page 0",
      "Heat Audit Report - Page 1",
      "Heat Audit Report - Page 2", 
      "Heat Audit Report - Page 3"
    ],
    details: {
      inputs: type === 'residential' ? [
        "Current heating bills or home dimensions",
        "Local electricity rates and terms",
        "Insulation specifications",
        "Project location for weather data",
        "Key variables like solar or unique heating paterns"
      ] : [
        "Project heating bills, plans and specifications",
        "Local energy rates, TOU or demand charges",
        "Expected occupancy patterns or supplimental heat sources",
        "Desired temperatures zones and criterea",
        "Location and weather data, or driving heat factors"
      ],
      deliverables: [
        "Comprehensive analysis report",
        "Optimal heating system sizing",
        "Estimated revenue and utility cost savings projections",
        "Heating hardware options and personalized recommendations",
        "Project quote cost, ROI, and total cost of ownership estimates",
        "1-hour consultation call and next step walkthrough"
      ]
    },
    buttonText: `Purchase ${type === 'residential' ? 'Residential' : 'Commercial'} Heat Audit`,
    buttonLink: type === 'residential' 
      ? 'https://pay.zaprite.com/pl_MRzvvmSAkL'
      : 'https://pay.zaprite.com/pl_GhSjRJ6mTI'
  })

  const getDesignService = () => ({
    id: 'installation',
    name: "Hashrate Heating Installation",
    description: "Get a complete hashrate heating installation plan tailored to your specific needs and requirements.",
    price: "50% Deposit",
    features: [
      "Includes Heat Audit analysis",
      "Custom heating system integration design",
      "Detailed cost breakdown and performance projections",
      "Installation project plan",
      "Project implementation with preferred partner installers",      
    ],
    icon: Wrench,
    image: "LiquidHashHeat_ex.png",
    showHardwarePartners: true,
    details: {
      process: [
        "Initial consultation",
        "Home assessment",
        "Heat Audit and System design",
        "Project plan and quote",
        "Installation & Comissioning"
      ],
      includes: [
        "Detailed system specifications",
        "Cost performance estimates",
        "Timeline projection",
        "Installation partner coordination",
        "Customer training tutorial"
      ]
    },
    buttonText: "Contact Us",
    buttonLink: "/contact"
  })

  const services = [
    getAuditService(buildType),
    getDesignService(),
    {
      id: 'monitoring',
      name: "Remote Health Monitoring",
      description: "24/7 monitoring and maintenance of your hashrate heating system to ensure optimal performance.",
      price: "Contact for details",
      features: [
        "Exergy real-time monitoring",
        "Preventive maintenance alerts",
        "Performance optimization",
        "Upgrades and recommendations"
      ],
      icon: Activity,
      image: "remote_monitoring.png",
      details: {
        monitoring: [
          "Real-time performance tracking",
          "System health checks",
          "Alert notifications",
          "Status reports"
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
      price: "Contact for details",
      features: [
        "Industry expertise",
        "Hashrate heating modeling tools",
        "Technical consulting",
        "Implementation support"
      ],
      icon: Users,
      image: "hashheat_consulting.png",
      details: {
        expertise: [
          "System sizing",
          "Design and control",
          "Integration strategies",
          "Target markets",
          "Heating and Mining expertise"
        ],
        services: [
          "Technical consultation",
          "Strategy development",
          "Implementation guidance",
          "Content and marketing",
          "Ongoing support"
        ]
      },
      buttonText: "Contact Us",
      buttonLink: "/contact?service=consulting"
    }
  ]

  const openImageViewer = (images: string | string[], titles: string | string[]) => {
    if (Array.isArray(images) && Array.isArray(titles)) {
      setImageViewer({ images, titles, currentIndex: 0 })
    } else {
      setImageViewer({ 
        images: [images as string], 
        titles: [titles as string], 
        currentIndex: 0 
      })
    }
  }

  const closeImageViewer = () => {
    setImageViewer(null)
  }

  const nextImage = () => {
    if (imageViewer && imageViewer.currentIndex < imageViewer.images.length - 1) {
      setImageViewer({
        ...imageViewer,
        currentIndex: imageViewer.currentIndex + 1
      })
    }
  }

  const prevImage = () => {
    if (imageViewer && imageViewer.currentIndex > 0) {
      setImageViewer({
        ...imageViewer,
        currentIndex: imageViewer.currentIndex - 1
      })
    }
  }

  const goToImage = (index: number) => {
    if (imageViewer) {
      setImageViewer({
        ...imageViewer,
        currentIndex: index
      })
    }
  }

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
                        <p className="text-xs text-surface-500 dark:text-surface-400">Flip to see where to start</p>
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
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
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
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-lg">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="rounded-lg shadow-2xl w-full h-auto object-contain"
                  />
                </div>
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

                {/* Build Type Toggle for Upgrade Service */}

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

                  <div className={`${(service.exampleImage || service.exampleImages || service.showHardwarePartners) ? 'flex gap-4' : ''} pt-6 border-t border-surface-200 dark:border-surface-700`}>
                    {service.buttonLink.startsWith('http') ? (
                      <a
                        href={service.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${(service.exampleImage || service.exampleImages || service.showHardwarePartners) ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading`}
                      >
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    ) : (
                      <Link
                        to={service.buttonLink}
                        className={`${(service.exampleImage || service.exampleImages || service.showHardwarePartners) ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading`}
                      >
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    )}
                    {(service.exampleImage || service.exampleImages) && (
                      <button
                        onClick={() => {
                          if (service.exampleImages && service.exampleTitles) {
                            openImageViewer(service.exampleImages, service.exampleTitles)
                          } else if (service.exampleImage && service.exampleTitle) {
                            openImageViewer(service.exampleImage, service.exampleTitle)
                          }
                        }}
                        className="px-6 py-3 bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors text-base font-subheading"
                      >
                        Example
                      </button>
                    )}
                    {service.showHardwarePartners && (
                      <button
                        onClick={() => setShowHardwarePartnersModal(true)}
                        className="px-6 py-3 bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors text-base font-subheading"
                      >
                        Hardware Partners
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Image Viewer Modal with Carousel */}
      {imageViewer && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity cursor-pointer" 
              aria-hidden="true"
              onClick={closeImageViewer}
            >
              <div className="absolute inset-0 bg-surface-900 opacity-95"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-surface-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full">
              <div className="bg-white dark:bg-surface-900 px-4 pt-5 pb-4 sm:p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                      {imageViewer.titles[imageViewer.currentIndex]}
                    </h3>
                    {imageViewer.images.length > 1 && (
                      <p className="text-sm text-surface-500 dark:text-surface-400 mt-1">
                        {imageViewer.currentIndex + 1} of {imageViewer.images.length}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={closeImageViewer}
                    className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Image Container with Navigation */}
                <div className="relative flex justify-center bg-surface-50 dark:bg-surface-800 rounded-lg p-4">
                  {/* Previous Button */}
                  {imageViewer.images.length > 1 && imageViewer.currentIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-surface-700 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6 text-surface-900 dark:text-surface-100" />
                    </button>
                  )}

                  {/* Image */}
                  <img
                    src={imageViewer.images[imageViewer.currentIndex]}
                    alt={imageViewer.titles[imageViewer.currentIndex]}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                  />

                  {/* Next Button */}
                  {imageViewer.images.length > 1 && imageViewer.currentIndex < imageViewer.images.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-surface-700 p-2 rounded-full shadow-lg hover:bg-surface-100 dark:hover:bg-surface-600 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6 text-surface-900 dark:text-surface-100" />
                    </button>
                  )}
                </div>

                {/* Image Dots Navigation */}
                {imageViewer.images.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {imageViewer.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === imageViewer.currentIndex
                            ? 'bg-primary-600'
                            : 'bg-surface-300 dark:bg-surface-600 hover:bg-surface-400 dark:hover:bg-surface-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Instructions */}
                <div className="text-center mt-4">
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    {imageViewer.images.length > 1 
                      ? 'Use arrow buttons or dots to navigate • Click outside or press X to close'
                      : 'Click outside or press X to close'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hardware Partners Modal */}
      {showHardwarePartnersModal && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity cursor-pointer" 
              aria-hidden="true"
              onClick={() => setShowHardwarePartnersModal(false)}
            >
              <div className="absolute inset-0 bg-surface-900 opacity-95"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-surface-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="bg-white dark:bg-surface-900">
                {/* Sticky Header */}
                <div className="sticky top-0 bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700 px-6 py-4 z-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100">
                        Hardware Partners
                      </h3>
                      <p className="text-sm text-surface-500 dark:text-surface-400 mt-1">
                        Our trusted partners for hashrate heating hardware solutions
                      </p>
                    </div>
                    <button
                      onClick={() => setShowHardwarePartnersModal(false)}
                      className="text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-200 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                
                {/* Scrollable Content */}
                <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
                  <div className="space-y-8">
                    {hardwarePartnersData.map((category, index) => (
                      <div key={index} className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                        {/* Category Header */}
                        <div className="bg-surface-50 dark:bg-surface-800 px-6 py-4 border-b border-surface-200 dark:border-surface-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-bold text-surface-900 dark:text-surface-100">
                                {category.category}
                              </h4>
                              <p className="text-surface-600 dark:text-surface-400 mt-1">
                                {category.description}
                              </p>
                            </div>
                            {category.status === 'coming-soon' && (
                              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                                Coming Soon
                              </span>
                            )}
                            {category.status === 'available' && (
                              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                                Available
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Partners Content */}
                        <div className="p-6">
                          {category.status === 'coming-soon' ? (
                            <div className="text-center py-8">
                              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-4">
                                <Cog className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                              </div>
                              <p className="text-surface-600 dark:text-surface-400 text-lg">
                                Hardware partners for this category are being finalized.
                              </p>
                              <p className="text-surface-500 dark:text-surface-500 text-sm mt-2">
                                Contact us for current availability and recommendations.
                              </p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 gap-6">
                              {category.partners.map((partner, partnerIndex) => (
                                <div key={partnerIndex} className="bg-surface-50 dark:bg-surface-800 rounded-lg p-6">
                                  <div className="flex flex-col md:flex-row gap-6">
                                    {/* Partner Image */}
                                    <div className="w-full md:w-1/3">
                                      <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-48 object-cover rounded-lg"
                                      />
                                    </div>
                                    
                                    {/* Partner Details */}
                                    <div className="w-full md:w-2/3 space-y-4">
                                      <div>
                                        <h5 className="text-xl font-bold text-surface-900 dark:text-surface-100">
                                          {partner.name}
                                        </h5>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                                          by {partner.company}
                                        </p>
                                      </div>
                                      
                                      <p className="text-surface-600 dark:text-surface-400">
                                        {partner.description}
                                      </p>
                                      
                                      {/* Key Highlights */}
                                      <div>
                                        <h6 className="text-sm font-semibold text-surface-900 dark:text-surface-100 mb-2 uppercase tracking-wide">
                                          Key Highlights
                                        </h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                          {partner.highlights.map((highlight, highlightIndex) => (
                                            <div key={highlightIndex} className="flex items-center text-surface-700 dark:text-surface-300">
                                              <ArrowRight className="h-4 w-4 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" />
                                              <span className="text-sm">{highlight}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      {/* Partner Link */}
                                      <div className="pt-4">
                                        {partner.linkType === 'internal' ? (
                                          <Link
                                            to={partner.link}
                                            onClick={() => setShowHardwarePartnersModal(false)}
                                            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                                          >
                                            View on Products Page
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                          </Link>
                                        ) : (
                                          <a
                                            href={partner.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                                          >
                                            Visit Partner Website
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Contact Section */}
                  <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-secondary-900 rounded-lg p-6 text-center">
                    <h4 className="text-lg font-bold text-surface-900 dark:text-surface-100 mb-2">
                      Need Custom Hardware Solutions?
                    </h4>
                    <p className="text-surface-600 dark:text-surface-400 mb-4">
                      Our team can help you find the right hardware partner for your specific heating needs.
                    </p>
                    <Link
                      to="/contact"
                      onClick={() => setShowHardwarePartnersModal(false)}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      Contact Our Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Maximize your Heating Potential
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our favorite products - or book a call to find the right service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
            >
              Our Hardware Recommendations
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