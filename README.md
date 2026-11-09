# Paintbrush Outdoors (landing-web)

Public marketing site for paintbrushoutdoors.com (Vue 3 + Vite).

## Public legal and support routes

| Route | Purpose |
|---|---|
| `/privacy` | Privacy Policy (field location/GPS, waypoints/routes, offline packs, sync, Mapbox, Sentry, weather hosts, partner sharing, OAuth) |
| `/terms` | Terms of Use |
| `/support` | Store Support URL (bug reports / help; links contact, Privacy, Terms, Data deletion) |
| `/data-deletion` | Account deletion requests for all sign-in providers; Facebook `?code=` confirmation kept |
| `/#contact` | Contact form hash target (legal pages and footer deep-link here; router scrollBehavior + hash scroll) |

Footer legal cross-links include Privacy, Terms, Support, and Data deletion.

**Deploy status:** Implemented on branch `feat/store-legal-support`. **Production deploy pending approval** — do not treat `/terms` or `/support` as live on paintbrushoutdoors.com until an approved deploy succeeds. Existing `/privacy` and `/data-deletion` behavior is expanded on that branch; production content may still lag until deploy.

**Not Released:** Do not add App Store / Google Play download CTAs that imply Public Hunting Atlas listings are Released.

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
