/**
 * src/data/process.js
 *
 * The throughline: the path every product takes from a real problem to a
 * live build. Renders as the vertical pipeline in ProjectTimeline.vue.
 *
 * Schema
 *   id     unique slug (used for keys)
 *   step   1-based stage number
 *   icon   mdi icon name
 *   label  short stage eyebrow ("Stage 01", phase grouping)
 *   name   stage title
 *   line   one-line description of what happens here
 *   accent hex color (progresses along the rail gradient #7c5cff -> #3ddc97)
 */

export const stages = [
  {
    id: 'problem',
    step: 1,
    icon: 'mdi-lightbulb-on-outline',
    label: 'It starts here',
    name: 'A real problem',
    line: 'Every build begins in the field - a real outdoor problem with no good tool for it.',
    accent: '#7c5cff',
  },
  {
    id: 'frontend',
    step: 2,
    icon: 'mdi-monitor-cellphone',
    label: 'Frontend',
    name: 'The interface',
    line: 'Fast, responsive web and mobile apps that people actually want to use.',
    accent: '#5ab0ff',
  },
  {
    id: 'backend',
    step: 3,
    icon: 'mdi-server-network',
    label: 'Backend & data',
    name: 'The engine',
    line: 'APIs, data pipelines, and the real data that make the product useful.',
    accent: '#2dd4bf',
  },
  {
    id: 'infra',
    step: 4,
    icon: 'mdi-cloud-outline',
    label: 'Cloud & infrastructure',
    name: 'Shipped to production',
    line: 'Serverless, hosting, storage, and auth - live, secure, and ready to scale.',
    accent: '#3ddc97',
  },
  {
    id: 'hardware',
    step: 5,
    icon: 'mdi-chip',
    label: 'When it matters',
    name: 'The hardware',
    line: 'Custom PCBs, firmware, and 3D-printed builds when software alone is not enough.',
    accent: '#ffb454',
  },
  {
    id: 'live',
    step: 6,
    icon: 'mdi-rocket-launch-outline',
    name: 'A live product',
    label: 'The throughline',
    line: 'Launched, used, and maintained - a real product in real hands.',
    accent: '#3ddc97',
  },
]

export default stages
