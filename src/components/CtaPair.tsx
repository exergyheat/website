import { Link, useLocation } from 'react-router-dom'
import { ctasFor } from '../lib/ctas'
import { BOOKING_URL } from '../lib/site'

export function CtaPair() {
  const { pathname, search } = useLocation()
  const { primary, call } = ctasFor(pathname, search)
  return (
    <div className="cta-pair">
      <Link className="btn btn-copper button-md" to={primary.to}>
        {primary.label}
      </Link>
      <a className="btn btn-copper button-md" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        {call}
      </a>
    </div>
  )
}
