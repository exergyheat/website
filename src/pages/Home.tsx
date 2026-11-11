import { Link } from 'react-router-dom'
import { CtaPair } from '../components/Button'
import { FacingCta } from '../components/FacingCta'
import { Phases } from '../components/Phases'
import { Plate } from '../components/Plate'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'

const SERVICES = [
  {
    num: '01',
    title: 'Commercial buildings',
    body: 'An energy bill that can offset itself.',
    href: '/commercial',
    link: 'See commercial',
    lead: true,
  },
  {
    num: '02',
    title: 'Industry',
    body: 'Building something for this industry.',
    href: '/industry',
    link: 'See industry',
    lead: false,
  },
  {
    num: '03',
    title: 'Operations',
    body: 'AI and operations consulting. We help optimize how the business itself runs.',
    href: '/operations',
    link: 'See operations',
    lead: false,
  },
] as const

const ROUTES = [
  { num: '01', title: 'Commercial', body: 'For building owners and operators.', href: '/commercial', link: 'See commercial' },
  { num: '02', title: 'Homes', body: 'For homeowners who want to mine at home.', href: '/homes', link: 'See homes' },
  { num: '03', title: 'Industry', body: 'For companies building in this space.', href: '/industry', link: 'See industry' },
  { num: '04', title: 'Operations', body: 'For businesses that want to run better.', href: '/operations', link: 'See operations' },
  { num: '05', title: 'Open Tools', body: "It doesn't depend on us.", href: '/open-tools', link: 'See open tools' },
] as const

const STATUS = [
  ['Heat recovery', 'Active'],
  ['Solar monetization', 'Active'],
  ['Wasted energy', '0'],
] as const

function Verse({ lines }: { lines: readonly string[] }) {
  return (
    <p className="body-3">
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </p>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title="Exergy"
        description="Your building wastes useful energy. We put it to work. Earn on site, and keep 100% of the control."
      />
      <section className="hero" id="hero">
        <div className="hero-main">
          <div className="hero-copy">
            <div className="meta-row label">
              <span>Field report 001</span>
              <span className="meta-sep" aria-hidden="true" />
              <span>Denver, CO</span>
              <span className="meta-sep" aria-hidden="true" />
              <span>Est. 2025</span>
            </div>
            <h1 className="display hero-title">
              <span className="line">Your building wastes</span>
              <span className="line">useful energy.</span>
              <span className="line">We put it to work.</span>
            </h1>
            <div className="status-list">
              {STATUS.map(([name, value]) => (
                <p className="status status-row" key={name}>
                  <span className="name">{name}</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="value">{value}</span>
                </p>
              ))}
            </div>
            <CtaPair size="md" className="hero-ctas" />
          </div>
          <div className="hero-fig">
            <Plate
              className="hero-plate"
              slug="hero-building-denver"
              ratio="ratio-4-3"
              sizes="(min-width: 1100px) 45vw, 100vw"
              priority
              alt="Copperplate engraving of a two-story brick commercial building with rooftop solar, on a quiet street with the Front Range behind it."
            />
          </div>
        </div>
        <div className="hero-bar">
          <p className="label">Exergy / building-integrated mining / hydronic + forced air / status: open</p>
        </div>
      </section>

      <section className="section" id="earn">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">You've been paid for your energy before.</h2>
              <p className="body-3">On someone else's terms.</p>
              <p className="body-3">We add a way to earn on site.</p>
              <p className="body-3">You keep 100% of the control.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="services">
        <Reveal>
          <div className="frame">
            <div className="services-head">
              <p className="label">Services / 3</p>
              <h2 className="heading-1">What we do</h2>
            </div>
            <div className="index">
              {SERVICES.map((row) => (
                <article className={row.lead ? 'index-row lead' : 'index-row'} key={row.num}>
                  <p className="index-num">{row.num}</p>
                  <div className="index-copy">
                    <h3 className={row.lead ? 'heading-2' : 'heading-3'}>
                      <Link to={row.href}>{row.title}</Link>
                    </h3>
                    <p className="body-3">{row.body}</p>
                  </div>
                  <Link className="see" to={row.href}>
                    {row.link} <span aria-hidden="true">→</span>
                  </Link>
                  {row.lead && (
                    <div className="index-fig">
                      <Plate
                        slug="services-boiler"
                        ratio="ratio-3-2"
                        sizes="(min-width: 1024px) 24vw, 80vw"
                        alt="Copperplate engraving of a riveted boiler with pipes, valves, and a side tank."
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="denver">
        <Reveal>
          <div className="frame">
            <div className="story-copy">
              <p className="label story-kicker">Field report 002 / Denver office</p>
              <blockquote className="pull">
                <span className="bar" aria-hidden="true" />
                <h2 className="display">
                  <span className="line">Our office is</span>
                  <span className="line">our demo site.</span>
                </h2>
              </blockquote>
              <Verse lines={['The boiler and the furnace', 'both run on hashrate heat.']} />
              <Verse lines={['Like a hybrid choosing gas or battery,', 'the building decides in real time', 'the cheapest way to run itself.']} />
              <Verse lines={['Heat, sun, grid, mining.', 'Lowest operating cost, every second.']} />
            </div>
            <figure className="figure story-fig">
              <Plate
                slug="story-mechanical-room"
                ratio="ratio-4-3"
                sizes="(min-width: 1024px) 46vw, 100vw"
                alt="Copperplate engraving of a brick mechanical room with a central machine, pipes rising to the ceiling, and a factory window."
              />
              <figcaption className="caption">Fig. 1 — Mechanical room, Denver</figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      <section className="section" id="how">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">How it works.</h2>
              <Verse lines={['Computing that earns.']} />
              <Verse lines={['Bitcoin mining turns electricity into revenue,', 'and every watt comes back out as heat.']} />
              <Verse lines={['Need the heat? It warms the building.', "Don't? It goes outside.", 'Either way, the energy pays.']} />
              <p className="body-3 quiet">Engineers in Denver. Open source first.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="router">
        <Reveal>
          <div className="frame">
            <div className="services-head">
              <h2 className="heading-1">Which one are you?</h2>
            </div>
            <div className="index">
              {ROUTES.map((row) => (
                <article className="index-row" key={row.num}>
                  <p className="index-num">{row.num}</p>
                  <div className="index-copy">
                    <h3 className="heading-3">
                      <Link to={row.href}>{row.title}</Link>
                    </h3>
                    <p className="body-3">{row.body}</p>
                  </div>
                  <Link className="see" to={row.href}>
                    {row.link} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="phases">
        <Reveal>
          <Phases plate />
        </Reveal>
      </section>

      <FacingCta />
    </>
  )
}
