import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { PageTransition } from '../../../components/common/PageTransition'
import { GlassCard } from '../../../components/common/GlassCard'
import { ProgressRing } from '../../../components/dashboard/ProgressRing'
import { useAuth } from '../../../hooks/useAuth'
import { listEnrollmentsByUser, listQuizAttempts } from '../../../services/api/enrollmentService'
import { getCourseById } from '../../../services/api/courseService'
import { ROUTES } from '../../../config/routes'
import { format } from 'date-fns'
import { DashboardCardSkeleton } from '../../../components/common/Skeletons'

/**
 * @param {string} id
 */
function useCourseTitle(id) {
  return useQuery({
    queryKey: ['course-title', id],
    queryFn: () => getCourseById(id),
    enabled: Boolean(id),
  })
}

function EnrollmentCard({ enrollment }) {
  const courseQ = useCourseTitle(enrollment.courseId)
  const attemptsQ = useQuery({
    queryKey: ['attempts', enrollment.id],
    queryFn: () => listQuizAttempts(enrollment.id),
    enabled: Boolean(enrollment.id),
  })

  const title = courseQ.data?.title || 'Course'
  const xp = (attemptsQ.data || []).filter((a) => a.passed).length * 50

  return (
    <GlassCard className="flex flex-col gap-4 p-5 text-left md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Enrolled {enrollment.enrolledAt?.seconds ? format(new Date(enrollment.enrolledAt.seconds * 1000), 'PP') : '—'} ·{' '}
          {enrollment.status}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-200">
            +{xp} XP
          </span>
          {enrollment.certificateIssued ? (
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-200">
              Certificate
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ProgressRing value={enrollment.progress || 0} />
        <Button component={Link} to={ROUTES.courses} variant="outlined" size="small">
          Continue
        </Button>
      </div>
    </GlassCard>
  )
}

export default function StudentDashboard() {
  const { user } = useAuth()
  const enrollQ = useQuery({
    queryKey: ['my-enrollments', user?.uid],
    queryFn: () => listEnrollmentsByUser(user.uid),
    enabled: Boolean(user?.uid),
  })

  const badges = [
    { label: 'Streak starter', unlocked: (enrollQ.data || []).length > 0 },
    { label: 'Quiz ace', unlocked: (enrollQ.data || []).some((e) => (e.progress || 0) >= 80) },
    { label: 'Course closer', unlocked: (enrollQ.data || []).some((e) => e.status === 'completed') },
  ]

  return (
    <PageTransition>
      <div className="mb-6 text-left">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Your learning hub</h1>
        <p className="text-slate-600 dark:text-slate-400">Track rings, XP, and quiz momentum across enrollments.</p>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {badges.map((b) => (
          <motion.div key={b.label} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
            <Paper
              className={`border p-4 text-center backdrop-blur-md ${
                b.unlocked
                  ? 'border-violet-400/50 bg-gradient-to-br from-violet-500/20 to-sky-500/10'
                  : 'border-white/10 bg-white/30 opacity-60 dark:bg-black/30'
              }`}
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{b.label}</p>
              <p className="text-xs text-slate-500">{b.unlocked ? 'Unlocked' : 'Locked'}</p>
            </Paper>
          </motion.div>
        ))}
      </div>

      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Enrolled timeline</h2>
      {enrollQ.isLoading ? (
        <DashboardCardSkeleton />
      ) : (
        <div className="space-y-4">
          {(enrollQ.data || []).map((e) => (
            <EnrollmentCard key={e.id} enrollment={e} />
          ))}
          {enrollQ.data?.length === 0 ? (
            <GlassCard className="p-8 text-center text-slate-600 dark:text-slate-300">
              No enrollments yet.{' '}
              <Link to={ROUTES.courses} className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
                Browse courses
              </Link>
            </GlassCard>
          ) : null}
        </div>
      )}
    </PageTransition>
  )
}
