import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from './config'

/**
 * @param {string} email
 * @param {string} password
 */
export async function registerEmailPassword(email, password) {
  if (!auth) throw new Error('Firebase Auth is not available.')
  return createUserWithEmailAndPassword(auth, email, password)
}

/**
 * @param {string} email
 * @param {string} password
 */
export async function loginEmailPassword(email, password) {
  if (!auth) throw new Error('Firebase Auth is not available.')
  return signInWithEmailAndPassword(auth, email, password)
}

export async function logoutUser() {
  if (!auth) return
  await signOut(auth)
}

/**
 * @param {string} email
 */
export async function sendReset(email) {
  if (!auth) throw new Error('Firebase Auth is not available.')
  await sendPasswordResetEmail(auth, email)
}

/**
 * @param {import('firebase/auth').User} user
 * @param {{ displayName?: string, photoURL?: string }} profile
 */
export async function updateUserProfile(user, profile) {
  await updateProfile(user, profile)
}

export { isFirebaseConfigured }
