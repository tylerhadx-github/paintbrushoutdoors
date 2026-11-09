<template>
  <div class="legal">
    <article class="legal__article">
      <router-link to="/" class="legal__home">
        <img src="/brand-logo.png" alt="Paintbrush Outdoors" class="legal__logo" />
      </router-link>
      <h1 class="legal__title">Privacy Policy</h1>
      <p class="legal__updated">Last updated: {{ lastUpdated }}</p>

      <section class="legal__section">
        <h2>1. Introduction</h2>
        <p>
          Paintbrush Outdoors (“we,” “our,” or “us”) builds outdoor and field-use software
          including Public Hunting Atlas, SD Fish AI, Trail Eye, Nock Score, FishSD, and related
          sites and mobile apps. This policy describes what we collect, how we use it, and how
          you can request deletion of your data across those products.
        </p>
        <p>
          This policy is a product-accurate draft for users and store reviewers. It is not
          attorney-certified legal advice. Related pages:
          <router-link to="/terms">Terms of Use</router-link>,
          <router-link to="/support">Support</router-link>, and
          <router-link to="/data-deletion">Data deletion</router-link>.
        </p>
      </section>

      <section class="legal__section">
        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <strong>Account and identity (OAuth).</strong> When you sign in with a supported
            provider—Google, GitHub, Facebook, and/or Microsoft depending on the client—we
            receive your provider user ID and, depending on the provider, your username, display
            name, and/or email address. We use this to identify your account and associate synced
            content with you. Sign-in is handled by those providers under their own privacy
            policies.
          </li>
          <li>
            <strong>Device location / GPS.</strong> When you grant location permission, field
            apps (including Public Hunting Atlas) may use your device location while the feature
            is in use—for example to center the map on your position, show nearby context, or
            support location-aware field tools. We do not use location for third-party
            advertising. You can deny or revoke permission in system settings; some features
            will then be limited.
          </li>
          <li>
            <strong>Markers, routes, notes, and similar user content.</strong> Depending on the
            product, this may include saved map markers and waypoints (including their
            coordinates), recorded or drawn routes (including route points), hunting or fishing
            notes, ballistics or rifle profiles, trail camera images and detections, league
            scores, and similar content you choose to create or upload.
          </li>
          <li>
            <strong>Offline map packs.</strong> Downloaded map tiles or offline packs may be
            stored on your device for field use without a network. When a product supports
            account sync, pack selections or related metadata may also be associated with your
            account so your setup can follow you across devices. Packs stored only on the device
            remain on that device until you remove them or uninstall the app.
          </li>
          <li>
            <strong>Cloud sync.</strong> Where a product supports it and sync is enabled for
            your signed-in account, saved marker and route coordinates and related field content
            (notes, preferences, offline-pack requests, and similar) sync through our servers so
            you can access that content on more than one device after you sign in. Live GPS used
            only to center the map is ephemeral on the device and is not itself stored as an
            account profile field.
          </li>
          <li>
            <strong>Crash and performance diagnostics.</strong> Field apps may use Sentry to
            collect crash reports and limited performance diagnostics so we can keep the
            services reliable. This is for reliability and troubleshooting—not advertising or
            cross-app tracking. The app does not attach your account identity to Sentry events
            in product code.
          </li>
          <li>
            <strong>Map and weather location context.</strong> Map tile and viewport requests go
            to Mapbox (styles, tiles, and offline packs). When weather or elevation features
            run, coordinates may be sent to Open-Meteo and/or open-elevation for forecast or
            elevation lookup. These processors receive location context needed to deliver the
            feature you requested; they are not advertising networks.
          </li>
          <li>
            <strong>Technical information.</strong> Our hosting providers (including Microsoft
            Azure, Cloudflare, and home-lab infrastructure behind secure tunnels) may process
            standard server logs such as IP address, browser type, and request timestamps to
            operate and secure the services. We do not use this for advertising.
          </li>
          <li>
            <strong>Local storage.</strong> Web and mobile apps may store preferences, session
            tokens, cached map data, or offline packs on your device to keep you signed in and
            improve performance in the field.
          </li>
        </ul>
        <p>
          We do not sell your personal information. We do not operate third-party advertising
          networks in these products as described here.
        </p>
      </section>

      <section class="legal__section">
        <h2>3. How we use information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Authenticate you and provide access to the apps you use</li>
          <li>Center maps and power field features when location permission is granted</li>
          <li>
            Store, display, and sync your content—including marker and route coordinates—across
            devices when you are signed in and sync is enabled
          </li>
          <li>Deliver offline map packs and related on-device caches you request</li>
          <li>Serve map tiles and weather/elevation lookups through Mapbox, Open-Meteo, and/or open-elevation</li>
          <li>Diagnose crashes and performance issues (Sentry) to keep apps reliable</li>
          <li>Operate, secure, troubleshoot, and improve our services</li>
          <li>Comply with applicable law and respond to valid legal requests</li>
        </ul>
      </section>

      <section class="legal__section">
        <h2>4. Data sharing</h2>
        <p>
          Sign-in is handled by the OAuth providers you choose (Google, GitHub, Meta/Facebook,
          and/or Microsoft) under their own privacy policies. App data is stored on
          infrastructure we control or contract with (Azure, Cloudflare, and secured private
          servers). Service processors that receive data as needed to run the product include
          Mapbox (map tiles and viewport), Open-Meteo and/or open-elevation (weather or elevation
          when those features run), and Sentry (crash and performance diagnostics). We do not
          share your data with advertising networks, and we do not invent or operate ad SDKs in
          these products as described here.
        </p>
        <p>
          <strong>Partner sharing.</strong> Where a product offers invite-based sharing, account-synced
          field content—including markers and routes with coordinates—can be shared with partners
          you invite when you use those sharing features. Sharing is invite/folder based, not a
          public social feed. You control whom you invite.
        </p>
        <p>
          We do not share your data with other third parties except as needed to run the service
          (including the processors named above), when you choose to share with invited partners,
          when you export content through the device share sheet, or as required by law.
        </p>
      </section>

      <section class="legal__section">
        <h2>5. Your rights and data deletion</h2>
        <p>
          You may request deletion of personal data associated with your account. We do not
          claim an instant in-app wipe for every sign-in provider. See
          <router-link to="/data-deletion">Data deletion</router-link>
          for provider-specific steps, and
          <router-link to="/support">Support</router-link>
          for how to reach us.
        </p>
        <ul>
          <li>
            <strong>Facebook users:</strong> use Meta’s data deletion flow when removing our app,
            or visit our
            <router-link to="/data-deletion">data deletion status page</router-link>
            after submitting a request (confirmation code when Meta redirects with
            <code>?code=</code>).
          </li>
          <li>
            <strong>All users (including Google, GitHub, Facebook, and Microsoft):</strong>
            contact us via the
            <a href="/#contact" @click="goToContact">contact form</a>
            on this site or through
            <router-link to="/support">Support</router-link>.
            Include the email or username you use to sign in, the provider, and which app(s)
            you use. We will process your request in a reasonable time.
          </li>
        </ul>
        <p>
          Some records may be retained where required for legal, security, or operational reasons
          (for example anonymized operational logs or historical league results). We retain only
          what is necessary. Content stored only on your device (such as some offline packs) may
          remain until you clear app data or uninstall.
        </p>
      </section>

      <section class="legal__section">
        <h2>6. Security</h2>
        <p>
          We use industry-standard hosting, HTTPS, and OAuth sign-in. No method of transmission or
          storage is completely secure; use trusted devices and keep your provider accounts protected.
        </p>
      </section>

      <section class="legal__section">
        <h2>7. Changes</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date above reflects
          material changes. Continued use of our services after an update constitutes acceptance
          of the revised policy.
        </p>
      </section>

      <section class="legal__section">
        <h2>8. Contact</h2>
        <p>
          Questions about this policy or your data:
          <router-link to="/support">Support</router-link>
          or
          <a href="/#contact" @click="goToContact">contact us through paintbrushoutdoors.com</a>.
          See also our
          <router-link to="/terms">Terms of Use</router-link>.
        </p>
      </section>

      <nav class="legal__footer" aria-label="Legal pages">
        <router-link to="/">Home</router-link>
        <router-link to="/privacy">Privacy</router-link>
        <router-link to="/terms">Terms</router-link>
        <router-link to="/support">Support</router-link>
        <router-link to="/data-deletion">Data deletion</router-link>
      </nav>
    </article>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useHashScroll } from '@/composables/useHashScroll'
  import { usePageMeta } from '@/composables/usePageMeta'

  const lastUpdated = 'November 9, 2026'
  const { goToHash } = useHashScroll()

  function goToContact (e) {
    return goToHash(e, '#contact')
  }

  usePageMeta(computed(() => ({
    title: 'Privacy Policy | Paintbrush Outdoors',
    description: 'How Paintbrush Outdoors collects and uses account, location, and field data across Public Hunting Atlas and related apps, and how to request deletion.',
    path: '/privacy',
  })))
