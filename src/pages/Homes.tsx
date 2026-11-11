import { Button } from '../components/Button'
import { Seo } from '../components/Seo'

export default function Homes() {
  return (
    <>
      <Seo
        title="Homes"
        description="For homeowners who want to mine at home. An alpha pilot, application only."
      />
      <section className="section">
        <div className="frame">
          <div className="prose">
            <p className="label">Pilot / Homes</p>
            <h1 className="display">
              <span className="line">Heard about us</span>
              <span className="line">on a podcast?</span>
            </h1>
            <p className="body-3">For homeowners who want to mine at home, and help a new technology grow.</p>
            <p className="body-3">We focus on commercial buildings now. Homes are an alpha pilot.</p>
            <p className="body-3">Boilers and furnaces, not space heaters. Few products are ready for a house. Power is different. Control is different.</p>
            <p className="body-3">Application only. Within about 100 miles of Denver. We work with your tradespeople, and we're there on install day. Control runs on Home Assistant and our software.</p>
            <p className="body-3">Know what you're signing up for?</p>
            <Button variant="primary" size="md" to="/homes/apply">Apply.</Button>
          </div>
        </div>
      </section>
    </>
  )
}
