import { CtaPair } from '../components/CtaPair'
import { Page, Section } from '../components/Page'
import { Rows } from '../components/Rows'
import { Seo } from '../components/Seo'
import { Track } from '../components/Track'

const title = 'Partners | Exergy'
const description =
  'For manufacturers of miners, heaters, boilers, and water heaters entering buildings. A paid discovery sprint, then a monthly pilot.'

export default function Partners() {
  return (
    <Page>
      <Seo title={title} description={description} path="/partners" />
      <Section>
        <div className="hero-copy">
          <h1 className="heading-1 hero-title measure">
            <span className="block">A way into buildings</span>
            <span className="block">for energy hardware.</span>
          </h1>
          <p className="title-1 measure">
            For manufacturers of miners, heaters, boilers, and water heaters. The building market is hard to enter with a
            closed box and a data sheet. We already work inside it.
          </p>
          <CtaPair />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">Why the market is hard.</h2>
          <Rows
            items={[
              {
                title: 'Closed hardware',
                body: 'Most miners, and a lot of heating equipment, do not talk to a thermostat, a furnace, or a solar inverter. The building cannot treat them as part of the energy system.',
              },
              {
                title: 'Codes and certification',
                body: 'A product that is fine on a warehouse floor can still be the wrong shape, listing, or clearance for a mechanical room.',
              },
              {
                title: 'Installers',
                body: 'A contractor will not carry equipment they cannot specify, service, and stand behind.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">What we bring.</h2>
          <Rows
            items={[
              {
                title: 'Field integration',
                body: 'Experience putting miners into real heating systems, hydronic and forced air, and saying when a product will not fit.',
              },
              {
                title: 'Integration specs',
                body: 'The interface your hardware needs so an engineer can put it on the drawings.',
              },
              {
                title: 'Pilot installs and field testing',
                body: 'A small set of buildings, watched closely, before anyone talks about a wider release.',
              },
              {
                title: 'Installer and channel setup',
                body: 'The people who will actually put the product in, and a path they can repeat.',
              },
              {
                title: 'Product feedback',
                body: 'What failed in the field, in plain language, back to your team.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-32">
          <div className="stack-16">
            <h2 className="heading-4 measure">How an engagement works.</h2>
            {/* TODO(tyler): monthly pilot program details (scope and cadence). Do not publish fees. */}
            <p className="body-3 measure muted">
              We start with a paid discovery sprint. If the fit is real, the work continues as a monthly pilot. The shape
              of that pilot is set in the sprint, not on this page.
            </p>
          </div>
          <Track
            label="Partnership steps"
            kicker="Step"
            steps={[
              {
                id: '1',
                title: 'Discovery sprint',
                body: 'Paid. We learn the product, the buyer, and the buildings that fit, and we say so if the fit is poor.',
              },
              {
                id: '2',
                title: 'Monthly pilot',
                body: 'Field installs and a standing line of feedback. Scope and cadence are agreed in the sprint.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">Tell us what you make.</h2>
          <CtaPair />
        </div>
      </Section>
    </Page>
  )
}
