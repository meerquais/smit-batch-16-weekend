import { useCallback, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { TeacherKanban } from '../../../components/dashboard/TeacherKanban'
import { CalendarStrip } from '../../../components/dashboard/CalendarStrip'
import { GlassCard } from '../../../components/common/GlassCard'
import { PageTransition } from '../../../components/common/PageTransition'
import { useAuth } from '../../../hooks/useAuth'
import {
  listCoursesByTeacher,
  listLessons,
  updateLesson,
  addLesson,
  addQuiz,
  listAssignments,
  listSubmissionsForAssignment,
  gradeSubmission,
} from '../../../services/api/courseService'
import { listEnrollmentsByCourse } from '../../../services/api/enrollmentService'
import { LESSON_TYPES, COURSE_STATUS } from '../../../config/constants'

function SortableLessonRow({ lesson }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: lesson.id })
  const style = { transform: CSS.Transform.toString(transform), transition }
  return (
    <Paper ref={setNodeRef} style={style} className="mb-2 flex items-center gap-2 border border-white/15 bg-white/50 p-2 dark:bg-black/35">
      <button type="button" className="cursor-grab text-slate-400" aria-label="Reorder" {...attributes} {...listeners}>
        <DragIndicatorIcon fontSize="small" />
      </button>
      <span className="text-sm text-slate-800 dark:text-slate-100">{lesson.title}</span>
    </Paper>
  )
}

