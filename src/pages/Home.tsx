import { AsciiArt } from '../components/AsciiArt'
import { CtaPair } from '../components/CtaPair'
import { FaqList } from '../components/FaqList'
import { Page, Section } from '../components/Page'
import { Rows } from '../components/Rows'
import { Seo } from '../components/Seo'
import { TaglineReveal } from '../components/TaglineReveal'
import { Track } from '../components/Track'
import { buildingArt, buildingLabel } from '../content/art'
import { faqSchema, homeFaq } from '../content/faq'
import { phases } from '../content/phases'
import { LINKS } from '../lib/site'

const title = 'Exergy | Building energy systems powered by bitcoin miners'
const description =
  'We design building energy systems powered by bitcoin miners, so heat and solar stop going to waste. Phase 0 is a free feasibility check.'

export default function Home() {
  return (
    <Page>
      <Seo title={title} description={description} path="/" jsonLd={faqSchema(homeFaq)} />
      <Section>
        <div className="hero">
          <div className="hero-copy">
            <h1 className="heading-1 hero-title measure">
              <span className="block">Your building wastes useful energy.</span>
              <span className="block">We put it to work.</span>
            </h1>
            <p className="title-1 measure">
              We design building energy systems powered by bitcoin miners, so heat and solar stop going to waste.
            </p>
            <CtaPair />
          </div>
          <AsciiArt lines={buildingArt} label={buildingLabel} />
        </div>
      </Section>

      <Section>
        <div className="stack-16">
          <h2 className="heading-4 measure">The waste is already in the building.</h2>
          <p className="body-3 measure muted">
            Most buildings throw heat away, then pay for more. Solar the building cannot use is sold back for very little.
            And the mining hardware that could do both jobs is usually a closed box, with no clean way into a heating system
            or a solar inverter.
          </p>
        </div>
      </Section>

      <Section reveal={false}>
        <TaglineReveal />
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">What we do</h2>
          <Rows
            items={[
              {
                kicker: '01',
                title: 'Commercial building integrated mining',
                body: 'We design the energy system around bitcoin miners, so heat recovery and solar monetization belong to the building.',
                href: '/commercial',
                prominent: true,
              },
              {
                kicker: '02',
                title: 'Market entry for manufacturers',
                body: 'We help makers of miners, heaters, boilers, and water heaters get into buildings, from the spec to the installer.',
                href: '/partners',
              },
              {
                kicker: '03',
                title: 'Operations',
                body: 'The same eye for wasted energy, turned on a company’s workflows. Find the work that goes nowhere, automate it, and measure what comes back.',
                href: '/operations',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-32">
          <div className="stack-16">
            <p className="mono caption-4 copper">Project path</p>
            <h2 className="heading-4 measure">Five phases, each its own agreement.</h2>
            <p className="body-3 measure muted">Stop after any phase. Phase 0 is free.</p>
          </div>
          <Track
            label="Project phases"
            steps={phases.map((phase) => ({ id: phase.id, title: phase.title, body: phase.summary }))}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-16">
          <h2 className="heading-4 measure">The Denver office.</h2>
          <p className="body-3 measure muted">
            The Denver office is also the demonstration. It is the building we work in, with bitcoin miners integrated into
            the heat the office already needs, so energy the building pays for does a second job. Ideas get tried here
            before we take them to a client.
          </p>
          <p className="body-6 muted">
            <a className="inline-link" href="/contact?intent=pilot">
              A small, application only pilot is open for homes.
            </a>
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <div className="stack-16">
            <p className="mono caption-4 copper">Open by default</p>
            <h2 className="heading-4 measure">The tools are public.</h2>
          </div>
          <Rows
            items={[
              {
                title: 'Calculators',
                body: 'Free, open source calculators for the economics. Anyone can run them.',
                href: LINKS.calculators,
                external: true,
              },
              {
                title: 'Home Assistant',
                body: 'Integrations for running miners as part of a building, published as open source.',
                href: LINKS.github,
                external: true,
              },
              {
                title: '256 Foundation',
                body: 'We line the work up with the 256 Foundation open mining stack.',
                href: LINKS.foundation,
                external: true,
              },
            ]}
          />
        </div>
      </Section>

      <Section id="faq">
        <div className="stack-24">
          <h2 className="heading-4">Questions</h2>
          <FaqList items={homeFaq} />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <div className="stack-16">
            <h2 className="heading-4 measure">Start with the bills.</h2>
            <p className="body-3 measure muted">Phase 0 is free. If the building is a poor fit, we say so and stop.</p>
          </div>
          <CtaPair />
        </div>
      </Section>
    </Page>
  )
}
