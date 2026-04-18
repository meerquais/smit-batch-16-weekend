import { createElement } from 'react'

/**
 * @param {{ as?: keyof JSX.IntrinsicElements, children: import('react').ReactNode, className?: string }} props
 */
export function GradientText({ as = 'span', children, className = '' }) {
  return createElement(
    as,
    {
      className: `bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent ${className}`,
    },
    children
  )
}
