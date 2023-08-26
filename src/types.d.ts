export interface StaggerTextProps {
  startTreshold?: number
  staggerType?: 'word' | 'letter'
  staggerDuration?: number
  staggerDelay?: number
  staggerEasing?: string
  hasInlineBlockWrapper?: boolean
  startDelay?: number
  shouldStart?: boolean
  onStaggerComplete?: () => void
  children: string
}
