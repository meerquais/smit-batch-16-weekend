import { Link, Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { ROUTES } from '../../config/routes'
import { ThemeToggle } from '../common/ThemeToggle'
import { GradientText } from '../common/GradientText'
import { useAuth } from '../../hooks/useAuth'
import { FirebaseSetupBanner } from '../FirebaseSetupBanner'

const linkClass =
  'text-sm font-medium text-slate-700 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-300'

/**
 * Marketing / public shell with glass app bar.
 */
export function PublicLayout() {
  const { user, profile } = useAuth()

  const dashboardPath =
    profile?.role === 'admin'
      ? ROUTES.admin
      : profile?.role === 'teacher'
        ? ROUTES.teacher
        : ROUTES.student

  return (
    <div className="min-h-svh">
      <FirebaseSetupBanner />
      <AppBar
        position="sticky"
        elevation={0}
        className="border-b border-white/20 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-black/30"
      >
        <Toolbar className="mx-auto flex w-full max-w-6xl justify-between gap-4">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to={ROUTES.home} className="flex items-center gap-2 no-underline">
              <GradientText as="span" className="text-xl font-bold tracking-tight">
                Lumina
              </GradientText>
              <span className="hidden text-xs font-medium text-slate-500 sm:inline dark:text-slate-400">
                Learn
              </span>
            </Link>
          </motion.div>
          <Box className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link to={ROUTES.courses} className={linkClass}>
              Courses
            </Link>
            <Link to={ROUTES.about} className={linkClass}>
              About
            </Link>
            <ThemeToggle />
            {user ? (
              <Button component={Link} to={dashboardPath} variant="contained" size="small">
                Dashboard
              </Button>
            ) : (
              <>
                <Button component={Link} to={ROUTES.login} variant="text" size="small">
                  Log in
                </Button>
                <Button component={Link} to={ROUTES.signup} variant="contained" size="small">
                  Sign up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>
      <footer className="mt-auto border-t border-white/10 bg-black/20 py-8 text-center text-sm text-slate-500 backdrop-blur-md dark:text-slate-400">
        © {new Date().getFullYear()} Lumina Learning. Crafted for focused study.
      </footer>
    </div>
  )
}
