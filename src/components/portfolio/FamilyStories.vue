<template>
  <section id="stories" class="stories" ref="root">
    <div class="stories__bg" aria-hidden="true">
      <span class="stories__orb"></span>
    </div>

    <div class="stories__inner">
      <header class="stories__head" ref="head">
        <span class="stories__eyebrow">Family Stories</span>
        <h2 class="stories__title">Stories our family tells.</h2>
        <p class="stories__lead">
          Original children's books from our family — fishing legends, Christmas
          visits, and stories made to be read aloud.
        </p>
        <a
          class="btn btn--primary"
          :href="BOOKS_URL"
          target="_blank"
          rel="noopener"
        >
          See the Books <i class="mdi mdi-arrow-top-right"></i>
        </a>
      </header>

      <div class="stories__covers" ref="covers">
        <a
          v-for="book in books"
          :key="book.id"
          class="book-card"
          :style="{ '--accent': book.accent }"
          :href="BOOKS_URL"
          target="_blank"
          rel="noopener"
        >
          <div class="book-card__media">
            <img :src="book.cover" :alt="`${book.title} cover`" loading="lazy" />
          </div>
          <h3 class="book-card__title">{{ book.title }}</h3>
          <p class="book-card__author">by {{ book.author }}</p>
          <p class="book-card__tagline">{{ book.tagline }}</p>
          <span class="book-card__open">
            Open <i class="mdi mdi-arrow-top-right"></i>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { books, BOOKS_URL } from '@/data/books'
  import { useScrollReveal } from '@/composables/useScrollReveal'

  const root = ref(null)
  const head = ref(null)
  const covers = ref(null)

  const { revealOne, revealStagger } = useScrollReveal()

  onMounted(() => {
    revealOne(head.value, { y: 28 })
    revealStagger(covers.value, '.book-card', { y: 40, stagger: 0.12 })
  })
</script>

<style scoped>
  .stories {
    position: relative;
    padding: clamp(3rem, 7vw, 6rem) 1.25rem;
    overflow: hidden;
  }

  .stories__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .stories__orb {
    position: absolute;
    top: 10%;
    right: -8%;
    width: min(480px, 55vw);
    height: min(480px, 55vw);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(232, 168, 56, 0.14), transparent 68%);
    filter: blur(8px);
  }

  .stories__inner {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 5vw, 3.5rem);
    align-items: center;
  }

  .stories__head {
    max-width: 34rem;
  }

  .stories__eyebrow {
    display: inline-block;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #e8a838;
    margin-bottom: 0.85rem;
  }

  .stories__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(1.9rem, 5vw, 3rem);
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin: 0;
    color: #f4f4f8;
  }

  .stories__lead {
    margin: 1rem 0 1.75rem;
    max-width: 42ch;
    line-height: 1.6;
    color: #a7a7b4;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.9rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .btn--primary {
    background: linear-gradient(120deg, #e8a838, #d4891f);
    color: #1a1206;
    box-shadow: 0 12px 36px rgba(232, 168, 56, 0.35);
  }

  .btn--primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 48px rgba(232, 168, 56, 0.5);
  }

  .stories__covers {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .book-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(120% 120% at 100% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 55%),
      rgba(255, 255, 255, 0.025);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, box-shadow 0.35s ease;
    will-change: transform;
  }

  .book-card:hover,
  .book-card:focus-visible {
    transform: translateY(-5px);
    border-color: color-mix(in srgb, var(--accent) 55%, transparent);
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.4);
    outline: none;
  }

  .book-card__media {
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: 14px;
    margin-bottom: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.25);
  }

  .book-card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .book-card:hover .book-card__media img {
    transform: scale(1.04);
  }

  .book-card__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.05rem;
    line-height: 1.25;
    margin: 0 0 0.35rem;
    color: #f4f4f8;
  }

  .book-card__author {
    margin: 0 0 0.5rem;
    font-size: 0.82rem;
    color: #8a8a99;
  }

  .book-card__tagline {
    margin: 0 0 1rem;
    font-size: 0.88rem;
    line-height: 1.45;
    color: #a7a7b4;
    flex: 1;
  }

  .book-card__open {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: color-mix(in srgb, var(--accent) 85%, #fff);
    padding-top: 0.85rem;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }

  .book-card__open .mdi {
    transition: transform 0.3s ease;
  }

  .book-card:hover .book-card__open .mdi {
    transform: translate(3px, -3px);
  }

  @media (max-width: 900px) {
    .stories__inner {
      grid-template-columns: 1fr;
    }

    .stories__head {
      max-width: none;
    }
  }

  @media (max-width: 520px) {
    .stories__covers {
      grid-template-columns: 1fr;
      max-width: 280px;
      margin: 0 auto;
    }
  }
</style>
