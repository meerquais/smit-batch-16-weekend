import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PublicLayout } from './components/layouts/PublicLayout'
import { AuthLayout } from './components/layouts/AuthLayout'
import { DashboardLayout } from './components/layouts/DashboardLayout'
import { PrivateRoute } from './components/routing/PrivateRoute'
import { AdminRoute } from './components/routing/AdminRoute'
import { TeacherRoute } from './components/routing/TeacherRoute'
import { StudentRoute } from './components/routing/StudentRoute'
import { LoadingSpinner } from './components/common/LoadingSpinner'
import { ROUTES } from './config/routes'

const Home = lazy(() => import('./pages/public/Home.jsx'))
const Courses = lazy(() => import('./pages/public/Courses.jsx'))
const CourseDetails = lazy(() => import('./pages/public/CourseDetails.jsx'))
const About = lazy(() => import('./pages/public/About.jsx'))
const Login = lazy(() => import('./pages/auth/Login.jsx'))
const Signup = lazy(() => import('./pages/auth/Signup.jsx'))
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword.jsx'))
const AdminDashboard = lazy(() => import('./pages/dashboard/admin/AdminDashboard.jsx'))
const TeacherDashboard = lazy(() => import('./pages/dashboard/teacher/TeacherDashboard.jsx'))
const StudentDashboard = lazy(() => import('./pages/dashboard/student/StudentDashboard.jsx'))

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner label="Loading page" />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:slug" element={<CourseDetails />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />
          <Route path="auth/reset" element={<ResetPassword />} />
        </Route>
        <Route
          path="dashboard/admin"
          element={
            <AdminRoute>
              <DashboardLayout title="Admin" nav={[{ label: 'Overview', to: ROUTES.admin }]} />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route
          path="dashboard/teacher"
          element={
            <TeacherRoute>
              <DashboardLayout title="Teacher" nav={[{ label: 'Studio', to: ROUTES.teacher }]} />
            </TeacherRoute>
          }
        >
          <Route index element={<TeacherDashboard />} />
        </Route>
        <Route
          path="dashboard/student"
          element={
            <StudentRoute>
              <DashboardLayout title="Student" nav={[{ label: 'Progress', to: ROUTES.student }]} />
            </StudentRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Navigate to={ROUTES.student} replace />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Routes>
    </Suspense>
  )
}
