/**
 * src/data/skills.js
 *
 * Capability groups for the SkillStack section.
 * Each group renders as an animated, expandable panel.
 *
 * Schema
 *   id     unique slug
 *   title  capability name
 *   blurb  one-line summary
 *   icon   mdi icon name
 *   items  the ground I cover here (capabilities, not a favorite-tools list)
 */

export const skills = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web',
    blurb: 'End-to-end products, not just front-ends - from UI to API to database.',
    icon: 'mdi-layers-triple',
    items: ['Modern web frameworks', 'Typed, tested codebases', 'API & service design', 'Relational + cloud data'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Serverless',
    blurb: 'Shipping and scaling on managed cloud infrastructure.',
    icon: 'mdi-cloud-outline',
    items: ['Serverless APIs', 'Managed cloud hosting', 'Object & file storage', 'Auth & identity'],
  },
  {
    id: 'gis',
    title: 'GIS & Mapping',
    blurb: 'Turning messy geospatial data into fast, useful maps.',
    icon: 'mdi-map-marker-radius-outline',
    items: ['Geospatial data pipelines', 'Interactive web maps', 'Heatmaps & layered context', 'Field-ready exports'],
  },
  {
    id: 'mobile',
    title: 'Mobile & PWA',
    blurb: 'Native and installable experiences that work offline.',
    icon: 'mdi-cellphone',
    items: ['Cross-platform mobile', 'Installable PWAs', 'Offline-first sync', 'Device APIs (BLE, push)'],
  },
  {
    id: 'hardware',
    title: 'Hardware & IoT',
    blurb: 'Real devices: I design the board, write the firmware, and build the app.',
    icon: 'mdi-chip',
    items: ['Custom PCB design', 'Embedded firmware', 'Wireless / LoRa radio', '3D-printed enclosures'],
  },
  {
    id: 'ai',
    title: 'AI Products',
    blurb: 'Grounded, useful AI features - not chatbots for the sake of it.',
    icon: 'mdi-robot-outline',
    items: ['LLM integration', 'Retrieval & grounding (RAG)', 'Domain data pipelines', 'Conversational UX'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & Brand',
    blurb: 'I build the product and the business that sells it.',
    icon: 'mdi-cart-outline',
    items: ['DTC storefronts', 'Conversion optimization', 'Brand & merchandising', 'Idea to revenue'],
  },
]

export default skills
