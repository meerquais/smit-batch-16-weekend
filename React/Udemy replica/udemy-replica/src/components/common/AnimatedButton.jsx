import { motion } from 'framer-motion'

/**
 * @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }} props
 */
export function AnimatedButton({ children, className = '', type = 'button', ...rest }) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg gradient-brand ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
