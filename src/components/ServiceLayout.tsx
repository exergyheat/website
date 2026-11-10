import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from './PageHero'

export interface ServiceStep {
  title: string
  body: string
}

const ServiceLayout = ({
  title,
  lede,
  description,
  path,
  intro,
  steps,
  ctaLabel,
  ctaTo,
  children,
}: {
  title: string
  lede: string
  description: string
  path: string
  intro: string
  steps: ServiceStep[]
  ctaLabel: string
  ctaTo: string
  children?: ReactNode
}) => {
  const url = `https://exergyheat.com${path}`

  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>{title} | Exergy</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${title} | Exergy`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content={`${title} | Exergy`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      <PageHero eyebrow="Services" title={title} lede={lede} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-surface-700 dark:text-surface-300 leading-relaxed">{intro}</p>

        {children}

        <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mt-12 mb-6">
          How it works
        </h2>
        <ol className="space-y-5">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-surface-900 dark:text-surface-100">{step.title}</p>
                <p className="mt-1 text-surface-600 dark:text-surface-400 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Link
            to={ctaTo}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-base font-subheading"
          >
            {ctaLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-surface-500 dark:text-surface-400">
            Scoped per project. Exergy does not publish a price list, and we do not sell hardware.
          </p>
          <p className="mt-3 text-sm">
            <Link to="/services" className="text-primary-600 dark:text-primary-400 hover:underline">
              All services
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceLayout
