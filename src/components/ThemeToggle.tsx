import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme, effectiveTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-5 w-5" />
    } else if (effectiveTheme === 'dark') {
      return <Moon className="h-5 w-5" />
    } else {
      return <Sun className="h-5 w-5" />
    }
  }

  const getTooltip = () => {
    if (theme === 'system') {
      return `System (${effectiveTheme})`
    } else if (theme === 'dark') {
      return 'Dark mode'
    } else {
      return 'Light mode'
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center bg-surface-100 dark:bg-surface-800 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={`Toggle theme - ${getTooltip()}`}
      title={getTooltip()}
    >
      {getIcon()}
    </button>
  )
}