import { Button } from '../components/Button'
import { Plate } from '../components/Plate'
import { Seo } from '../components/Seo'
import { BOOKING_URL } from '../lib/site'

const LIST = [
  'What to build, and what to leave out.',
  'Controls that talk to the building.',
  'A way to the people who install it.',
  'A field test at our Denver demo site.',
] as const

export default function Industry() {
  return (
    <>
      <Seo
        title="Industry"
        description="Building something for this industry? This market is new. Now that's a service."
      />
      <figure className="panorama figure">
        <Plate
          slug="partners-factory-floor"
          ratio="ratio-16-9"
          sizes="(min-width: 768px) calc(100vw - 64px), calc(100vw - 32px)"
          priority
          alt="Copperplate engraving of a factory floor with shipping crates, an overhead crane, and an open bay door."
        />
        <figcaption className="fig-chip caption">Fig. 3 — From factory to building</figcaption>
      </figure>
      <section className="section">
        <div className="frame">
          <div className="prose">
            <p className="label">Services / 02 Industry</p>
            <h1 className="display">
              <span className="line">Building something</span>
              <span className="line">for this industry?</span>
            </h1>
            <p className="body-3">This market is new. Most companies don't know what they need yet.</p>
            <p className="body-3">People already ask what we think. Now that's a service.</p>
            <ul className="ruled-list">
              {LIST.map((item) => (
                <li className="body-3" key={item}>{item}</li>
              ))}
            </ul>
            <Button variant="secondary" size="md" href={BOOKING_URL}>Book a call.</Button>
          </div>
        </div>
      </section>
    </>
  )
}
