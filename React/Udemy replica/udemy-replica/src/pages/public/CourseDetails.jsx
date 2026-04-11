import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import {
  getCourseBySlug,
  listLessons,
  listQuizzes,
  listAssignments,
  upsertSubmission,
} from '../../services/api/courseService'
import {
  enrollStudent,
  getEnrollment,
  updateEnrollmentProgress,
  saveQuizAttempt,
  enrollmentDocId,
} from '../../services/api/enrollmentService'
import { addFeedback, listFeedbackForCourse } from '../../services/api/feedbackService'
import { getYouTubeId, youtubeEmbedUrl } from '../../utils/youtube'
import { LESSON_TYPES, ROLES } from '../../config/constants'
import { ROUTES } from '../../config/routes'
import { useAuth } from '../../hooks/useAuth'
import { PageTransition } from '../../components/common/PageTransition'
import { GlassCard } from '../../components/common/GlassCard'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'
import { FileUploader } from '../../components/forms/FileUploader'
import { uploadFileToPath, isCloudinaryConfigured } from '../../services/cloudinary/upload'
import { gradeQuizAttempt } from '../../utils/quizGrading'
import Alert from '@mui/material/Alert'

export default function CourseDetails() {
  const { slug } = useParams()
  const { user, profile } = useAuth()
  const qc = useQueryClient()

  const courseQuery = useQuery({
    queryKey: ['course', slug],
    queryFn: () => getCourseBySlug(slug || ''),
    enabled: Boolean(slug),
  })

  const courseId = courseQuery.data?.id

  const lessonsQ = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: () => listLessons(courseId),
    enabled: Boolean(courseId),
  })

  const quizzesQ = useQuery({
    queryKey: ['quizzes', courseId],
    queryFn: () => listQuizzes(courseId),
    enabled: Boolean(courseId),
  })

  const assignQ = useQuery({
    queryKey: ['assignments', courseId],
    queryFn: () => listAssignments(courseId),
    enabled: Boolean(courseId),
  })

  const enrollmentQ = useQuery({
    queryKey: ['enrollment', user?.uid, courseId],
    queryFn: () => getEnrollment(user.uid, courseId),
    enabled: Boolean(user && courseId && profile?.role === ROLES.STUDENT),
  })

  const feedbackQ = useQuery({
    queryKey: ['feedback', courseId],
    queryFn: () => listFeedbackForCourse(courseId),
    enabled: Boolean(courseId),
  })

  const [activeLessonId, setActiveLessonId] = useState(null)
  const lessons = lessonsQ.data || []
  const activeLesson = useMemo(
    () => lessons.find((l) => l.id === activeLessonId) || lessons[0],
    [lessons, activeLessonId]
  )

  const enrollMut = useMutation({
    mutationFn: async () => {
      if (!user || !courseId) throw new Error('Missing user or course')
      await enrollStudent(user.uid, courseId)
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['enrollment', user?.uid, courseId] })
    },
  })

  const markCompleteMut = useMutation({
    mutationFn: async () => {
      if (!user || !courseId || !activeLesson) return
      const en = await getEnrollment(user.uid, courseId)
      const done = new Set(en?.completedLessons || [])
      done.add(activeLesson.id)
      const arr = [...done]
      const pct = lessons.length ? Math.round((arr.length / lessons.length) * 100) : 0
      await updateEnrollmentProgress(user.uid, courseId, pct, arr)
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['enrollment', user?.uid, courseId] }),
  })

  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizResult, setQuizResult] = useState(null)
  const selectedQuizId = quizzesQ.data?.[0]?.id
  const selectedQuiz = quizzesQ.data?.find((q) => q.id === selectedQuizId)

  const submitQuizMut = useMutation({
    mutationFn: async () => {
      if (!selectedQuiz || !user || !courseId) return
      const qs = selectedQuiz.questions || []
      const ans = qs.map((_, i) => quizAnswers[i] ?? -1)
      const graded = gradeQuizAttempt(qs, ans, selectedQuiz.passingScore || 60)
      const eid = enrollmentDocId(user.uid, courseId)
      await saveQuizAttempt(eid, selectedQuiz.id, {
        score: graded.percent,
        answers: ans,
        passed: graded.passed,
      })
      return graded
    },
    onSuccess: (graded) => {
      setQuizResult(graded)
      qc.invalidateQueries({ queryKey: ['quizAttempts'] })
    },
  })

  const [assignText, setAssignText] = useState('')
  const [assignFile, setAssignFile] = useState(null)
  const selectedAssign = assignQ.data?.[0]

  const submitAssignMut = useMutation({
    mutationFn: async () => {
      if (!selectedAssign || !user || !courseId) return
      let fileURL = ''
      if (assignFile && isCloudinaryConfigured) {
        const path = `assignments/${courseId}/${user.uid}/${Date.now()}-${assignFile.name}`
        fileURL = await uploadFileToPath(path, assignFile)
      }
      await upsertSubmission(courseId, selectedAssign.id, user.uid, {
        text: assignText,
        fileURL,
      })
    },
    onSuccess: () => {
      setAssignText('')
      setAssignFile(null)
    },
  })

  const [fbRating, setFbRating] = useState(5)
  const [fbReview, setFbReview] = useState('')
  const feedbackMut = useMutation({
    mutationFn: async () => {
      if (!user || !courseId) return
      await addFeedback({
        userId: user.uid,
        courseId,
        teacherId: courseQuery.data?.teacherId || '',
        rating: fbRating,
        review: fbReview,
      })
    },
    onSuccess: () => {
      setFbReview('')
      qc.invalidateQueries({ queryKey: ['feedback', courseId] })
    },
  })

  if (courseQuery.isLoading) return <LoadingSpinner label="Loading course" />
  if (!courseQuery.data) {
    return (
      <PageTransition>
        <p className="text-center text-slate-600 dark:text-slate-400">Course not found.</p>
      </PageTransition>
    )
  }

  const c = courseQuery.data
  const canLearn =
    profile?.role === ROLES.STUDENT && enrollmentQ.data && enrollmentQ.data.status !== 'dropped'
  const isOwnerOrAdmin =
    profile?.role === ROLES.ADMIN || (profile?.role === ROLES.TEACHER && user?.uid === c.teacherId)

  const showContent = c.status === 'published' || isOwnerOrAdmin

  return (
    <PageTransition>
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
        <div>
          <div
            className="mb-6 h-56 w-full rounded-3xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage: c.thumbnail ? `url(${c.thumbnail})` : 'linear-gradient(135deg,#4c1d95,#0ea5e9)',
            }}
          />
          <h1 className="mb-2 text-3xl font-semibold text-slate-900 dark:text-white">{c.title}</h1>
          <p className="text-slate-600 dark:text-slate-300">{c.description}</p>
          {!showContent ? (
            <Alert severity="info" className="mt-4">
              This course is not published yet.
            </Alert>
          ) : null}

          {activeLesson && showContent ? (
            <Paper className="glass-panel mt-8 overflow-hidden !bg-white/50 p-0 dark:!bg-black/35">
              <div className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
                {activeLesson.title}
              </div>
              <div className="aspect-video w-full bg-black">
                {activeLesson.type === LESSON_TYPES.VIDEO || activeLesson.content?.includes('youtube') ? (
                  getYouTubeId(activeLesson.content) ? (
                    <iframe
                      title={activeLesson.title}
                      className="h-full w-full"
                      src={youtubeEmbedUrl(getYouTubeId(activeLesson.content) || '')}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-300">
                      Add a valid YouTube URL to this lesson.
                    </div>
                  )
                ) : (
                  <div className="prose prose-invert max-w-none p-6 text-left text-slate-100">
                    {activeLesson.content}
                  </div>
                )}
              </div>
              {canLearn ? (
                <div className="flex flex-wrap gap-2 p-4">
                  <Button variant="contained" onClick={() => markCompleteMut.mutate()}>
                    Mark lesson complete
                  </Button>
                  <span className="self-center text-sm text-slate-600 dark:text-slate-300">
                    Progress: {enrollmentQ.data?.progress ?? 0}%
                  </span>
                </div>
              ) : null}
            </Paper>
          ) : null}

          {showContent && selectedQuiz && canLearn ? (
            <GlassCard className="mt-8 p-6 text-left">
              <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Quiz: {selectedQuiz.title}</h2>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Passing score: {selectedQuiz.passingScore}%. Auto-graded on submit.
              </p>
              {(selectedQuiz.questions || []).map((q, i) => (
                <div key={i} className="mb-4">
                  <p className="mb-2 font-medium text-slate-800 dark:text-slate-100">{q.text}</p>
                  {(q.options || []).map((opt, j) => (
                    <label key={j} className="mb-1 flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name={`q-${i}`}
                        checked={quizAnswers[i] === j}
                        onChange={() => setQuizAnswers((prev) => ({ ...prev, [i]: j }))}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ))}
              <Button variant="contained" onClick={() => submitQuizMut.mutate()} disabled={submitQuizMut.isPending}>
                Submit quiz
              </Button>
              {quizResult ? (
                <Alert className="mt-4" severity={quizResult.passed ? 'success' : 'warning'}>
                  Score {quizResult.percent}% — {quizResult.passed ? 'Passed' : 'Below passing'}
                </Alert>
              ) : null}
            </GlassCard>
          ) : null}

          {showContent && selectedAssign && canLearn ? (
            <GlassCard className="mt-8 p-6 text-left">
              <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                Assignment: {selectedAssign.title}
              </h2>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">{selectedAssign.description}</p>
              <TextField
                label="Your answer"
                multiline
                minRows={4}
                fullWidth
                value={assignText}
                onChange={(e) => setAssignText(e.target.value)}
              />
              <div className="mt-4">
                <FileUploader label="Attach file (optional)" onFile={setAssignFile} />
              </div>
              <Button
                className="mt-4"
                variant="contained"
                onClick={() => submitAssignMut.mutate()}
                disabled={submitAssignMut.isPending}
              >
                Submit assignment
              </Button>
            </GlassCard>
          ) : null}

          {user && profile?.role === ROLES.STUDENT ? (
            <GlassCard className="mt-8 p-6 text-left">
              <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Feedback</h2>
              <Rating value={fbRating} onChange={(_, v) => setFbRating(v || 5)} />
              <TextField
                className="mt-2"
                label="Review"
                multiline
                minRows={3}
                fullWidth
                value={fbReview}
                onChange={(e) => setFbReview(e.target.value)}
              />
              <Button className="mt-4" variant="outlined" onClick={() => feedbackMut.mutate()}>
                Post feedback
              </Button>
            </GlassCard>
          ) : null}

          <div className="mt-10">
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Reviews</h3>
            {(feedbackQ.data || []).map((f) => (
              <Paper key={f.id} className="mb-3 border border-white/10 bg-white/40 p-4 dark:bg-black/30">
                <Rating value={f.rating} readOnly size="small" />
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{f.review}</p>
              </Paper>
            ))}
            {feedbackQ.data?.length === 0 ? (
              <p className="text-sm text-slate-500">No reviews yet.</p>
            ) : null}
          </div>
        </div>

        <aside className="mt-10 lg:mt-0">
          <div className="lg:sticky lg:top-24 space-y-4">
            <GlassCard className="p-5 text-left">
              <div className="mb-2 text-sm text-slate-500">Investment</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                {c.price ? `$${c.price}` : 'Free'}
              </div>
              <Divider className="my-4" />
              {profile?.role === ROLES.STUDENT ? (
                enrollmentQ.data ? (
                  <Button fullWidth variant="outlined" disabled>
                    Enrolled
                  </Button>
                ) : (
                  <Button fullWidth variant="contained" onClick={() => enrollMut.mutate()} disabled={enrollMut.isPending}>
                    Enroll now
                  </Button>
                )
              ) : (
                <Button component={Link} to={ROUTES.signup} fullWidth variant="contained">
                  Sign up to enroll
                </Button>
              )}
              <p className="mt-3 text-xs text-slate-500">
                {c.level} · {c.duration || 'Self-paced'}
              </p>
            </GlassCard>
            <GlassCard className="p-4 text-left">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Curriculum</h3>
              <ul className="space-y-2">
                {lessons.map((l) => (
                  <li key={l.id}>
                    <motion.button
                      type="button"
                      whileHover={{ x: 4 }}
                      onClick={() => setActiveLessonId(l.id)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                        activeLesson?.id === l.id
                          ? 'bg-violet-500/20 font-semibold text-violet-800 dark:text-violet-200'
                          : 'text-slate-700 hover:bg-white/30 dark:text-slate-200'
                      }`}
                    >
                      {l.order != null ? `${l.order + 1}. ` : ''}
                      {l.title}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </aside>
      </div>
    </PageTransition>
  )
}
