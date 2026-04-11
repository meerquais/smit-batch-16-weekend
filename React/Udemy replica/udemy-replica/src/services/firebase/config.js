import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const isFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY && import.meta.env.VITE_FIREBASE_PROJECT_ID
)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

/** @type {import('firebase/app').FirebaseApp | null} */
let appInstance = null

/**
 * @returns {import('firebase/app').FirebaseApp}
 */
export function getFirebaseApp() {
  if (!isFirebaseConfigured) {
    throw new Error(
      'Firebase is not configured. Add a .env file with VITE_FIREBASE_* from .env.example.'
    )
  }
  if (!appInstance) {
    appInstance = getApps().length ? getApp() : initializeApp(firebaseConfig)
  }
  return appInstance
}

/** @type {import('firebase/auth').Auth | null} */
export let auth = null
/** @type {import('firebase/firestore').Firestore | null} */
export let db = null

if (isFirebaseConfigured) {
  const app = getFirebaseApp()
  auth = getAuth(app)
  db = getFirestore(app)
}
