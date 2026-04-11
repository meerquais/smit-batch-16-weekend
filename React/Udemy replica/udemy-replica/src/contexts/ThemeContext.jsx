import { createContext, useContext, useMemo } from 'react'
import { useUiStore } from '../store/uiStore'

const ThemeContext = createContext(null)

/**
 * Bridges Zustand theme with React context for components that prefer context.
 */
export function ThemeContextProvider({ children }) {
  const theme = useUiStore((s) => s.theme)
  const setTheme = useUiStore((s) => s.setTheme)
  const toggleTheme = useUiStore((s) => s.toggleTheme)

  const value = useMemo(
    () => ({
      mode: theme,
      setMode: setTheme,
      toggle: toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useThemeContext must be used within ThemeContextProvider')
  }
  return ctx
}
