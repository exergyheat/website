import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Switch color theme"
      onClick={() => {
        const dark = document.documentElement.classList.contains('dark')
        setTheme(dark ? 'light' : 'dark')
      }}
    >
      <Sun className="icon-sun" size={16} aria-hidden="true" />
      <Moon className="icon-moon" size={16} aria-hidden="true" />
    </button>
  )
}
