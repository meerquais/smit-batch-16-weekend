import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { COLLECTIONS, ENROLLMENT_STATUS } from '../../config/constants'
import { incrementEnrolled } from './courseService'

/**
 * @param {string} userId
 * @param {string} courseId
 */
export function enrollmentDocId(userId, courseId) {
  return `${userId}_${courseId}`
}

/**
 * @param {string} userId
 * @param {string} courseId
 * @returns {Promise<object | null>}
 */
export async function getEnrollment(userId, courseId) {
  if (!db) return null
  const id = enrollmentDocId(userId, courseId)
  const snap = await getDoc(doc(db, COLLECTIONS.enrollments, id))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

/**
 * @param {string} userId
 * @param {string} courseId
 */
export async function enrollStudent(userId, courseId) {
  if (!db) throw new Error('Firestore unavailable.')
  const id = enrollmentDocId(userId, courseId)
  const ref = doc(db, COLLECTIONS.enrollments, id)
  const existing = await getDoc(ref)
  if (existing.exists()) return id
  await setDoc(ref, {
    userId,
    courseId,
    enrolledAt: serverTimestamp(),
    status: ENROLLMENT_STATUS.ENROLLED,
    progress: 0,
    completedLessons: [],
    certificateIssued: false,
  })
  await incrementEnrolled(courseId)
  return id
}

/**
 * @param {string} userId
 * @param {string} courseId
 * @param {number} progressPercent
 * @param {string[]} completedLessons
 */
export async function updateEnrollmentProgress(
  userId,
  courseId,
  progressPercent,
  completedLessons
) {
  if (!db) throw new Error('Firestore unavailable.')
  const id = enrollmentDocId(userId, courseId)
  await updateDoc(doc(db, COLLECTIONS.enrollments, id), {
    progress: Math.min(100, Math.max(0, progressPercent)),
    completedLessons,
  })
}

/**
 * @param {string} enrollmentId
 * @param {'enrolled'|'pending'|'dropped'|'completed'} status
 */
export async function updateEnrollmentStatus(enrollmentId, status) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.enrollments, enrollmentId), { status })
}

/**
 * @param {string} enrollmentId
 * @param {boolean} issued
 */
export async function setCertificateIssued(enrollmentId, issued) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.enrollments, enrollmentId), {
    certificateIssued: issued,
  })
}

/**
 * @param {string} userId
 * @returns {Promise<Array<object>>}
 */
export async function listEnrollmentsByUser(userId) {
  if (!db) return []
  const q = query(collection(db, COLLECTIONS.enrollments), where('userId', '==', userId))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} courseId
 * @returns {Promise<Array<object>>}
 */
export async function listEnrollmentsByCourse(courseId) {
  if (!db) return []
  const q = query(collection(db, COLLECTIONS.enrollments), where('courseId', '==', courseId))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} enrollmentId
 * @param {string} quizId
 * @param {{ score: number, answers: object[], passed: boolean }} attempt
 */
export async function saveQuizAttempt(enrollmentId, quizId, attempt) {
  if (!db) throw new Error('Firestore unavailable.')
  return addDoc(
    collection(db, COLLECTIONS.enrollments, enrollmentId, COLLECTIONS.quizAttempts),
    {
      quizId,
      score: attempt.score,
      answers: attempt.answers,
      passed: attempt.passed,
      submittedAt: serverTimestamp(),
    }
  )
}

/**
 * @param {string} enrollmentId
 * @returns {Promise<Array<object>>}
 */
export async function listQuizAttempts(enrollmentId) {
  if (!db) return []
  const snap = await getDocs(
    collection(db, COLLECTIONS.enrollments, enrollmentId, COLLECTIONS.quizAttempts)
  )
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}
