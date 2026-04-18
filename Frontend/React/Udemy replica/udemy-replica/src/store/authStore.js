import { create } from 'zustand'

/**
 * @typedef {import('firebase/auth').User | null} AuthUser
 * @typedef {object | null} UserProfile
 */

export const useAuthStore = create((set) => ({
  /** @type {AuthUser} */
  user: null,
  /** @type {UserProfile} */
  profile: null,
  authLoading: true,
  /** @param {AuthUser} user */
  setUser: (user) => set({ user }),
  /** @param {UserProfile} profile */
  setProfile: (profile) => set({ profile }),
  /** @param {boolean} authLoading */
  setAuthLoading: (authLoading) => set({ authLoading }),
  reset: () => set({ user: null, profile: null, authLoading: false }),
}))
