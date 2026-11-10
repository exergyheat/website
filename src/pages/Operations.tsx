import { CtaPair } from '../components/CtaPair'
import { Page, Section } from '../components/Page'
import { Rows } from '../components/Rows'
import { Seo } from '../components/Seo'
import { Track } from '../components/Track'

const title = 'Operations | Exergy'
const description =
  'Find wasted work in an energy business, automate it, and measure the return. A paid workflow audit, a build, and an optional retainer.'

export default function Operations() {
  return (
    <Page>
      <Seo title={title} description={description} path="/operations" />
      <Section>
        <div className="hero-copy">
          <h1 className="heading-1 hero-title measure">
            <span className="block">Find the work</span>
            <span className="block">that goes to waste.</span>
          </h1>
          <p className="title-1 measure">
            The same test we use on energy, applied to how a company works. For HVAC and solar installers, property
            managers, and mining operators.
          </p>
          <CtaPair />
        </div>
      </Section>

      <Section>
        <div className="stack-16">
          <h2 className="heading-4 measure">Useful work, and the rest.</h2>
          <p className="body-3 measure muted">
            Exergy is the part of energy that can still do work. A workflow has the same split. We look for the tasks
            that go nowhere, automate the ones that should not be done by hand, and measure what comes back. No rate
            card. The audit is paid, and it is scoped to your shop.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">Who it is for.</h2>
          <Rows
            items={[
              {
                title: 'HVAC and solar installers',
                body: 'The work between the sale, the truck, and the closeout. Proposals, job files, and the handoff that keeps getting retyped.',
              },
              {
                title: 'Property managers',
                body: 'The repeating work across a set of buildings: requests, vendor loops, and the report nobody has time to write.',
              },
              {
                title: 'Mining operators',
                body: 'The operating work around the machines: alerts, tickets, parts, and the record of what actually happened.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-32">
          <div className="stack-16">
            <h2 className="heading-4 measure">Three steps. Stop when you want.</h2>
            <p className="body-3 measure muted">Each step is its own agreement. You can stop after the audit, or after the build.</p>
          </div>
          <Track
            label="Operations steps"
            kicker="Step"
            steps={[
              {
                id: '1',
                title: 'Workflow audit',
                body: 'Paid. We sit with the way the work actually moves, name what is wasted, and tell you what is worth building.',
              },
              {
                id: '2',
                title: 'Build',
                body: 'We make the piece the audit pointed at. Software, a checklist, or a connection between tools you already use.',
              },
              {
                id: '3',
                title: 'Retainer',
                body: 'Optional. We keep measuring and keep adjusting. Leave it off and the earlier steps still stand.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">Tell us where the work piles up.</h2>
          <CtaPair />
        </div>
      </Section>
    </Page>
  )
}
