<template>
  <div class="legal">
    <article class="legal__article">
      <router-link to="/" class="legal__home">
        <img src="/brand-logo.png" alt="Paintbrush Outdoors" class="legal__logo" />
      </router-link>
      <h1 class="legal__title">Data Deletion</h1>
      <p class="legal__updated">Last updated: {{ lastUpdated }}</p>

      <section v-if="confirmationCode" class="legal__section legal__status">
        <h2>Request received</h2>
        <p>
          We received your Facebook data deletion request.
          Your confirmation code is:
          <strong>{{ confirmationCode }}</strong>
        </p>
        <p>
          We will remove or anonymize data associated with your Facebook account as described in our
          <router-link to="/privacy">Privacy Policy</router-link>.
          Processing may take up to 30 days. This is not an instant in-app wipe. If you have
          questions, use
          <router-link to="/support">Support</router-link>
          or the
          <a href="/#contact" @click="goToContact">contact form</a>.
        </p>
      </section>

      <section v-else class="legal__section">
        <h2>How deletion works today</h2>
        <p>
          Paintbrush Outdoors does not currently offer a self-serve “delete everything instantly”
          control inside every app for every sign-in provider. Deletion is request-based. We
          process requests in a reasonable time (Facebook callback confirmations may take up to
          30 days). Content stored only on your device may remain until you clear app data or
          uninstall.
        </p>
        <p>
          See the
          <router-link to="/privacy">Privacy Policy</router-link>
          for what we collect, and
          <router-link to="/support">Support</router-link>
          for how to reach us with bug or account questions.
        </p>
      </section>

      <section class="legal__section">
        <h2>Facebook</h2>
        <p>
          If you connected a Paintbrush Outdoors app with Facebook Login and want your data
          removed, you can delete the app from your Facebook settings or use Meta’s data
          deletion callback. After Meta notifies us, you will be redirected here with a
          confirmation code (<code>?code=</code> in the URL). Keep that code for your records.
        </p>
      </section>

      <section class="legal__section">
        <h2>Google, GitHub, and Microsoft</h2>
        <p>
          For Google, GitHub, or Microsoft sign-in (Microsoft is used on some mobile clients),
          contact us via the
          <a href="/#contact" @click="goToContact">contact form</a>
          or
          <router-link to="/support">Support</router-link>.
          Include:
        </p>
        <ul>
          <li>The email or username you use to sign in</li>
          <li>Which provider (Google, GitHub, or Microsoft)</li>
          <li>Which app(s) you use (for example Public Hunting Atlas, FishSD, Trail Eye, or Nock Score)</li>
        </ul>
        <p>
          We will remove or anonymize account-associated data as described in the
          <router-link to="/privacy">Privacy Policy</router-link>.
          There is no automated instant wipe for these providers today.
        </p>
      </section>

      <section class="legal__section">
        <h2>All providers</h2>
        <p>
          Regardless of provider, you may always start a deletion or privacy request through
          <router-link to="/support">Support</router-link>
          /
          <a href="/#contact" @click="goToContact">contact</a>.
          We may retain limited records where required for legal, security, or operational
          reasons, as noted in the Privacy Policy.
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
  import { useRoute } from 'vue-router'
  import { useHashScroll } from '@/composables/useHashScroll'
  import { usePageMeta } from '@/composables/usePageMeta'

  const route = useRoute()
  const lastUpdated = 'November 9, 2026'
  const { goToHash } = useHashScroll()

  function goToContact (e) {
    return goToHash(e, '#contact')
  }

  const confirmationCode = computed(() => {
    const code = route.query.code
    return typeof code === 'string' && code.length > 0 ? code : null
  })

  usePageMeta(computed(() => ({
    title: 'Data Deletion | Paintbrush Outdoors',
    description: 'How to request deletion of Paintbrush Outdoors account data for Facebook, Google, GitHub, and Microsoft sign-in. Facebook confirmation codes appear on this page.',
    path: '/data-deletion',
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

  .legal__status {
    padding: 1.25rem 1.35rem;
    border-radius: 12px;
    border: 1px solid rgba(124, 92, 255, 0.35);
    background: rgba(124, 92, 255, 0.08);
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

  .legal__section p {
    margin: 0 0 0.75rem;
  }

  .legal__section p:last-child {
    margin-bottom: 0;
  }

  .legal__section ul {
    padding-left: 1.25rem;
    margin: 0.5rem 0 0.75rem;
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
