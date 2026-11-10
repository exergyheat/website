import { AsciiArt } from '../components/AsciiArt'
import { CtaPair } from '../components/CtaPair'
import { FaqList } from '../components/FaqList'
import { Page, Section } from '../components/Page'
import { Rows } from '../components/Rows'
import { Seo } from '../components/Seo'
import { Track } from '../components/Track'
import { boilerArt, boilerLabel } from '../content/art'
import { commercialFaq, faqSchema } from '../content/faq'
import { phases } from '../content/phases'

const title = 'Commercial | Exergy'
const description =
  'Building integrated mining for commercial buildings. Heat recovery, solar monetization, and a phased path from a free feasibility check to commissioning.'

export default function Commercial() {
  return (
    <Page>
      <Seo title={title} description={description} path="/commercial" jsonLd={faqSchema(commercialFaq)} />
      <Section>
        <div className="hero">
          <div className="hero-copy">
            <h1 className="heading-1 hero-title measure">
              <span className="block">Heat and solar, put to work</span>
              <span className="block">in the building.</span>
            </h1>
            <p className="title-1 measure">
              We design building energy systems powered by bitcoin miners. Heat recovery and solar monetization are
              separate. Some buildings only want the solar.
            </p>
            <CtaPair />
          </div>
          <AsciiArt lines={boilerArt} label={boilerLabel} />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">Two value streams.</h2>
          <Rows
            items={[
              {
                title: 'Heat recovery',
                body: 'The miner is sized around the heat the building already needs. In heating season that heat stays in the building instead of being dumped. The tie in is hydronic or forced air, matched to the plant you have.',
              },
              {
                title: 'Solar monetization',
                body: 'Power the building cannot use on site is hashed instead of exported for very little. Some buildings want only this, with no change to the heating plant. That is a complete project.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-16">
          <h2 className="heading-4 measure">Hydronic or forced air.</h2>
          <p className="body-3 measure muted">
            The miner can tie in through a hydronic loop or through forced air. The right path is the heating system you
            already have, or the one the drawings call for. If you do not know which you have, Phase 0 can start there.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-32">
          <div className="stack-16">
            <p className="mono caption-4 copper">Project path</p>
            <h2 className="heading-4 measure">What you hold at each phase.</h2>
            <p className="body-3 measure muted">Each phase is its own agreement. You can stop after any of them. Phase 0 is free.</p>
          </div>
          <Track
            label="Commercial project phases"
            steps={phases.map((phase) => ({ id: phase.id, title: phase.title, body: phase.detail }))}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-16">
          <h2 className="heading-4 measure">How we sit with your team.</h2>
          <p className="body-3 measure muted">
            On a project you will usually have an architect, an MEP engineer, and a general contractor. We do not take
            their seats. We join as the building integrated mining specialist: miner placement, the heat tie in, the
            electrical load, and the controls, written so their drawings can carry it.
          </p>
          <p className="body-3 measure muted">
            Your MEP engineer stays responsible for the building systems. We stay responsible for the mining integration.
            We do not sell the hardware.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">New construction and retrofit.</h2>
          <Rows
            items={[
              {
                title: 'New construction',
                body: 'The miners, the heat, and the solar are in the drawings from the start, coordinated with the architect and the engineer before the walls close.',
              },
              {
                title: 'Retrofit',
                body: 'We start from the heating system and the electrical service that are already there, and we say so when the building is a poor fit.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4">Questions</h2>
          <FaqList items={commercialFaq} />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <div className="stack-16">
            <h2 className="heading-4 measure">Bring the bills, or talk for 15 minutes.</h2>
            <p className="body-3 measure muted">Phase 0 is free. A poor fit ends there, in writing.</p>
          </div>
          <CtaPair />
        </div>
      </Section>
    </Page>
  )
}
