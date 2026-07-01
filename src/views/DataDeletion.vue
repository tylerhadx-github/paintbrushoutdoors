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
          Processing may take up to 30 days. If you have questions, use the
          <router-link to="/#contact">contact form</router-link>.
        </p>
      </section>

      <section v-else class="legal__section">
        <h2>Facebook data deletion</h2>
        <p>
          If you connected a Paintbrush Outdoors app with Facebook Login and want your data removed,
          you can delete the app from your Facebook settings or use Meta’s data deletion callback.
          After Meta notifies us, you will be redirected here with a confirmation code.
        </p>
      </section>

      <section class="legal__section">
        <h2>Other sign-in providers</h2>
        <p>
          To delete data for Google or GitHub sign-in, contact us via the
          <router-link to="/#contact">contact form</router-link>
          and include the email or username you use to sign in, plus which app(s) you use
          (for example PHA, FishSD, Trail Eye, or Nock Score).
        </p>
      </section>

      <nav class="legal__footer">
        <router-link to="/">Home</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
      </nav>
    </article>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const lastUpdated = 'June 30, 2026'

  const confirmationCode = computed(() => {
    const code = route.query.code
    return typeof code === 'string' && code.length > 0 ? code : null
  })
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

  .legal__section p {
    line-height: 1.65;
    color: #b8b8c8;
    margin: 0 0 0.75rem;
  }

  .legal__section p:last-child {
    margin-bottom: 0;
  }

  .legal__section a {
    color: #9d85ff;
  }

  .legal__footer {
    display: flex;
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
