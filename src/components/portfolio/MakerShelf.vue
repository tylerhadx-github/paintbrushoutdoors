<template>
  <section id="maker" class="maker" ref="root">
    <div class="maker__inner">
      <header class="maker__head" ref="head">
        <span class="maker__eyebrow">Maker lab</span>
        <h2 class="maker__title">Designs people actually print</h2>
        <p class="maker__subtitle">
          Free, open 3D-printable models on Printables - real hardware the
          outdoor community downloads and builds.
          <strong>{{ totalDownloads }}+ downloads</strong> and counting.
        </p>
      </header>

      <div class="grid" ref="grid">
        <a
          v-for="model in models"
          :key="model.id"
          class="model"
          :style="{ '--accent': model.accent }"
          :href="model.url"
          target="_blank"
          rel="noopener"
        >
          <div v-if="thumb(model)" class="model__media">
            <img :src="thumb(model)" :alt="model.name" loading="lazy" />
            <span class="model__platform model__platform--overlay">Printables</span>
          </div>

          <div class="model__top" :class="{ 'model__top--has-media': thumb(model) }">
            <span class="model__icon"><i class="mdi" :class="model.icon"></i></span>
            <span class="model__platform">Printables</span>
          </div>

          <h3 class="model__name">{{ model.name }}</h3>
          <p class="model__blurb">{{ model.blurb }}</p>

          <div class="model__foot">
            <span class="stat" title="Likes">
              <i class="mdi mdi-heart-outline"></i> {{ model.likes }}
            </span>
            <span class="stat" title="Downloads">
              <i class="mdi mdi-tray-arrow-down"></i> {{ model.downloads }}
            </span>
            <span class="model__open">
              View <i class="mdi mdi-arrow-top-right"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { models } from '@/data/models'
  import { screenshot } from '@/data/screenshots'
  import { useScrollReveal } from '@/composables/useScrollReveal'

  function thumb (model) {
    return screenshot(model.image)
  }

  const root = ref(null)
  const head = ref(null)
  const grid = ref(null)

  const totalDownloads = computed(() =>
    models.reduce((sum, m) => sum + (m.downloads || 0), 0)
  )

  const { revealOne, revealStagger } = useScrollReveal()

  onMounted(() => {
    revealOne(head.value, { y: 28 })
    revealStagger(grid.value, '.model', { y: 40, stagger: 0.09 })
  })
</script>

<style scoped>
  .maker {
    padding: clamp(3rem, 7vw, 6rem) 1.25rem;
  }

  .maker__inner {
    max-width: 1180px;
    margin: 0 auto;
  }

  .maker__head {
    margin-bottom: clamp(2.5rem, 6vw, 4rem);
  }

  .maker__eyebrow {
    display: inline-block;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #7c5cff;
    margin-bottom: 0.85rem;
  }

  .maker__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(1.9rem, 5vw, 3rem);
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin: 0;
    color: #f4f4f8;
  }

  .maker__subtitle {
    margin: 1rem 0 0;
    max-width: 62ch;
    line-height: 1.6;
    color: #a7a7b4;
  }

  .maker__subtitle strong {
    color: #f4f4f8;
    font-weight: 600;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  .model {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(120% 120% at 100% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%),
      rgba(255, 255, 255, 0.025);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, box-shadow 0.35s ease;
    will-change: transform;
  }

  .model:hover,
  .model:focus-visible {
    transform: translateY(-5px);
    border-color: color-mix(in srgb, var(--accent) 55%, transparent);
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.4);
    outline: none;
  }

  .model__media {
    position: relative;
    margin: -1.5rem -1.5rem 1.1rem;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .model__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .model:hover .model__media img {
    transform: scale(1.04);
  }

  .model__platform--overlay {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    background: rgba(6, 6, 10, 0.6);
    backdrop-filter: blur(6px);
    color: #d3d3dd;
  }

  .model__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.1rem;
  }

  .model__top--has-media .model__platform {
    display: none;
  }

  .model__icon {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 12px;
    font-size: 1.4rem;
    color: color-mix(in srgb, var(--accent) 85%, #fff);
    background: color-mix(in srgb, var(--accent) 16%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
  }

  .model__platform {
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #8a8a99;
  }

  .model__name {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    line-height: 1.2;
    margin: 0 0 0.5rem;
    color: #f4f4f8;
  }

  .model__blurb {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #a7a7b4;
    margin: 0 0 1.25rem;
    flex: 1;
  }

  .model__foot {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }

  .stat {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.85rem;
    color: #c9c9d6;
  }

  .stat .mdi {
    font-size: 1rem;
    color: color-mix(in srgb, var(--accent) 80%, #fff);
  }

  .model__open {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: color-mix(in srgb, var(--accent) 80%, #fff);
  }

  .model__open .mdi {
    transition: transform 0.3s ease;
  }

  .model:hover .model__open .mdi {
    transform: translate(3px, -3px);
  }
</style>
