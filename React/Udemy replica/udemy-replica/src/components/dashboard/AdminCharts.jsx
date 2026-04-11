import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts'

/**
 * @param {{ enrollmentsByCourse: { name: string, count: number }[], trend: { month: string, enrollments: number }[] }} props
 */
export function AdminCharts({ enrollmentsByCourse, trend }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Paper className="glass-panel !bg-white/40 p-4 dark:!bg-black/30">
        <Typography variant="subtitle1" className="mb-4 font-semibold">
          Enrollments by course
        </Typography>
        <div className="h-72 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={enrollmentsByCourse}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-18} textAnchor="end" height={70} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Paper>
      <Paper className="glass-panel !bg-white/40 p-4 dark:!bg-black/30">
        <Typography variant="subtitle1" className="mb-4 font-semibold">
          Activity trend
        </Typography>
        <div className="h-72 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="enrollments" stroke="#0ea5e9" strokeWidth={3} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Paper>
    </div>
  )
}
