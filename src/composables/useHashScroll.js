import { useRoute, useRouter } from 'vue-router'

function prefersReducedMotion () {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Scroll to a hash target after ensuring Home is mounted.
 * Matches AppBar contact/section navigation behavior.
 */
export function useHashScroll () {
  const route = useRoute()
  const router = useRouter()

  async function goToHash (e, hash) {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault()
    }

    const sel = hash.startsWith('#') ? hash : `#${hash}`

    if (route.path !== '/') {
      await router.push({ path: '/', hash: sel })
    } else if (route.hash !== sel) {
      await router.push({ path: '/', hash: sel })
    }

    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
    let attempts = 0
    const maxAttempts = 40

    const tick = () => {
      const target = document.querySelector(sel)
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' })
        return
      }
      if (attempts++ < maxAttempts) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }

  return { goToHash }
}

export default useHashScroll
