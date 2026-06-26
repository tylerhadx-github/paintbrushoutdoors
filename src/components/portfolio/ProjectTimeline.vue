<template>
  <section id="timeline" class="timeline" ref="root">
    <div class="timeline__inner">
      <header class="timeline__head" ref="head">
        <span class="timeline__eyebrow">The throughline</span>
        <h2 class="timeline__title">One builder, the whole stack</h2>
        <p class="timeline__subtitle">
          Every project below shares a pattern: take a real problem all the way
          from idea to a live product - frontend, backend, infrastructure, and
          sometimes the hardware itself.
        </p>
      </header>

      <ol class="track" ref="track">
        <span class="track__rail"><span class="track__fill" ref="fill"></span></span>
        <li
          v-for="p in items"
          :key="p.id"
          class="node"
          :style="{ '--accent': p.accent }"
        >
          <span class="node__dot"></span>
          <div class="node__card">
            <span class="node__cat">{{ p.category }}</span>
            <h3 class="node__name">{{ p.name }}</h3>
            <p class="node__line">{{ p.tagline }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { projects } from '@/data/projects'
  import { useScrollReveal } from '@/composables/useScrollReveal'

  const root = ref(null)
  const head = ref(null)
  const track = ref(null)
  const fill = ref(null)
  const items = projects

  const { reduced, revealOne, revealStagger, gsap } = useScrollReveal()

  onMounted(() => {
    revealOne(head.value, { y: 28 })
    revealStagger(track.value, '.node', { y: 36, stagger: 0.08 })

    if (!reduced && fill.value && track.value) {
      gsap.fromTo(
        fill.value,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: track.value,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      )
    } else if (fill.value) {
      fill.value.style.transform = 'scaleY(1)'
    }
  })
</script>

<style scoped>
  .timeline {
    padding: clamp(3rem, 7vw, 6rem) 1.25rem;
  }

  .timeline__inner {
    max-width: 880px;
    margin: 0 auto;
  }

  .timeline__head {
    margin-bottom: clamp(2.5rem, 6vw, 4rem);
  }

  .timeline__eyebrow {
    display: inline-block;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #7c5cff;
    margin-bottom: 0.85rem;
  }

  .timeline__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(1.9rem, 5vw, 3rem);
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin: 0;
    color: #f4f4f8;
  }

  .timeline__subtitle {
    margin: 1rem 0 0;
    max-width: 60ch;
    line-height: 1.6;
    color: #a7a7b4;
  }

  .track {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0 0 0 2.25rem;
  }

  .track__rail {
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 2px;
    overflow: hidden;
  }

  .track__fill {
    position: absolute;
    inset: 0;
    transform-origin: top center;
    transform: scaleY(0);
    background: linear-gradient(#7c5cff, #3ddc97);
  }

  .node {
    position: relative;
    padding-bottom: 1.5rem;
  }

  .node:last-child {
    padding-bottom: 0;
  }

  .node__dot {
    position: absolute;
    left: -2.25rem;
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #14141c;
    border: 2px solid var(--accent);
    box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 60%, transparent);
  }

  .node__card {
    padding: 1rem 1.25rem;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.025);
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .node__card:hover {
    transform: translateX(4px);
    border-color: color-mix(in srgb, var(--accent) 50%, transparent);
  }

  .node__cat {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--accent) 80%, #fff);
  }

  .node__name {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 1.15rem;
    margin: 0.25rem 0 0.3rem;
    color: #f4f4f8;
  }

  .node__line {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.5;
    color: #a7a7b4;
  }
</style>
