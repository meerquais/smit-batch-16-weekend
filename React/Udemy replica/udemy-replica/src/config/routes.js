/**
 * Central route path constants for navigation and guards.
 */
export const ROUTES = {
  home: '/',
  courses: '/courses',
  courseDetail: (slug) => `/courses/${slug}`,
  about: '/about',
  login: '/auth/login',
  signup: '/auth/signup',
  resetPassword: '/auth/reset',
  admin: '/dashboard/admin',
  teacher: '/dashboard/teacher',
  student: '/dashboard/student',
}
