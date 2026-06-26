/**
 * src/data/screenshots.js
 *
 * Resolves screenshot/thumbnail filenames (as referenced in projects.js and
 * models.js) to bundled asset URLs.
 *
 * Drop polished images into src/assets/screenshots/ using the same filename
 * and they are picked up automatically - no import statements needed.
 */

const modules = import.meta.glob(
  '../assets/screenshots/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' },
)

const byName = {}
const byBase = {}
for (const [path, url] of Object.entries(modules)) {
  const name = path.split('/').pop()
  byName[name] = url
  byBase[name.replace(/\.[^.]+$/, '')] = url
}

export function screenshot (name) {
  if (!name) return null
  // Exact filename match first, then fall back to the same base name with any
  // supported extension (so a referenced .png still resolves a dropped-in .jpg).
  return byName[name] || byBase[name.replace(/\.[^.]+$/, '')] || null
}

export function screenshots (names) {
  if (!Array.isArray(names)) return []
  return names.map(screenshot).filter(Boolean)
}
