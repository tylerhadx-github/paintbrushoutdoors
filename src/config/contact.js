// Web3Forms access key (safe to commit - it is a public, client-side key).
// To wire submissions to your inbox: create a key at https://web3forms.com
// using the email you want messages sent to, then set VITE_WEB3FORMS_ACCESS_KEY
// in .env.local (dev) or as a GitHub Actions secret (production builds).
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export function isContactFormConfigured () {
  return UUID_RE.test(WEB3FORMS_ACCESS_KEY)
}

export const CONTACT_FORM_SETUP_MESSAGE =
  'The contact form is not configured yet. Add a Web3Forms access key (see landing-web/.env.example).'
