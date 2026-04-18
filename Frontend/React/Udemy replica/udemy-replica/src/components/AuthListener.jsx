import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../services/firebase/config'
import { useAuthStore } from '../store/authStore'
import { fetchUserProfile } from '../services/api/userService'

/**
 * Subscribes to Firebase Auth and hydrates the user profile from Firestore.
 */
export function AuthListener() {
  const setUser = useAuthStore((s) => s.setUser)
  const setProfile = useAuthStore((s) => s.setProfile)
  const setAuthLoading = useAuthStore((s) => s.setAuthLoading)

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setAuthLoading(false)
      return undefined
    }
    const unsub = onAuthStateChanged(auth, async (user) => {
      setAuthLoading(true)
      setUser(user)
      if (user) {
        try {
          const profile = await fetchUserProfile(user.uid)
          setProfile(profile)
        } catch {
          setProfile(null)
        }
      } else {
        setProfile(null)
      }
      setAuthLoading(false)
    })
    return () => unsub()
  }, [setUser, setProfile, setAuthLoading])

  return null
}
