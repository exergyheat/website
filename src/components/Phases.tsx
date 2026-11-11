import { Plate } from './Plate'

const PHASES = [
  { num: '00', title: 'Feasibility check', body: 'Find out what your building could earn.', free: true },
  { num: '01', title: 'Exergy audit', body: '', free: false },
  { num: '02', title: 'Engineering coordination', body: '', free: false },
  { num: '03', title: 'Procurement + commissioning', body: '', free: false },
  { num: '04', title: 'Monitoring (optional)', body: '', free: false },
] as const

export function Phases({ plate = false }: { plate?: boolean }) {
  return (
    <div className="frame">
      <h2 className="heading-1 phases-title">How it starts.</h2>
      {plate && (
        <figure className="figure blueprint">
          <div className="blueprint-stage">
            <Plate
              slug="phases-blueprint"
              plain
              ratio="ratio-3-4"
              sizes="(min-width: 1200px) 32vw, 100vw"
              alt="Blueprint line drawing of a cabinet, a heat exchanger, and an air handler connected by supply and return pipes."
            />
            <span className="bp-label bp-miner">Miner</span>
            <span className="bp-label bp-hx">HX-01</span>
            <span className="bp-label bp-supply">Supply</span>
            <span className="bp-label bp-return">Return</span>
          </div>
          <figcaption className="caption">Fig. 5 — The path we add</figcaption>
        </figure>
      )}
      <div className={plate ? 'phases' : 'phases phases-full'}>
        {PHASES.map((phase) => (
          <article className="phase" key={phase.num}>
            <p className="index-num">{phase.num}</p>
            <h3 className="heading-4">{phase.title}</h3>
            {phase.body ? <p className="body-3">{phase.body}</p> : <span />}
            {phase.free ? <span className="badge button-sm">Free</span> : <span />}
          </article>
        ))}
      </div>
      <p className="label phase-foot">Each phase is its own agreement / stop after any phase</p>
    </div>
  )
}
