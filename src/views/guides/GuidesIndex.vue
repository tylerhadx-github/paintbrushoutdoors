<template>
  <div class="guide" style="--accent: #7c5cff">
    <div class="guide__wrap guide__wrap--wide">
      <nav class="crumbs" aria-label="Breadcrumb">
        <router-link to="/">Paintbrush Outdoors</router-link>
      </nav>
      <p class="eyebrow">How to use</p>
      <h1>Guides for the products</h1>
      <p class="lede">
        Each guide walks the screens in order, using the labels that are on the product.
        Start with the product, then follow the steps.
      </p>

      <div class="directory">
        <router-link
          v-for="product in guideProducts"
          :key="product.slug"
          :to="`/${product.slug}`"
          :style="{ '--accent': accent(product) }"
        >
          <span class="kicker">{{ product.eyebrow }}</span>
          <strong>{{ product.name }}</strong>
          <p>{{ product.promise }}</p>
        </router-link>
      </div>

      <h2 class="section-title">Open the product</h2>
      <p class="section-copy">These two run on their own sites. This guide does not invent a tour for them.</p>
      <div class="directory">
        <a
          v-for="item in liveOnly"
          :key="item.projectId"
          class="external"
          :href="url(item.projectId)"
          target="_blank"
          rel="noopener"
          :style="{ '--accent': accentId(item.projectId) }"
        >
          <span class="kicker">Live site</span>
          <strong>{{ name(item.projectId) }}</strong>
          <p>{{ item.note }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { guideProducts, liveOnly, productAccent, projectRecord, SITE_URL } from '@/data/guides'
  import { usePageMeta } from '@/composables/usePageMeta'

  function accent (product) {
    return productAccent(product)
  }

  function accentId (projectId) {
    return projectRecord(projectId)?.accent || '#7c5cff'
  }

  function name (projectId) {
    return projectRecord(projectId)?.name || projectId
  }

  function url (projectId) {
    return projectRecord(projectId)?.links?.live || ''
  }

  usePageMeta(computed(() => ({
    title: 'How to use Paintbrush Outdoors products',
    description: 'Step-by-step guides for Public Hunting Atlas, SD Fish AI, SD Hunt AI, FishSD, and the rest of the Paintbrush Outdoors products.',
    path: '/guides',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Paintbrush Outdoors guides',
      url: `${SITE_URL}/guides`,
      hasPart: guideProducts.map((product) => ({
        '@type': 'WebPage',
        name: product.name,
        url: `${SITE_URL}/${product.slug}`,
      })),
    },
  })))
</script>

<style src="@/styles/guides.css"></style>
