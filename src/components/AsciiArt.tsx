import { useEffect, useMemo, useRef, useState } from 'react'

const FLOW = new Set(['^', '~', '>'])

export function AsciiArt({ lines, label }: { lines: string[]; label: string }) {
  const ref = useRef<HTMLPreElement>(null)
  const flow = useMemo(() => {
    const cells: { row: number; col: number }[] = []
    lines.forEach((line, row) => {
      ;[...line].forEach((char, col) => {
        if (FLOW.has(char)) cells.push({ row, col })
      })
    })
    return cells
  }, [lines])
  const order = useMemo(() => {
    const map = new Map<string, number>()
    flow.forEach((cell, index) => map.set(`${cell.row}:${cell.col}`, index))
    return map
  }, [flow])
  const [lit, setLit] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLit(flow.length)
      return
    }
    const node = ref.current
    if (!node) return
    let timer = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        let next = 0
        timer = window.setInterval(() => {
          next += 1
          setLit(next)
          if (next >= flow.length) window.clearInterval(timer)
        }, 42)
      },
      { threshold: 0.45 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      window.clearInterval(timer)
    }
  }, [flow.length])

  return (
    <figure className="ascii-figure" style={{ margin: 0 }}>
      <pre ref={ref} className="ascii" aria-hidden="true">
        {lines.map((line, row) => (
          <span key={row}>
            {[...line].map((char, col) => {
              const index = order.get(`${row}:${col}`)
              if (index === undefined) return <span key={col}>{char}</span>
              return (
                <span key={col} className={index < lit ? 'ascii-flow is-on' : 'ascii-flow'}>
                  {char}
                </span>
              )
            })}
            {row < lines.length - 1 ? '\n' : null}
          </span>
        ))}
      </pre>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  )
}
