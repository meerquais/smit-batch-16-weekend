import { useMemo } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import Paper from '@mui/material/Paper'

function SortableRow({ cat }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: cat.id,
  })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.85 : 1,
  }
  return (
    <Paper
      ref={setNodeRef}
      style={style}
      className="mb-2 flex items-center gap-2 border border-white/20 bg-white/50 p-3 dark:bg-black/30"
    >
      <button
        type="button"
        className="cursor-grab text-slate-400 hover:text-violet-500"
        aria-label={`Drag ${cat.name}`}
        {...attributes}
        {...listeners}
      >
        <DragIndicatorIcon fontSize="small" />
      </button>
      <span className="font-medium text-slate-800 dark:text-slate-100">{cat.name}</span>
      <span className="ml-auto text-xs text-slate-500">{cat.slug}</span>
    </Paper>
  )
}

/**
 * @param {{ categories: object[], onReorder: (ids: string[]) => void }} props
 */
export function CategorySortBoard({ categories, onReorder }) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const ids = useMemo(() => categories.map((c) => c.id), [categories])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (!over || active.id === over.id) return
        const oldIndex = ids.indexOf(String(active.id))
        const newIndex = ids.indexOf(String(over.id))
        if (oldIndex < 0 || newIndex < 0) return
        const next = arrayMove(ids, oldIndex, newIndex)
        onReorder(next)
      }}
    >
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        <div>
          {categories.map((c) => (
            <SortableRow key={c.id} cat={c} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
