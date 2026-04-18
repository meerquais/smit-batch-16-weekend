import { useRef, useState } from 'react'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * @param {{ accept?: string, label?: string, onFile: (file: File | null) => void, disabled?: boolean }} props
 */
export function FileUploader({ accept = '*/*', label = 'Upload file', onFile, disabled }) {
  const inputRef = useRef(null)
  const [name, setName] = useState('')

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        aria-label={label}
        disabled={disabled}
        onChange={(e) => {
          const file = e.target.files?.[0] || null
          setName(file?.name || '')
          onFile(file)
        }}
      />
      <Button
        variant="outlined"
        startIcon={<CloudUploadIcon />}
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
      >
        {label}
      </Button>
      <AnimatePresence mode="wait">
        {name ? (
          <motion.p
            key={name}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-sm text-slate-600 dark:text-slate-300"
          >
            Selected: {name}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
