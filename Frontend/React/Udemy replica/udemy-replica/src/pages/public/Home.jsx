import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { listCourses } from '../../services/api/courseService'
import { COURSE_STATUS } from '../../config/constants'
import { ROUTES } from '../../config/routes'
import { GlassCard } from '../../components/common/GlassCard'
import { GradientText } from '../../components/common/GradientText'
import { CourseGridSkeleton } from '../../components/common/Skeletons'
import { PageTransition } from '../../components/common/PageTransition'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses', 'published-home'],
    queryFn: () => listCourses({ status: COURSE_STATUS.PUBLISHED }),
  })

  const featured = courses.slice(0, 6)

  return (
    <PageTransition>
      <section ref={heroRef} className="relative overflow-hidden rounded-3xl border border-white/15 gradient-midnight px-6 py-20 text-left text-white sm:px-12">
        <motion.div style={{ y }} className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-500/40 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-500/35 blur-3xl" />
        </motion.div>
        <div className="relative max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-200/90"
          >
            Premium learning
          </motion.p>
          <GradientText as="h1" className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Master skills with clarity, depth, and momentum.
          </GradientText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mb-8 text-lg text-slate-200/90"
          >
            Structured paths, crisp lessons, and measurable progress—without the noise of generic course sites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={ROUTES.courses}
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg gradient-brand no-underline"
              >
                Browse courses
              </Link>
            </motion.div>
            <Link
              to={ROUTES.signup}
              className="inline-flex items-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10"
            >
              Create free account
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Trending programs</h2>
            <p className="text-slate-600 dark:text-slate-400">Curated tracks with glass cards and motion-rich hover.</p>
          </div>
          <Link to={ROUTES.courses} className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
            View all
          </Link>
        </div>
        {isLoading ? (
          <CourseGridSkeleton count={6} />
        ) : (
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-3 md:overflow-visible">
            {featured.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="min-w-[260px] snap-center md:min-w-0"
              >
                <Link to={ROUTES.courseDetail(c.slug)} className="block no-underline">
                  <GlassCard hover className="h-full overflow-hidden p-0">
                    <div
                      className="h-36 w-full bg-cover bg-center"
                      style={{
                        backgroundImage: c.thumbnail
                          ? `url(${c.thumbnail})`
                          : 'linear-gradient(135deg,#7c3aed,#0ea5e9)',
                      }}
                    />
                    <div className="p-4 text-left">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{c.title}</h3>
                      <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{c.description}</p>
                      <span className="mt-2 inline-block text-xs font-semibold text-violet-600 dark:text-violet-300">
                        {c.level} · {c.duration || 'Self-paced'}
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  )
}
