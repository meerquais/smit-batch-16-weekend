import TextField from '@mui/material/TextField'
import { motion } from 'framer-motion'

/**
 * @param {import('@mui/material/TextField').TextFieldProps & { delay?: number }} props
 */
export function AnimatedInput({ delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.35 }}
    >
      <TextField fullWidth margin="normal" variant="outlined" {...props} />
    </motion.div>
  )
}
