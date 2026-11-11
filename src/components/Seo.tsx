import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { OG_IMAGE, SITE_URL } from '../lib/site'

export function Seo({
  title,
  description,
  noindex = false,
}: {
  title: string
  description: string
  noindex?: boolean
}) {
  const { pathname } = useLocation()
  const full = title === 'Exergy' ? 'Exergy' : `${title} | Exergy`
  const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="Engraving of a brick Denver building and the Front Range behind it" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}
