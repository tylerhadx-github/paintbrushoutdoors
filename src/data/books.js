/**
 * src/data/books.js
 *
 * Family Stories children's books for the homepage promo section.
 * Covers are bundled from src/assets/books/.
 *
 * Schema
 *   id       unique slug
 *   title    book title
 *   author   author(s) display string
 *   tagline  one-line description
 *   cover    imported image URL (Vite asset)
 *   accent   hex color for the card glow
 */

import walterCover from '@/assets/books/walter-mcdermitt-cover.png'
import visitCover from '@/assets/books/visit-from-my-brother-cover.png'

export const BOOKS_URL = 'https://books.paintbrushoutdoors.com/#books'

export const books = [
  {
    id: 'walter-mcdermitt',
    title: 'The Search For Walter McDermitt',
    author: 'Tyler & Elisabeth Haddix',
    tagline: "Leech Lake's most infamous walleye",
    cover: walterCover,
    accent: '#e8a838',
  },
  {
    id: 'visit-from-my-brother',
    title: 'A Visit From My Brother',
    author: 'Marianne Hofer',
    tagline: 'Christmas story for Steven Paul Haddix',
    cover: visitCover,
    accent: '#c45c3a',
  },
]

export default books
