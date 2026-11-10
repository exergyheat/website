import { Link } from 'react-router-dom'
import { CtaPair } from '../components/Button'
import { FacingCta } from '../components/FacingCta'
import { Plate } from '../components/Plate'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'

const SERVICES = [
  {
    num: '01',
    title: 'Commercial buildings',
    body: 'We take the heat your building already has to make and put it to work, then send that heat back into the rooms that need it.',
    href: '/commercial',
    link: 'See commercial',
    lead: true,
  },
  {
    num: '02',
    title: 'Manufacturers + partners',
    body: 'We help hardware makers get their equipment into buildings that need heat.',
    href: '/partners',
    link: 'See partners',
    lead: false,
  },
  {
    num: '03',
    title: 'Operations',
    body: 'We help you run the system after it is in: controls, monitoring, and the day to day.',
    href: '/operations',
    link: 'See operations',
    lead: false,
  },
] as const

const PHASES = [
  { num: '00', title: 'Feasibility check', body: 'We look at the building and tell you whether the work makes sense.', free: true },
  { num: '01', title: 'Exergy audit', body: 'We map how the building makes and uses heat.', free: false },
  { num: '02', title: 'Engineering coordination', body: 'We line the plan up with the people who already work on the building.', free: false },
  { num: '03', title: 'Procurement + commissioning', body: 'We help get the system in and turned on.', free: false },
  { num: '04', title: 'Monitoring (optional)', body: 'We stay on for tracking and tuning if you want that.', free: false },
] as const

const STATUS = [
  ['Heat recovery', 'Active'],
  ['Solar monetization', 'Active'],
  ['Wasted energy', '0'],
] as const

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Your building wastes useful energy. We put it to work."
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
              slug="hero-building-denver"
              ratio="ratio-4-3"
              sizes="(min-width: 1100px) 46vw, 100vw"
              priority
              alt="Copperplate engraving of a two-story brick commercial building with rooftop solar, on a quiet street with the Front Range behind it."
            />
          </div>
        </div>
        <div className="hero-bar">
          <p className="label">Exergy / building-integrated mining / hydronic + forced air / status: open</p>
        </div>
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

      <section className="section" id="story">
        <Reveal>
          <div className="frame">
            <div className="story-copy">
              <p className="label story-kicker">Field report 002 / Denver office</p>
              <h2 className="display">
                <span className="line">An office that heats</span>
                <span className="line">itself with the work</span>
                <span className="line">it already does.</span>
              </h2>
              <p className="body-3">
                Our Denver office is a working building, not a showroom. The same machines that do useful work also heat the rooms.
              </p>
              <p className="body-3">
                The mechanical room stays in the background. Heat that would have been thrown away is the heat we use.
              </p>
              <blockquote className="pull">
                <span className="bar" aria-hidden="true" />
                <p className="heading-3">We heat the office with the work already happening inside it.</p>
              </blockquote>
            </div>
            <figure className="figure story-fig">
              <Plate
                slug="story-mechanical-room"
                ratio="ratio-4-3"
                sizes="(min-width: 1024px) 54vw, 100vw"
                alt="Copperplate engraving of a brick mechanical room with a central machine, pipes rising to the ceiling, and a factory window."
              />
              <figcaption className="caption">Fig. 1 — Mechanical room, Denver</figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      <section className="section" id="phases">
        <Reveal>
          <div className="frame">
            <h2 className="heading-1 phases-title">How a project works</h2>
            <div className="blueprint">
              <Plate
                slug="phases-blueprint"
                plain
                ratio="ratio-3-4"
                sizes="(min-width: 1200px) 30vw, 100vw"
                alt="Blueprint line drawing of a cabinet, a heat exchanger, and an air handler connected by supply and return pipes."
              />
            </div>
            <div className="phases">
              {PHASES.map((phase) => (
                <article className="phase" key={phase.num}>
                  <p className="index-num">{phase.num}</p>
                  <h3 className="heading-4">{phase.title}</h3>
                  <p className="body-3">{phase.body}</p>
                  {phase.free ? <span className="badge button-sm">Free</span> : <span />}
                </article>
              ))}
            </div>
            <p className="label phase-foot">Each phase is its own agreement / stop after any phase</p>
          </div>
        </Reveal>
      </section>

      <FacingCta />
    </>
  )
}
