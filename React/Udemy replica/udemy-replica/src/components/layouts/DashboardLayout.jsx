import { Link, Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useMemo, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ROUTES } from '../../config/routes'
import { ThemeToggle } from '../common/ThemeToggle'
import { GradientText } from '../common/GradientText'
import { logoutUser } from '../../services/firebase/auth'
import Button from '@mui/material/Button'
import { useAuthStore } from '../../store/authStore'
import { FirebaseSetupBanner } from '../FirebaseSetupBanner'

const drawerWidth = 260

/**
 * @param {{ title: string, nav: { label: string, to: string }[] }} props
 */
export function DashboardLayout({ title, nav }) {
  const location = useLocation()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(false)
  const resetAuth = useAuthStore((s) => s.reset)

  const closeDrawer = useCallback(() => setOpen(false), [])

  const drawer = useMemo(
    () => (
      <Box className="flex h-full flex-col border-r border-white/10 bg-white/50 backdrop-blur-xl dark:bg-black/40">
        <div className="px-4 py-5">
          <Link to={ROUTES.home} className="no-underline">
            <GradientText as="div" className="text-lg font-bold">
              {title}
            </GradientText>
          </Link>
        </div>
        <List className="flex-1">
          {nav.map((item) => (
            <ListItemButton
              key={item.to}
              component={Link}
              to={item.to}
              selected={location.pathname === item.to}
              onClick={closeDrawer}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <div className="flex items-center gap-2 p-3">
          <ThemeToggle />
          <Button
            size="small"
            fullWidth
            variant="outlined"
            onClick={async () => {
              await logoutUser()
              resetAuth()
              window.location.href = ROUTES.home
            }}
          >
            Log out
          </Button>
        </div>
      </Box>
    ),
    [title, nav, location.pathname, closeDrawer, resetAuth]
  )

  return (
    <div className="min-h-svh">
      <FirebaseSetupBanner />
      <Box className="flex">
        {!isSm ? (
          <Drawer
            variant="permanent"
            open
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                border: 'none',
                background: 'transparent',
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer open={open} onClose={() => setOpen(false)}>
            {drawer}
          </Drawer>
        )}
        <Box component="main" className="min-h-svh flex-1 bg-transparent">
          <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-white/10 bg-white/40 px-4 py-3 backdrop-blur-md dark:bg-black/30 md:hidden">
            <IconButton edge="start" onClick={() => setOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-6xl px-4 py-8"
          >
            <Outlet />
          </motion.div>
        </Box>
      </Box>
    </div>
  )
}
