import { CtaPair } from '../components/CtaPair'
import { Page, Section } from '../components/Page'
import { Rows } from '../components/Rows'
import { Seo } from '../components/Seo'
import { LINKS } from '../lib/site'

const title = 'About | Exergy'
const description = 'Why the name Exergy, who works here, and how the work stays lined up with an open mining stack.'

// TODO(tyler): confirm titles for Dylan Seib and Mike Clear. Shown as Cofounder until then.
const team = [
  { name: 'Tyler Stevens', role: 'Founder, CEO' },
  { name: 'Dylan Seib', role: 'Cofounder' },
  { name: 'Mike Clear', role: 'Cofounder' },
]

export default function About() {
  return (
    <Page>
      <Seo title={title} description={description} path="/about" />
      <Section>
        <div className="stack-24 measure">
          <h1 className="heading-1 hero-title">
            <span className="block">Exergy is the useful</span>
            <span className="block">part of energy.</span>
          </h1>
          <p className="title-1">The name is the brief. In a building, and in a business.</p>
        </div>
      </Section>

      <Section>
        <div className="stack-16 measure">
          <p className="body-3">
            In thermodynamics, exergy is the share of a quantity of energy that can still do work. The rest is energy
            that is there and still cannot be put to use.
          </p>
          <p className="body-3">
            A building pays for a large amount of energy. Some of it heats the rooms. Some of it leaves as dumped heat,
            or as solar the building cannot use and sells for very little. That unused share is what we design for.
          </p>
          <p className="body-3">
            We design building energy systems powered by bitcoin miners. The miner is not a product we sell. It is a way
            to turn power the building already pays for into heat the building can use, and into bitcoin, at the same
            time. Integration can be hydronic or forced air. Some buildings only want the solar side. Both are the same
            idea: less of the energy goes to waste.
          </p>
          <p className="body-3">
            The same definition fits a company. A workflow has useful work and work that goes nowhere. The operations
            practice looks for that waste, automates what should not be done by hand, and measures what comes back.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4">People</h2>
          <ul className="rows" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {team.map((person) => (
              <li key={person.name} className="row">
                <p className="title-1">{person.name}</p>
                <p className="mono caption-4 muted">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="stack-16 measure">
          <h2 className="heading-4">Open source first.</h2>
          <p className="body-3">
            The calculators are free. The Home Assistant integrations are published. The designs assume an open mining
            stack, the hardware and firmware the 256 Foundation exists to fund. Tyler Stevens serves as president of the
            256 Foundation board.
          </p>
          <p className="body-3">
            <a className="inline-link" href={LINKS.foundation} target="_blank" rel="noopener noreferrer">
              256 Foundation
            </a>
            {' · '}
            <a className="inline-link" href={LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {' · '}
            <a className="inline-link" href={LINKS.calculators} target="_blank" rel="noopener noreferrer">
              Calculators
            </a>
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-24">
          <h2 className="heading-4 measure">The book and the summit.</h2>
          <Rows
            items={[
              {
                title: 'Bitcoin Mining Heat Reuse',
                body: 'Tyler Stevens wrote the book on using miners as building heat.',
                href: LINKS.book,
                external: true,
              },
              {
                title: 'Heatpunk Summit',
                body: 'A conference on this work, started by Tyler Stevens.',
                href: LINKS.summit,
                external: true,
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <CtaPair />
      </Section>
    </Page>
  )
}
