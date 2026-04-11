import { useUiStore } from '../store/uiStore'

/** @returns {{ mode: 'light'|'dark', toggle: () => void, setMode: (m: 'light'|'dark') => void }} */
export function useThemeMode() {
  const theme = useUiStore((s) => s.theme)
  const toggleTheme = useUiStore((s) => s.toggleTheme)
  const setTheme = useUiStore((s) => s.setTheme)
  return { mode: theme, toggle: toggleTheme, setMode: setTheme }
}
