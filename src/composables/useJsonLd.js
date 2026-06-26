/**
 * src/composables/useJsonLd.js
 *
 * Injects a <script type="application/ld+json"> block into document.head on
 * mount and removes it on unmount, so navigating between routes (or opening
 * components that emit their own schema) never leaves duplicate or stale
 * structured data behind.
 *
 * @param {object|Array} data  A Schema.org object (or @graph) to serialize.
 * @param {string} [id]        Optional element id so the block is easy to find
 *                             and so a re-mount replaces rather than stacks.
 */
import { onMounted, onBeforeUnmount } from 'vue'

export function useJsonLd (data, id) {
  let el = null

  onMounted(() => {
    if (typeof document === 'undefined' || !data) return

    if (id) {
      const existing = document.getElementById(id)
      if (existing) existing.remove()
    }

    el = document.createElement('script')
    el.type = 'application/ld+json'
    if (id) el.id = id
    el.textContent = JSON.stringify(data)
    document.head.appendChild(el)
  })

  onBeforeUnmount(() => {
    el?.parentNode?.removeChild(el)
    el = null
  })
}

export default useJsonLd
