import { motion } from 'framer-motion'

/**
 * @param {{ label?: string, className?: string }} props
 */
export function LoadingSpinner({ label = 'Loading', className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 py-12 ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <motion.div
        className="h-12 w-12 rounded-full border-2 border-violet-500/30 border-t-violet-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
      />
      <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
    </div>
  )
}
