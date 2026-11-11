import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type ThemeChoice } from '../theme'

function readStoredTheme(): ThemeChoice | null {
  try {
    const saved = localStorage.getItem('theme')
    return saved && ['light', 'dark', 'system'].includes(saved) ? (saved as ThemeChoice) : null
  } catch {
    return null
  }
}

function storeTheme(theme: ThemeChoice) {
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // Persistence is best-effort.
  }
}

function applyTheme(effective: 'light' | 'dark') {
  const root = document.documentElement
  root.dataset.theme = effective
  root.classList.remove('light', 'dark')
  root.classList.add(effective)
  root.style.colorScheme = effective
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeChoice>('system')
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const saved = readStoredTheme()
    if (saved) setTheme(saved)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mq.matches ? 'dark' : 'light')
    const onChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    setReady(true)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const effectiveTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    if (!ready) return
    applyTheme(effectiveTheme)
    storeTheme(theme)
  }, [ready, theme, effectiveTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
