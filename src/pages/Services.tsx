import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Services | Exergy</title>
        <meta name="description" content="Three service tiers for building-integrated mining: self-serve tools, guided remote consulting, or done-for-you installation. Available nationwide." />
        <meta name="keywords" content="bitcoin mining heating, building integrated mining, hashrate heating services, bitcoin heat audit, home bitcoin mining, commercial bitcoin heating, Exergy Relay, Denver bitcoin mining" />
        <link rel="canonical" href="https://exergyheat.com/services" />
        <meta property="og:title" content="Services — Self-Serve, Guided, or Done-For-You | Exergy" />
        <meta property="og:description" content="Three service tiers for building-integrated mining: self-serve tools, guided remote consulting, or done-for-you installation. Available nationwide." />
        <meta property="og:url" content="https://exergyheat.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="Services — Self-Serve, Guided, or Done-For-You | Exergy" />
        <meta name="twitter:description" content="Three service tiers for building-integrated mining: self-serve tools, guided remote consulting, or done-for-you installation." />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Work With You
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Pick your starting point. Whether you want to run it yourself or have us handle everything, there's a path for you.
            </p>
          </div>
        </div>
      </div>

      {/* Honest Economics */}
      <div className="bg-white dark:bg-surface-800 py-14 border-b border-surface-200 dark:border-surface-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            What the math actually looks like
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 leading-relaxed">
            Your electric bill goes up. Your gas bill drops to near-zero. You accumulate Bitcoin. Whether that's net positive depends on your current fuel costs and what you do with the Bitcoin. Our audit tells you exactly where you land — before you commit to anything.
          </p>
        </div>
      </div>

      {/* Free Touchpoints Banner */}
      <div className="bg-surface-100 dark:bg-surface-800 py-6 border-b border-surface-200 dark:border-surface-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-surface-700 dark:text-surface-300">
            <span className="font-semibold text-surface-900 dark:text-surface-100 uppercase tracking-wide text-xs">Always Free:</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <a href="https://calc.exergyheat.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">Calculators</a>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <a href="https://github.com/exergyheat" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">Open-source smart home integrations</a>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <a href="https://docs.exergyheat.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">Documentation</a>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <a href="https://meet.jit.si/ExergyHomeAssistant" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">
                Weekly office hours (Wed 10am MT)
              </a>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <a href="https://support.exergyheat.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">Support Forum</a>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              <Link to="/book-call" className="underline hover:text-primary-600">15-min intro call</Link>
            </span>
          </div>
        </div>
      </div>

      {/* Three Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Tier 1: Self-Serve */}
          <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-md border border-surface-200 dark:border-surface-700 flex flex-col overflow-hidden">
            <div className="bg-surface-50 dark:bg-surface-700 px-8 py-6 border-b border-surface-200 dark:border-surface-600">
              <div className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">Tier 1</div>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-1">Self-Serve</h2>
              <p className="text-surface-500 dark:text-surface-400 text-sm">Free · Open-source · DIY — everything you need to build it yourself</p>
            </div>
            <div className="px-8 py-6 flex flex-col flex-1 gap-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Check your fit with free calculators</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">Estimate savings and size your system at <a href="https://calc.exergyheat.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">calc.exergyheat.com</a></p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Understand what hardware and control you need</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">Read our open-source smart home integrations at <a href="https://docs.exergyheat.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">docs.exergyheat.com</a></p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Install and configure your own system</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">Our open-source smart home integrations connect miners into your smart home or building automation</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Free help whenever you need it</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">Community forum, docs, and <a href="https://meet.jit.si/ExergyHomeAssistant" target="_blank" rel="noopener noreferrer" className="underline">weekly office hours (Wed 10am MT)</a></p>
                  </div>
                </li>
              </ul>

              <div className="mt-auto pt-2">
                <a
                  href="https://calc.exergyheat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                >
                  Try the Calculator
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Tier 2: Guided */}
          <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-md border border-surface-200 dark:border-surface-700 flex flex-col overflow-hidden">
            <div className="bg-surface-50 dark:bg-surface-700 px-8 py-6 border-b border-surface-200 dark:border-surface-600">
              <div className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">Tier 2</div>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-1">Guided</h2>
              <p className="text-surface-500 dark:text-surface-400 text-sm">Paid consulting — we design the system and guide your install remotely</p>
            </div>
            <div className="px-8 py-6 flex flex-col flex-1 gap-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Exergy Audit</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">We audit your home or building — tell you exactly what you can save and what you need. Sometimes included as part of Guided or Done-For-You engagements; contact us to discuss.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Full integration design</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">System sizing, control solution, automation configuration, and the exact playbook for your install</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Hardware sourced and shipped to you</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">We supply all recommended hardware — ships anywhere in the US</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Remote coordination with your contractors</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">Work with your own tradespeople. We answer questions, help with config, and polish the final setup from afar.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-auto pt-2">
                <Link
                  to="/book-call"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                >
                  Book an Intro Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tier 3: Done-For-You — featured */}
          <div className="bg-white dark:bg-surface-800 rounded-2xl shadow-xl border-2 border-primary-500 dark:border-primary-500 flex flex-col overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
              Highest Touch
            </div>
            <div className="bg-primary-600 px-8 py-6 border-b border-primary-500">
              <div className="text-xs font-bold uppercase tracking-widest text-primary-200 mb-2">Tier 3</div>
              <h2 className="text-2xl font-bold text-white mb-1">Done-For-You</h2>
              <p className="text-primary-200 text-sm">Fully managed — we handle everything, start to finish</p>
            </div>
            <div className="px-8 py-6 flex flex-col flex-1 gap-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Full audit and system design</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">Savings estimate, system sizing, hardware selection, and integration design — control solution, automation config, full install plan</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">We coordinate all trades</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">Mechanical, plumbing, electrical, and networking — all scheduled and managed by us</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <p className="text-surface-800 dark:text-surface-200 text-sm font-medium">Delivery, installation, and full commissioning</p>
                    <p className="text-surface-500 dark:text-surface-400 text-xs mt-0.5">We bring the system fully online — you flip a switch and it starts mining, heating in winter and absorbing excess solar in summer</p>
                  </div>
                </li>
              </ul>

              <div className="mt-auto pt-2 space-y-2">
                <p className="text-center text-xs text-surface-500 dark:text-surface-400">Available within ~100 miles of Denver, CO</p>
                <Link
                  to="/book-call"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
                >
                  See If You Qualify
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Exergy Relay strip */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-surface-500 dark:text-surface-400">
          <span className="h-px flex-1 bg-surface-200 dark:bg-surface-700" />
          <span>
            <span className="font-medium text-surface-700 dark:text-surface-300">Exergy Relay</span> — optional remote monitoring — is available as an add-on for any tier.{' '}
            <a href="#relay" className="underline hover:text-primary-600">Learn more ↓</a>
          </span>
          <span className="h-px flex-1 bg-surface-200 dark:bg-surface-700" />
        </div>

        {/* Commercial callout */}
        <div className="mt-12 bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-2xl px-8 py-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-3">Working on a commercial project?</p>
          <p className="text-surface-700 dark:text-surface-300 text-base leading-relaxed max-w-3xl">
            Exergy plugs into your existing project structure — alongside your architect, MEP engineer, and GC — as the building-integrated mining specialist. We handle system sizing, economic modeling, integration design, and coordination with your trades on our scope. We work within your project structure, not around it.
          </p>
          <div className="mt-5">
            <Link
              to="/book-call"
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-subheading"
            >
              Talk to Us About Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Exergy Relay Section */}
      <div id="relay" className="bg-surface-900 dark:bg-surface-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3">Optional Add-On for All Tiers</p>
            <h2 className="text-3xl font-bold text-white mb-4">Exergy Relay</h2>
            <p className="text-lg text-surface-400 italic">"Your heating system doesn't have an API. This one does."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-800 rounded-xl p-6 space-y-4">
              <h3 className="text-white font-semibold text-lg">What You Get</h3>
              <ul className="space-y-3">
                {[
                  'Customer portal at exergy.me — links to your Home Assistant instance, support forum, and documentation in one place',
                  'Secure remote access to your Home Assistant dashboard via a custom exergy.me subdomain',
                  'Real-time monitoring of your system\'s performance through Home Assistant',
                  'Automated alerts for hashrate drops, temperature anomalies, or connectivity issues — problems caught before you notice them',
                  'Monthly mining performance report — output, value earned, and net heating cost for the month',
                  'Priority support and remote hands-on intervention when needed',
                  '95% of your mining rewards paid directly to your wallet'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-surface-300 text-sm">
                    <ArrowRight className="h-4 w-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-800 rounded-xl p-6 space-y-4">
              <h3 className="text-white font-semibold text-lg">How You Pay</h3>
              <div className="space-y-4 text-surface-300 text-sm leading-relaxed">
                <p>
                  No subscription. No invoice. No credit card. Exergy Relay costs a <span className="text-white font-semibold">5% hashrate split</span> — five cents of every dollar your system earns goes to Exergy. The other 95% goes directly to your wallet.
                </p>
                <p>
                  The service earns its own keep. If your miner earns $200/month in Bitcoin, Relay costs you $10 — and in exchange, Exergy monitors your system remotely, reports on its performance, and fixes problems before you notice them.
                </p>
                <p>
                  You can disable Relay at any time. Your system continues heating and mining normally — you just lose the remote visibility and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute intro call. We'll help you figure out what tier fits your situation — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-call"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-subheading"
            >
              Book a Free Intro Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://calc.exergyheat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-base font-subheading"
            >
              Try the Calculator First
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
