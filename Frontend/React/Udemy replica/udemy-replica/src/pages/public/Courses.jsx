import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { listCourses } from '../../services/api/courseService'
import { listCategories } from '../../services/api/categoryService'
import { COURSE_STATUS } from '../../config/constants'
import { ROUTES } from '../../config/routes'
import { useDebounce } from '../../hooks/useDebounce'
import { GlassCard } from '../../components/common/GlassCard'
import { PageTransition } from '../../components/common/PageTransition'
import { CourseGridSkeleton } from '../../components/common/Skeletons'
import MenuItem from '@mui/material/MenuItem'

export default function Courses() {
  const [q, setQ] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const debounced = useDebounce(q, 280)

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: listCategories,
  })

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses', 'published-list'],
    queryFn: () => listCourses({ status: COURSE_STATUS.PUBLISHED }),
  })

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchQ =
        !debounced ||
        c.title?.toLowerCase().includes(debounced.toLowerCase()) ||
        c.description?.toLowerCase().includes(debounced.toLowerCase())
      const matchCat = !categoryId || c.categoryId === categoryId
      return matchQ && matchCat
    })
  }, [courses, debounced, categoryId])

  return (
    <PageTransition>
      <div className="mb-10 text-left">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Explore courses</h1>
        <p className="text-slate-600 dark:text-slate-400">Search, filter, and open a course to start learning.</p>
      </div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <TextField
          className="md:flex-1"
          placeholder="Search by title or description"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" className="text-slate-400" />
              </InputAdornment>
            ),
          }}
          aria-label="Search courses"
        />
        <TextField
          select
          label="Category"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="md:w-56"
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {isLoading ? (
        <CourseGridSkeleton />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.04, 0.4) }}
            >
              <Link to={ROUTES.courseDetail(c.slug)} className="block no-underline">
                <GlassCard
                  hover
                  className="group h-full overflow-hidden p-0 transition-shadow duration-300 hover:shadow-2xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="h-40 w-full bg-cover bg-center"
                    style={{
                      backgroundImage: c.thumbnail
                        ? `url(${c.thumbnail})`
                        : 'linear-gradient(135deg,#4c1d95,#0369a1)',
                    }}
                  />
                  <div className="p-4 text-left">
                    <h2 className="text-lg font-semibold text-slate-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-300">
                      {c.title}
                    </h2>
                    <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{c.description}</p>
                    <div className="mt-3 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span>{c.level}</span>
                      <span>{c.price ? `$${c.price}` : 'Free'}</span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
      {!isLoading && filtered.length === 0 ? (
        <p className="py-16 text-center text-slate-500">No courses match your filters.</p>
      ) : null}
    </PageTransition>
  )
}
