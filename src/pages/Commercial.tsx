import { CtaPair } from '../components/Button'
import { FacingCta } from '../components/FacingCta'
import { Phases } from '../components/Phases'
import { Plate } from '../components/Plate'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { BOOKING_URL } from '../lib/site'

export default function Commercial() {
  return (
    <>
      <Seo
        title="Commercial"
        description="An energy bill that can offset itself. For building owners and operators."
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
            <p className="body-3 who">For building owners and operators.</p>
            <h1 className="display">
              <span className="line">An energy bill that</span>
              <span className="line">can offset itself.</span>
            </h1>
          </div>
          <div className="intro-aside">
            <p className="body-3">Heat and power leave without earning. We add a path so those costs can come back.</p>
            <CtaPair size="sm" />
          </div>
        </div>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">What it means for your costs.</h2>
              <p className="body-3">Before. You pay to heat the rooms. Extra solar goes to the utility, or sits unused.</p>
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
              <p className="body-3">Every system includes software that chooses what pays: the original heat source, miner heat, solar, or mining when the rate itself is profitable.</p>
              <p className="body-3">How often it decides is tailored to your building, up to real time. Need the heat? It warms the rooms. Don't? It goes outside. Hydronic or forced air.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">Who this is for.</h2>
              <p className="body-3">Offices, warehouses, greenhouses, apartment buildings. Buildings that already pay for heat. Buildings with solar, or solar planned. New construction or a retrofit.</p>
              <p className="body-3">This is not a fit for every building. If heat is cheap, power is expensive, and there is no solar, it is probably not worth doing. That is what the feasibility check is for.</p>
              <p className="body-3">
                <a className="prose-link" href={BOOKING_URL}>Questions? Book a call.</a>
              </p>
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
          <Phases />
        </Reveal>
      </section>
      <FacingCta />
    </>
  )
}
