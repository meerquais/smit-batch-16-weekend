import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PageTransition } from '../../components/common/PageTransition'
import { GlassCard } from '../../components/common/GlassCard'

/**
 * @param {{ value: number, label: string }} props
 */
function Counter({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [v, setV] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const duration = 1200
    const t0 = performance.now()
    let raf = 0
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      setV(Math.round(value * p))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref}>
      <GlassCard className="p-6 text-center">
        <div className="text-4xl font-bold text-violet-600 dark:text-violet-300">{v}+</div>
        <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{label}</div>
      </GlassCard>
    </div>
  )
}

export default function About() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-semibold text-slate-900 dark:text-white">Built for serious learners</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Lumina pairs cinematic UI with Firebase-backed progress, quizzes, and certificates—so your platform feels
          bespoke, not boilerplate.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <Counter value={120} label="Expert-led lessons" />
        <Counter value={48} label="Cohort programs" />
        <Counter value={35} label="Countries represented" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 rounded-3xl border border-white/15 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-sky-500/20 p-8 text-left backdrop-blur-md"
      >
        <h2 className="mb-2 text-2xl font-semibold text-slate-900 dark:text-white">Our philosophy</h2>
        <p className="text-slate-700 dark:text-slate-300">
          Depth beats breadth. Every screen uses motion with purpose, glass surfaces for hierarchy, and typography that
          pairs Inter’s clarity with Playfair’s editorial calm.
        </p>
      </motion.div>
    </PageTransition>
  )
}
