import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../lib/site'

const IMAGE = `${SITE_URL}/og-image.jpg`
const IMAGE_ALT = 'Exergy. Building energy systems powered by bitcoin miners.'

export function Seo({
  title,
  description,
  path,
  jsonLd,
  noindex = false,
}: {
  title: string
  description: string
  path: string
  jsonLd?: unknown
  noindex?: boolean
}) {
  const url = `${SITE_URL}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Exergy" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={IMAGE_ALT} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@exergy_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={IMAGE} />
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  )
}