</script>

<style scoped>
  .legal {
    min-height: 100vh;
    padding: 6rem 1.25rem 3rem;
    background: #0b0b10;
    color: #d8d8e0;
  }

  .legal__article {
    max-width: 720px;
    margin: 0 auto;
  }

  .legal__home {
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  .legal__logo {
    height: 48px;
    width: auto;
  }

  .legal__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    color: #f4f4f8;
    margin: 0 0 0.35rem;
  }

  .legal__updated {
    color: #88889a;
    margin: 0 0 2rem;
    font-size: 0.95rem;
  }

  .legal__section {
    margin-bottom: 1.75rem;
  }

  .legal__section h2 {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 1.15rem;
    color: #f0f0f5;
    margin: 0 0 0.65rem;
  }

  .legal__section p,
  .legal__section li {
    line-height: 1.65;
    color: #b8b8c8;
  }

  .legal__section p + p {
    margin-top: 0.75rem;
  }

  .legal__section ul {
    padding-left: 1.25rem;
    margin: 0.5rem 0 0;
  }

  .legal__section li + li {
    margin-top: 0.5rem;
  }

  .legal__section a,
  .legal__section code {
    color: #9d85ff;
  }

  .legal__section code {
    font-size: 0.9em;
  }

  .legal__footer {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .legal__footer a {
    color: #9d85ff;
    text-decoration: none;
    font-size: 0.95rem;
  }
</style>
