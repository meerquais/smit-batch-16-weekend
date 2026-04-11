import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Alert from '@mui/material/Alert'
import Paper from '@mui/material/Paper'
import { registerEmailPassword, updateUserProfile } from '../../services/firebase/auth'
import { createStudentProfile } from '../../services/api/userService'
import { isFirebaseConfigured } from '../../services/firebase/config'
import { ROUTES } from '../../config/routes'
import { AnimatedInput } from '../../components/forms/AnimatedInput'
import { AnimatedButton } from '../../components/common/AnimatedButton'
import { PageTransition } from '../../components/common/PageTransition'

const steps = ['Account', 'Profile', 'Goals']

export default function Signup() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [focus, setFocus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const finish = async () => {
    setError('')
    if (!isFirebaseConfigured) {
      setError('Configure Firebase in .env before signing up.')
      return
    }
    setLoading(true)
    try {
      const cred = await registerEmailPassword(email, password)
      await updateUserProfile(cred.user, { displayName })
      await createStudentProfile(cred.user, displayName)
      navigate(ROUTES.login, { replace: true, state: { registered: true } })
    } catch {
      setError('Could not create account. Try a different email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageTransition>
      <Paper className="glass-panel mx-auto max-w-lg p-8 text-left">
        <Stepper activeStep={step} alternativeLabel className="mb-8">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {error ? (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        ) : null}
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div
              key="s0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Create your account</h1>
              <AnimatedInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <AnimatedInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                delay={0.05}
              />
              <div className="mt-6 flex justify-end gap-2">
                <AnimatedButton type="button" onClick={next} disabled={!email || password.length < 6}>
                  Continue
                </AnimatedButton>
              </div>
            </motion.div>
          ) : null}
          {step === 1 ? (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">How should we call you?</h1>
              <AnimatedInput
                label="Display name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
              <div className="mt-6 flex justify-between gap-2">
                <AnimatedButton type="button" onClick={back} className="!bg-slate-600">
                  Back
                </AnimatedButton>
                <AnimatedButton type="button" onClick={next} disabled={!displayName.trim()}>
                  Continue
                </AnimatedButton>
              </div>
            </motion.div>
          ) : null}
          {step === 2 ? (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">What is your focus?</h1>
              <AnimatedInput
                label="Primary learning goal (optional)"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
              />
              <div className="mt-6 flex justify-between gap-2">
                <AnimatedButton type="button" onClick={back} className="!bg-slate-600">
                  Back
                </AnimatedButton>
                <AnimatedButton type="button" onClick={finish} disabled={loading}>
                  {loading ? 'Creating…' : 'Finish'}
                </AnimatedButton>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link to={ROUTES.login} className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
            Log in
          </Link>
        </p>
      </Paper>
    </PageTransition>
  )
}
