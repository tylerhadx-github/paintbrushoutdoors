/**
 * src/data/structuredData.js
 *
 * Builds Schema.org JSON-LD from the existing data files so search engines get
 * rich context for every linked website, app, business, product, and 3D model.
 *
 * The data files (projects.js, models.js) stay the single source of truth - the
 * builders here only re-shape that data into Schema.org nodes.
 */

import { projects } from '@/data/projects'
import { models } from '@/data/models'
import { screenshot } from '@/data/screenshots'

// Canonical site origin. Individual apps live on their own (sub)domains via
// each project's live link; this is the portfolio's home.
export const SITE_URL = 'https://paintbrushoutdoors.com'

const PERSON_ID = `${SITE_URL}/#person`
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const personRef = { '@id': PERSON_ID }
const orgRef = { '@id': ORG_ID }

/** Resolve a (possibly relative) URL to an absolute one against SITE_URL. */
function abs (url) {
  if (!url) return undefined
  try {
    return new URL(url, SITE_URL).href
  } catch {
    return undefined
  }
}

/** Absolute URL for the first bundled screenshot of a record. */
function imageUrl (name) {
  return abs(screenshot(name))
}

/** Pull a numeric value out of a project metric like "4.99 stars" / "105+". */
function metricNumber (project, labelMatch) {
  const metric = (project.metrics || []).find((m) =>
    m.label.toLowerCase().includes(labelMatch),
  )
  if (!metric) return null
  const num = parseFloat(String(metric.value).replace(/[^0-9.]/g, ''))
  return Number.isFinite(num) ? num : null
}

const isMobile = (project) => /play\.google\.com|apps\.apple\.com/.test(project.links?.live || '')
const isStore = (project) =>
  /e-commerce|shopify/i.test(project.category || '') || metricNumber(project, 'rating') !== null

/** Map a project to a sensible Schema.org applicationCategory string. */
function applicationCategory (project) {
  const c = (project.category || '').toLowerCase()
  if (c.includes('gis') || c.includes('map')) return 'MapApplication'
  if (c.includes('marketplace') || c.includes('commerce')) return 'BusinessApplication'
  if (c.includes('ai')) return 'BusinessApplication'
  if (c.includes('game')) return 'GameApplication'
  return 'UtilityApplication'
}

/** Build the Schema.org node for a single portfolio project. */
function projectNode (project) {
  const id = `${SITE_URL}/#project-${project.id}`
  const url = abs(project.links?.live) || abs(project.links?.github)
  const image = imageUrl(project.images?.[0])

  // E-commerce brand / business (e.g. TitleX Archery) -> Organization + rating.
  if (isStore(project)) {
    const ratingValue = metricNumber(project, 'rating')
    const reviewCount = metricNumber(project, 'review')
    const node = {
      '@type': 'Organization',
      '@id': id,
      name: project.name,
      description: project.summary,
      url,
      ...(image ? { image, logo: image } : {}),
      founder: personRef,
    }
    if (ratingValue !== null) {
      node.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue,
        bestRating: 5,
        ...(reviewCount !== null ? { reviewCount } : {}),
      }
    }
    return node
  }

  const node = {
    '@type': isMobile(project) ? 'MobileApplication' : 'WebApplication',
    '@id': id,
    name: project.name,
    description: project.summary,
    url,
    applicationCategory: applicationCategory(project),
    operatingSystem: isMobile(project) ? 'ANDROID' : 'Web',
    ...(project.tags?.length ? { keywords: project.tags.join(', ') } : {}),
    ...(image ? { screenshot: image, image } : {}),
    author: personRef,
    creator: personRef,
    publisher: orgRef,
  }

  if (isMobile(project) && project.links?.live) {
    node.downloadUrl = abs(project.links.live)
    node.installUrl = abs(project.links.live)
  }

  if (project.links?.github) {
    node.codeRepository = abs(project.links.github)
    if (/open source/i.test(project.status || '')) {
      node.isAccessibleForFree = true
    }
  }

  return node
}

/** Build the Schema.org node for a single 3D-printable model. */
function modelNode (model) {
  return {
    '@type': '3DModel',
    '@id': `${SITE_URL}/#model-${model.id}`,
    name: model.name,
    description: model.blurb,
    url: model.url,
    ...(imageUrl(model.image) ? { image: imageUrl(model.image) } : {}),
    author: personRef,
    isAccessibleForFree: true,
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'DownloadAction' },
        userInteractionCount: model.downloads || 0,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'LikeAction' },
        userInteractionCount: model.likes || 0,
      },
    ],
  }
}

/**
 * Full @graph for the home page: identity (Person, Organization, WebSite),
 * every project, an ItemList describing the portfolio, and the 3D models.
 */
export function buildSiteGraph () {
  const projectNodes = projects.map(projectNode)
  const modelNodes = models.map(modelNode)

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Tyler Haddix',
    url: SITE_URL,
    jobTitle: 'Senior Full-Stack Engineer',
    worksFor: orgRef,
  }

  const organization = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Paintbrush Outdoors',
    url: SITE_URL,
    logo: `${SITE_URL}/brand-icon.png`,
    founder: personRef,
  }

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'Paintbrush Outdoors',
    publisher: orgRef,
    author: personRef,
  }

  const itemList = {
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#portfolio`,
    name: 'Products and projects shipped by Paintbrush Outdoors',
    numberOfItems: projectNodes.length,
    itemListElement: projectNodes.map((node, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@id': node['@id'] },
    })),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [person, organization, website, itemList, ...projectNodes, ...modelNodes],
  }
}

// Store products surfaced under /store and /Product/:name.
const storeProducts = {
  BudgetScope: {
    name: 'Budget Scope',
    description:
      'Affordable smartphone spotting-scope attachment for digiscoping enthusiasts.',
    image: '/src/assets/banner_BS.png',
    url: `${SITE_URL}/Product/BudgetScope`,
  },
}

/** Build a Product node for a store product by route name. */
export function buildProduct (name) {
  const product = storeProducts[name] || storeProducts.BudgetScope
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: abs(product.image),
    url: product.url,
    brand: orgRef,
    isAccessibleForFree: true,
  }
}

/** ItemList of store products for the storefront landing page. */
export function buildStoreList () {
  const entries = Object.entries(storeProducts)
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Paintbrush Outdoors store',
    numberOfItems: entries.length,
    itemListElement: entries.map(([, product], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        url: product.url,
        ...(abs(product.image) ? { image: abs(product.image) } : {}),
        brand: orgRef,
      },
    })),
  }
}
