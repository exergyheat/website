import { useEffect, useRef, useState } from 'react'

const LINES = [
  ['Energy', 'you', 'already', 'pay', 'for,'],
  ['doing', 'twice', 'the', 'work.'],
]

const WORDS = LINES.flat()

export function Tagline() {
  const ref = useRef<HTMLHeadingElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(WORDS.length)
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
        const step = () => {
          next += 1
          setCount(next)
          if (next < WORDS.length) timer = window.setTimeout(step, 90)
        }
        step()
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  let index = 0
  return (
    <h2 ref={ref} className="heading-1 tagline">
      {LINES.map((line) => (
        <span className="line" key={line.join(' ')}>
          {line.map((word) => {
            const wordIndex = index
            index += 1
            return (
              <span key={word} className={wordIndex < count ? 'word on' : 'word'}>
                {word}{' '}
              </span>
            )
          })}
        </span>
      ))}
    </h2>
  )
}
