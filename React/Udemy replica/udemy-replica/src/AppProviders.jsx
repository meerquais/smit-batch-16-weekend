import { useEffect, useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useUiStore } from './store/uiStore'
import { createAppTheme } from './config/theme'
import { ThemeContextProvider } from './contexts/ThemeContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

/**
 * @param {{ children: import('react').ReactNode }} props
 */
export function AppProviders({ children }) {
  const themeMode = useUiStore((s) => s.theme)
  const muiTheme = useMemo(() => createAppTheme(themeMode), [themeMode])

  useEffect(() => {
    const root = document.documentElement
    if (themeMode === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [themeMode])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  )
}
