import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { projects } from '../data/portfolioProjects'
import ReviewTodo from '../components/ReviewTodo'

const Portfolio = () => {
  const { pathname } = useLocation()
  const canonical = pathname === '/case-studies'
    ? 'https://exergyheat.com/case-studies'
    : 'https://exergyheat.com/work'

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      <Helmet>
        <title>Work | Exergy</title>
        <meta name="description" content="Case studies from Exergy. The commercial office leads. Three homes are labeled as pilot installs. Hydronic and forced-air integrations." />
        <meta name="keywords" content="building integrated mining case studies, bitcoin mining heat installations, Exergy work, commercial office mining heat" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Work — Case Studies | Exergy" />
        <meta property="og:description" content="The commercial office leads. Three homes are pilot installs, labeled that way." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="Work — Case Studies | Exergy" />
        <meta name="twitter:description" content="The commercial office leads. Three homes are pilot installs." />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Case studies. The commercial office comes first. The three homes are pilot installs — early systems, not a finished residential product.
          </p>
        </div>
      </div>

      {/* Aggregate stats bar */}
      <div className="bg-white dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ReviewTodo>
            Verify these rollup figures before they stay on the page: “~1.2 PH/s” hashrate added, and “0.030+ BTC” earned across installs. Also verify the solar pilot’s “~$4,000 installed” figure, marked on that card. Dollar amounts below are carried forward from the previous site as measured outcomes, not as Exergy’s prices. Strike any figure you cannot stand behind. Exergy’s own fees are not listed anywhere.
          </ReviewTodo>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4</div>
              <div className="text-sm text-surface-600 dark:text-surface-400 mt-1">Buildings written up</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">~1.2 PH/s</div>
              <div className="text-sm text-surface-600 dark:text-surface-400 mt-1">Hashrate added — TODO: verify</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">0.030+ BTC</div>
              <div className="text-sm text-surface-600 dark:text-surface-400 mt-1">Earned across installs — TODO: verify</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5 types</div>
              <div className="text-sm text-surface-600 dark:text-surface-400 mt-1">Integration configurations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-surface-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Header image */}
            <div className="relative h-64 md:h-80">
              <img loading="lazy" decoding="async"
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.operatingMode}
                  </span>
                  {project.integrationTypes.map(type => (
                    <span key={type} className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {type}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                <p className="text-white/80 text-sm mt-1">{project.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-surface-600 dark:text-surface-400 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Stats */}
                <div>
                  <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide mb-4">Results</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="bg-surface-50 dark:bg-surface-700 rounded-lg p-4">
                        <div className="text-xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                        <div className="text-xs text-surface-500 dark:text-surface-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide mb-4">System Details</h3>
                  <ul className="space-y-3">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-surface-600 dark:text-surface-400 text-sm">
                        <ArrowRight className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Chart / dashboard image */}
              {project.chartImage && (
                <div className="mt-8">
                  <img loading="lazy" decoding="async"
                    src={project.chartImage}
                    alt={`${project.title} — data chart`}
                    className="w-full rounded-xl border border-surface-200 dark:border-surface-700 shadow-sm"
                  />
                </div>
              )}

              {/* Pull quote */}
              {project.pullQuote && (
                <blockquote className="mt-8 border-l-4 border-primary-500 pl-6 py-2">
                  <p className="text-surface-700 dark:text-surface-300 italic">"{project.pullQuote}"</p>
                </blockquote>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* What the case studies prove */}
      <div className="bg-white dark:bg-surface-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-8">What These Installations Prove</h2>
          <div className="space-y-6 text-surface-600 dark:text-surface-400">
            <p><strong className="text-surface-900 dark:text-surface-100">The sizing methodology works.</strong> A miner sized to the average heating load, not the peak, runs at high duty cycle and handles the dominant share of heat demand. The existing system covers the rest. Across every install, the backup system rarely fired.</p>
            <p><strong className="text-surface-900 dark:text-surface-100">A miner can stand in for an equipment upgrade.</strong> The solar pilot deferred a furnace replacement. The all-electric pilot let a 6,000W immersion setup carry a load that had been on a 40kW electric boiler. Both are pilots. The installed-cost comparison is one of the figures marked TODO above.</p>
            <p><strong className="text-surface-900 dark:text-surface-100">The whole building can be smart at the energy and economics layer.</strong> Home Assistant manages zone temperatures, operating modes, TOU rate response, and solar routing simultaneously. The building makes real-time economic decisions — which fuel is cheapest right now, where the heat is needed, should the excess generation mine or export.</p>
            <p><strong className="text-surface-900 dark:text-surface-100">That intelligence lives on hardware you own.</strong> No cloud dependency. No subscription. No vendor with access to your energy data. The automation logic runs locally, the data stays local, and the system keeps working if the internet goes down.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to see the math for your building?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Run the numbers yourself with our free calculator, or talk to us about what a system would look like for your specific setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calc.exergyheat.com"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors text-base font-semibold"
            >
              Run the Calculator
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              to="/contact?intent=phase-0"
              className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/30 text-white rounded-lg hover:bg-white/20 transition-colors text-base font-semibold"
            >
              Send us your utility bills
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
