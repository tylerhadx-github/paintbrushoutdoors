/**
 * src/data/models.js
 *
 * Published 3D-printable designs (Printables) for the Maker Lab section.
 * Update likes / downloads as they grow, or add a new model object.
 *
 * Schema
 *   id         unique slug
 *   name       model name
 *   blurb      one-line description
 *   url        Printables model URL
 *   accent     hex color for the card glow
 *   icon       mdi icon name (fallback when no image)
 *   image      thumbnail filename in src/assets/screenshots
 *   likes      like count
 *   downloads  download count
 */

export const models = [
  {
    id: 'budget-scope-v2',
    name: 'Budget Scope V2',
    blurb: 'The redesigned smartphone-to-spotting-scope adapter for affordable long-range digiscoping.',
    url: 'https://www.printables.com/model/1406901-budget-scope-v2',
    accent: '#ffb454',
    icon: 'mdi-cellphone-screenshot',
    image: 'model-budget-scope-v2.jpg',
    likes: 2,
    downloads: 7,
  },
  {
    id: 'kickstand-monster-r6',
    name: 'Kick Stand - Mathews Monster R6',
    blurb: 'A printable kickstand that keeps a Mathews Monster R6 compound bow upright and scratch-free.',
    url: 'https://www.printables.com/model/589191-kick-stand-matthews-monster-r6',
    accent: '#3ddc97',
    icon: 'mdi-bullseye-arrow',
    image: 'model-kickstand-monster-r6.jpg',
    likes: 6,
    downloads: 60,
  },
  {
    id: 'binocular-tripod-adaptor',
    name: 'Binocular Tripod Adaptor - Sirui TY-70A',
    blurb: 'Locks binoculars onto a Sirui TY-70A tripod head for rock-steady, fatigue-free glassing.',
    url: 'https://www.printables.com/model/839780-binocular-tripod-adaptor-ty-70a-sirui',
    accent: '#5ab0ff',
    icon: 'mdi-binoculars',
    image: 'model-binocular-tripod-adaptor.jpg',
    likes: 5,
    downloads: 11,
  },
  {
    id: 'budget-scope-magnet',
    name: 'Budget Scope with Magnet',
    blurb: 'Magnetic smartphone digiscoping mount - snap your phone on and off a spotting scope in seconds.',
    url: 'https://www.printables.com/model/575115-budget-scope-with-magnet',
    accent: '#7c5cff',
    icon: 'mdi-magnet',
    image: 'model-budget-scope-magnet.jpg',
    likes: 18,
    downloads: 78,
  },
]

export default models
