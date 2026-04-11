import { useAuthStore } from '../store/authStore'

/**
 * Current Firebase user, Firestore profile, and loading flag.
 */
export function useAuth() {
  const user = useAuthStore((s) => s.user)
  const profile = useAuthStore((s) => s.profile)
  const authLoading = useAuthStore((s) => s.authLoading)
  return { user, profile, authLoading }
}
