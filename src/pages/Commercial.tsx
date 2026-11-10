import { CtaPair } from '../components/Button'
import { FacingCta } from '../components/FacingCta'
import { Plate } from '../components/Plate'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'

const ASKS = [
  ['Is this a crypto gimmick?', 'No. It is engineered into the building you already run. Mining is how the energy earns, not a side bet in the server closet.'],
  ['Is this more to maintain?', 'It works with your existing systems. We do not rip out the boiler or the furnace.'],
  ['What about the risk?', 'The software only runs a path when it pays. If your original heat source is cheaper, the building uses that.'],
] as const

const PHASES = [
  { num: '00', title: 'Feasibility check', body: 'Find out what your building could earn.', free: true },
  { num: '01', title: 'Exergy audit', body: '', free: false },
  { num: '02', title: 'Engineering coordination', body: '', free: false },
  { num: '03', title: 'Procurement + commissioning', body: '', free: false },
  { num: '04', title: 'Monitoring (optional)', body: '', free: false },
] as const

export default function Commercial() {
  return (
    <>
      <Seo
        title="Commercial"
        description="An energy bill that can offset itself. Systems and software that choose what pays: original heat, miner heat, solar, or mining when it is profitable."
      />
      <figure className="panorama figure">
        <Plate
          slug="commercial-panorama-winter"
          ratio="ratio-16-9"
          sizes="(min-width: 768px) calc(100vw - 64px), calc(100vw - 32px)"
          priority
          alt="Copperplate engraving of a brick commercial building in winter, with rooftop solar, snow, and the Front Range."
        />
        <figcaption className="fig-chip caption">Fig. 2 — Commercial building, winter</figcaption>
      </figure>
      <section className="section">
        <div className="frame intro-band">
          <div className="intro-copy">
            <p className="label">Services / 01 Commercial</p>
            <h1 className="display">
              <span className="line">An energy bill that</span>
              <span className="line">can offset itself.</span>
            </h1>
          </div>
          <div className="intro-aside">
            <p className="body-3">Heat and power are two of the costs of running a building. A lot of that spend leaves without earning anything.</p>
            <p className="body-3">Our systems, with our software, add a monetization path so those costs can come back — as heat you would have paid for, and as a better return on the electricity you already buy.</p>
            <CtaPair size="sm" />
          </div>
        </div>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">What it means for your costs.</h2>
              <p className="body-3">Before. You pay to heat the rooms. Extra solar, if you have it, goes to the utility for a weak credit. The rest of the power you buy is just a bill.</p>
              <p className="body-3">After. Same boiler. Same panels. Same meter. A new path that can offset those costs.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">The software in the system.</h2>
              <p className="body-3">Every Exergy energy system includes software that chooses what pays for the building.</p>
              <p className="body-3">Heat with the original source if that is cheaper. Use miner heat to offset heating costs. Use solar when that electricity earns more here than it would back at the grid. Mine when the utility rate itself is profitable.</p>
              <p className="body-3">How often those decisions update is tailored to your building and your business — as often as they call for, up to real time.</p>
              <p className="body-3">If the rooms do not need the heat, it goes outside. Hydronic or forced air.</p>
              <p className="body-3">The same software is part of the system on a home, too. That path is the homeowner pilot.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">Who this is for.</h2>
              <p className="body-3">Offices, warehouses, greenhouses, apartment buildings. Buildings that already pay for heat. Buildings with solar, or solar planned.</p>
              <p className="body-3">New construction or a retrofit. The first conversation is the same.</p>
              <p className="body-3">This is not a fit for every building. If heat is cheap, power is expensive, and there is no solar, it is probably not worth doing. That is what the feasibility check is for.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">Three things owners ask.</h2>
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
              <h2 className="heading-1">A building underway.</h2>
              <p className="body-3">We are working on a mixed-use new building in Colorado. The project is still in design.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section">
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
