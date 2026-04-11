import { motion } from 'framer-motion'

function Bar({ className = '' }) {
  return (
    <div
      className={`animate-shimmer rounded-md bg-slate-200/80 dark:bg-slate-700/50 ${className}`}
      aria-hidden
    />
  )
}

/**
 * Skeleton grid for course listings.
 */
export function CourseGridSkeleton({ count = 8 }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.04 }}
          className="glass-panel overflow-hidden p-0"
        >
          <Bar className="h-40 w-full rounded-none" />
          <div className="space-y-3 p-4">
            <Bar className="h-4 w-3/4" />
            <Bar className="h-3 w-1/2" />
            <Bar className="h-3 w-full" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function TableRowsSkeleton({ rows = 5 }) {
  return (
    <div className="space-y-2" aria-hidden>
      {Array.from({ length: rows }).map((_, i) => (
        <Bar key={i} className="h-10 w-full" />
      ))}
    </div>
  )
}

export function DashboardCardSkeleton() {
  return (
    <div className="glass-panel p-6">
      <Bar className="mb-4 h-6 w-1/3" />
      <Bar className="h-48 w-full" />
    </div>
  )
}
