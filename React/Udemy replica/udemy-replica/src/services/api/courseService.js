import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { COLLECTIONS, COURSE_STATUS } from '../../config/constants'
import { slugify } from '../../utils/slug'

/**
 * @param {object} course
 * @param {string} course.title
 * @param {string} [course.description]
 * @param {string} course.categoryId
 * @param {string} course.teacherId
 * @param {number} course.price
 * @param {string} [course.thumbnail]
 * @param {string} course.level
 * @param {string} course.duration
 * @param {'draft'|'published'} course.status
 */
export async function createCourse(course) {
  if (!db) throw new Error('Firestore unavailable.')
  const slugBase = slugify(course.title)
  const ref = await addDoc(collection(db, COLLECTIONS.courses), {
    title: course.title,
    slug: `${slugBase}-${Date.now().toString(36)}`,
    description: course.description || '',
    categoryId: course.categoryId,
    teacherId: course.teacherId,
    price: Number(course.price) || 0,
    thumbnail: course.thumbnail || '',
    level: course.level || 'beginner',
    duration: course.duration || '',
    enrolledStudents: 0,
    rating: 0,
    status: course.status || COURSE_STATUS.DRAFT,
    createdAt: serverTimestamp(),
  })
  return ref.id
}

/**
 * @param {string} courseId
 * @param {object} patch
 */
export async function updateCourse(courseId, patch) {
  if (!db) throw new Error('Firestore unavailable.')
  const data = { ...patch }
  if (typeof patch.title === 'string' && patch.title) {
    data.slug = `${slugify(patch.title)}-${courseId.slice(0, 6)}`
  }
  await updateDoc(doc(db, COLLECTIONS.courses, courseId), data)
}

/**
 * @param {string} courseId
 */
export async function deleteCourse(courseId) {
  if (!db) throw new Error('Firestore unavailable.')
  const batch = writeBatch(db)
  const lessonsSnap = await getDocs(
    collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.lessons)
  )
  lessonsSnap.forEach((d) => batch.delete(d.ref))
  const quizzesSnap = await getDocs(
    collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.quizzes)
  )
  quizzesSnap.forEach((d) => batch.delete(d.ref))
  const assignSnap = await getDocs(
    collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.assignments)
  )
  for (const ad of assignSnap.docs) {
    const subs = await getDocs(collection(ad.ref, COLLECTIONS.submissions))
    subs.forEach((s) => batch.delete(s.ref))
    batch.delete(ad.ref)
  }
  batch.delete(doc(db, COLLECTIONS.courses, courseId))
  await batch.commit()
}

/**
 * @param {string} slug
 * @returns {Promise<object | null>}
 */
export async function getCourseBySlug(slug) {
  if (!db) return null
  const q = query(
    collection(db, COLLECTIONS.courses),
    where('slug', '==', slug),
    limit(1)
  )
  const snap = await getDocs(q)
  if (snap.empty) return null
  const d = snap.docs[0]
  return { id: d.id, ...d.data() }
}

/**
 * @param {string} courseId
 */
export async function getCourseById(courseId) {
  if (!db) return null
  const s = await getDoc(doc(db, COLLECTIONS.courses, courseId))
  if (!s.exists()) return null
  return { id: s.id, ...s.data() }
}

/**
 * @param {{ status?: string, categoryId?: string }} [filters]
 */
export async function listCourses(filters = {}) {
  if (!db) return []
  let q = query(collection(db, COLLECTIONS.courses), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  let list = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  if (filters.status) list = list.filter((c) => c.status === filters.status)
  if (filters.categoryId) list = list.filter((c) => c.categoryId === filters.categoryId)
  return list
}

/**
 * @param {string} teacherId
 */
export async function listCoursesByTeacher(teacherId) {
  if (!db) return []
  const q = query(
    collection(db, COLLECTIONS.courses),
    where('teacherId', '==', teacherId),
    orderBy('createdAt', 'desc')
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} courseId
 * @param {object} lesson
 */
export async function addLesson(courseId, lesson) {
  if (!db) throw new Error('Firestore unavailable.')
  return addDoc(collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.lessons), {
    title: lesson.title,
    type: lesson.type,
    content: lesson.content || '',
    duration: lesson.duration || '',
    order: lesson.order ?? 0,
    createdAt: serverTimestamp(),
  })
}

/**
 * @param {string} courseId
 * @param {string} lessonId
 * @param {object} patch
 */
export async function updateLesson(courseId, lessonId, patch) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.courses, courseId, COLLECTIONS.lessons, lessonId), patch)
}

