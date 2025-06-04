import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative inline-block">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
        className="appearance-none w-10 h-10 bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-100 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Theme toggle"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {theme === 'dark' && <Moon className="h-5 w-5" />}
        {theme === 'light' && <Sun className="h-5 w-5" />}
        {theme === 'system' && <Monitor className="h-5 w-5" />}
      </div>
    </div>
  )
}