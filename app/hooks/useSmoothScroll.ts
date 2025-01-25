import { useCallback } from "react"

export const useSmoothScroll = () => {
  const scrollTo = useCallback((element: HTMLElement | null, offset = 0) => {
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    const duration = 2000 // Increased duration for even slower scroll (2000ms = 2 seconds)

    const start = window.pageYOffset
    const startTime = "now" in window.performance ? performance.now() : new Date().getTime()

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easeInOutCubic =
        progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

      window.scrollTo(0, start + (offsetPosition - start) * easeInOutCubic)

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  return scrollTo
}

