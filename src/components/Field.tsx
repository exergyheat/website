import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'

export function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  children: ReactNode
}) {
  const described = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ')
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<{ 'aria-describedby'?: string }>, {
        'aria-describedby': described || undefined,
      })
    : children
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      {control}
      {hint && <p className="caption hint" id={`${id}-hint`}>{hint}</p>}
      {error && <p className="caption field-error" id={`${id}-error`}>{error}</p>}
    </div>
  )
}
