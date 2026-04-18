import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { motion } from 'framer-motion'
import { useThemeMode } from '../../hooks/useThemeMode'

/**
 * Persists theme via Zustand + syncs Tailwind `dark` class in AppProviders.
 */
export function ThemeToggle() {
  const { mode, toggle } = useThemeMode()
  const isDark = mode === 'dark'
  return (
    <Tooltip title={isDark ? 'Light mode' : 'Dark mode'}>
      <motion.span whileTap={{ scale: 0.92 }}>
        <IconButton
          onClick={toggle}
          color="inherit"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="glass-panel !border-white/20"
          size="medium"
        >
          {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>
      </motion.span>
    </Tooltip>
  )
}
