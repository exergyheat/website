import { Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import type { FaqItem } from '../content/faq'

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, index) => {
        const expanded = open === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`
        return (
          <div className="faq-item" key={item.q}>
            <h3 className="title-2">
              <button
                id={buttonId}
                className="faq-q title-2"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.q}
                <Plus className="faq-icon" size={16} aria-hidden="true" />
              </button>
            </h3>
            {expanded ? (
              <p id={panelId} role="region" aria-labelledby={buttonId} className="faq-a body-3 muted">
                {item.a}
              </p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
