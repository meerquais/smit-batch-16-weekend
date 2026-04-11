import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Alert from '@mui/material/Alert'
import Paper from '@mui/material/Paper'
import { loginEmailPassword } from '../../services/firebase/auth'
import { isFirebaseConfigured } from '../../services/firebase/config'
import { ROUTES } from '../../config/routes'
import { ROLES } from '../../config/constants'
import { AnimatedInput } from '../../components/forms/AnimatedInput'
import { AnimatedButton } from '../../components/common/AnimatedButton'
import { PageTransition } from '../../components/common/PageTransition'
import { useAuthStore } from '../../store/authStore'
import { fetchUserProfile } from '../../services/api/userService'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const setProfile = useAuthStore((s) => s.setProfile)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const from = location.state?.from

  const dashboardFor = (role) => {
    if (role === ROLES.ADMIN) return ROUTES.admin
    if (role === ROLES.TEACHER) return ROUTES.teacher
    return ROUTES.student
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!isFirebaseConfigured) {
      setError('Add Firebase keys to your .env file to sign in.')
      return
    }
    setLoading(true)
    try {
      const cred = await loginEmailPassword(email, password)
      const profile = await fetchUserProfile(cred.user.uid)
      setProfile(profile)
      const dest = from && from !== ROUTES.login ? from : dashboardFor(profile?.role)
      navigate(dest, { replace: true })
    } catch {
      setError('Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageTransition>
      <div className="relative overflow-hidden rounded-3xl">
        <motion.svg
          className="absolute -right-10 -bottom-16 w-[120%] text-violet-500/25"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden
          initial={{ x: 0 }}
          animate={{ x: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.path
            fill="currentColor"
            d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ d: [
              'M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
              'M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,197.3C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
              'M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,213.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
            ] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>

        <Paper className="relative glass-panel mx-auto max-w-md p-8 text-left">
          <h1 className="mb-1 text-2xl font-semibold text-slate-900 dark:text-white">Welcome back</h1>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
            Sign in to continue your learning journey.
          </p>
          {error ? (
            <Alert severity="error" className="mb-4">
              {error}
            </Alert>
          ) : null}
          <form onSubmit={handleSubmit} noValidate>
            <AnimatedInput
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              delay={0}
            />
            <AnimatedInput
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              delay={0.05}
            />
            <div className="mt-2 text-right">
              <Link to={ROUTES.resetPassword} className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
                Forgot password?
              </Link>
            </div>
            <div className="mt-6">
              <AnimatedButton type="submit" disabled={loading} className="w-full !py-3">
                {loading ? 'Signing in…' : 'Sign in'}
              </AnimatedButton>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            New here?{' '}
            <Link to={ROUTES.signup} className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
              Create an account
            </Link>
          </p>
        </Paper>
      </div>
    </PageTransition>
  )
}
