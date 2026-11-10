import { Link } from 'react-router-dom'
import { CtaPair } from '../components/Button'
import { Seo } from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Not found" description="This page is not on the map." noindex />
      <section className="section">
        <div className="frame">
          <div className="narrow">
            <p className="label">Field report 404</p>
            <h1 className="display">This page is not on the map.</h1>
            <p className="body-3">That address does not exist on this site.</p>
            <Link className="see back-link" to="/">Back to the front page</Link>
            <CtaPair size="md" />
          </div>
        </div>
      </section>
    </>
  )
}
