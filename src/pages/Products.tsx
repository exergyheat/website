import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Radiation as Radiator, Fan, Droplets, Cpu, Factory, ChevronDown, ChevronUp, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})

  const handleCopyCoupon = async (couponCode: string) => {
    try {
      await navigator.clipboard.writeText(couponCode)
      setCopiedCoupon(couponCode)
      setTimeout(() => setCopiedCoupon(null), 2000)
    } catch (err) {
      console.error('Failed to copy coupon code:', err)
    }
  }

  const nextImage = (productId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (productId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }))
  }

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
    },
    {
      id: 'commercial-industrial',
      name: 'Commercial & Industrial',
      icon: Factory,
      description: 'Large-scale hashrate heating solutions for commercial and industrial applications. High-capacity systems for warehouses, manufacturing, and district heating.'
    }
  ]

  const products = [
    {
      id: 'sh-heatbit',
      category: 'space-heating',
      name: 'Heatbit Trio & Maxi',
      images: [
        "https://heatbit.com/cdn/shop/files/Trio_4_2048x2048.png?v=1747846876",       
        "https://heatbit.com/cdn/shop/files/magnifics_upscale-SKTXegC0zB8rUDLjvZ8Z-u6653123959_Add_light_--ar_9151_--v_7_29ee4ec2-bd09-4e49-aea5-44135eed293b_2_2048x2048.png?v=1748405757",
        "https://heatbit.com/cdn/shop/files/HB_54_2048x2048.png?v=1734991959",
        "https://heatbit.com/cdn/shop/files/Mask_group1_2048x2048.jpg?v=1713215725",
        "https://heatbit.com/cdn/shop/files/3Group_1410094715_1024x1024.png?v=1714173327"
      ],
      specs: {
        power: '400-1200 W: 110-240V AC 50/60Hz',
        hashrate: '13-39 TH/s',
        heating: '1,364-4,092 BTU/hr',
        capacity: '400 sqft',
        noise: '40-56 dB',
        dimensions: '9.5" x 9.5" x 32"'
      },
      price: '$799-$1399',
      couponCode: 'EXERGYHEAT',
      buttonText: 'Buy Now at Heatbit.com',
      buttonLink: 'https://heatbit.com/?ref=Exergyheat',
      description: 'Premium space heater & air purifier combo devices that harness hashrate heat to offset costs. The Heatbit Trio and Maxi are the most user friendly bitcoin mining heaters. Plug and play ready with an easy to use control panel and mobile application.',
      features: [
        'Plug-and-play setup',
        'WiFi connectivity',
        'Touch panel & mobile app control',
        'Quiet operation',
        'Air purification'
      ]
    },
    {
      id: 'sh-800',
      category: 'space-heating',
      name: 'Canaan Avalon Mini 3',
      images: [
        'https://coinminingcentral.com/cdn/shop/files/Canaan_Avalon_Mini_3_Heater___Bitcoin_Miner_1200x1200.png?v=1740763938',
        'https://coinminingcentral.com/cdn/shop/files/Canaan_Avalon_Mini_3_Heater_2_1200x1200.png?v=1740763938',
        'https://www.canaan.io/static/themes/default/images/official/official_mini3_download.png'
              ],
      specs: {
        power: '800 W: 110-240V AC 50/60Hz',
        hashrate: '37.5 TH/s',
        heating: '2,730 BTU/hr',
        capacity: '400 sqft',
        noise: '45 dB',
        dimensions: '30" x 4.1" x 8.5"'
      },
      price: '$999',
      buttonText: 'Coming Soon',
      buttonLink: '/products',
      description: 'Perfect for heating small to medium-sized rooms while generating passive revenue. The Avalon Mini 3 is easy to setup, can be operated remotely, and has a whisper quiet fan. You won\'t even know it\'s there.',
      features: [
        'Simple to follow setup',
        'WiFi connectivity',
        'Mobile app control',
        'Silent operation'
      ]
    },
    {
      id: 'hyd-5000',
      category: 'hydronic',
      name: 'RY3T Mini',
      images: ['https://ry3t.com/wp-content/uploads/2025/03/2-1024x1024.png'],
      specs: {
        power: '5000W',
        hashrate: '206 TH/s',
        heating: '17,060 BTU/hr',
        waterTemp: '149°F max',
        dimensions: '23.6" x 15.8" x 24.4"'
      },
      price: '$10,000',
      buttonText: 'Coming Soon',
      buttonLink: '/products',
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
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white dark:bg-surface-800 rounded-lg shadow-xl p-12 max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                  {activeCategory && (
                    (() => {
                      const category = categories.find(cat => cat.id === activeCategory);
                      const IconComponent = category?.icon;
                      return IconComponent ? <IconComponent className="h-10 w-10 text-primary-600 dark:text-primary-400" /> : null;
                    })()
                  )}
                </div>
                <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4">
                  Coming Soon
                </h2>
                <p className="text-surface-500 dark:text-surface-400">
                  In the meantime, check out our services or contact us to discuss custom solutions for your needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-base font-subheading"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-16">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[400px] lg:h-auto group">
                    {/* Main Image */}
                    <img
                      src={product.images[currentImageIndex[product.id] || 0]}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    
                    {/* Image Navigation - only show if multiple images */}
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(product.id, product.images.length)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => nextImage(product.id, product.images.length)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {product.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [product.id]: index }))}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === (currentImageIndex[product.id] || 0)
                                  ? 'bg-white'
                                  : 'bg-white/50 hover:bg-white/75'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">{product.name}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">{product.price}</p>
                      {product.couponCode && (
                        <button
                          onClick={() => handleCopyCoupon(product.couponCode)}
                          className="flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                        >
                          {copiedCoupon === product.couponCode ? (
                            <>
                              <Check className="h-4 w-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              Coupon: {product.couponCode}
                            </>
                          )}
                        </button>
                      )}
                    </div>
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

                    {product.buttonLink.startsWith('http') ? (
                      <a
                        href={product.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                      >
                        {product.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    ) : (
                      <Link
                        to={product.buttonLink}
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                      >
                        {product.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a Heat Audit to size the right solution and optimize savings.
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