import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export type RowItem = {
  title: string
  body: string
  href?: string
  external?: boolean
  prominent?: boolean
  kicker?: string
}

export function Rows({ items }: { items: RowItem[] }) {
  return (
    <div className="rows">
      {items.map((item) => {
        const inner = (
          <>
            {item.kicker ? <p className="mono caption-4 copper">{item.kicker}</p> : null}
            <h3 className={`row-title ${item.prominent ? 'heading-5' : 'heading-6'}`}>
              <span className="row-title-text">{item.title}</span>
              {item.href ? (
                item.external ? <ArrowUpRight size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />
              ) : null}
            </h3>
            <span className="body-3 muted">{item.body}</span>
          </>
        )
        const className = `row${item.prominent ? ' is-prominent' : ''}`
        if (item.href && item.external) {
          return (
            <a key={item.title} className={className} href={item.href} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          )
        }
        if (item.href) {
          return (
            <Link key={item.title} className={className} to={item.href}>
              {inner}
            </Link>
          )
        }
        return (
          <div key={item.title} className={className}>
            {inner}
          </div>
        )
      })}
    </div>
  )
}
