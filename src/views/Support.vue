<template>
  <div class="legal">
    <article class="legal__article">
      <router-link to="/" class="legal__home">
        <img src="/brand-logo.png" alt="Paintbrush Outdoors" class="legal__logo" />
      </router-link>
      <h1 class="legal__title">Support &amp; bug reports</h1>
      <p class="legal__updated">Last updated: {{ lastUpdated }}</p>

      <section class="legal__section">
        <h2>Store Support URL</h2>
        <p>
          This page is the intended App Store and Google Play
          <strong>Support URL</strong> for Paintbrush Outdoors products that list
          <a href="https://paintbrushoutdoors.com/support">https://paintbrushoutdoors.com/support</a>.
          Use it to report problems, ask for help, or find privacy and terms links.
        </p>
      </section>

      <section class="legal__section">
        <h2>How to report a bug</h2>
        <p>
          Send a message through the
          <a href="/#contact" @click="goToContact">contact form</a>
          on this site. Clear reports help us reproduce and fix issues faster. Please include:
        </p>
        <ul>
          <li>
            <strong>Steps to reproduce</strong> — what you did, what you expected, and what
            happened instead
          </li>
          <li>
            <strong>App and platform</strong> — for example Public Hunting Atlas on Android,
            iOS, or web; or another Paintbrush product name
          </li>
          <li>
            <strong>Version</strong> — app version from the store listing or About screen when
            available; for web, the browser name and version
          </li>
          <li>
            <strong>Screenshots or screen recordings</strong> when they show the problem
            (avoid sharing passwords or unnecessary personal data)
          </li>
          <li>
            <strong>Account clue</strong> — the email or username you use to sign in, and which
            provider (Google, GitHub, Facebook, or Microsoft), if the issue is account-related
          </li>
        </ul>
        <p>
          We read support messages as capacity allows. We do not guarantee a specific response
          time or service-level agreement.
        </p>
      </section>

      <section class="legal__section">
        <h2>Account and data requests</h2>
        <p>
          For privacy questions or to request deletion of account-associated data, see the
          <router-link to="/privacy">Privacy Policy</router-link>
          and
          <router-link to="/data-deletion">Data deletion</router-link>
          pages. Deletion is handled by request; we do not claim an instant in-app wipe for
          every provider.
        </p>
      </section>

      <section class="legal__section">
        <h2>Legal</h2>
        <p>
          <router-link to="/terms">Terms of Use</router-link>
          and
          <router-link to="/privacy">Privacy Policy</router-link>
          describe how the services work and how we handle data. Contact for Terms or Privacy
          questions is the same
          <a href="/#contact" @click="goToContact">contact form</a>.
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
    title: 'Support & Bug Reports | Paintbrush Outdoors',
    description: 'Report bugs and get help for Paintbrush Outdoors apps. Contact form, privacy, terms, and data deletion links for store Support URL reviewers.',
    path: '/support',
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

  .legal__section a {
    color: #9d85ff;
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
