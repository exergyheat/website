import { Seo } from '../components/Seo'
import { BOOKING_URL, LINKS } from '../lib/site'

export default function OpenTools() {
  return (
    <>
      <Seo
        title="Open Tools"
        description="It doesn't depend on us. Open source tools you can use with us, or without us."
      />
      <section className="section">
        <div className="frame">
          <div className="prose">
            <p className="label">Open tools</p>
            <h1 className="display">
              <span className="line">It doesn't</span>
              <span className="line">depend on us.</span>
            </h1>
            <p className="body-3">Open source. Use it with us, or without us.</p>
            <p className="body-3">Does this make sense for me?</p>
            <p className="body-3">
              <a className="prose-link" href={LINKS.calculators} rel="noopener noreferrer">The feasibility calculator.</a>
            </p>
            <p className="body-3">A miner that acts like a smart home device. Home Assistant integrations that work with your thermostat, solar inverter, energy monitor and utility rates.</p>
            <p className="body-3">For commercial buildings: BACnet. Coming soon.</p>
            <p className="body-3">
              Savvy enough to go it alone?{' '}
              <a className="prose-link" href={LINKS.github} rel="noopener noreferrer">Start on GitHub.</a>
            </p>
            <p className="body-3">
              Want a hand?{' '}
              <a className="prose-link" href={BOOKING_URL} rel="noopener noreferrer">Book a call.</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
