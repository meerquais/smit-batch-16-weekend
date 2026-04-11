import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUiStore = create(
  persist(
    (set) => ({
      /** @type {'light' | 'dark'} */
      theme: 'dark',
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      /** @param {'light' | 'dark'} theme */
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'udemy-replica-ui' }
  )
)
