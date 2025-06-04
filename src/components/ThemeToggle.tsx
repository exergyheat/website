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
        className="appearance-none bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-100 rounded-lg pl-10 pr-8 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {theme === 'dark' && <Moon className="h-4 w-4" />}
        {theme === 'light' && <Sun className="h-4 w-4" />}
        {theme === 'system' && <Monitor className="h-4 w-4" />}
      </div>
    </div>
  )
}