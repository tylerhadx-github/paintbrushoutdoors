/**
 * src/data/projects.js
 *
 * Single source of truth for the portfolio showcase.
 * Add / edit a project by editing one object in this array.
 *
 * Schema
 *   id        unique slug (used for keys + anchors)
 *   name      display name
 *   tagline   one-line hook
 *   cta       action label for the card button ("Open the app", "See the build", ...)
 *   category  short grouping label ("GIS Platform", "AI Product", ...)
 *   status    'Live' | 'In progress' | 'Open source' | 'Open source (DIY kit)'
 *   accent    hex color used for the panel glow / tags
 *   featured  show large in the showcase flow
 *   stack     primary technologies
 *   tags      short capability chips
 *   links     { live?, github?, repos?: [{ label, url, private? }] }
 *   images    screenshot filenames in src/assets/screenshots (first = card image)
 *   logo      optional brand logo filename in src/assets/screenshots (mini card mark)
 *   summary   short paragraph for the detail view
 *   highlights[] impressive uses ("what it does that's hard")
 *   why       reasons for building it
 *   metrics[] { label, value } small proof points
 */

export const projects = [
  {
    id: 'pha',
    name: 'Public Hunting Atlas',
    tagline: 'Every acre of public land in America, mapped and offline-ready.',
    cta: 'Explore the atlas',
    category: 'Cross-platform GIS Platform',
    status: 'In progress',
    accent: '#3ddc97',
    featured: true,
    stack: ['.NET 8', 'Azure Functions', 'React Native', 'Cloudflare R2', 'ArcGIS / GeoJSON'],
    tags: ['GIS', 'Serverless', 'Mobile', 'Data pipeline'],
    links: {
      github: 'https://github.com/tylerhadx-github/PHA',
    },
    images: ['pha.png', 'pha-mobile-maps.png', 'pha-mobile-offline.png', 'pha-mobile-ballistics.png'],
    summary:
      'A nationwide public-land hunting atlas built as a true cross-platform product: a .NET 8 Azure Functions backend continuously harvests 300+ government GIS feature-service layers across all 50 states, normalizes them, and serves them to a React Native mobile app that works in the field with no signal.',
    highlights: [
      'Automated "LayerHarvester" pulls 303+ public-land feature-service layers from state and federal GIS servers, with batch processing so huge harvests never time out.',
      'Resilient ingestion: layers can be flagged to skip, batches recover independently, and every run writes an auditable harvest log.',
      'Processed layers are stored in Cloudflare R2 and served as compact GeoJSON for fast, offline-capable maps.',
      'onX-style export so hunters can take boundaries into the apps and GPS units they already use.',
      'One data backend powering both web and a native mobile experience.',
    ],
    why:
      'Public-land boundary data is scattered across hundreds of inconsistent government servers and is useless without signal in the backcountry. We built PHA to unify all of it into one reliable, offline-first atlas so hunters always know exactly where they can legally hunt.',
    metrics: [
      { label: 'Layers harvested', value: '303+' },
      { label: 'States covered', value: '50' },
      { label: 'Platforms', value: 'Web + iOS/Android' },
    ],
  },
  {
    id: 'fishsd',
    name: 'SD Fish AI',
    tagline: 'An AI fishing partner that actually knows your water.',
    cta: 'Meet the AI',
    category: 'AI Product',
    status: 'Live',
    accent: '#5ab0ff',
    featured: true,
    stack: ['Vue', 'LLM / RAG', 'Auth', 'Cloud API'],
    tags: ['AI', 'Full-stack', 'SaaS'],
    links: {
      live: 'https://fish.paintbrushoutdoors.com/',
    },
    images: ['fishsd.png', 'fishsd-map.png'],
    summary:
      'A conversational fishing research assistant for South Dakota waters. Anglers chat with an AI grounded in real lake and species data, save their research, and compare bodies of water side by side behind a free account.',
    highlights: [
      'Natural-language chat grounded in regional fishing and water data instead of generic answers.',
      'Saved research so anglers build a personal knowledge base over time.',
      'Side-by-side water comparisons to plan where to actually go.',
      'Free account system gating chat, history, and comparisons.',
    ],
    why:
      'Fishing knowledge is locked in forums, PDFs, and local memory. We built SD Fish AI to turn that scattered information into a single assistant that answers "where and how should I fish this weekend?" in seconds.',
    metrics: [
      { label: 'Focus', value: 'SD waters' },
      { label: 'Core', value: 'Chat + compare' },
    ],
  },
  {
    id: 'sdhunt',
    name: 'SD Hunt AI',
    tagline: 'Draw odds, unit rankings, and a personalized hunt strategy.',
    cta: 'Plan a hunt',
    category: 'AI Product',
    status: 'Live',
    accent: '#ffb454',
    featured: true,
    stack: ['Vue', 'LLM / RAG', 'Stats engine', 'Auth'],
    tags: ['AI', 'Full-stack', 'Data'],
    links: {
      live: 'https://research.paintbrushoutdoors.com/',
    },
    images: ['sdhunt.png', 'sdhunt-map.png'],
    summary:
      'A hunt-planning platform that turns years of draw data and unit information into rankings, draw statistics, and an AI-built strategy tailored to each hunter\'s goals.',
    highlights: [
      'Unit rankings that distill messy regulation and harvest data into a clear shortlist.',
      'Draw-odds statistics so hunters apply with realistic expectations.',
      'AI-generated, personalized hunt strategy based on the hunter\'s preferences.',
      'Account-gated tooling for saved strategies and rankings.',
    ],
    why:
      'Western hunt planning is a research nightmare of spreadsheets and regulation PDFs. We built SD Hunt AI so a hunter can answer "where do I have the best odds and the best hunt?" without becoming a part-time statistician.',
    metrics: [
      { label: 'Outputs', value: 'Rankings + odds' },
      { label: 'Personalized', value: 'AI strategy' },
    ],
  },
  {
    id: 'midwestgundealer',
    name: 'Midwest Gun Deals',
    tagline: 'A full marketplace, compliance engine, and ad platform in one app.',
    cta: 'Pull the trigger',
    category: 'Full-stack Marketplace',
    status: 'Live',
    accent: '#ff5d73',
    featured: true,
    stack: ['Vue 3', 'TypeScript', 'Vuetify', 'Vuex', 'Azure SWA', '.NET Functions'],
    tags: ['Marketplace', 'Full-stack', 'Compliance', 'Tested'],
    links: {
      live: 'https://midwestgundeals.com/',
    },
    images: ['midwestgundealer.png'],
    summary:
      'A used-firearms marketplace with the depth of a real product: listings with images, distance-aware search and filtering, saved and reported listings, admin market research, an ad manager, user roles, notifications, and a legally-gated raffle ("Waffles") system. Backed by Azure Static Web Apps + .NET Functions and covered by Playwright and Vitest tests.',
    highlights: [
      'Distance-based search and filtering using ZIP-code geodata, plus multi-tag and price filters.',
      '"Waffles" raffle system with South Dakota Secretary-of-State compliance gating enforced on both the client and the server, including a 30-day rule and admin verification.',
      'Admin tooling: market research dashboards, ad manager, reported-listing moderation, and role management.',
      'Real test coverage with Vitest unit tests and Playwright end-to-end tests, plus a .NET API test suite.',
      'Production hosting on Azure Static Web Apps with an integrated Functions API and auth.',
    ],
    why:
      'Local firearms buying and selling happens on clunky forums with no trust, search, or legal guardrails. We built Midwest Gun Deals to be a modern, compliant marketplace that treats regulation as a first-class feature instead of an afterthought.',
    metrics: [
      { label: 'Surface', value: 'Marketplace + admin' },
      { label: 'Compliance', value: 'SD SOS gated' },
      { label: 'Quality', value: 'Unit + E2E tests' },
    ],
  },
  {
    id: 'loratext',
    name: 'LoRa Texting',
    tagline: 'Off-grid encrypted messaging - hardware, firmware, and app you can build yourself.',
    cta: 'See the build',
    category: 'Hardware + IoT',
    status: 'Open source (DIY kit)',
    accent: '#7c5cff',
    featured: true,
    stack: ['Vue PWA', 'Web Bluetooth', 'Arduino / C++', 'Custom PCB', 'LoRa'],
    tags: ['IoT', 'Embedded', 'PCB', 'PWA', 'Web Bluetooth'],
    links: {
      live: 'https://lora.paintbrushoutdoors.com/',
      github: 'https://github.com/tylerhadx-github/LoraText',
      repos: [
        { label: 'LoraText (Vue PWA)', url: 'https://github.com/tylerhadx-github/LoraText' },
        { label: 'LoraArduinoSketch (firmware)', url: 'https://github.com/tylerhadx-github/LoraText', private: true },
        { label: 'LoraBoardPCB (hardware)', url: 'https://github.com/tylerhadx-github/LoraText', private: true },
      ],
    },
    summary:
      'A complete off-grid texting system that spans the entire stack: a custom PCB, Arduino/C++ firmware driving a LoRa radio, and a Vue progressive web app that pairs over Web Bluetooth. Messages are encrypted with a pre-shared key, work with no cell service, and can share live location on a map. Designed to be open-sourced so anyone can build and run their own device.',
    highlights: [
      'End-to-end ownership: custom PCB (LoraBoardPCB) + C++ firmware (LoraArduinoSketch) + Vue PWA (LoraText) + a 3D-printed enclosure.',
      'Pairs phone to radio over Web Bluetooth - no app store, just a PWA.',
      'Pre-shared-key encryption for private messaging completely off the grid.',
      'Background notifications, live location sharing, and an on-map view for groups in the field.',
      'Packaged as a buildable kit (Tinkercad / Thingiverse models) so the community can make their own.',
    ],
    why:
      'When you are deep in the backcountry there is no signal, and existing off-grid radios are closed and expensive. We built the whole stack - board, firmware, and app - so a small group can text and share location anywhere, and so we could open-source it for other makers to build.',
    metrics: [
      { label: 'Stack', value: 'PCB -> firmware -> app' },
      { label: 'Range', value: 'Off-grid LoRa' },
      { label: 'Install', value: 'PWA, no app store' },
    ],
  },
  {
    id: 'titlex',
    name: 'TitleX Archery',
    tagline: 'A bowhunter-built DTC arrow brand with a real storefront and a loyal following.',
    cta: 'Shop the brand',
    category: 'E-commerce / Shopify',
    status: 'Live',
    accent: '#3ddc97',
    featured: false,
    stack: ['Shopify', 'Liquid', 'Theme customization', 'CRO'],
    tags: ['E-commerce', 'Shopify', 'Brand'],
    links: {
      live: 'https://titlexarchery.com/',
    },
    images: ['titlex.png'],
    logo: 'logo-titlex.png',
    summary:
      'A direct-to-consumer archery brand selling premium carbon arrows and accessories, from product line-up to storefront. Built and customized on Shopify with a focus on conversion and a strong, consistent brand voice.',
    highlights: [
      'Full product catalog: title-grade .001 straightness carbon arrows, stabilizers, peep sights, grip tape, wraps, and apparel.',
      'Customized Shopify storefront with merchandising, collections, and promotions.',
      'Earned a 4.99-star rating across 100+ verified reviews.',
      '"Bowhunter built" brand identity carried consistently across the store.',
    ],
    why:
      'We wanted to ship a real product business, not just software - sourcing premium arrows and building the brand and storefront that sells them. TitleX is proof we can take something from idea to revenue.',
    metrics: [
      { label: 'Rating', value: '4.99 stars' },
      { label: 'Reviews', value: '105+' },
      { label: 'Channel', value: 'DTC Shopify' },
    ],
  },
  {
    id: 'nockscore',
    name: 'NockScore',
    tagline: 'Tournament-grade archery scoring.',
    cta: 'Open the app',
    category: 'Web App',
    status: 'Live',
    accent: '#5ab0ff',
    featured: false,
    stack: ['Vue', 'PWA', 'Kiosk mode'],
    tags: ['Web app', 'Scoring', 'Kiosk'],
    links: {
      live: 'https://nockscore.com/',
    },
    images: ['nockscore.png'],
    logo: 'logo-nockscore.png',
    summary:
      'A digital archery scorekeeping app designed to run as a kiosk, replacing paper scorecards for target and 3D shoots with fast, error-proof entry.',
    highlights: [
      'Kiosk-first interface for quick, low-friction score entry at the line.',
      'Purpose-built for archery scoring formats instead of generic spreadsheets.',
      'Web-based, so any tablet or screen becomes a scoring station.',
    ],
    why:
      'Paper scorecards are slow, error-prone, and a pain to tally. We built NockScore to make scoring an archery shoot as simple as tapping a screen.',
    metrics: [
      { label: 'Mode', value: 'Kiosk' },
      { label: 'For', value: 'Target + 3D' },
    ],
  },
  {
    id: 'bhmtnlion',
    name: 'Black Hills Mountain Lion',
    tagline: 'Years of harvest data turned into an interactive hunting map.',
    cta: 'Explore the map',
    category: 'Data Visualization / Mapping',
    status: 'Live',
    accent: '#ffb454',
    featured: false,
    stack: ['JavaScript', 'Web mapping', 'GeoJSON', 'GitHub Pages'],
    tags: ['Mapping', 'Data viz', 'GIS'],
    links: {
      live: 'https://tylerhadx-github.github.io/BHMTNLION/',
    },
    images: ['bhmtnlion.png'],
    summary:
      'An interactive map that visualizes South Dakota GFP mountain lion harvest data alongside terrain context - harvest locations, multi-year heatmaps, snow depth, mines, and caves - with onX export for the field.',
    highlights: [
      'Harvest-location heatmaps spanning multiple seasons (2012-2017) to reveal patterns.',
      'Layered context: snow depth charts, road maps, mines, and caves toggled on demand.',
      'onX export so insights move from the browser into a hunter\'s GPS workflow.',
      'Cached data for fast, reliable loads on a static host.',
    ],
    why:
      'Public harvest data exists but is locked in tables nobody reads. We built this to turn it into a map that actually helps plan a hunt and understand where lions move.',
    metrics: [
      { label: 'Seasons', value: '2012-2017' },
      { label: 'Output', value: 'Heatmap + export' },
    ],
  },
  {
    id: 'diykestrel',
    name: 'DIYKestrel',
    tagline: 'A handheld weather meter you build yourself - hardware plus app.',
    cta: 'See the build',
    category: 'Hardware + IoT',
    status: 'Open source',
    accent: '#3ddc97',
    featured: true,
    stack: ['Vue', 'JavaScript', '3D-printed hardware', 'Sensors'],
    tags: ['IoT', 'Hardware', 'PWA'],
    links: {
      live: 'https://kestrel.paintbrushoutdoors.com/',
      github: 'https://github.com/tylerhadx-github/DIYKestrel',
    },
    summary:
      'An open-source, DIY take on a handheld weather meter: a Vue app paired with 3D-printed hardware that brings Kestrel-style wind and weather readings to anyone willing to build it.',
    highlights: [
      'Vue front-end paired with affordable, 3D-printable hardware.',
      'Open source so makers can build their own weather meter for a fraction of the cost.',
      'Hosted free on GitHub Pages with a live demo.',
    ],
    why:
      'Commercial wind meters are expensive for what they are. We built DIYKestrel to prove you can pair simple hardware with a clean web app and get the same data for far less - and share it openly.',
    metrics: [
      { label: 'Cost', value: 'DIY / low' },
      { label: 'License', value: 'Open source' },
    ],
  },
  {
    id: 'fishsd-app',
    name: 'FishSD',
    tagline: 'South Dakota fishing regs, routes, and species - in your pocket, on the water.',
    cta: 'Get the app',
    category: 'Mobile App',
    status: 'Live',
    accent: '#2dd4bf',
    featured: false,
    stack: ['Android', 'Offline data', 'GPS & route tracking', 'Mapping'],
    tags: ['Mobile', 'Fishing', 'Offline', 'GPS'],
    links: {
      live: 'https://play.google.com/store/apps/details?id=com.fishsd&hl=en_US',
      github: 'https://github.com/KryptoBeard/FishSD',
    },
    summary:
      'A published Android app for South Dakota anglers: tap any body of water to see its specific regulations and the species it holds, save and re-open fishing routes with automatic distance, track points like fish, boats, and markers, and read depth maps on major waters.',
    highlights: [
      'Water-specific fishing regulations - tap a body of water to see its rules and fish.',
      'Route saving with automatic distance calculation, so you can return to a run later.',
      'Point tracking for fish, boats, and area markers out on the water.',
      'Species finder: look up which waters hold a specific species.',
      'Depth maps on main bodies of water.',
    ],
    why:
      'Fishing regulations and water knowledge are scattered and easy to get wrong. We built FishSD so an angler can pull up the rules, species, and depth for the water in front of them - right from their phone, on the bank.',
    metrics: [
      { label: 'Platform', value: 'Android' },
      { label: 'Focus', value: 'SD waters' },
      { label: 'On-water', value: 'Routes + points' },
    ],
  },
]

export default projects
