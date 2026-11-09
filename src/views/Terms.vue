<template>
  <div class="legal">
    <article class="legal__article">
      <router-link to="/" class="legal__home">
        <img src="/brand-logo.png" alt="Paintbrush Outdoors" class="legal__logo" />
      </router-link>
      <h1 class="legal__title">Terms of Use</h1>
      <p class="legal__updated">Last updated: {{ lastUpdated }}</p>

      <section class="legal__section">
        <h2>1. Acceptance of terms</h2>
        <p>
          These Terms of Use (“Terms”) govern your access to and use of Paintbrush Outdoors
          websites, web apps, and mobile apps, including Public Hunting Atlas and related
          products. By creating an account, signing in, or using our services, you agree to
          these Terms. If you do not agree, do not use the services.
        </p>
        <p>
          These pages are product-accurate drafts for users and store reviewers. They are not
          attorney-certified legal advice.
        </p>
      </section>

      <section class="legal__section">
        <h2>2. Our services</h2>
        <p>
          Paintbrush Outdoors builds outdoor planning and field-use software. Public Hunting
          Atlas (“PHA”) provides map-based tools for exploring public-land boundaries, planning
          trips, saving field content, and related features on web and mobile. Other products
          (such as SD Fish AI, Trail Eye, Nock Score, and FishSD) may have additional product
          pages or in-app notices; these Terms apply to Paintbrush Outdoors services generally
          unless a product states otherwise.
        </p>
        <p>
          Features may differ between web and mobile, and availability can change as we ship
          updates. We do not promise complete nationwide coverage, real-time regulations, or
          that every map layer is available offline.
        </p>
      </section>

      <section class="legal__section">
        <h2>3. Accounts</h2>
        <p>
          Some features require signing in through an OAuth provider we support (for example
          Google, GitHub, Facebook, or Microsoft, depending on the client). You are responsible
          for activity under your account and for keeping your provider credentials secure.
          Provide accurate information and do not impersonate others or share access in a way
          that violates these Terms or applicable law.
        </p>
        <p>
          How we handle account and identity data is described in our
          <router-link to="/privacy">Privacy Policy</router-link>.
        </p>
      </section>

      <section class="legal__section">
        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the services for unlawful purposes or to harass, threaten, or harm others</li>
          <li>Attempt to disrupt, scrape at abusive scale, reverse engineer in violation of law,
            or gain unauthorized access to our systems or other users’ data</li>
          <li>Upload malware or content you do not have rights to use</li>
          <li>Misrepresent map, boundary, or regulation data as official legal authority</li>
          <li>Circumvent rate limits, access controls, or security measures</li>
        </ul>
        <p>
          We may suspend or limit access when we reasonably believe these rules have been
          violated or when needed to protect the service or other users.
        </p>
      </section>

      <section class="legal__section">
        <h2>5. Outdoor use, maps, and safety disclaimer</h2>
        <p>
          Our maps, boundaries, overlays, weather, and planning tools are informational aids
          only. They are <strong>not</strong> legal advice, surveying products, or a substitute
          for official statutes, agency regulations, posted signs, property records, or
          on-the-ground judgment.
        </p>
        <p>
          Map and GIS data can be incomplete, outdated, or inaccurate. Property and land-status
          lines may not match official records. Always verify access, seasons, weapons
          restrictions, and safety conditions with the responsible agencies and your own
          observation before hunting, fishing, or traveling.
        </p>
        <p>
          Outdoor activities involve inherent risk. You are solely responsible for your safety,
          navigation, equipment, and compliance with law. Use offline features and location
          services only as aids; do not rely on them as your only means of orientation or rescue.
        </p>
      </section>

      <section class="legal__section">
        <h2>6. Intellectual property</h2>
        <p>
          Paintbrush Outdoors and its licensors own the software, branding, and original content
          we provide. You retain rights to content you create (such as markers, notes, or
          routes), and you grant us a limited license to host, sync, and display that content
          as needed to operate the features you use.
        </p>
        <p>
          Third-party map tiles, datasets, and OAuth providers remain subject to their own
          terms and licenses. Do not copy, redistribute, or commercially exploit our services
          or branding without permission, except as allowed by law.
        </p>
      </section>

      <section class="legal__section">
        <h2>7. Termination</h2>
        <p>
          You may stop using the services at any time. You may request account-related data
          deletion as described on our
          <router-link to="/data-deletion">Data deletion</router-link>
          page and in the
          <router-link to="/privacy">Privacy Policy</router-link>.
          We may suspend or terminate access for Terms violations, legal requirements, or
          discontinuation of a product. Sections that by nature should survive (including
          disclaimers and limitation of liability) continue after termination.
        </p>
      </section>

      <section class="legal__section">
        <h2>8. Disclaimer of warranties</h2>
        <p>
          The services are provided “as is” and “as available.” To the fullest extent permitted
          by law, we disclaim warranties of merchantability, fitness for a particular purpose,
          accuracy of maps or boundaries, uninterrupted availability, and non-infringement.
          We do not warrant that the services will meet your requirements or that defects will
          be corrected.
        </p>
      </section>

      <section class="legal__section">
        <h2>9. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Paintbrush Outdoors and its operators will
          not be liable for indirect, incidental, special, consequential, or punitive damages,
          or for loss of profits, data, or goodwill, arising from your use of the services,
          reliance on maps or regulations shown in the apps, outdoor activities, or inability
          to access the services—whether based on warranty, contract, tort, or any other theory,
          even if we have been advised of the possibility of such damages.
        </p>
        <p>
          Our total liability for any claim relating to the services is limited to the greater
          of (a) the amount you paid us for the specific paid feature giving rise to the claim
          in the twelve months before the claim, or (b) fifty U.S. dollars (US $50), except
          where liability cannot be limited under applicable law.
        </p>
      </section>

      <section class="legal__section">
        <h2>10. Changes</h2>
        <p>
          We may update these Terms from time to time. The “Last updated” date above reflects
          material changes. Continued use after an update constitutes acceptance of the revised
          Terms. If you do not agree, stop using the services.
        </p>
      </section>

      <section class="legal__section">
        <h2>11. Contact</h2>
        <p>
          Questions about these Terms, bug reports, or account help:
          visit
          <router-link to="/support">Support</router-link>
          or use the
          <a href="/#contact" @click="goToContact">contact form</a>
          on paintbrushoutdoors.com.
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
    title: 'Terms of Use | Paintbrush Outdoors',
    description: 'Terms for using Paintbrush Outdoors websites and apps, including Public Hunting Atlas accounts, acceptable use, and outdoor safety disclaimers.',
    path: '/terms',
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
