import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Github,
  BookOpen,
  Cpu,
  Thermometer,
  Wind,
  Droplets,
  Sun,
  Waves,
  MessageCircle,
  CalendarDays,
  Zap,
  Clock,
} from 'lucide-react'

const Products = () => {
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

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Products | Exergy Heat</title>
        <meta
          name="description"
          content="Open-source smart home integrations, a purpose-built control hub, and vetted mining hardware for building-integrated systems."
        />
        <link rel="canonical" href="https://exergyheat.com/products" />
        <meta property="og:title" content="Products | Exergy Building-Integrated Mining" />
        <meta property="og:description" content="Open-source smart home integrations, a purpose-built control hub, and vetted mining hardware for building-integrated systems." />
        <meta property="og:url" content="https://exergyheat.com/products" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Products | Exergy Building-Integrated Mining" />
        <meta name="twitter:description" content="Open-source smart home integrations, a purpose-built control hub, and vetted mining hardware for building-integrated systems." />
        <meta
          name="keywords"
          content="CTRL1 hub, home assistant bitcoin mining, bitcoin mining heater, hashrate heating products, building integrated mining, bitcoin heat reuse, open source mining integration"
        />
      </Helmet>

      {/* ── Hero ── */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The hardware and software behind every Exergy building-integrated mining system.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ─────────────────────────────────────────────
            SECTION 1 — Exergy Products
        ───────────────────────────────────────────── */}
        <section>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <Zap className="h-3.5 w-3.5" />
              Made by Exergy
            </div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
              Exergy Products
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-2xl">
              The control layer that turns a Bitcoin miner into an intelligent heating and solar arbitrage appliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── CTRL1 Hub ── */}
            <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] px-8 py-10 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/20">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">CTRL1 Hub</h3>
                <p className="text-white/80 text-sm">Purpose-built Home Assistant control hub</p>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Clock className="h-3.5 w-3.5" />
                    Coming Soon — Standalone Purchase
                  </span>
                </div>

                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed mb-6">
                  The CTRL1 is the brain of every Exergy system. It connects your Bitcoin miner to your thermostat, solar inverter, and smart home — pre-loaded with Exergy's open-source integrations out of the box. Raspberry Pi 5 with Zigbee antenna, NVMe SSD, and aluminum case with network display.
                </p>

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

                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    'Local control only — no cloud, no subscription',
                    'Your data stays on your network',
                    'Supports Zigbee, Z-Wave, and other IoT protocols',
                    'Pre-loaded with Exergy open-source smart home integrations',
                    'Currently included in all Tier 2 and Tier 3 service installs',
                    'Standalone purchase coming soon',
                  ].map(feat => (
                    <li key={feat} className="flex items-start text-sm text-surface-600 dark:text-surface-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors text-sm font-subheading"
                >
                  View Service Tiers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ── HA Integrations ── */}
            <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-[#3D5A8A] to-[#4970A5] px-8 py-10 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/20">
                  <Github className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Smart Home Integrations</h3>
                <p className="text-white/80 text-sm">Open-source smart home connectors for Bitcoin miners</p>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-bold text-surface-900 dark:text-surface-100">Free</span>
                  <span className="text-sm text-surface-500 dark:text-surface-400">open source via HACS</span>
                </div>

                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed mb-6">
                  Open-source Home Assistant integrations that make a Bitcoin miner behave like a smart thermostat. Reads heat demand, responds to solar generation, and switches operating modes automatically — all running locally on your network.
                </p>

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
              Integration Types We Support
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-2xl">
              Every building is different. Exergy supports five integration patterns — one for every existing heat distribution system. We test and validate third-party mining hardware against each.
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
            SECTION 3 — Third-Party Hardware
        ───────────────────────────────────────────── */}
        <section>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Exergy-Validated
            </div>
            <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
              Third-Party Mining Hardware
            </h2>
            <p className="text-surface-500 dark:text-surface-400 max-w-2xl">
              We test, validate, and vet third-party mining systems to confirm compatibility across all five integration types. Hardware changes fast — models, availability, and pricing shift constantly.
            </p>
          </div>

          <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-700 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-surface-200 dark:divide-surface-700">

              <div className="lg:col-span-3 p-10">
                <h3 className="text-xl font-bold text-surface-900 dark:text-surface-100 mb-4">
                  What we do
                </h3>
                <div className="space-y-4 text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-8">
                  <p>
                    We research the market, buy and test machines, and validate that they work within each integration type before we recommend them to customers. That includes thermal performance, firmware compatibility with Home Assistant, noise levels, and fit for the specific application — space heating, forced air, hydronic, water heating, or solar load absorption.
                  </p>
                  <p>
                    We also help customers order hardware through us. Pricing changes frequently enough that we don't publish a catalog. Reach out and we'll tell you exactly what we currently recommend, what's in stock, and what it costs for your integration type.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-sm font-subheading"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact for Pricing
                  </Link>
                  <Link
                    to="/book-call"
                    className="inline-flex items-center justify-center px-6 py-3 border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 rounded-xl hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors text-sm font-subheading"
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Book a Call
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 p-10 bg-surface-50 dark:bg-surface-700/30">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-5">
                  Hardware available for
                </h3>
                <div className="space-y-4">
                  {integrationTypes.map(({ icon: Icon, title }) => (
                    <div key={title} className="flex items-center gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/50">
                        <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <span className="text-sm text-surface-700 dark:text-surface-300">{title}</span>
                      <span className="ml-auto text-xs font-medium text-surface-400 dark:text-surface-500">Contact for pricing</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
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
            Tell us about your building — we'll tell you which integration type fits, which hardware we'd recommend, and what it actually costs right now.
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
