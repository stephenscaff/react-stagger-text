export interface StaggerTextProps {
  shouldStart?: boolean
  startTreshold?: number
  startDelay?: number
  staggerType?: 'word' | 'letter'
  staggerDuration?: number
  staggerDelay?: number
  staggerEasing?: string
  hasInlineBlockWrapper?: boolean
  onStaggerComplete?: () => void
  children: string
}
