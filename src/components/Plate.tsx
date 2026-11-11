import { PLATES, type PlateSlug } from '../lib/plates'

export function Plate({
  slug,
  alt,
  ratio,
  sizes,
  priority = false,
  plain = false,
  className = '',
}: {
  slug: PlateSlug
  alt: string
  ratio: string
  sizes: string
  priority?: boolean
  plain?: boolean
  className?: string
}) {
  const plate = PLATES[slug]
  const srcSet = (theme: 'light' | 'dark') =>
    plate.widths.map((width) => `/illustrations/${slug}.${theme}.${width}.webp ${width}w`).join(', ')
  const fallback = (theme: 'light' | 'dark') => {
    const largest = plate.widths[plate.widths.length - 1]
    return `/illustrations/${slug}.${theme}.${largest}.webp`
  }

  return (
    <div className={`fig-frame ${ratio} ${plain ? 'fig-plain' : ''} ${className}`.trim()}>
      <img
        className="plate-light"
        src={fallback('light')}
        srcSet={srcSet('light')}
        sizes={sizes}
        alt={alt}
        width={plate.w}
        height={plate.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      <img
        className="plate-dark"
        src={fallback('dark')}
        srcSet={srcSet('dark')}
        sizes={sizes}
        alt=""
        width={plate.w}
        height={plate.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
