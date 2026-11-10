import { Link } from 'react-router-dom'
import { CtaPair } from '../components/CtaPair'
import { Page, Section } from '../components/Page'
import { Seo } from '../components/Seo'

export default function NotFound() {
  return (
    <Page>
      <Seo
        title="Page not found | Exergy"
        description="This address does not match a page on the Exergy site."
        path="/404"
        noindex
      />
      <Section>
        <div className="stack-24 measure">
          <p className="mono caption-4 copper">404</p>
          <h1 className="heading-3">This page does not exist.</h1>
          <p className="body-3 muted">The address may have moved. Go back to the home page, or tell us what you were looking for.</p>
          <Link className="inline-link title-3" to="/">
            Back to home
          </Link>
          <CtaPair />
        </div>
      </Section>
    </Page>
  )
}
