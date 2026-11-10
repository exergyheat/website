import { useEffect, useRef, useState } from 'react'

const LINES = ['Energy you already pay for,', 'doing twice the work.']

export function TaglineReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const words = LINES.map((line) => line.split(' '))
  const total = words.reduce((sum, line) => sum + line.length, 0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total)
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
          setCount(next)
          if (next >= total) window.clearInterval(timer)
        }, 80)
      },
      { threshold: 0.5, rootMargin: '-15% 0px -30% 0px' },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      window.clearInterval(timer)
    }
  }, [total])

  let index = 0
  return (
    <div ref={ref}>
      <p className="tagline heading-2 measure">
        {words.map((line) => (
          <span className="block" key={line.join(' ')}>
            {line.map((word) => {
              const current = index
              index += 1
              return (
                <span key={`${word}-${current}`}>
                  <span className={current < count ? 'tag-word is-on' : 'tag-word'}>{word}</span>
                  {current < total - 1 ? ' ' : ''}
                </span>
              )
            })}
          </span>
        ))}
      </p>
    </div>
  )
}
