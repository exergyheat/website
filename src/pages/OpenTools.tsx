import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Calculator, BookOpen, Github, MessagesSquare, CalendarDays, Cpu } from 'lucide-react'
import PageHero from '../components/PageHero'

const platforms = [
  'Braiins OS',
  'LuxOS',
  'Whatsminer',
  'BitAxe',
  'Ocean',
  'Public Pool',
  'DATUM',
]

const tools = [
  {
    icon: Calculator,
    title: 'Hashrate Heating calculator',
    body: 'A free model of heat load against bitcoin-miner runtime. Use it before you ask us for a feasibility check.',
    href: 'https://calc.exergyheat.com',
    external: true,
  },
  {
    icon: Calculator,
    title: 'Solar Monetization calculator',
    body: 'A free look at surplus solar routed through hashing instead of exported for a thin credit. Heat recovery and solar monetization stay separate questions, on purpose.',
    href: 'https://calc.exergyheat.com',
    external: true,
  },
  {
    icon: Cpu,
    title: 'Home Assistant integrations',
    body: 'Open-source integrations, installable through HACS, that let a bitcoin miner follow a building: heat calls, surplus solar, and pool payouts. Supported targets include Braiins OS, LuxOS, Whatsminer, BitAxe, Ocean, Public Pool, and DATUM.',
    href: 'https://github.com/exergyheat',
    external: true,
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    body: 'How the integrations are installed and how a miner is treated as building equipment rather than a data-hall machine.',
    href: 'https://docs.exergyheat.com',
    external: true,
  },
  {
    icon: Github,
    title: 'GitHub',
    body: 'The source. Read it, fork it, file an issue. Open-source first is the architecture, not a slogan.',
    href: 'https://github.com/exergyheat',
    external: true,
  },
  {
    icon: CalendarDays,
    title: 'Weekly office hours',
    body: 'Wednesdays at 10am Mountain Time. Free, public, and the right place to ask how an integration behaves before you open a project.',
    href: 'https://meet.jit.si/ExergyHomeAssistant',
    external: true,
  },
  {
    icon: MessagesSquare,
    title: 'Support forum',
    body: 'Community help for the open tools. Project scoping still starts with Phase 0 or a pilot application, not a forum thread.',
    href: 'https://support.exergyheat.com/',
    external: true,
  },
]

const ToolLink = ({
  href,
  external,
  children,
  className,
}: {
  href: string
  external?: boolean
  children: ReactNode
  className: string
}) =>
  external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  )

const OpenTools = () => {
  return (
    <div className="bg-surface-50 dark:bg-surface-900">
      <Helmet>
        <title>Open Tools | Exergy</title>
        <meta
          name="description"
          content="Free, open-source tools from Exergy: hashrate heating and solar monetization calculators, Home Assistant integrations, docs, GitHub, office hours, and a support forum."
        />
        <link rel="canonical" href="https://exergyheat.com/open-tools" />
        <meta property="og:title" content="Open Tools | Exergy" />
        <meta
          property="og:description"
          content="Free calculators, Home Assistant integrations, docs, and office hours. Exergy does not sell hardware."
        />
        <meta property="og:url" content="https://exergyheat.com/open-tools" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://exergyheat.com/og-image.jpg" />
        <meta name="twitter:title" content="Open Tools | Exergy" />
        <meta
          name="twitter:description"
          content="Free calculators, Home Assistant integrations, docs, and office hours."
        />
        <meta name="twitter:image" content="https://exergyheat.com/og-image.jpg" />
      </Helmet>

      <PageHero
        title="Open Tools"
        lede="Free, and open source. Use them to study a building or to run a miner you already own. When the building is real, start Phase 0 or apply for the residential pilot — these tools are not a product line."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <article
              key={tool.title}
              className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900">
                  <tool.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-xl font-bold text-surface-900 dark:text-surface-100">{tool.title}</h2>
              </div>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed flex-1">{tool.body}</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <ToolLink
                  href={tool.href}
                  external={tool.external}
                  className="inline-flex items-center justify-center px-4 py-2 border border-surface-300 dark:border-surface-600 rounded-lg text-sm font-subheading text-surface-800 dark:text-surface-100 hover:bg-surface-50 dark:hover:bg-surface-700"
                >
                  Open
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ToolLink>
              </div>
              <p className="mt-4 text-sm text-surface-500 dark:text-surface-400">
                Using this on a commercial building?{' '}
                <Link to="/contact?intent=phase-0" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Start Phase 0
                </Link>
                . Using it on a house?{' '}
                <Link to="/contact?intent=pilot" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Apply for the pilot
                </Link>
                .
              </p>
            </article>
          ))}
        </div>

        <section className="bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 p-8">
          <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-3">
            Integrations, not a hardware catalog
          </h2>
          <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-4">
            The Home Assistant work speaks to miners that already exist. Current targets:
          </p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {platforms.map((name) => (
              <li
                key={name}
                className="text-sm px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
            On residential pilot systems we install an open-source control hub to tie the miner, the thermostat, and the monitoring together. That hub is how a pilot is run. It is not for sale, and this page is not a store.
          </p>
        </section>

        <section className="bg-surface-900 text-surface-100 rounded-2xl p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-3">
            Open-source first
          </p>
          <h2 className="text-3xl font-bold mb-4">Aligned with the 256 Foundation stack</h2>
          <div className="space-y-4 text-surface-300 leading-relaxed max-w-3xl">
            <p>
              Mining hardware, firmware, and pool software are still mostly closed. That is why a miner does not walk into a building the way a boiler or an inverter does. Exergy does not fix that by selling a private box. We publish the control layer, and we line up behind the open mining stack the 256 Foundation funds.
            </p>
            <p>
              That stack is four projects: Ember One, an open hashboard reference; Mujina, open firmware; Libre Board, an open control board aimed at heating and Home Assistant; and Hydrapool, open pool software. Tyler Stevens, Exergy&apos;s founder and CEO, is president of the 256 Foundation board. The foundation is a nonprofit. Exergy is the company that puts the idea into buildings.
            </p>
            <p>
              Read the longer version of why closed hardware is hard to integrate, then come back here and use the tools.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/learn/why-mining-hardware-is-closed"
              className="inline-flex items-center px-5 py-3 bg-white text-primary-700 rounded-lg font-subheading hover:bg-surface-100"
            >
              Why the hardware is closed
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://256foundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 border border-white/40 rounded-lg font-subheading hover:bg-white/10"
            >
              256 Foundation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/newsroom/tyler-stevens-256-foundation-board"
              className="inline-flex items-center px-5 py-3 border border-white/40 rounded-lg font-subheading hover:bg-white/10"
            >
              Board announcement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OpenTools
