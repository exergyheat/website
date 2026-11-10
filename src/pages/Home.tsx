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
    body: 'An energy bill that can offset itself.',
    href: '/commercial',
    link: 'See commercial',
    lead: true,
  },
  {
    num: '02',
    title: 'Manufacturers + partners',
    body: 'A new reason buildings want your machines.',
    href: '/partners',
    link: 'See partners',
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

const PHASES = [
  { num: '00', title: 'Feasibility check', body: 'Find out what your building could earn.', free: true },
  { num: '01', title: 'Exergy audit', body: '', free: false },
  { num: '02', title: 'Engineering coordination', body: '', free: false },
  { num: '03', title: 'Procurement + commissioning', body: '', free: false },
  { num: '04', title: 'Monitoring (optional)', body: '', free: false },
] as const

const STATUS = [
  ['Heat recovery', 'Active'],
  ['Solar monetization', 'Active'],
  ['Wasted energy', '0'],
] as const

const ASKS = [
  ['Is this a crypto gimmick?', 'No. It is engineered equipment in a mechanical room. Mining is how the energy earns. It is not a billboard for bitcoin.'],
  ['Is this more stuff to maintain?', 'It works with the systems you already have. The original boiler or furnace stays.'],
  ['What about the risk?', 'The energy software only runs a path when it pays. If heating with your original source is cheaper, that is what the building does.'],
] as const

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Your building wastes useful energy. We put it to work. A monetization path so your building can help pay for its own energy."
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

      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">From a cost to an asset.</h2>
              <p className="body-3">A building&apos;s energy bill is usually just a cost. Heat goes out. Extra power goes back to the utility, or sits there. The meter only runs one way.</p>
              <p className="body-3">Our systems, with our software, add a monetization path. The same bill can earn, and offset itself. The building you already have. A new way for its energy to pay.</p>
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
              <p className="body-3">Before. The boiler heats the rooms. The panels send extra power back to the utility for a weak credit, or go unused. The meter is a bill.</p>
              <p className="body-3">After. Same boiler. Same panels. Same meter. We add an energy system and the software that runs it. The energy the building already pays for can earn, and offset the cost.</p>
              <p className="body-3">Our Denver office is a working building, not a showroom. The machines in the mechanical room heat the rooms upstairs. The building has solar, and when there is extra power the system uses it on site.</p>
            </div>
            <div className="story-figs">
              <figure className="figure">
                <Plate
                  slug="story-mechanical-room"
                  ratio="ratio-4-3"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  alt="Copperplate engraving of a brick mechanical room with a central machine, pipes rising to the ceiling, and a factory window."
                />
                <figcaption className="caption">Fig. 1 — Mechanical room, Denver</figcaption>
              </figure>
              <figure className="figure">
                <Plate
                  slug="phases-blueprint"
                  plain
                  ratio="ratio-3-4"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  alt="Blueprint line drawing of a cabinet, a heat exchanger, and an air handler connected by supply and return pipes."
                />
                <figcaption className="caption">Fig. 5 — The path we add</figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">Three things people ask.</h2>
              {ASKS.map(([question, answer]) => (
                <div className="qa" key={question}>
                  <p className="body-2">{question}</p>
                  <p className="body-3">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">Why believe a word of this.</h2>
              <p className="body-3">We are engineers in Denver. Open source first.</p>
              <p className="body-3">A mixed-use building in Colorado is underway.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="phases">
        <Reveal>
          <div className="frame">
            <h2 className="heading-1 phases-title">How it starts.</h2>
            <div className="phases phases-full">
              {PHASES.map((phase) => (
                <article className="phase" key={phase.num}>
                  <p className="index-num">{phase.num}</p>
                  <h3 className="heading-4">{phase.title}</h3>
                  {phase.body ? <p className="body-3">{phase.body}</p> : <span />}
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
