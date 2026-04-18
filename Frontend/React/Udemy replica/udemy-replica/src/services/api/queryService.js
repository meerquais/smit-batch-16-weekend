import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { COLLECTIONS } from '../../config/constants'

/**
 * @param {{ userId: string, subject: string, message: string }} input
 */
export async function createSupportQuery(input) {
  if (!db) throw new Error('Firestore unavailable.')
  return addDoc(collection(db, COLLECTIONS.queries), {
    userId: input.userId,
    subject: input.subject,
    message: input.message,
    status: 'open',
    createdAt: serverTimestamp(),
  })
}

/**
 * @returns {Promise<Array<object>>}
 */
export async function listAllQueries() {
  if (!db) return []
  const q = query(collection(db, COLLECTIONS.queries), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} id
 * @param {'open'|'closed'} status
 */
export async function updateQueryStatus(id, status) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.queries, id), { status })
}
