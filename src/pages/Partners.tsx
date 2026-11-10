import { CtaPair } from '../components/Button'
import { FacingCta } from '../components/FacingCta'
import { Plate } from '../components/Plate'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'

export default function Partners() {
  return (
    <>
      <Seo
        title="Partners"
        description="A new reason buildings want your machines. We help get them into mechanical rooms and in front of the trades."
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
        <div className="frame intro-band">
          <div className="intro-copy">
            <p className="label">Services / 02 Partners</p>
            <h1 className="display">
              <span className="line">A new reason buildings</span>
              <span className="line">want your machines.</span>
            </h1>
          </div>
          <div className="intro-aside">
            <p className="body-3">Buildings did not have a reason to put this kind of hardware in a mechanical room, unless they were already in the mining business. Now they do. The same machines can help an owner offset utility costs.</p>
            <p className="body-3">That is a new reason buildings want your machines. We help you get them there — in front of the owners, engineers, and trades who will actually install the equipment.</p>
            <CtaPair size="sm" />
          </div>
        </div>
      </section>
      <section className="section">
        <Reveal>
          <div className="frame">
            <div className="prose">
              <h2 className="heading-1">What we help with.</h2>
              <p className="body-3">Getting your machines into a mechanical room, not only onto a spec sheet. Talking to the people who will put them there.</p>
              <p className="body-3">We do not sell a heater under our own name. We do not need to name anyone else&apos;s.</p>
            </div>
          </div>
        </Reveal>
      </section>
      <FacingCta />
    </>
  )
}
