import { format, addDays, startOfWeek } from 'date-fns'
import Paper from '@mui/material/Paper'

/**
 * Compact week strip for planning context.
 * @param {{ anchorDate?: Date }} props
 */
export function CalendarStrip({ anchorDate = new Date() }) {
  const start = startOfWeek(anchorDate, { weekStartsOn: 1 })
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i))

  return (
    <Paper className="glass-panel flex flex-wrap gap-2 p-3">
      {days.map((d) => (
        <div
          key={d.toISOString()}
          className="min-w-[72px] flex-1 rounded-lg border border-white/15 bg-white/40 px-2 py-2 text-center dark:bg-black/30"
        >
          <div className="text-xs uppercase text-slate-500">{format(d, 'EEE')}</div>
          <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">{format(d, 'd')}</div>
        </div>
      ))}
    </Paper>
  )
}
