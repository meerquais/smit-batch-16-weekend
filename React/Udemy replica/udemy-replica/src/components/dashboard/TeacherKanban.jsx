import { useMemo, useState } from 'react'
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors, useDroppable } from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const COLUMN_DEFS = [
  { id: 'ideas', title: 'Ideas' },
  { id: 'building', title: 'Building' },
  { id: 'review', title: 'Review' },
  { id: 'published', title: 'Live' },
]

function CourseCard({ course, isOverlay }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: course.id })
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`mb-2 cursor-grab rounded-lg border border-white/20 bg-white/70 p-2 text-sm shadow-sm dark:bg-black/45 ${
        isDragging && !isOverlay ? 'opacity-40' : ''
      } ${isOverlay ? 'shadow-xl ring-2 ring-violet-400/50' : ''}`}
    >
      {course.title}
    </div>
  )
}

function Column({ id, title, courseIds, byId }) {
  const { setNodeRef, isOver } = useDroppable({ id })
  return (
    <Paper
      ref={setNodeRef}
      className={`min-h-[240px] flex-1 border p-3 backdrop-blur-md ${
        isOver ? 'border-violet-400/70 bg-violet-500/15' : 'border-white/15 bg-white/30 dark:bg-black/25'
      }`}
    >
      <Typography variant="subtitle2" className="mb-2 font-semibold">
        {title}
      </Typography>
      {courseIds.map((cid) => {
        const c = byId[cid]
        if (!c) return null
        return <CourseCard key={cid} course={c} />
      })}
    </Paper>
  )
}

/**
 * @param {{ courses: object[], columnMap: Record<string, string[]>, onColumnMapChange: (next: Record<string, string[]>) => void }} props
 */
export function TeacherKanban({ courses, columnMap, onColumnMapChange }) {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }))
  const [activeId, setActiveId] = useState(null)

  const byId = useMemo(() => Object.fromEntries(courses.map((c) => [c.id, c])), [courses])

  const findColumnOf = (courseId) => {
    for (const col of COLUMN_DEFS) {
      if (columnMap[col.id]?.includes(courseId)) return col.id
    }
    return null
  }

  const handleDragEnd = ({ active, over }) => {
    setActiveId(null)
    if (!over) return
    const courseId = String(active.id)
    const overId = String(over.id)
    const targetCol = COLUMN_DEFS.some((c) => c.id === overId) ? overId : findColumnOf(overId)
    if (!targetCol) return
    const fromCol = findColumnOf(courseId)
    if (!fromCol || fromCol === targetCol) return

    const next = { ...columnMap }
    next[fromCol] = (next[fromCol] || []).filter((id) => id !== courseId)
    next[targetCol] = [...(next[targetCol] || []), courseId]
    onColumnMapChange(next)
  }

  const activeCourse = activeId ? byId[activeId] : null

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => setActiveId(String(active.id))}
      onDragCancel={() => setActiveId(null)}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {COLUMN_DEFS.map((col) => (
          <Column
            key={col.id}
            id={col.id}
            title={col.title}
            courseIds={columnMap[col.id] || []}
            byId={byId}
          />
        ))}
      </div>
      <DragOverlay>
        {activeCourse ? <CourseCard course={activeCourse} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  )
}
