import { addDoc, collection, serverTimestamp, query, where, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'
import { COLLECTIONS } from '../../config/constants'

/**
 * @param {{ userId: string, courseId: string, teacherId?: string, rating: number, review: string }} input
 */
export async function addFeedback(input) {
  if (!db) throw new Error('Firestore unavailable.')
  return addDoc(collection(db, COLLECTIONS.feedback), {
    userId: input.userId,
    courseId: input.courseId,
    teacherId: input.teacherId || '',
    rating: Math.min(5, Math.max(1, Number(input.rating) || 5)),
    review: input.review || '',
    createdAt: serverTimestamp(),
  })
}

/**
 * @param {string} courseId
 * @returns {Promise<Array<object>>}
 */
export async function listFeedbackForCourse(courseId) {
  if (!db) return []
  const q = query(
    collection(db, COLLECTIONS.feedback),
    where('courseId', '==', courseId),
    orderBy('createdAt', 'desc')
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}
