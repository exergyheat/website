import { useState, useEffect } from 'react'

type Phase = 'typing' | 'erasing'

interface State {
  text: string
  phraseIdx: number
  charIdx: number
  phase: Phase
  initialized: boolean
}

export function useCyclingTypewriter(phrases: string[]) {
  const [s, setS] = useState<State>({
    text: '',
    phraseIdx: 0,
    charIdx: 0,
    phase: 'typing',
    initialized: false,
  })

  useEffect(() => {
    if (phrases.length === 0) return
    const phrase = phrases[s.phraseIdx % phrases.length]

    // Reduced motion: show the first phrase immediately, no animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (s.text !== phrases[0]) {
        setS(prev => ({ ...prev, text: phrases[0], charIdx: phrases[0].length, initialized: true }))
      }
      return
    }

    if (s.phase === 'typing') {
      if (s.charIdx < phrase.length) {
        const t = setTimeout(() =>
          setS(prev => ({
            ...prev,
            text: phrase.slice(0, prev.charIdx + 1),
            charIdx: prev.charIdx + 1,
          })), 65)
        return () => clearTimeout(t)
      } else {
        // Hold fully typed phrase, then start erasing
        const t = setTimeout(() =>
          setS(prev => ({ ...prev, phase: 'erasing', initialized: true }))
        , 2800)
        return () => clearTimeout(t)
      }
    }

    if (s.phase === 'erasing') {
      if (s.charIdx > 0) {
        const t = setTimeout(() =>
          setS(prev => ({
            ...prev,
            text: phrase.slice(0, prev.charIdx - 1),
            charIdx: prev.charIdx - 1,
          })), 30)
        return () => clearTimeout(t)
      } else {
        // Advance to next phrase
        const t = setTimeout(() =>
          setS(prev => ({
            ...prev,
            phraseIdx: (prev.phraseIdx + 1) % phrases.length,
            phase: 'typing',
          })), 500)
        return () => clearTimeout(t)
      }
    }
  }, [s, phrases])

  return {
    displayText: s.text,
    phraseIndex: s.phraseIdx,
    isTypingComplete: phrases.length > 0 && s.charIdx === phrases[s.phraseIdx % phrases.length].length && s.phase !== 'erasing',
    initialized: s.initialized,
  }
}
