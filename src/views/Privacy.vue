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
      </section>

      <section class="legal__section">
        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <strong>Account and identity.</strong> When you sign in with Google, GitHub, or
            Facebook, we receive your provider user ID and, depending on the provider, your
            username, display name, and/or email address. We use this to identify your account
            and sync your data across our apps.
          </li>
          <li>
            <strong>App data you create.</strong> Depending on the product, this may include
            saved map markers, routes, fishing or hunting notes, trail camera images and
            detections, league scores, ballistics profiles, and similar content you choose to
            store in our services.
          </li>
          <li>
            <strong>Technical information.</strong> Our hosting providers (including Microsoft
            Azure, Cloudflare, and home-lab infrastructure behind secure tunnels) may process
            standard server logs such as IP address, browser type, and request timestamps to
            operate and secure the services. We do not use this for advertising.
          </li>
          <li>
            <strong>Local storage.</strong> Web and mobile apps may store preferences or session
            tokens on your device to keep you signed in and improve performance.
          </li>
        </ul>
      </section>

      <section class="legal__section">
        <h2>3. How we use information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Authenticate you and provide access to the apps you use</li>
          <li>Store and sync your content across devices where the product supports it</li>
          <li>Operate, secure, troubleshoot, and improve our services</li>
          <li>Comply with applicable law and respond to valid legal requests</li>
        </ul>
        <p>
          We do not sell your personal information and we do not use your data for third-party
          advertising.
        </p>
      </section>

      <section class="legal__section">
        <h2>4. Data sharing</h2>
        <p>
          Sign-in is handled by the OAuth providers you choose (Google, GitHub, Meta/Facebook)
          under their own privacy policies. App data is stored on infrastructure we control or
          contract with (Azure, Cloudflare, and secured private servers). We do not share your
          data with other third parties except as needed to run the service or as required by law.
        </p>
      </section>

      <section class="legal__section">
        <h2>5. Your rights and data deletion</h2>
        <p>You may request deletion of personal data associated with your account.</p>
        <ul>
          <li>
            <strong>Facebook users:</strong> use Meta’s data deletion flow when removing our app,
            or visit our
            <router-link to="/data-deletion">data deletion status page</router-link>
            after submitting a request.
          </li>
          <li>
            <strong>All users:</strong> contact us via the
            <router-link to="/#contact">contact form</router-link>
            on this site. Include the email or username you use to sign in and which app(s) you
            use. We will process your request in a reasonable time.
          </li>
        </ul>
        <p>
          Some records may be retained where required for legal, security, or operational reasons
          (for example anonymized analytics or historical league results). We retain only what is
          necessary.
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
          <router-link to="/#contact">contact us through paintbrushoutdoors.com</router-link>.
        </p>
      </section>

      <nav class="legal__footer">
        <router-link to="/">Home</router-link>
        <router-link to="/data-deletion">Data deletion</router-link>
      </nav>
    </article>
  </div>
</template>

<script setup>
  const lastUpdated = 'June 30, 2026'
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
