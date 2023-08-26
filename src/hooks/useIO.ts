import { useEffect, useRef } from 'react'

const useIO = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {},
  shouldObserve: boolean = true
): [React.RefObject<HTMLElement>, IntersectionObserver | undefined] => {
  const targetRef = useRef<HTMLElement | null>(null)
  const observerRef = useRef<IntersectionObserver | undefined>(undefined)

  useEffect(() => {
    if (shouldObserve) {
      const observer = new IntersectionObserver(callback, options)
      observerRef.current = observer
      const currentTarget = targetRef.current

      if (currentTarget) {
        observer.observe(currentTarget)
      }

      return () => {
        if (currentTarget) {
          observer.unobserve(currentTarget)
        }
      }
    }
  }, [callback, options, shouldObserve])

  return [targetRef, observerRef.current]
}

export default useIO
