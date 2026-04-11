import { create } from 'zustand'

/**
 * Lightweight UI selection for course builder / player.
 */
export const useCourseStore = create((set) => ({
  /** @type {string | null} */
  activeCourseId: null,
  /** @type {string | null} */
  activeLessonId: null,
  setActiveCourse: (id) => set({ activeCourseId: id }),
  setActiveLesson: (id) => set({ activeLessonId: id }),
  clearCourseContext: () => set({ activeCourseId: null, activeLessonId: null }),
}))
