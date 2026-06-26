<template>
  <header class="nav" :class="{ 'nav--solid': scrolled }">
    <div class="nav__inner">
      <a href="#top" class="nav__brand" @click="go($event, '#top')">
        <img :src="logo" alt="Paintbrush Outdoors" class="nav__logo" />
        <span class="nav__brandtext">Paintbrush Outdoors</span>
      </a>

      <nav class="nav__links" aria-label="Sections">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          @click="go($event, `#${link.id}`)"
        >{{ link.label }}</a>
      </nav>

      <a href="#contact" class="nav__cta" @click="go($event, '#contact')">
        Contact
      </a>
    </div>
  </header>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import logo from '@/assets/brand-logo.png'

  const route = useRoute()
  const router = useRouter()
  const scrolled = ref(false)

  const links = [
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'maker', label: 'Maker' },
    { id: 'contact', label: 'Contact' },
  ]

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function onScroll () {
    scrolled.value = window.scrollY > 40
  }

  async function go (e, sel) {
    e.preventDefault()
    if (route.path !== '/') {
      await router.push('/')
    }
    requestAnimationFrame(() => {
      const target = document.querySelector(sel)
      if (target) {
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      }
    })
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
    border-bottom: 1px solid transparent;
  }

  .nav--solid {
    background: rgba(11, 11, 16, 0.72);
    backdrop-filter: blur(14px);
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }

  .nav__inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0.85rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .nav__brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: #f4f4f8;
  }

  .nav__logo {
    height: 44px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45));
  }

  .nav__brandtext {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .nav__links {
    display: flex;
    gap: 1.5rem;
  }

  .nav__links a {
    position: relative;
    text-decoration: none;
    color: #b3b3c0;
    font-size: 0.95rem;
    transition: color 0.25s ease;
  }

  .nav__links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: #7c5cff;
    transition: width 0.25s ease;
  }

  .nav__links a:hover {
    color: #fff;
  }

  .nav__links a:hover::after {
    width: 100%;
  }

  .nav__cta {
    display: inline-flex;
    align-items: center;
    padding: 0.55rem 1.15rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    color: #f4f4f8;
    border: 1px solid rgba(124, 92, 255, 0.55);
    background: rgba(124, 92, 255, 0.12);
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .nav__cta:hover {
    transform: translateY(-2px);
    background: rgba(124, 92, 255, 0.22);
  }

  @media (max-width: 720px) {
    .nav__links {
      display: none;
    }
    .nav__brandtext {
      display: none;
    }
  }
</style>