/**
 * @param {string} courseId
 * @param {string} lessonId
 */
export async function deleteLesson(courseId, lessonId) {
  if (!db) throw new Error('Firestore unavailable.')
  await deleteDoc(doc(db, COLLECTIONS.courses, courseId, COLLECTIONS.lessons, lessonId))
}

/**
 * @param {string} courseId
 * @returns {Promise<Array<object>>}
 */
export async function listLessons(courseId) {
  if (!db) return []
  const q = query(
    collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.lessons),
    orderBy('order', 'asc')
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} courseId
 * @param {object} quiz
 */
export async function addQuiz(courseId, quiz) {
  if (!db) throw new Error('Firestore unavailable.')
  return addDoc(collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.quizzes), {
    title: quiz.title,
    timeLimit: Number(quiz.timeLimit) || 0,
    passingScore: Number(quiz.passingScore) || 60,
    questions: quiz.questions || [],
    totalPoints: Number(quiz.totalPoints) || 0,
    createdAt: serverTimestamp(),
  })
}

/**
 * @param {string} courseId
 */
export async function listQuizzes(courseId) {
  if (!db) return []
  const snap = await getDocs(
    collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.quizzes)
  )
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} courseId
 * @param {string} quizId
 * @param {object} patch
 */
export async function updateQuiz(courseId, quizId, patch) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.courses, courseId, COLLECTIONS.quizzes, quizId), patch)
}

/**
 * @param {string} courseId
 * @param {object} assignment
 */
export async function addAssignment(courseId, assignment) {
  if (!db) throw new Error('Firestore unavailable.')
  return addDoc(collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.assignments), {
    title: assignment.title,
    description: assignment.description || '',
    deadline: assignment.deadline || null,
    maxScore: Number(assignment.maxScore) || 100,
    submissionType: assignment.submissionType || 'text',
    createdAt: serverTimestamp(),
  })
}

/**
 * @param {string} courseId
 */
export async function listAssignments(courseId) {
  if (!db) return []
  const snap = await getDocs(
    collection(db, COLLECTIONS.courses, courseId, COLLECTIONS.assignments)
  )
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} courseId
 * @param {string} assignmentId
 * @param {string} userId
 * @param {object} submission
 */
export async function upsertSubmission(courseId, assignmentId, userId, submission) {
  if (!db) throw new Error('Firestore unavailable.')
  const ref = doc(
    db,
    COLLECTIONS.courses,
    courseId,
    COLLECTIONS.assignments,
    assignmentId,
    COLLECTIONS.submissions,
    userId
  )
  await setDoc(
    ref,
    {
      userId,
      courseId,
      text: submission.text || '',
      fileURL: submission.fileURL || '',
      submittedAt: serverTimestamp(),
    },
    { merge: true }
  )
}

/**
 * @param {string} courseId
 * @param {string} assignmentId
 * @param {string} userId
 * @param {{ score: number, feedback?: string }} grade
 */
export async function gradeSubmission(courseId, assignmentId, userId, grade) {
  if (!db) throw new Error('Firestore unavailable.')
  const ref = doc(
    db,
    COLLECTIONS.courses,
    courseId,
    COLLECTIONS.assignments,
    assignmentId,
    COLLECTIONS.submissions,
    userId
  )
  await setDoc(
    ref,
    {
      score: grade.score,
      feedback: grade.feedback || '',
      gradedAt: serverTimestamp(),
    },
    { merge: true }
  )
}

/**
 * @param {string} courseId
 * @param {string} assignmentId
 */
export async function listSubmissionsForAssignment(courseId, assignmentId) {
  if (!db) return []
  const snap = await getDocs(
    collection(
      db,
      COLLECTIONS.courses,
      courseId,
      COLLECTIONS.assignments,
      assignmentId,
      COLLECTIONS.submissions
    )
  )
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} courseId
 */
export async function incrementEnrolled(courseId) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.courses, courseId), {
    enrolledStudents: increment(1),
  })
}
