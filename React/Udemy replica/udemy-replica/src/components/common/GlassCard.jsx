import { motion } from 'framer-motion'

/**
 * @param {import('react').HTMLAttributes<HTMLDivElement> & { className?: string, hover?: boolean }} props
 */
export function GlassCard({ children, className = '', hover = false, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.35 }}
      className={`glass-card ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
