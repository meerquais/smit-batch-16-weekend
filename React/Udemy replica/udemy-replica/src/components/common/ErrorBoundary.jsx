import { Component } from 'react'
import { GlassCard } from './GlassCard'
import { GradientText } from './GradientText'
import { AnimatedButton } from './AnimatedButton'

export class ErrorBoundary extends Component {
  /** @param {import('react').PropsWithChildren} props */
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    /* Error surface is handled in render. */
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[50vh] items-center justify-center p-6">
          <GlassCard className="max-w-md p-8 text-center">
            <GradientText as="h2" className="mb-2 text-2xl font-semibold">
              Something went wrong
            </GradientText>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Please refresh the page or return home. If the problem persists, try again later.
            </p>
            <AnimatedButton type="button" onClick={() => window.location.assign('/')}>
              Go home
            </AnimatedButton>
          </GlassCard>
        </div>
      )
    }
    return this.props.children
  }
}
