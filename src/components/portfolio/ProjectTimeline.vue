<template>
  <section id="timeline" class="timeline" ref="root">
    <div class="timeline__inner">
      <header class="timeline__head" ref="head">
        <span class="timeline__eyebrow">The throughline</span>
        <h2 class="timeline__title">Engineered from the bottom of the lake to the top of the mountain</h2>
        <p class="timeline__subtitle">
          Every product we ship follows the same path: take a real problem all
          the way from idea to a live build - frontend, backend, infrastructure,
          and sometimes the hardware itself.
        </p>
      </header>

      <ol class="track" ref="track">
        <span class="track__rail"><span class="track__fill" ref="fill"></span></span>
        <li
          v-for="s in items"
          :key="s.id"
          class="node"
          :style="{ '--accent': s.accent }"
        >
          <span class="node__dot"></span>
          <div class="node__card">
            <div class="node__head">
              <span class="node__icon"><i class="mdi" :class="s.icon"></i></span>
              <span class="node__step">Stage {{ String(s.step).padStart(2, '0') }}</span>
              <span class="node__cat">{{ s.label }}</span>
            </div>
            <h3 class="node__name">{{ s.name }}</h3>
            <p class="node__line">{{ s.line }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { stages } from '@/data/process'
  import { useScrollReveal } from '@/composables/useScrollReveal'

  const root = ref(null)
  const head = ref(null)
  const track = ref(null)
  const fill = ref(null)
  const items = stages

  const { reduced, revealOne, revealStagger, gsap, ScrollTrigger } = useScrollReveal()

  onMounted(() => {
    revealOne(head.value, { y: 28 })
    revealStagger(track.value, '.node', { y: 36, stagger: 0.08 })

    const nodes = track.value ? track.value.querySelectorAll('.node') : []

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

      // Light up each dot as the rail fill passes it (same 70% reference line).
      nodes.forEach((node) => {
        ScrollTrigger.create({
          trigger: node,
          start: 'top 70%',
          onEnter: () => node.classList.add('is-active'),
          onLeaveBack: () => node.classList.remove('is-active'),
        })
      })
    } else {
      if (fill.value) fill.value.style.transform = 'scaleY(1)'
      nodes.forEach((node) => node.classList.add('is-active'))
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
    box-shadow: 0 0 0 0 transparent;
    transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
  }

  .node.is-active .node__dot {
    background: var(--accent);
    transform: scale(1.15);
    box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 70%, transparent);
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

  .node__head {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .node__icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: none;
    border-radius: 10px;
    font-size: 1.1rem;
    color: color-mix(in srgb, var(--accent) 85%, #fff);
    background: color-mix(in srgb, var(--accent) 16%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
  }

  .node__step {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8a8a99;
  }

  .node__cat {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--accent) 80%, #fff);
  }

  .node__step + .node__cat::before {
    content: '·';
    margin-right: 0.6rem;
    color: rgba(255, 255, 255, 0.25);
  }

  .node__name {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 1.15rem;
    margin: 0.6rem 0 0.3rem;
    color: #f4f4f8;
  }

  .node__line {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.5;
    color: #a7a7b4;
  }
</style>
