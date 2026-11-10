import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Factory, Workflow, Home } from 'lucide-react'
import PageHero from '../components/PageHero'

const services = [
  {
    icon: Building2,
    eyebrow: 'Lead practice',
    title: 'Commercial building-integrated mining',
    body: 'A phased engagement for buildings. Free feasibility check from your utility bills, then an audit, engineering coordination, commissioning, and optional monitoring. Each phase is its own agreement. You can stop after any of them.',
    to: '/services/commercial',
    cta: 'Start with Phase 0',
    lead: true,
  },
  {
    icon: Factory,
    eyebrow: 'For manufacturers',
    title: 'Manufacturer and market-entry advisory',
    body: 'For companies building miners, heaters, boilers, or water heaters that want to enter buildings and homes. Field experience, integration specs, pilots, channels, and a certification path. A paid discovery sprint, then a fixed-fee monthly pilot.',
    to: '/services/advisory',
    cta: 'Talk partnership',
    lead: false,
  },
  {
    icon: Workflow,
    eyebrow: 'For operators',
    title: 'Operations optimization',
    body: 'The same search for useful work, applied to a business instead of a boiler. For HVAC and solar installers, property managers, and mining operators. A paid workflow audit, a build, and an optional retainer.',
    to: '/services/operations',
    cta: 'Book a call',
    lead: false,
  },
  {
    icon: Home,
    eyebrow: 'By application only',
    title: 'Residential pilot program',
    body: 'Alpha systems for owners who want to be early. Not the headline, and not a product you can order. Guided remote anywhere in the US. Done with our crew within about 100 miles of Denver. Premium, custom, scoped per project.',
    to: '/services/residential-pilot',
    cta: 'Apply for the pilot',
    lead: false,
  },
]

const Services = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Services | Exergy</title>
        <meta
          name="description"
          content="Exergy's lead work is commercial building-integrated mining, phased so you can stop after any agreement. Also manufacturer advisory, operations optimization, and an application-only residential pilot."
        />
        <link rel="canonical" href="https://exergyheat.com/services" />
        <meta property="og:title" content="Services | Exergy" />
        <meta
          property="og:description"
          content="Commercial building-integrated mining is the lead practice. Manufacturer advisory, operations optimization, and an application-only residential pilot sit beside it."
        />
        <meta property="og:url" content="https://exergyheat.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="Services | Exergy" />
        <meta
          name="twitter:description"
          content="Commercial building-integrated mining is the lead practice. Four services, each scoped per project."
        />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      <PageHero
        title="Services"
        lede="We find the useful work hiding in your energy and in your operations, and we cut the waste. Commercial consulting leads. Nothing here is a hardware product, and nothing has a published price."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className={`group rounded-2xl bg-white dark:bg-surface-800 p-8 shadow-sm border transition-shadow hover:shadow-lg ${
                service.lead
                  ? 'border-primary-500 lg:col-span-2'
                  : 'border-surface-200 dark:border-surface-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900">
                  <service.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-1">
                    {service.eyebrow}
                  </p>
                  <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-surface-600 dark:text-surface-400 leading-relaxed">{service.body}</p>
                  <span className="inline-flex items-center mt-5 text-primary-600 dark:text-primary-400 font-subheading">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-surface-600 dark:text-surface-400">
          Prefer to try the math yourself first? The calculators and integrations are free on{' '}
          <Link to="/open-tools" className="text-primary-600 dark:text-primary-400 hover:underline">
            Open Tools
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Services
