<template>
  <section id="skills" class="skills" ref="root">
    <div class="skills__inner">
      <header class="skills__head" ref="head">
        <span class="skills__eyebrow">Capabilities</span>
        <h2 class="skills__title">Full-stack, end to end</h2>
        <p class="skills__subtitle">
          Not a frontend dev who hands off the rest. I design the systems, write
          the APIs, ship the cloud, and - when it matters - build the device too.
          I pick the right tools for each job; here's the ground I cover.
        </p>
      </header>

      <div class="stack" ref="stack">
        <button
          v-for="(group, i) in skills"
          :key="group.id"
          class="card"
          :class="{ 'card--open': openId === group.id }"
          :style="{ '--i': i }"
          :aria-expanded="openId === group.id"
          @click="toggle(group.id)"
        >
          <div class="card__head">
            <span class="card__icon"><i class="mdi" :class="group.icon"></i></span>
            <div class="card__titles">
              <h3 class="card__title">{{ group.title }}</h3>
              <p class="card__blurb">{{ group.blurb }}</p>
            </div>
            <i class="mdi mdi-chevron-down card__chev"></i>
          </div>

          <div class="card__items">
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { skills } from '@/data/skills'
  import { useScrollReveal } from '@/composables/useScrollReveal'

  const root = ref(null)
  const head = ref(null)
  const stack = ref(null)
  const openId = ref(skills[0]?.id ?? null)

  const { revealOne, revealStagger } = useScrollReveal()

  function toggle (id) {
    openId.value = openId.value === id ? null : id
  }

  onMounted(() => {
    revealOne(head.value, { y: 28 })
    revealStagger(stack.value, '.card', { y: 40, stagger: 0.09 })
  })
</script>

<style scoped>
  .skills {
    padding: clamp(3rem, 7vw, 6rem) 1.25rem;
  }

  .skills__inner {
    max-width: 1000px;
    margin: 0 auto;
  }

  .skills__head {
    margin-bottom: clamp(2.5rem, 6vw, 4rem);
  }

  .skills__eyebrow {
    display: inline-block;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #7c5cff;
    margin-bottom: 0.85rem;
  }

  .skills__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(1.9rem, 5vw, 3rem);
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin: 0;
    color: #f4f4f8;
  }

  .skills__subtitle {
    margin: 1rem 0 0;
    max-width: 60ch;
    line-height: 1.6;
    color: #a7a7b4;
  }

  .stack {
    display: grid;
    gap: 0.85rem;
  }

  .card {
    text-align: left;
    width: 100%;
    cursor: pointer;
    color: inherit;
    padding: 1.25rem 1.5rem;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.025);
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  }

  .card:hover {
    border-color: rgba(124, 92, 255, 0.45);
    background: rgba(124, 92, 255, 0.06);
  }

  .card--open {
    border-color: rgba(124, 92, 255, 0.55);
    background: rgba(124, 92, 255, 0.07);
  }

  .card__head {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .card__icon {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 14px;
    font-size: 1.5rem;
    color: #b89bff;
    background: rgba(124, 92, 255, 0.14);
    border: 1px solid rgba(124, 92, 255, 0.3);
  }

  .card__titles {
    flex: 1;
    min-width: 0;
  }

  .card__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 1.2rem;
    margin: 0 0 0.2rem;
    color: #f4f4f8;
  }

  .card__blurb {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.45;
    color: #a7a7b4;
  }

  .card__chev {
    font-size: 1.5rem;
    color: #8a8a99;
    transition: transform 0.35s ease;
  }

  .card--open .card__chev {
    transform: rotate(180deg);
    color: #b89bff;
  }

  .card__items {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .card--open .card__items {
    grid-template-rows: 1fr;
  }

  .card__items ul {
    overflow: hidden;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
  }

  .card--open .card__items ul {
    padding: 1.1rem 0 0.2rem 64px;
  }

  .card__items li {
    font-size: 0.82rem;
    color: #d3d3dd;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 600px) {
    .card--open .card__items ul {
      padding-left: 0;
    }
  }
</style>
