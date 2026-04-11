import { useQuery } from '@tanstack/react-query'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase/config'

/**
 * Fetches a single Firestore document by path segments.
 * @param {string[]} pathSegments e.g. ['courses', id]
 * @param {{ enabled?: boolean }} [options]
 */
export function useFirestoreDoc(pathSegments, options = {}) {
  const enabled = Boolean(db && pathSegments?.length && options.enabled !== false)
  return useQuery({
    queryKey: ['firestore', ...pathSegments],
    enabled,
    queryFn: async () => {
      if (!db) return null
      const d = await getDoc(doc(db, ...pathSegments))
      if (!d.exists()) return null
      return { id: d.id, ...d.data() }
    },
  })
}