export default function TeacherDashboard() {
  const { user } = useAuth()
  const qc = useQueryClient()
  const [courseId, setCourseId] = useState('')
  const coursesQ = useQuery({
    queryKey: ['teacher-courses', user?.uid],
    queryFn: () => listCoursesByTeacher(user.uid),
    enabled: Boolean(user?.uid),
  })

  const courses = coursesQ.data || []

  const serverColumnMap = useMemo(() => {
    const map = { ideas: [], building: [], review: [], published: [] }
    courses.forEach((c) => {
      if (c.status === COURSE_STATUS.PUBLISHED) map.published.push(c.id)
      else if (c.title?.toLowerCase().includes('review')) map.review.push(c.id)
      else map.building.push(c.id)
    })
    return map
  }, [courses])

  const [columnOverride, setColumnOverride] = useState(null)
  const columnMap = columnOverride ?? serverColumnMap

  const lessonsQ = useQuery({
    queryKey: ['teacher-lessons', courseId],
    queryFn: () => listLessons(courseId),
    enabled: Boolean(courseId),
  })

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor))

  const persistLessonOrder = useCallback(
    async (orderedIds) => {
      await Promise.all(orderedIds.map((id, index) => updateLesson(courseId, id, { order: index })))
      qc.invalidateQueries({ queryKey: ['teacher-lessons', courseId] })
    },
    [courseId, qc]
  )

  const [lessonForm, setLessonForm] = useState({
    title: '',
    type: LESSON_TYPES.VIDEO,
    content: '',
    duration: '',
  })

  const addLessonMut = useMutation({
    mutationFn: async () => {
      const list = lessonsQ.data || []
      return addLesson(courseId, { ...lessonForm, order: list.length })
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['teacher-lessons', courseId] }),
  })

  const [quizForm, setQuizForm] = useState({
    title: 'Checkpoint',
    timeLimit: 10,
    passingScore: 60,
    questions: [
      { text: 'Sample question?', options: ['A', 'B', 'C'], correctIndex: 0, points: 1 },
    ],
  })

  const addQuizMut = useMutation({
    mutationFn: () =>
      addQuiz(courseId, {
        ...quizForm,
        totalPoints: quizForm.questions.reduce((s, q) => s + (q.points || 1), 0),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['quizzes', courseId] }),
  })

  const assignmentsQ = useQuery({
    queryKey: ['teacher-assign', courseId],
    queryFn: () => listAssignments(courseId),
    enabled: Boolean(courseId),
  })
  const [assignId, setAssignId] = useState('')
  const submissionsQ = useQuery({
    queryKey: ['subs', courseId, assignId],
    queryFn: () => listSubmissionsForAssignment(courseId, assignId),
    enabled: Boolean(courseId && assignId),
  })

  const studentsQ = useQuery({
    queryKey: ['teacher-students', courseId],
    queryFn: () => listEnrollmentsByCourse(courseId),
    enabled: Boolean(courseId),
  })

  const gradeMut = useMutation({
    mutationFn: ({ uid, score, feedback }) => gradeSubmission(courseId, assignId, uid, { score, feedback }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['subs', courseId, assignId] }),
  })

  const lessonIds = useMemo(() => (lessonsQ.data || []).map((l) => l.id), [lessonsQ.data])

  return (
    <PageTransition>
      <div className="mb-6 text-left">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Teacher studio</h1>
        <p className="text-slate-600 dark:text-slate-400">Plan, build, assess—drag lessons and monitor your cohorts.</p>
      </div>

      <CalendarStrip />

      <GlassCard className="mt-6 p-4">
        <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Course planning</h2>
        <TeacherKanban courses={courses} columnMap={columnMap} onColumnMapChange={setColumnOverride} />
        <p className="mt-3 text-xs text-slate-500">
          Kanban columns are visual planning; publish courses from the admin panel or extend with Firestore status sync.
        </p>
      </GlassCard>

      <GlassCard className="mt-6 space-y-3 p-4 text-left">
        <TextField
          select
          fullWidth
          label="Active course"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          {courses.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.title}
            </MenuItem>
          ))}
        </TextField>
      </GlassCard>

      {courseId ? (
        <>
          <GlassCard className="mt-6 p-4 text-left">
            <h2 className="mb-3 text-lg font-semibold">Lessons (drag to reorder)</h2>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={({ active, over }) => {
                if (!over || active.id === over.id) return
                const oldIndex = lessonIds.indexOf(String(active.id))
                const newIndex = lessonIds.indexOf(String(over.id))
                if (oldIndex < 0 || newIndex < 0) return
                const next = arrayMove(lessonIds, oldIndex, newIndex)
                persistLessonOrder(next)
              }}
            >
              <SortableContext items={lessonIds} strategy={verticalListSortingStrategy}>
                {(lessonsQ.data || []).map((l) => (
                  <SortableLessonRow key={l.id} lesson={l} />
                ))}
              </SortableContext>
            </DndContext>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <TextField
                label="Lesson title"
                value={lessonForm.title}
                onChange={(e) => setLessonForm((p) => ({ ...p, title: e.target.value }))}
              />
              <TextField
                select
                label="Type"
                value={lessonForm.type}
                onChange={(e) => setLessonForm((p) => ({ ...p, type: e.target.value }))}
              >
                <MenuItem value={LESSON_TYPES.VIDEO}>YouTube / video URL</MenuItem>
                <MenuItem value={LESSON_TYPES.TEXT}>Text</MenuItem>
              </TextField>
              <TextField
                className="md:col-span-2"
                label="YouTube URL or text content"
                multiline
                minRows={2}
                value={lessonForm.content}
                onChange={(e) => setLessonForm((p) => ({ ...p, content: e.target.value }))}
              />
              <TextField
                label="Duration label"
                value={lessonForm.duration}
                onChange={(e) => setLessonForm((p) => ({ ...p, duration: e.target.value }))}
              />
            </div>
            <Button className="mt-3" variant="contained" onClick={() => addLessonMut.mutate()} disabled={!lessonForm.title}>
              Add lesson
            </Button>
          </GlassCard>

          <GlassCard className="mt-6 space-y-3 p-4 text-left">
            <h2 className="text-lg font-semibold">Quiz builder</h2>
            <TextField
              label="Quiz title"
              fullWidth
              value={quizForm.title}
              onChange={(e) => setQuizForm((p) => ({ ...p, title: e.target.value }))}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <TextField
                label="Time limit (min)"
                type="number"
                value={quizForm.timeLimit}
                onChange={(e) => setQuizForm((p) => ({ ...p, timeLimit: Number(e.target.value) }))}
              />
              <TextField
                label="Passing score %"
                type="number"
                value={quizForm.passingScore}
                onChange={(e) => setQuizForm((p) => ({ ...p, passingScore: Number(e.target.value) }))}
              />
            </div>
            <Button variant="contained" onClick={() => addQuizMut.mutate()}>
              Save quiz template
            </Button>
            <p className="text-xs text-slate-500">Extend this form to add dynamic MCQs; sample question ships by default.</p>
          </GlassCard>

          <GlassCard className="mt-6 p-4 text-left">
            <h2 className="mb-2 text-lg font-semibold">Roster</h2>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(studentsQ.data || []).map((e) => (
                  <TableRow key={e.id}>
                    <TableCell>{e.userId}</TableCell>
                    <TableCell>{e.status}</TableCell>
                    <TableCell>{e.progress ?? 0}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassCard>

          <GlassCard className="mt-6 space-y-3 p-4 text-left">
            <h2 className="text-lg font-semibold">Grade assignments</h2>
            <TextField
              select
              fullWidth
              label="Assignment"
              value={assignId}
              onChange={(e) => setAssignId(e.target.value)}
            >
              {(assignmentsQ.data || []).map((a) => (
                <MenuItem key={a.id} value={a.id}>
                  {a.title}
                </MenuItem>
              ))}
            </TextField>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Student</TableCell>
                  <TableCell>Submission</TableCell>
                  <TableCell>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(submissionsQ.data || []).map((s) => (
                  <TableRow key={s.id}>
                    <TableCell>{s.userId}</TableCell>
                    <TableCell>{s.text?.slice(0, 40)}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        onClick={() =>
                          gradeMut.mutate({
                            uid: s.userId,
                            score: Number(prompt('Score?', '90') || 0),
                            feedback: prompt('Feedback?', '') || '',
                          })
                        }
                      >
                        Grade
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassCard>
        </>
      ) : null}
    </PageTransition>
  )
}
