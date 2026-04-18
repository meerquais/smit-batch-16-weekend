import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { COLLECTIONS, ROLES } from '../../config/constants'

/**
 * @param {string} uid
 * @param {object} data
 */
export async function setUserProfile(uid, data) {
  if (!db) throw new Error('Firestore unavailable.')
  await setDoc(
    doc(db, COLLECTIONS.users, uid),
    {
      ...data,
      uid,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  )
}

/**
 * @param {string} uid
 * @returns {Promise<object | null>}
 */
export async function fetchUserProfile(uid) {
  if (!db) return null
  const snap = await getDoc(doc(db, COLLECTIONS.users, uid))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

/**
 * Create student profile after Auth signup.
 * @param {import('firebase/auth').User} user
 * @param {string} displayName
 */
export async function createStudentProfile(user, displayName) {
  await setUserProfile(user.uid, {
    email: user.email || '',
    displayName: displayName || user.displayName || 'Student',
    role: ROLES.STUDENT,
    photoURL: user.photoURL || '',
    createdAt: serverTimestamp(),
    isActive: true,
    preferences: { theme: 'system' },
  })
}

/**
 * @returns {Promise<Array<object>>}
 */
export async function listAllUsers() {
  if (!db) return []
  const q = query(collection(db, COLLECTIONS.users), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

/**
 * @param {string} uid
 * @param {object} patch
 */
export async function updateUserFields(uid, patch) {
  if (!db) throw new Error('Firestore unavailable.')
  await updateDoc(doc(db, COLLECTIONS.users, uid), {
    ...patch,
    updatedAt: serverTimestamp(),
  })
}

/**
 * Promote user to teacher (pending until isActive true).
 * @param {string} uid
 */
export async function setUserAsPendingTeacher(uid) {
  await updateUserFields(uid, { role: ROLES.TEACHER, isActive: false })
}

/**
 * Approve teacher account.
 * @param {string} uid
 */
export async function approveTeacher(uid) {
  await updateUserFields(uid, { isActive: true })
}
