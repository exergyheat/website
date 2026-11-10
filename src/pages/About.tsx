import { FacingCta } from '../components/FacingCta'
import { Plate } from '../components/Plate'
import { Seo } from '../components/Seo'

export default function About() {
  return (
    <>
      <Seo title="About" description="Waste is optional. Denver engineers, open source first." />
      <section className="section">
        <div className="frame">
          <div className="about-copy">
            <h1 className="display">
              <span className="line">Waste is</span>
              <span className="line">optional.</span>
            </h1>
            <p className="body-2 about-def">EXERGY (n.) The part of energy that can still do useful work.</p>
            <p className="body-3">
              Buildings throw away useful energy every day. Heat goes out a stack. Surplus power goes back to the utility for pennies. We started this company because that waste is optional.
            </p>
            <p className="body-3">
              Our systems, with our software, add a monetization path so a building&apos;s energy can earn and offset its own costs. We publish the open tools we can, and we work as engineers beside the people who already take care of the building.
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
