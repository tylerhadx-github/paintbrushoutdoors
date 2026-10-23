<template>
  <div class="guide" :style="{ '--accent': accent }">
    <div class="guide__wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <router-link to="/">Paintbrush Outdoors</router-link>
        <span aria-hidden="true">/</span>
        <router-link to="/guides">Guides</router-link>
      </nav>

      <template v-if="product">
        <p class="eyebrow">{{ product.eyebrow }}</p>
        <h1>{{ product.name }}</h1>
        <p class="lede">{{ product.lede }}</p>
        <div class="actions" v-if="live">
          <a class="btn btn--primary" :href="live" target="_blank" rel="noopener">
            {{ product.openLabel || 'Open the product' }}
          </a>
        </div>
        <figure v-if="shot" class="shot">
          <img :src="shot" :alt="`${product.name} screen`" />
        </figure>

        <h2 class="section-title">Do this in order</h2>
        <p class="section-copy">{{ product.promise }}</p>
        <ol class="story">
          <li v-for="(item, index) in story" :key="item.slug">
            <span class="num">{{ index + 1 }}</span>
            <router-link :to="`/${product.slug}/${item.slug}`">
              {{ item.title }}
              <small>{{ item.outcome }}</small>
            </router-link>
          </li>
        </ol>

        <template v-if="extra.length">
          <h2 class="section-title">Also on this product</h2>
          <div class="cards">
            <router-link
              v-for="item in extra"
              :key="item.slug"
              class="card"
              :to="`/${product.slug}/${item.slug}`"
            >
              <strong>{{ item.title }}</strong>
              <span>{{ item.description }}</span>
            </router-link>
          </div>
        </template>

        <aside v-if="product.hold?.length" class="hold">
          <h2>On the menu, not ready to follow yet</h2>
          <ul>
            <li v-for="line in product.hold" :key="line">{{ line }}</li>
          </ul>
        </aside>
      </template>

      <template v-else>
        <h1>That guide is not on this site</h1>
        <p class="missing">The product address does not match a guide. The full list is on the guides page.</p>
        <router-link class="btn btn--primary" to="/guides">All guides</router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { computed, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import {
    extraGuides,
    productAccent,
    productBySlug,
    productShot,
    productUrl,
    SITE_URL,
    storyGuides,
  } from '@/data/guides'
  import { usePageMeta } from '@/composables/usePageMeta'

  const route = useRoute()
  const product = computed(() => productBySlug(route.params.product))
  const story = computed(() => storyGuides(product.value))
  const extra = computed(() => extraGuides(product.value))
  const accent = computed(() => product.value ? productAccent(product.value) : '#7c5cff')
  const live = computed(() => product.value ? productUrl(product.value) : '')
  const shot = computed(() => product.value ? productShot(product.value) : '')

  watch(() => route.fullPath, () => {
    window.scrollTo(0, 0)
  })

  usePageMeta(computed(() => {
    if (!product.value) {
      return {
        title: 'Guide not found | Paintbrush Outdoors',
        description: 'That product guide is not on Paintbrush Outdoors.',
        path: '/guides',
        jsonLd: null,
      }
    }
    return {
      title: `How to use ${product.value.name} | Paintbrush Outdoors`,
      description: product.value.lede,
      path: `/${product.value.slug}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `How to use ${product.value.name}`,
        itemListElement: product.value.guides.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.title,
          url: `${SITE_URL}/${product.value.slug}/${item.slug}`,
        })),
      },
    }
  }))
</script>

<style src="@/styles/guides.css"></style>
