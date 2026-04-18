import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Paper from '@mui/material/Paper'
import { sendReset } from '../../services/firebase/auth'
import { isFirebaseConfigured } from '../../services/firebase/config'
import { ROUTES } from '../../config/routes'
import { AnimatedInput } from '../../components/forms/AnimatedInput'
import { AnimatedButton } from '../../components/common/AnimatedButton'
import { PageTransition } from '../../components/common/PageTransition'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    if (!isFirebaseConfigured) {
      setError('Configure Firebase before using password reset.')
      return
    }
    setLoading(true)
    try {
      await sendReset(email)
      setMessage('Check your inbox for reset instructions.')
    } catch {
      setError('Unable to send reset email. Verify the address and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageTransition>
      <Paper className="glass-panel mx-auto max-w-md p-8 text-left">
        <h1 className="mb-2 text-2xl font-semibold text-slate-900 dark:text-white">Reset password</h1>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          Enter your account email and we will send a reset link.
        </p>
        {error ? (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        ) : null}
        {message ? (
          <Alert severity="success" className="mb-4">
            {message}
          </Alert>
        ) : null}
        <form onSubmit={handleSubmit} noValidate>
          <AnimatedInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="mt-6">
            <AnimatedButton type="submit" disabled={loading} className="w-full !py-3">
              {loading ? 'Sending…' : 'Send reset link'}
            </AnimatedButton>
          </div>
        </form>
        <p className="mt-6 text-center text-sm">
          <Link to={ROUTES.login} className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
            Back to login
          </Link>
        </p>
      </Paper>
    </PageTransition>
  )
}
