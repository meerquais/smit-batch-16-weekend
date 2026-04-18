import { useCallback, useSyncExternalStore } from 'react'

/**
 * @template T
 * @param {string} key
 * @param {T} initialValue
 * @returns {[T, (v: T | ((prev: T) => T)) => void]}
 */
export function useLocalStorage(key, initialValue) {
  const subscribe = useCallback(
    (cb) => {
      const onStorage = (e) => {
        if (e.key === key || e.key === null) cb()
      }
      window.addEventListener('storage', onStorage)
      return () => window.removeEventListener('storage', onStorage)
    },
    [key]
  )

  const getSnapshot = useCallback(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw === null) return initialValue
      return JSON.parse(raw)
    } catch {
      return initialValue
    }
  }, [key, initialValue])

  const value = useSyncExternalStore(subscribe, getSnapshot, () => initialValue)

  const setValue = useCallback(
    (next) => {
      try {
        const resolved = typeof next === 'function' ? next(getSnapshot()) : next
        window.localStorage.setItem(key, JSON.stringify(resolved))
        window.dispatchEvent(new Event('storage'))
      } catch {
        /* ignore quota / private mode */
      }
    },
    [key, getSnapshot]
  )

  return [value, setValue]
}
