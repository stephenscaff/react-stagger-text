import React, { useState } from 'react'
import useIO from './hooks/useIO'
import { StaggerTextProps } from './types'

const StaggerText: React.FC<StaggerTextProps> = ({
  startTreshold = 0.1,
  shouldStart = true,
  staggerType = 'word',
  startDelay = 0,
  staggerDuration = 0.5,
  staggerDelay = 0.05,
  staggerEasing = 'ease-in',
  hasInlineBlockWrapper = false,
  onStaggerComplete,
  children
}) => {
  const [animate, setAnimate] = useState(false)
  const [completedTransitions, setCompletedTransitions] = useState(0)

  const callback: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        setAnimate(true)
      }, startDelay)
      if (observer) {
        observer.disconnect()
      }
    }
  }

  const options: IntersectionObserverInit = {
    threshold: startTreshold
  }

  const [textRef, observer] = useIO(callback, options, shouldStart)

  const handleTransitionEnd = () => {
    setCompletedTransitions((prevCount) => prevCount + 1)
    if (completedTransitions === spans.length - 1) {
      if (onStaggerComplete) {
        onStaggerComplete()
      }
    }
  }

  function getSpans(input: string): string[] {
    return staggerType == 'word' ? input.split(' ') : [...input]
  }

  const spans = getSpans(children)

  return (
    <span
      ref={textRef as React.RefObject<HTMLDivElement>}
      style={hasInlineBlockWrapper ? { display: 'inline-block' } : {}}
    >
      {spans.map((item, i) => (
        <span
          key={'span-' + i}
          className="stagger__item"
          style={{
            transitionDelay: `${i * staggerDelay}s`,
            transitionProperty: 'opacity',
            transitionDuration: `${staggerDuration}s`,
            transitionTimingFunction: staggerEasing,
            opacity: animate ? 1 : 0
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {item + (staggerType == 'word' ? ' ' : '')}
        </span>
      ))}
    </span>
  )
}

export default StaggerText
