import { useMemo, useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { format } from 'date-fns'
import { AdminCharts } from '../../../components/dashboard/AdminCharts'
import { CategorySortBoard } from '../../../components/dashboard/CategorySortBoard'
import { GlassCard } from '../../../components/common/GlassCard'
import { TableRowsSkeleton } from '../../../components/common/Skeletons'
import {
  listCategories,
  createCategory,
  reorderCategories,
} from '../../../services/api/categoryService'
import { listAllUsers, approveTeacher, setUserAsPendingTeacher } from '../../../services/api/userService'
import {
  listCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} from '../../../services/api/courseService'
import { listEnrollmentsByCourse } from '../../../services/api/enrollmentService'
import { listAllQueries, updateQueryStatus } from '../../../services/api/queryService'
import { COURSE_STATUS, ROLES } from '../../../config/constants'
import { downloadCertificatePdf } from '../../../services/certificateService'
import { useAuth } from '../../../hooks/useAuth'
import { PageTransition } from '../../../components/common/PageTransition'
import { FileUploader } from '../../../components/forms/FileUploader'
import { uploadFileToPath, isCloudinaryConfigured } from '../../../services/cloudinary/upload'
function TabPanel({ value, index, children }) {
  if (value !== index) return null
  return <div className="pt-6">{children}</div>
}

export default function AdminDashboard() {
  const { profile, user } = useAuth()
  const qc = useQueryClient()
  const [tab, setTab] = useState(0)
  const [catName, setCatName] = useState('')
  const certRef = useRef(null)
  const [certMeta, setCertMeta] = useState({ student: '', course: '' })

  const categoriesQ = useQuery({ queryKey: ['categories'], queryFn: listCategories })
  const usersQ = useQuery({ queryKey: ['users'], queryFn: listAllUsers })
  const coursesQ = useQuery({ queryKey: ['courses', 'all'], queryFn: () => listCourses() })
  const queriesQ = useQuery({ queryKey: ['queries'], queryFn: listAllQueries })

  const enrollmentsAgg = useQuery({
    queryKey: ['enrollments-agg', coursesQ.data?.map((c) => c.id).join(',')],
    enabled: Boolean(coursesQ.data?.length),
    queryFn: async () => {
      const courses = coursesQ.data || []
      const rows = []
      for (const c of courses.slice(0, 12)) {
        const list = await listEnrollmentsByCourse(c.id)
        rows.push({ name: c.title?.slice(0, 18) || c.id, count: list.length })
      }
      return rows
    },
  })

  const trend = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    return months.map((m, i) => ({
      month: m,
      enrollments: Math.max(2, (enrollmentsAgg.data || []).reduce((s, r) => s + r.count, 0) / (i + 3)),
    }))
  }, [enrollmentsAgg.data])

  const reorderMut = useMutation({
    mutationFn: reorderCategories,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['categories'] }),
  })

  const createCatMut = useMutation({
    mutationFn: () => createCategory({ name: catName }),
    onSuccess: () => {
      setCatName('')
      qc.invalidateQueries({ queryKey: ['categories'] })
    },
  })

  const promoteMut = useMutation({
    mutationFn: (uid) => setUserAsPendingTeacher(uid),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  })

  const approveMut = useMutation({
    mutationFn: (uid) => approveTeacher(uid),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  })

  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    categoryId: '',
    teacherId: '',
    price: 0,
    level: 'beginner',
    duration: '',
    status: COURSE_STATUS.DRAFT,
  })
  const [thumbFile, setThumbFile] = useState(null)

  const createCourseMut = useMutation({
    mutationFn: async () => {
      let thumbnail = ''
      if (thumbFile && isCloudinaryConfigured) {
        const id = `tmp-${Date.now()}`
        thumbnail = await uploadFileToPath(`thumbnails/${id}/${thumbFile.name}`, thumbFile)
      }
      return createCourse({
        ...courseForm,
        teacherId: courseForm.teacherId || user?.uid || '',
        thumbnail,
      })
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['courses'] })
      setThumbFile(null)
    },
  })

  if (!profile) return null

  return (
    <PageTransition>
      <div className="mb-6 text-left">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Admin control</h1>
        <p className="text-slate-600 dark:text-slate-400">Analytics, catalog, people, and compliance in one glass workspace.</p>
      </div>
      <Paper className="glass-panel !bg-white/45 px-2 dark:!bg-black/35">
        <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" scrollButtons="auto">
          <Tab label="Overview" />
          <Tab label="Categories" />
          <Tab label="Teachers" />
          <Tab label="Courses" />
          <Tab label="Queries" />
          <Tab label="Certificates" />
        </Tabs>
      </Paper>

      <TabPanel value={tab} index={0}>
        {enrollmentsAgg.isLoading ? (
          <TableRowsSkeleton rows={4} />
        ) : (
          <AdminCharts enrollmentsByCourse={enrollmentsAgg.data || []} trend={trend} />
        )}
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <GlassCard className="mb-6 p-4 text-left">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <TextField
              label="New category"
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
              className="sm:flex-1"
            />
            <Button variant="contained" onClick={() => createCatMut.mutate()} disabled={!catName.trim()}>
              Add
            </Button>
          </div>
        </GlassCard>
        {categoriesQ.isLoading ? (
          <TableRowsSkeleton />
        ) : (
          <CategorySortBoard
            categories={categoriesQ.data || []}
            onReorder={(ids) => reorderMut.mutate(ids)}
          />
        )}
      </TabPanel>

      <TabPanel value={tab} index={2}>
        {usersQ.isLoading ? (
          <TableRowsSkeleton rows={6} />
        ) : (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Active</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(usersQ.data || []).map((u) => (
                <TableRow key={u.id}>
                  <TableCell>{u.displayName}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.role}</TableCell>
                  <TableCell>{u.isActive ? 'Yes' : 'No'}</TableCell>
                  <TableCell align="right">
                    {u.role === ROLES.STUDENT ? (
                      <Button size="small" onClick={() => promoteMut.mutate(u.id)}>
                        Make teacher
                      </Button>
                    ) : null}
                    {u.role === ROLES.TEACHER && !u.isActive ? (
                      <Button size="small" onClick={() => approveMut.mutate(u.id)}>
                        Approve
                      </Button>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TabPanel>

      <TabPanel value={tab} index={3}>
        <GlassCard className="mb-6 space-y-3 p-4 text-left">
          <TextField
            label="Title"
            fullWidth
            value={courseForm.title}
            onChange={(e) => setCourseForm((p) => ({ ...p, title: e.target.value }))}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            minRows={2}
            value={courseForm.description}
            onChange={(e) => setCourseForm((p) => ({ ...p, description: e.target.value }))}
          />
          <TextField
            select
            label="Category"
            fullWidth
            value={courseForm.categoryId}
            onChange={(e) => setCourseForm((p) => ({ ...p, categoryId: e.target.value }))}
          >
            {(categoriesQ.data || []).map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Teacher user ID"
            helperText="Defaults to your admin UID if empty"
            fullWidth
            value={courseForm.teacherId}
            onChange={(e) => setCourseForm((p) => ({ ...p, teacherId: e.target.value }))}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <TextField
              label="Price"
              type="number"
              value={courseForm.price}
              onChange={(e) => setCourseForm((p) => ({ ...p, price: e.target.value }))}
            />
            <TextField
              select
              label="Level"
              value={courseForm.level}
              onChange={(e) => setCourseForm((p) => ({ ...p, level: e.target.value }))}
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </TextField>
            <TextField
              label="Duration"
              value={courseForm.duration}
              onChange={(e) => setCourseForm((p) => ({ ...p, duration: e.target.value }))}
            />
          </div>
          <TextField
            select
            label="Status"
            value={courseForm.status}
            onChange={(e) => setCourseForm((p) => ({ ...p, status: e.target.value }))}
          >
            <MenuItem value={COURSE_STATUS.DRAFT}>Draft</MenuItem>
            <MenuItem value={COURSE_STATUS.PUBLISHED}>Published</MenuItem>
          </TextField>
          <FileUploader label="Thumbnail" onFile={setThumbFile} accept="image/*" />
          <Button variant="contained" onClick={() => createCourseMut.mutate()}>
            Create course
          </Button>
        </GlassCard>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(coursesQ.data || []).map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.title}</TableCell>
                <TableCell>{c.status}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    onClick={() =>
                      updateCourse(c.id, {
                        status: c.status === COURSE_STATUS.PUBLISHED ? COURSE_STATUS.DRAFT : COURSE_STATUS.PUBLISHED,
                      }).then(() => qc.invalidateQueries({ queryKey: ['courses'] }))
                    }
                  >
                    Toggle publish
                  </Button>
                  <Button size="small" color="error" onClick={() => deleteCourse(c.id).then(() => qc.invalidateQueries({ queryKey: ['courses'] }))}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabPanel>

      <TabPanel value={tab} index={4}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(queriesQ.data || []).map((q) => (
              <TableRow key={q.id}>
                <TableCell>{q.subject}</TableCell>
                <TableCell>{q.status}</TableCell>
                <TableCell align="right">
                  <Button size="small" onClick={() => updateQueryStatus(q.id, 'closed').then(() => qc.invalidateQueries({ queryKey: ['queries'] }))}>
                    Close
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabPanel>

      <TabPanel value={tab} index={5}>
        <GlassCard className="mb-4 space-y-3 p-4 text-left">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Generate a branded PDF for completed learners. Mark enrollment as issued after download.
          </p>
          <TextField
            label="Student name"
            value={certMeta.student}
            onChange={(e) => setCertMeta((m) => ({ ...m, student: e.target.value }))}
            fullWidth
          />
          <TextField
            label="Course name"
            value={certMeta.course}
            onChange={(e) => setCertMeta((m) => ({ ...m, course: e.target.value }))}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={async () => {
              if (certRef.current) {
                await downloadCertificatePdf(certRef.current, `certificate-${certMeta.student || 'learner'}.pdf`)
              }
            }}
          >
            Download PDF
          </Button>
        </GlassCard>
        <div
          ref={certRef}
          className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 p-10 text-center text-white shadow-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-violet-200">Certificate of completion</p>
          <h2 className="mt-4 text-4xl" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            {certMeta.student || 'Student Name'}
          </h2>
          <p className="mt-2 text-lg text-slate-200">completed</p>
          <p className="mt-2 text-2xl font-semibold text-white">{certMeta.course || 'Course Title'}</p>
          <p className="mt-8 text-sm text-slate-400">{format(new Date(), 'MMMM d, yyyy')}</p>
        </div>
        <div className="mt-4">
          <TextField select label="Mark certificate issued for enrollment id" fullWidth SelectProps={{ displayEmpty: true }}>
            <MenuItem value="">Select after you track ID from Firestore</MenuItem>
          </TextField>
          <p className="mt-2 text-xs text-slate-500">
            Use Firestore console or extend this form with enrollment picker; call setCertificateIssued(id, true) from support tooling.
          </p>
        </div>
      </TabPanel>
    </PageTransition>
  )
}
