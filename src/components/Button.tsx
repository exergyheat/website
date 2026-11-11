import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ink'
type Size = 'sm' | 'md'

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  children,
  className = '',
  ...rest
}: {
  variant?: Variant
  size?: Size
  href?: string
  to?: string
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `btn btn-${variant} btn-${size} ${size === 'sm' ? 'button-sm' : 'button-md'} ${className}`.trim()
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) {
    return (
      <a href={href} className={cls} rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

export function CtaPair({ size = 'sm', className = '' }: { size?: Size; className?: string }) {
  return (
    <div className={`cta-pair ${size === 'md' ? 'cta-pair-md' : ''} ${className}`.trim()}>
      <Button variant="primary" size={size} to="/contact?intent=feasibility">
        Get a free feasibility check
      </Button>
      <Button variant="secondary" size={size} href="https://cal.com/tylerkstevens">
        Book a 15 min call
      </Button>
    </div>
  )
}
