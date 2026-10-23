/**
 * Sets the document title, description, canonical URL, and JSON-LD while a
 * guide route is open, then puts the portfolio defaults back.
 */
import { watch, onBeforeUnmount } from 'vue'
import { SITE_URL } from '@/data/guides'

const DEFAULT_TITLE = 'Paintbrush Outdoors'
const DEFAULT_DESCRIPTION = 'Tyler Haddix - senior full-stack engineer shipping real apps, products, and hardware. An animated showcase of live products across web, mobile, GIS, AI, and IoT.'

function metaDescription () {
  let el = document.querySelector('meta[name="description"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  return el
}

function canonicalLink () {
  let el = document.getElementById('guide-canonical')
  if (!el) {
    el = document.createElement('link')
    el.id = 'guide-canonical'
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  return el
}

export function usePageMeta (source) {
  const description = metaDescription()
  const canonical = canonicalLink()
  let jsonLd = null

  function apply (meta) {
    if (!meta) return
    document.title = meta.title
    description.setAttribute('content', meta.description)
    canonical.href = meta.path ? `${SITE_URL}${meta.path}` : SITE_URL

    if (jsonLd) jsonLd.remove()
    if (!meta.jsonLd) {
      jsonLd = null
      return
    }
    jsonLd = document.createElement('script')
    jsonLd.type = 'application/ld+json'
    jsonLd.id = 'guide-jsonld'
    jsonLd.textContent = JSON.stringify(meta.jsonLd)
    document.head.appendChild(jsonLd)
  }

  const stop = watch(source, apply, { immediate: true })

  onBeforeUnmount(() => {
    stop()
    document.title = DEFAULT_TITLE
    description.setAttribute('content', DEFAULT_DESCRIPTION)
    canonical.remove()
    jsonLd?.remove()
  })
}
