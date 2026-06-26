<template>
  <section id="work" class="showcase" ref="root">
    <div class="showcase__inner">
      <header class="showcase__head" ref="head">
        <span class="showcase__eyebrow">Selected work</span>
        <h2 class="showcase__title">Products we've shipped</h2>
        <p class="showcase__subtitle">
          A mix of live apps, full-stack platforms, hardware, and open-source kits.
          Tap any project to dig into the details.
        </p>
      </header>

      <div class="showcase__featured">
        <ProjectPanel
          v-for="(project, i) in featured"
          :key="project.id"
          :project="project"
          :reverse="i % 2 === 1"
          class="reveal-panel"
          @open="open"
        />
      </div>

      <div v-if="more.length" class="showcase__more" ref="moreGrid">
        <h3 class="showcase__more-title">More builds</h3>
        <div class="more-grid">
          <button
            v-for="project in more"
            :key="project.id"
            class="mini"
            :style="{ '--accent': project.accent }"
            @click="open(project)"
          >
            <div class="mini__media" :class="{ 'mini__media--placeholder': !thumb(project) }">
              <img v-if="thumb(project)" :src="thumb(project)" :alt="`${project.name} screenshot`" loading="lazy" />
              <template v-else>
                <span class="mini__media-mark">{{ initials(project.name) }}</span>
                <span class="mini__media-glow"></span>
              </template>
            </div>
            <div class="mini__top">
              <span class="mini__mark" :class="{ 'mini__mark--logo': logoMark(project) }">
                <img v-if="logoMark(project)" :src="logoMark(project)" :alt="`${project.name} logo`" />
                <template v-else>{{ initials(project.name) }}</template>
              </span>
              <span class="mini__status">{{ project.status }}</span>
            </div>
            <h4 class="mini__name">{{ project.name }}</h4>
            <p class="mini__tagline">{{ project.tagline }}</p>
            <span class="mini__cta">{{ project.cta || 'View project' }} <i class="mdi mdi-arrow-right"></i></span>
          </button>
        </div>
      </div>
    </div>

    <ProjectDetail :project="selected" @close="selected = null" />
  </section>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import ProjectPanel from './ProjectPanel.vue'
  import ProjectDetail from './ProjectDetail.vue'
  import { projects } from '@/data/projects'
  import { screenshot } from '@/data/screenshots'
  import { useScrollReveal } from '@/composables/useScrollReveal'

  const root = ref(null)
  const head = ref(null)
  const moreGrid = ref(null)
  const selected = ref(null)

  const featured = computed(() => projects.filter((p) => p.featured))
  const more = computed(() => projects.filter((p) => !p.featured))

  const { revealOne, revealStagger } = useScrollReveal()

  function open (project) {
    selected.value = project
  }

  function initials (name) {
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 3)
      .toUpperCase()
  }

  function thumb (project) {
    return screenshot(project.images?.[0])
  }

  function logoMark (project) {
    return screenshot(project.logo)
  }

  onMounted(() => {
    revealOne(head.value, { y: 32 })
    if (root.value) {
      root.value.querySelectorAll('.reveal-panel').forEach((el) => {
        revealOne(el, { y: 60, duration: 1 })
      })
    }
    if (moreGrid.value) revealStagger(moreGrid.value, '.mini', { y: 40 })
  })
</script>

<style scoped>
  .showcase {
    position: relative;
    padding: clamp(3rem, 7vw, 6rem) 1.25rem;
  }

  .showcase__inner {
    max-width: 1180px;
    margin: 0 auto;
  }

  .showcase__head {
    margin-bottom: clamp(2.5rem, 6vw, 4.5rem);
  }

  .showcase__eyebrow {
    display: inline-block;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #7c5cff;
    margin-bottom: 0.85rem;
  }

  .showcase__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(2rem, 5vw, 3.25rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0;
    color: #f4f4f8;
  }

  .showcase__subtitle {
    margin: 1rem 0 0;
    max-width: 620px;
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.6;
    color: #a7a7b4;
  }

  .showcase__featured {
    display: grid;
    gap: clamp(1.5rem, 4vw, 3rem);
  }

  .showcase__more {
    margin-top: clamp(3rem, 7vw, 5rem);
  }

  .showcase__more-title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8a8a99;
    margin: 0 0 1.5rem;
  }

  .more-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  .mini {
    display: flex;
    flex-direction: column;
    text-align: left;
    cursor: pointer;
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(120% 120% at 100% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%),
      rgba(255, 255, 255, 0.025);
    color: inherit;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, box-shadow 0.35s ease;
    will-change: transform;
  }

  .mini:hover,
  .mini:focus-visible {
    transform: translateY(-5px);
    border-color: color-mix(in srgb, var(--accent) 55%, transparent);
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.4);
    outline: none;
  }

  .mini__media {
    margin: -1.5rem -1.5rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
  }

  .mini__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .mini__media--placeholder {
    position: relative;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 60%),
      linear-gradient(160deg, #15151f, #0c0c12);
  }

  .mini__media-mark {
    position: relative;
    z-index: 1;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(1.8rem, 6vw, 2.6rem);
    letter-spacing: -0.03em;
    color: color-mix(in srgb, var(--accent) 80%, #ffffff);
    text-shadow: 0 6px 30px color-mix(in srgb, var(--accent) 45%, transparent);
  }

  .mini__media-glow {
    position: absolute;
    width: 60%;
    height: 70%;
    bottom: -30%;
    border-radius: 50%;
    background: var(--accent);
    filter: blur(50px);
    opacity: 0.35;
  }

  .mini__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .mini__mark {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    color: color-mix(in srgb, var(--accent) 85%, #fff);
    background: color-mix(in srgb, var(--accent) 16%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
    overflow: hidden;
  }

  .mini__mark--logo {
    background: #fff;
    padding: 4px;
  }

  .mini__mark--logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .mini__status {
    font-size: 0.7rem;
    color: #8a8a99;
    letter-spacing: 0.04em;
  }

  .mini__name {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0 0 0.4rem;
    color: #f4f4f8;
  }

  .mini__tagline {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #a7a7b4;
    margin: 0 0 1.1rem;
  }

  .mini__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: auto;
    font-size: 0.85rem;
    font-weight: 600;
    color: color-mix(in srgb, var(--accent) 80%, #fff);
  }

  .mini__cta .mdi {
    transition: transform 0.3s ease;
  }

  .mini:hover .mini__cta .mdi {
    transform: translateX(4px);
  }
</style>
