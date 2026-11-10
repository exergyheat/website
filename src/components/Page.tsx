import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page-frame">
      <div className="flow-rail" aria-hidden="true" />
      <div className="page-body">{children}</div>
    </div>
  )
}

export function Section({
  id,
  children,
  reveal = true,
  className = '',
}: {
  id?: string
  children: ReactNode
  reveal?: boolean
  className?: string
}) {
  return (
    <section id={id} className={`section flow-section${className ? ` ${className}` : ''}`}>
      <span className="flow-node" aria-hidden="true" />
      {reveal ? <Reveal>{children}</Reveal> : children}
    </section>
  )
}
