import { createContext, useContext } from 'react'

export type ThemeChoice = 'light' | 'dark' | 'system'

export interface ThemeContextType {
  theme: ThemeChoice
  setTheme: (theme: ThemeChoice) => void
  effectiveTheme: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
