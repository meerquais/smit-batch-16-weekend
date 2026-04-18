import { createTheme } from '@mui/material/styles'

/**
 * Builds MUI theme from light/dark mode. Pairs with Tailwind `dark` class on document.
 * @param {'light' | 'dark'} mode
 */
export function createAppTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: mode === 'dark' ? '#a78bfa' : '#7c3aed' },
      secondary: { main: mode === 'dark' ? '#38bdf8' : '#0284c7' },
      background: {
        default: mode === 'dark' ? '#0a0a0f' : '#f8fafc',
        paper: mode === 'dark' ? 'rgba(255,255,255,0.04)' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontFamily: '"Playfair Display", Georgia, serif' },
      h2: { fontFamily: '"Playfair Display", Georgia, serif' },
      h3: { fontFamily: '"Playfair Display", Georgia, serif' },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } } },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  })
}
