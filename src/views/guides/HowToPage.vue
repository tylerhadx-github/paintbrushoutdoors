<template>
  <div class="guide" :style="{ '--accent': accent }">
    <div class="guide__wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <router-link to="/">Paintbrush Outdoors</router-link>
        <span aria-hidden="true">/</span>
        <router-link to="/guides">Guides</router-link>
        <template v-if="product">
          <span aria-hidden="true">/</span>
          <router-link :to="`/${product.slug}`">{{ product.name }}</router-link>
        </template>
      </nav>

      <template v-if="product && guide">
        <p class="eyebrow">{{ product.name }}</p>
        <h1>{{ guide.title }}</h1>
        <p class="lede">{{ guide.description }}</p>
        <div class="where">
          <span v-for="place in guide.where" :key="place">{{ place }}</span>
        </div>

        <ol v-if="story.length > 1" class="story" aria-label="Rest of this product">
          <li
            v-for="(item, index) in story"
            :key="item.slug"
            :class="{ on: item.slug === guide.slug }"
          >
            <span class="num">{{ index + 1 }}</span>
            <router-link :to="`/${product.slug}/${item.slug}`">{{ item.title }}</router-link>
          </li>
        </ol>

        <p class="outcome">{{ guide.outcome }}</p>

        <ol class="steps">
          <li v-for="(item, index) in guide.steps" :key="item.title">
            <span class="num">{{ index + 1 }}</span>
            <div>
              <h2>{{ item.title }}</h2>
              <p>{{ item.body }}</p>
              <YouShouldSee :title="item.title" :text="seeText(item.see)" />
            </div>
          </li>
        </ol>

        <aside v-if="guide.keep?.length" class="keep">
          <h2>Before you rely on it</h2>
          <ul>
            <li v-for="line in guide.keep" :key="line">{{ line }}</li>
          </ul>
        </aside>

        <div class="pager">
          <router-link v-if="prev" class="btn btn--ghost" :to="`/${product.slug}/${prev.slug}`">
            {{ prev.title }}
          </router-link>
          <router-link v-else class="btn btn--ghost" :to="`/${product.slug}`">
            All {{ product.name }} steps
          </router-link>
          <router-link v-if="next" class="btn btn--primary" :to="`/${product.slug}/${next.slug}`">
            Next: {{ next.title }}
          </router-link>
          <a v-else-if="live" class="btn btn--primary" :href="live" target="_blank" rel="noopener">
            {{ product.openLabel || 'Open the product' }}
          </a>
        </div>
      </template>

      <template v-else>
        <h1>That step is not written yet</h1>
        <p class="missing">This address is not one of the product guides.</p>
        <router-link class="btn btn--primary" to="/guides">All guides</router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { computed, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import {
    guideBySlug,
    guideNeighbors,
    productAccent,
    productBySlug,
    productUrl,
    SITE_URL,
    storyGuides,
  } from '@/data/guides'
  import { seeText } from '@/data/guides'
  import { usePageMeta } from '@/composables/usePageMeta'
  import YouShouldSee from '@/components/guides/YouShouldSee.vue'

  const route = useRoute()
  const product = computed(() => productBySlug(route.params.product))
  const guide = computed(() => guideBySlug(product.value, route.params.guide))
  const story = computed(() => storyGuides(product.value))
  const neighbors = computed(() => guideNeighbors(product.value, route.params.guide))
  const prev = computed(() => neighbors.value.prev)
  const next = computed(() => neighbors.value.next)
  const accent = computed(() => product.value ? productAccent(product.value) : '#7c5cff')
  const live = computed(() => product.value ? productUrl(product.value) : '')

  watch(() => route.fullPath, () => {
    window.scrollTo(0, 0)
  })

  usePageMeta(computed(() => {
    if (!product.value || !guide.value) {
      return {
        title: 'Guide not found | Paintbrush Outdoors',
        description: 'That how-to is not on Paintbrush Outdoors.',
        path: '/guides',
        jsonLd: null,
      }
    }
    const path = `/${product.value.slug}/${guide.value.slug}`
    return {
      title: `${guide.value.title} | ${product.value.name}`,
      description: guide.value.description,
      path,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: guide.value.title,
        description: guide.value.description,
        url: `${SITE_URL}${path}`,
        step: guide.value.steps.map((item, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: item.title,
          text: seeText(item.see) ? `${item.body} ${seeText(item.see)}` : item.body,
        })),
      },
    }
  }))
</script>

<style src="@/styles/guides.css"></style>
