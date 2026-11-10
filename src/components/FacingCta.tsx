import { BOOKING_URL } from '../lib/site'
import { Button } from './Button'
import { Plate } from './Plate'
import { Reveal } from './Reveal'

export function FacingCta() {
  return (
    <section className="section cta-block" aria-label="Next step">
      <Reveal>
        <div className="frame cta-grid">
          <div className="cta-col">
            <p className="label option-label">Option A</p>
            <h2 className="display">
              <span className="line">Get a free</span>
              <span className="line">feasibility check.</span>
            </h2>
            <p className="body-3">Send us your building basics. We tell you if it is a fit.</p>
            <Button variant="primary" size="md" to="/contact?intent=feasibility">
              Start the check
            </Button>
          </div>
          <div className="cta-col">
            <p className="label option-label">Option B</p>
            <h2 className="display">
              <span className="line">Book a</span>
              <span className="line">15 min call.</span>
            </h2>
            <p className="body-3">Talk it through with an engineer. No pitch deck.</p>
            <Button variant="ink" size="md" href={BOOKING_URL}>
              Pick a time
            </Button>
          </div>
        </div>
        <div className="band-art">
          <Plate
            slug="cta-rooftops"
            plain
            ratio="ratio-21-8"
            sizes="100vw"
            alt="Copperplate engraving of brick rooftops with solar arrays and a city beyond, under an open sky."
          />
        </div>
      </Reveal>
    </section>
  )
}
