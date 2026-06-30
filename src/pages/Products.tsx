import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Github,
  BookOpen,
  Cpu,
  Thermometer,
  Wind,
  Droplets,
  Sun,
  Waves,
  ExternalLink,
  MessageCircle,
  CalendarDays,
  Zap,
  RefreshCw,
} from 'lucide-react'

const Products = () => {
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})
  const [expandedSpecs, setExpandedSpecs] = useState<{ [key: string]: boolean }>({})

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
      [productId]: ((prev[productId] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (productId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  const toggleSpecs = (productId: string) => {
    setExpandedSpecs(prev => ({ ...prev, [productId]: !prev[productId] }))
  }

  const integrationTypes = [
    {
      icon: Thermometer,
      title: 'Smart Zone Heaters',
      description:
        'Standalone miners act as space heaters — one per zone. Simple plug-and-play setup for rooms, garages, workshops, or cabins.',
    },
    {
      icon: Wind,
      title: 'In-Duct / Forced Air',
      description:
        'Miner sits in your HVAC return duct. Your existing air handler distributes heat throughout the building — no new vents needed.',
    },
    {
      icon: Droplets,
      title: 'Hydronic / Radiant',
      description:
        'Miner heats a water loop that feeds radiant floors, baseboard radiators, or fan-coil units. Consistent, even heat throughout.',
    },
    {
      icon: Waves,
      title: 'Water, Pool & Spa',
      description:
        'Dedicated miner heats pools, hot tubs, domestic hot water, or tank-style water heaters. Heat that was already going to waste.',
    },
    {
      icon: Sun,
      title: 'Excess Solar',
      description:
        'Miner acts as a dispatchable load — it ramps up when your solar panels overproduce and scales back when grid demand rises.',
    },
  ]

  const thirdPartyProducts = [
    {
      id: 'hyd-heatcore',
      name: 'Heat Core HS05',
      badge: 'Hydronic / Forced Air',
      images: [
        'https://48661310.fs1.hubspotusercontent-na2.net/hubfs/48661310/1-Jul-09-2025-09-41-39-7158-AM.png',
        'https://48661310.fs1.hubspotusercontent-na2.net/hubfs/48661310/2-Jul-09-2025-09-44-53-3264-AM.png',
        'https://48661310.fs1.hubspotusercontent-na2.net/hubfs/48661310/3-Jul-09-2025-09-45-39-1329-AM.png',
        'https://48661310.fs1.hubspotusercontent-na2.net/hubfs/48661310/4-Jul-09-2025-09-46-24-4952-AM.png',
      ],
      specs: {
        Applications: 'Radiant, Pools, or Forced Air',
        'Heating Power': '5 kW / 17 MBH',
        Hashrate: '228 TH/s',
        'Max Water Temp': '158°F',
        Dimensions: '25.1" x 21.5" x 25.2"',
        Capacity: 'Small–Med Homes',
      },
      priceNote: 'Retail price TBD — contact us for current availability and pricing',
      buttonText: 'Contact for Availability',
      buttonLink: '/contact',
      buttonExternal: false,
      pdfLink: 'https://243159145.fs1.hubspotusercontent-na2.net/hubfs/243159145/Heat%20Core%20HS05/HeatCore_HS05_specs.pdf',
      description:
        'Smart electric water boiler for versatile building-integrated mining applications. With a high output water temperature and detachable fan radiator, this digital boiler delivers warmth to liquid loops, air ducts, or both.',
      features: [
        'Radiant & forced-air heating in one unit',
        'Integrated dry cooler radiator with extension tubing',
        'Integrated miner CDU with circulator pump',
        'Easy control interface with simple buttons',
      ],
    },
    {
      id: 'sh-canaan',
      name: 'Canaan Avalon Mini 3',
      badge: 'Space Heating',
      images: [
        'https://coinminingcentral.com/cdn/shop/files/Canaan_Avalon_Mini_3_Heater___Bitcoin_Miner_1200x1200.png?v=1740763938',
        'https://coinminingcentral.com/cdn/shop/files/Canaan_Avalon_Mini_3_Heater_2_1200x1200.png?v=1740763938',
        'https://www.canaan.io/static/themes/default/images/official/official_mini3_download.png',
      ],
      specs: {
        Applications: 'Room Heating',
        'Heating Power': '800 W / 2.7 MBH',
        Hashrate: '37.5 TH/s',
        Noise: '45 dB',
        Dimensions: '30" x 4.1" x 8.5"',
        Capacity: '~350 sqft',
      },
      price: '$1,149',
      couponCode: 'EXERGY',
      buttonText: 'Buy at AltairTech.io',
      buttonLink: 'https://altairtech.io/product/canaan-avalon-mini-3/',
      buttonExternal: true,
      description:
        "Perfect for heating small to medium-sized rooms while generating passive revenue. The Avalon Mini 3 is easy to set up, can be operated remotely, and runs whisper-quiet. You won't even know it's there. Fleet control is coming soon, letting multiple Mini 3s pair together for larger rooms or full building heating.",
      features: [
        'Simple setup with guided onboarding',
        'WiFi connectivity & mobile app control',
        'Silent operation at 45 dB',
        'Multi-system fleet control (coming soon)',
      ],
    },
    {
      id: 'fa-canaan',
      name: 'Canaan Avalon Q',
      badge: 'Forced Air',
      images: [
        'https://www.canaan.io/static/themes/default/images/official/official_minerq_index1.png',
        'https://www.canaan.io/static/themes/default/images/official/official_minerq_functions.png',
        'https://www.canaan.io/static/themes/default/images/official/official_minerq_package.png',
        'https://www.canaan.io/static/themes/default/images/official/official_mini3_download.png',
      ],
      specs: {
        Applications: 'Air Heating',
        'Heating Power': '1,674 W / 5.7 MBH',
        Hashrate: '90 TH/s',
        Noise: '45–65 dB',
        Dimensions: '18" x 5.2" x 17.4"',
        Capacity: '~750 sqft',
      },
      price: '$1,799',
      couponCode: 'EXERGY',
      buttonText: 'Buy at AltairTech.io',
      buttonLink: 'https://altairtech.io/product/avalon-q/',
      buttonExternal: true,
      description:
        'The Avalon Q integrates cleanly into forced-air systems. Connect it to the supply side of your existing ductwork to augment heat throughout your living space. Fleet control is coming soon, letting multiple units pair with thermostats and furnace circulators for larger rooms or whole-building heating.',
      features: [
        'Simple setup with guided onboarding',
        'WiFi connectivity & mobile app control',
        'Duct-ready forced-air integration',
        'Multi-system fleet control (coming soon)',
      ],
    },
  ]

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Products | Exergy Heat</title>
        <meta
          name="description"
          content="Explore Exergy's building-integrated Bitcoin mining hardware — the CTRL1 Hub, open-source Home Assistant integrations, and Exergy-recommended third-party miners for every heating application."
        />
        <meta
          name="keywords"
          content="CTRL1 hub, home assistant bitcoin mining, bitcoin mining heater, hashrate heating products, Avalon Mini 3, Avalon Q, Heat Core HS05, building integrated mining, bitcoin heat reuse"
        />
      </Helmet>

      {/* ── Hero ── */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hardware we build, test, and recommend for building-integrated Bitcoin mining systems.
          </p>
        </div>
      </div>

      {/* ── No Web Store Banner ── */}
      <div className="bg-white dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
              <RefreshCw className="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-surface-900 dark:text-surface-100 mb-1">
                Our hardware lineup is always evolving.
              </p>
              <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">
                We're constantly testing, validating, and improving systems for building-integrated mining — which means the products we carry change. We don't have an online store yet. If you want to buy something or want to know what we currently recommend, reach out and we'll tell you exactly what we have and what's right for your setup.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white text-sm font-subheading rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 text-sm font-subheading rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors whitespace-nowrap"
              >
                <CalendarDays className="h-4 w-4 mr-2" />
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ─────────────────────────────────────────────
            SECTION 1 — Exergy Products
        ───────────────────────────────────────────── */}
        <section>
          {/* Section header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <Zap className="h-3.5 w-3.5" />
              Made by Exergy
            </div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
              Exergy Products
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-2xl">
              Hardware and software we design and build in-house — the control layer that turns a Bitcoin miner into an intelligent heating appliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── CTRL1 Hub ── */}
            <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              {/* Color bar + icon header */}
              <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] px-8 py-10 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/20">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">CTRL1 Hub</h3>
                <p className="text-white/80 text-sm">Purpose-built Home Assistant control hub</p>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-bold text-surface-900 dark:text-surface-100">$500</span>
                  <span className="text-sm text-surface-500 dark:text-surface-400">one-time hardware purchase</span>
                </div>

                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed mb-6">
                  The CTRL1 is the brain of every Exergy system. It connects your Bitcoin miner to your thermostat, solar inverter, and smart home — and comes pre-loaded with Exergy's open-source Home Assistant integrations right out of the box.
                </p>

                {/* Specs grid */}
                <div className="bg-surface-50 dark:bg-surface-700/50 rounded-xl p-5 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-3">Hardware</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      ['Processor', 'Raspberry Pi 5'],
                      ['Storage', 'NVMe SSD'],
                      ['Wireless', 'Zigbee Antenna'],
                      ['Case', 'Aluminum w/ Display'],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs text-surface-400 dark:text-surface-500">{label}</dt>
                        <dd className="text-sm font-medium text-surface-800 dark:text-surface-200">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature bullets */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    'Local control only — no cloud, no subscription',
                    'Your data stays on your network',
                    'Supports Zigbee, Z-Wave, and other IoT protocols',
                    'Pre-loaded with Exergy open-source HA integrations',
                    'Required for Tier 2 and Tier 3 Exergy installs',
                    'Also sold standalone for DIY setups',
                  ].map(feat => (
                    <li key={feat} className="flex items-start text-sm text-surface-600 dark:text-surface-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-sm font-subheading"
                >
                  Contact Us to Order
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ── HA Integrations ── */}
            <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              {/* Color bar + icon header */}
              <div className="bg-gradient-to-r from-[#3D5A8A] to-[#4970A5] px-8 py-10 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/20">
                  <Github className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Home Assistant Integrations</h3>
                <p className="text-white/80 text-sm">Open-source smart home connectors for Bitcoin miners</p>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-bold text-surface-900 dark:text-surface-100">Free</span>
                  <span className="text-sm text-surface-500 dark:text-surface-400">open source via HACS</span>
                </div>

                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed mb-6">
                  The control layer that makes a Bitcoin miner behave like a smart thermostat. It reads heat demand, responds to solar generation, and switches operating modes automatically — all inside Home Assistant.
                </p>

                {/* Supported platforms */}
                <div className="bg-surface-50 dark:bg-surface-700/50 rounded-xl p-5 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-3">Supported Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Braiins OS',
                      'LuxOS',
                      'Whatsminer',
                      'BitAxe',
                      'Ocean Pool',
                      'Public Pool',
                      'DATUM',
                      'Bitcoin Economics',
                    ].map(platform => (
                      <span
                        key={platform}
                        className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature bullets */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    'Free to install via HACS (Home Assistant Community Store)',
                    'Reads heat demand and adjusts miner output automatically',
                    'Responds to solar generation in real time',
                    'Switches operating modes based on your rules',
                    'Works standalone — no CTRL1 required for DIY installs',
                  ].map(feat => (
                    <li key={feat} className="flex items-start text-sm text-surface-600 dark:text-surface-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://github.com/exergyheat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center flex-1 px-5 py-3 bg-surface-900 dark:bg-surface-700 text-white rounded-xl hover:bg-surface-800 dark:hover:bg-surface-600 transition-colors text-sm font-subheading"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                  <a
                    href="https://docs.exergyheat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center flex-1 px-5 py-3 border border-surface-300 dark:border-surface-600 text-surface-800 dark:text-surface-200 rounded-xl hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors text-sm font-subheading"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read the Docs
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 2 — Integration Types
        ───────────────────────────────────────────── */}
        <section>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
              Integration Types
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-2xl">
              Every building is different. Exergy supports five integration patterns — choose the one that fits your existing system, or mix and match.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {integrationTypes.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white dark:bg-surface-800 rounded-2xl p-6 shadow-sm border border-surface-200 dark:border-surface-700 flex flex-col"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 dark:bg-primary-900/50 mb-4">
                  <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100 mb-2">{title}</h3>
                <p className="text-xs text-surface-500 dark:text-surface-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 3 — Recommended Hardware
        ───────────────────────────────────────────── */}
        <section>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Exergy-Recommended
            </div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
              Third-Party Hardware
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-2xl">
              Miners we've tested, validated, and integrated into our systems. Hardware selection evolves — reach out to confirm current availability and what we recommend for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {thirdPartyProducts.map(product => {
              const imgIdx = currentImageIndex[product.id] || 0
              const specsOpen = expandedSpecs[product.id] || false

              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-surface-800 rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image panel */}
                    <div className="relative h-80 lg:h-auto group bg-surface-100 dark:bg-surface-700">
                      <img
                        src={product.images[imgIdx]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-contain object-center p-6"
                      />

                      {/* Nav arrows */}
                      {product.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(product.id, product.images.length)}
                            aria-label="Previous image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => nextImage(product.id, product.images.length)}
                            aria-label="Next image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                          {/* Dot indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {product.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() =>
                                  setCurrentImageIndex(prev => ({ ...prev, [product.id]: i }))
                                }
                                aria-label={`Go to image ${i + 1}`}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                  i === imgIdx
                                    ? 'bg-primary-500'
                                    : 'bg-surface-400 dark:bg-surface-500 hover:bg-primary-400'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      {/* Badge */}
                      <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {product.badge}
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="p-8 flex flex-col">
                      <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-2">
                        {product.name}
                      </h3>

                      {/* Price row */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {product.price && (
                          <span className="text-2xl font-semibold text-primary-600 dark:text-primary-400">
                            {product.price}
                          </span>
                        )}
                        {product.priceNote && (
                          <span className="text-sm text-surface-500 dark:text-surface-400 italic">
                            {product.priceNote}
                          </span>
                        )}
                        {product.couponCode && (
                          <button
                            onClick={() => handleCopyCoupon(product.couponCode!)}
                            className="inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-green-200 dark:hover:bg-green-900 transition-colors"
                          >
                            {copiedCoupon === product.couponCode ? (
                              <>
                                <Check className="h-3.5 w-3.5" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" />
                                Coupon: {product.couponCode}
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-5">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {product.features.map(f => (
                          <li key={f} className="flex items-start text-sm text-surface-600 dark:text-surface-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Expandable specs */}
                      <div className="mb-6 border-t border-surface-200 dark:border-surface-700 pt-4">
                        <button
                          onClick={() => toggleSpecs(product.id)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <span className="text-sm font-semibold text-surface-700 dark:text-surface-300">
                            Technical Specs
                          </span>
                          <ChevronLeft
                            className={`h-4 w-4 text-surface-500 transition-transform duration-200 ${
                              specsOpen ? '-rotate-90' : 'rotate-180'
                            }`}
                            style={{ transform: specsOpen ? 'rotate(-90deg)' : 'rotate(90deg)' }}
                          />
                        </button>

                        {specsOpen && (
                          <div className="mt-4 bg-surface-50 dark:bg-surface-700/50 rounded-xl p-4 grid grid-cols-2 gap-x-4 gap-y-3">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <div key={key}>
                                <dt className="text-xs text-surface-400 dark:text-surface-500">{key}</dt>
                                <dd className="text-sm font-medium text-surface-800 dark:text-surface-200">{value}</dd>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* CTAs */}
                      <div className="mt-auto flex flex-col sm:flex-row gap-3">
                        {product.buttonExternal ? (
                          <a
                            href={product.buttonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center flex-1 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-sm font-subheading"
                          >
                            {product.buttonText}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        ) : (
                          <Link
                            to={product.buttonLink}
                            className="inline-flex items-center justify-center flex-1 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-sm font-subheading"
                          >
                            {product.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        )}
                        {product.pdfLink && (
                          <a
                            href={product.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-3 border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 rounded-xl hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors text-sm font-subheading"
                          >
                            View Specs
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure What's Right for Your Setup?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We'll help you figure out which hardware fits your building, budget, and goals — and tell you what we actually have in stock.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-subheading rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center px-6 py-3 border border-white text-white font-subheading rounded-lg hover:bg-white hover:text-primary-500 transition-colors"
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
