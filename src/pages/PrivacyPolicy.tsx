import { Page, Section } from '../components/Page'
import { Seo } from '../components/Seo'
import { CONTACT_EMAIL } from '../lib/site'

const title = 'Privacy policy | Exergy'
const description = 'How Exergy collects, uses, and shares information you send us, including utility bills uploaded with a request.'

export default function PrivacyPolicy() {
  return (
    <Page>
      <Seo title={title} description={description} path="/privacy-policy" />
      <Section>
        <div className="stack-16 measure">
          <h1 className="heading-3">Privacy policy</h1>
          <p className="caption-2 muted">Last updated November 10, 2026</p>
          <p className="body-3">
            Exergy LLC (“Exergy”, “we”) designs building energy systems. This policy says what we collect, why we collect
            it, and the choices you have.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-16 measure">
          <h2 className="heading-5">Information we collect</h2>
          <p className="body-3">
            We collect what you send us: your name, email, company, building or business details, and files you choose to
            upload, such as utility bills. Page visits are counted with Umami, hosted for this site. We do not build an
            advertising profile from that count.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-16 measure">
          <h2 className="heading-5">How we use it</h2>
          <p className="body-3">
            We use the information to answer you, to scope a project, and to do the work you asked for. Utility bills are
            used for the feasibility check or the audit they belong to. We do not sell your information.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-16 measure">
          <h2 className="heading-5">Who we share it with</h2>
          <p className="body-3">
            We share information with the people who help us do the work, for example a hosting provider or, when you are
            a client, the engineers on your project. We also share it when the law requires it, and when you ask us to.
            We do not share it for advertising.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-16 measure">
          <h2 className="heading-5">How long we keep it</h2>
          <p className="body-3">
            We keep project files for as long as the project needs them, and for a reasonable period after, then we
            delete them. You can ask us to delete your information sooner, unless a legal duty says we have to keep it.
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-16 measure">
          <h2 className="heading-5">Your choices</h2>
          <p className="body-3">
            You can ask to see, correct, or delete the information we hold about you. You can opt out of email that is
            not required for a project. Write to{' '}
            <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Section>

      <Section>
        <div className="stack-8 measure">
          <h2 className="heading-5">Contact</h2>
          <p className="body-3">Exergy LLC</p>
          <p className="body-3">3700 N Franklin Street</p>
          <p className="body-3">Denver, CO 80205</p>
          <p className="body-3">
            <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Section>
    </Page>
  )
}
