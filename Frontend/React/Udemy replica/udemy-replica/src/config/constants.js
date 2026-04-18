/**
 * Firestore collection names and app constants.
 */
export const COLLECTIONS = {
  users: 'users',
  categories: 'categories',
  courses: 'courses',
  lessons: 'lessons',
  quizzes: 'quizzes',
  assignments: 'assignments',
  submissions: 'submissions',
  enrollments: 'enrollments',
  quizAttempts: 'quizAttempts',
  feedback: 'feedback',
  queries: 'queries',
}

/** @typedef {'admin' | 'teacher' | 'student'} UserRole */

export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
}

export const ENROLLMENT_STATUS = {
  ENROLLED: 'enrolled',
  PENDING: 'pending',
  DROPPED: 'dropped',
  COMPLETED: 'completed',
}

export const COURSE_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
}

export const LESSON_TYPES = {
  VIDEO: 'video',
  TEXT: 'text',
}

export const QUERY_PAGE_SIZE = 24
