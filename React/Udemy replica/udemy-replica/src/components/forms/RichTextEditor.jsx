import TextField from '@mui/material/TextField'

/**
 * Long-form editor (plain text / markdown-friendly). Avoids fragile contentEditable sync issues.
 * @param {{ value: string, onChange: (v: string) => void, label?: string, minRows?: number, disabled?: boolean }} props
 */
export function RichTextEditor({ value, onChange, label = 'Content', minRows = 8, disabled }) {
  return (
    <TextField
      label={label}
      multiline
      minRows={minRows}
      fullWidth
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      inputProps={{ 'aria-label': label }}
    />
  )
}
