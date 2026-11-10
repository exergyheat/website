export type TrackStep = {
  id: string
  title: string
  body: string
}

export function Track({ steps, label, kicker = 'Phase' }: { steps: TrackStep[]; label: string; kicker?: string }) {
  return (
    <ol className="track" aria-label={label}>
      {steps.map((step) => (
        <li key={step.id} className="track-step">
          <p className="track-kicker">
            <span className="mono caption-4 muted">{kicker}</span>
            <span className="track-id">{step.id}</span>
          </p>
          <h3 className="title-2">{step.title}</h3>
          <p className="body-6 muted">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}
