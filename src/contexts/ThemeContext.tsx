import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  effectiveTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function readStoredTheme(): Theme | null {
  try {
    const saved = localStorage.getItem('theme')
    return saved && ['light', 'dark', 'system'].includes(saved) ? (saved as Theme) : null
  } catch {
    return null
  }
}

function storeTheme(theme: Theme) {
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // Persistence is best effort.
  }
}

function applyTheme(effective: 'light' | 'dark') {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(effective)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', effective === 'dark' ? '#131209' : '#F4F6F8')
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = () => setSystemTheme(media.matches ? 'dark' : 'light')
    sync()
    media.addEventListener('change', sync)
    const saved = readStoredTheme()
    if (saved) setThemeState(saved)
    return () => media.removeEventListener('change', sync)
  }, [])

  const effectiveTheme: 'light' | 'dark' = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    const saved = readStoredTheme()
    const explicit = theme === 'system' ? saved : theme
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const effective = !explicit || explicit === 'system' ? (systemDark ? 'dark' : 'light') : explicit
    applyTheme(effective)
  }, [theme, systemTheme])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    storeTheme(next)
  }

  return <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>{children}</ThemeContext.Provider>
}

// Hook lives beside the provider so the context object stays private.
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
