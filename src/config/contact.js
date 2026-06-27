// Web3Forms access key (safe to commit - it is a public, client-side key).
// To wire submissions to your inbox: create a key at https://web3forms.com
// using the email you want messages sent to, then paste it below
// (or set VITE_WEB3FORMS_ACCESS_KEY in your environment / CI).
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'PASTE_YOUR_KEY_HERE'

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
