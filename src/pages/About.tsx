import { FacingCta } from '../components/FacingCta'
import { Plate } from '../components/Plate'
import { Seo } from '../components/Seo'

export default function About() {
  return (
    <>
      <Seo title="About" description="Engineers who hate waste." />
      <section className="section">
        <div className="frame">
          <div className="about-copy">
            <h1 className="display">
              <span className="line">Engineers who</span>
              <span className="line">hate waste.</span>
            </h1>
            <p className="body-2 about-def">EXERGY (n.) The part of energy that can still do useful work.</p>
            <p className="body-3">
              Buildings throw away useful energy every day. We started this company because that waste is optional.
            </p>
            <p className="body-3">
              We design systems that capture heat a building already makes and put it to work on site.
            </p>
            <p className="about-meta">
              <span className="bar" aria-hidden="true" />
              <span className="label">Founded in Denver / open source first</span>
              <span className="hair" aria-hidden="true" />
            </p>
          </div>
          <div className="about-figs">
            <p className="label">About / Exergy</p>
            <Plate
              slug="about-drafting-table"
              ratio="ratio-16-9"
              sizes="(min-width: 1024px) 46vw, 100vw"
              alt="Copperplate engraving of a drafting table with a building plan and a straightedge."
            />
            <Plate
              slug="about-mechanical-room"
              ratio="ratio-16-9"
              sizes="(min-width: 1024px) 46vw, 100vw"
              alt="Copperplate engraving of a mechanical room with machines, piping, and instrument cabinets."
            />
            <Plate
              slug="about-denver-street"
              ratio="ratio-16-9"
              sizes="(min-width: 1024px) 46vw, 100vw"
              alt="Copperplate engraving of a quiet brick main street with a church steeple and a lamp post."
            />
          </div>
        </div>
      </section>
      <FacingCta />
    </>
  )
}
