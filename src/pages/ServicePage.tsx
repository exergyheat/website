import { CtaPair } from '../components/Button'
import { FacingCta } from '../components/FacingCta'
import { Plate } from '../components/Plate'
import { Seo } from '../components/Seo'
import type { PlateSlug } from '../lib/plates'

export function ServicePage({
  title,
  description,
  eyebrow,
  headline,
  intro,
  slug,
  alt,
  chip,
}: {
  title: string
  description: string
  eyebrow: string
  headline: string[]
  intro: string
  slug: PlateSlug
  alt: string
  chip: string
}) {
  return (
    <>
      <Seo title={title} description={description} />
      <figure className="panorama figure">
        <Plate
          slug={slug}
          ratio="ratio-16-9"
          sizes="(min-width: 768px) calc(100vw - 64px), calc(100vw - 32px)"
          priority
          alt={alt}
        />
        <figcaption className="fig-chip caption">{chip}</figcaption>
      </figure>
      <section className="section">
        <div className="frame intro-band">
          <div className="intro-copy">
            <p className="label">{eyebrow}</p>
            <h1 className="display">
              {headline.map((line) => (
                <span className="line" key={line}>{line}</span>
              ))}
            </h1>
          </div>
          <div className="intro-aside">
            <p className="body-3">{intro}</p>
            <CtaPair size="sm" />
          </div>
        </div>
      </section>
      <FacingCta />
    </>
  )
}
