import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import { GradientText } from '../common/GradientText'
import { ThemeToggle } from '../common/ThemeToggle'
import { FirebaseSetupBanner } from '../FirebaseSetupBanner'

/**
 * Centered auth shell with animated backdrop.
 */
export function AuthLayout() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <FirebaseSetupBanner />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/25 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-4 py-12">
        <Link to={ROUTES.home} className="mb-8 text-center no-underline">
          <GradientText as="span" className="text-2xl font-bold">
            Lumina Learn
          </GradientText>
        </Link>
        <Outlet />
      </div>
    </div>
  )
}
