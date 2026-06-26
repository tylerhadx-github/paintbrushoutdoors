<template>
  <Teleport to="body">
    <Transition name="detail">
      <div
        v-if="project"
        class="detail"
        :style="{ '--accent': project.accent }"
        @click.self="$emit('close')"
      >
        <div class="detail__sheet" role="dialog" aria-modal="true" :aria-label="project.name">
          <button class="detail__close" @click="$emit('close')" aria-label="Close">
            <i class="mdi mdi-close"></i>
          </button>

          <header class="detail__head">
            <span class="detail__category">{{ project.category }}</span>
            <h2 class="detail__name">{{ project.name }}</h2>
            <p class="detail__tagline">{{ project.tagline }}</p>

            <div class="detail__links">
              <a
                v-if="project.links.live"
                :href="project.links.live"
                target="_blank"
                rel="noopener"
                class="btn btn--primary"
              >
                <i class="mdi mdi-open-in-new"></i> Visit live
              </a>
              <a
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener"
                class="btn btn--ghost"
              >
                <i class="mdi mdi-github"></i> GitHub
              </a>
              <span class="badge" :class="statusClass">{{ project.status }}</span>
            </div>
          </header>

          <div class="detail__body">
            <div v-if="webShots.length" class="detail__gallery" :class="{ 'detail__gallery--single': webShots.length === 1 }">
              <figure v-for="(img, i) in webShots" :key="img.name" class="shot">
                <img :src="img.src" :alt="`${project.name} screenshot ${i + 1}`" loading="lazy" />
              </figure>
            </div>

            <div v-if="mobileShots.length" class="detail__phones">
              <figure v-for="img in mobileShots" :key="img.name" class="phone">
                <img :src="img.src" :alt="`${project.name} mobile screenshot`" loading="lazy" />
              </figure>
            </div>

            <p class="detail__summary">{{ project.summary }}</p>

            <div v-if="project.metrics && project.metrics.length" class="detail__metrics">
              <div v-for="m in project.metrics" :key="m.label" class="metric">
                <span class="metric__value">{{ m.value }}</span>
                <span class="metric__label">{{ m.label }}</span>
              </div>
            </div>

            <div class="detail__grid">
              <section class="block">
                <h3 class="block__title">
                  <i class="mdi mdi-star-four-points-outline"></i> Impressive uses
                </h3>
                <ul class="block__list">
                  <li v-for="(h, i) in project.highlights" :key="i">{{ h }}</li>
                </ul>
              </section>

              <aside class="block block--side">
                <h3 class="block__title">
                  <i class="mdi mdi-lightbulb-on-outline"></i> Why we built it
                </h3>
                <p class="block__why">{{ project.why }}</p>

                <h4 class="block__subtitle">Built with</h4>
                <ul class="block__stack">
                  <li v-for="s in project.stack" :key="s">{{ s }}</li>
                </ul>

                <template v-if="project.links.repos && project.links.repos.length">
                  <h4 class="block__subtitle">Repos</h4>
                  <ul class="block__repos">
                    <li v-for="r in project.links.repos" :key="r.label">
                      <a
                        v-if="!r.private"
                        :href="r.url"
                        target="_blank"
                        rel="noopener"
                      >
                        <i class="mdi mdi-source-branch"></i> {{ r.label }}
                      </a>
                      <span v-else class="repo-private">
                        <i class="mdi mdi-lock-outline"></i> {{ r.label }}
                        <em>private</em>
                      </span>
                    </li>
                  </ul>
                </template>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import { computed, watch } from 'vue'
  import { screenshot } from '@/data/screenshots'

  const props = defineProps({
    project: { type: Object, default: null },
  })

  const emit = defineEmits(['close'])

  // Filenames containing "mobile" or "phone" render in a portrait phone frame.
  const gallery = computed(() =>
    (props.project?.images || [])
      .map((name) => ({
        name,
        src: screenshot(name),
        mobile: /mobile|phone/i.test(name),
      }))
      .filter((img) => img.src)
  )

  const webShots = computed(() => gallery.value.filter((i) => !i.mobile))
  const mobileShots = computed(() => gallery.value.filter((i) => i.mobile))

  const statusClass = computed(() => {
    if (!props.project) return ''
    const s = props.project.status.toLowerCase()
    if (s.includes('live')) return 'badge--live'
    if (s.includes('open source')) return 'badge--open'
    return 'badge--progress'
  })

  function onKey (e) {
    if (e.key === 'Escape') emit('close')
  }

  watch(
    () => props.project,
    (val) => {
      if (typeof document === 'undefined') return
      if (val) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', onKey)
      } else {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', onKey)
      }
    }
  )
</script>

<style scoped>
  .detail {
    position: fixed;
    inset: 0;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: clamp(1rem, 4vw, 3rem);
    overflow-y: auto;
    background: rgba(6, 6, 10, 0.72);
    backdrop-filter: blur(10px);
  }

  .detail__sheet {
    position: relative;
    width: 100%;
    max-width: 980px;
    margin: auto;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background:
      radial-gradient(120% 80% at 0% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 50%),
      #101018;
    box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6);
    padding: clamp(1.5rem, 4vw, 3rem);
  }

  .detail__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.04);
    color: #f4f4f8;
    font-size: 1.3rem;
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .detail__close:hover {
    transform: rotate(90deg);
    background: rgba(255, 255, 255, 0.1);
  }

  .detail__category {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.78rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--accent) 78%, #ffffff);
  }

  .detail__name {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0.5rem 0 0.6rem;
    color: #f7f7fb;
  }

  .detail__tagline {
    margin: 0 0 1.5rem;
    font-size: 1.1rem;
    color: #b3b3c0;
    max-width: 60ch;
  }

  .detail__links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.2rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .btn--primary {
    background: linear-gradient(120deg, #7c5cff, #6344e6);
    color: #fff;
    box-shadow: 0 10px 28px rgba(124, 92, 255, 0.4);
  }

  .btn--primary:hover {
    transform: translateY(-2px);
  }

  .btn--ghost {
    color: #f4f4f8;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .btn--ghost:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
  }

  .badge {
    font-size: 0.74rem;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    border: 1px solid transparent;
  }

  .badge--live {
    color: #3ddc97;
    background: rgba(61, 220, 151, 0.12);
    border-color: rgba(61, 220, 151, 0.4);
  }

  .badge--open {
    color: #7c5cff;
    background: rgba(124, 92, 255, 0.14);
    border-color: rgba(124, 92, 255, 0.45);
  }

  .badge--progress {
    color: #ffb454;
    background: rgba(255, 180, 84, 0.12);
    border-color: rgba(255, 180, 84, 0.4);
  }

  .detail__gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
    margin: 0 0 1.75rem;
  }

  .detail__gallery--single {
    grid-template-columns: 1fr;
  }

  .shot {
    margin: 0;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #0e0e15;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  }

  .shot img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  .detail__phones {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(0.75rem, 2vw, 1.5rem);
    margin: 0 0 2rem;
  }

  .phone {
    margin: 0;
    flex: 0 1 200px;
    max-width: 220px;
    border-radius: 26px;
    overflow: hidden;
    padding: 6px;
    background: linear-gradient(160deg, #20202c, #0c0c12);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
  }

  .phone img {
    display: block;
    width: 100%;
    border-radius: 20px;
  }

  .detail__summary {
    font-size: 1.1rem;
    line-height: 1.65;
    color: #d3d3dd;
    margin: 0 0 1.75rem;
  }

  @media (max-width: 560px) {
    .detail__gallery {
      grid-template-columns: 1fr;
    }
  }

  .detail__metrics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .metric {
    flex: 1 1 130px;
    padding: 1rem 1.1rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.025);
  }

  .metric__value {
    display: block;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: color-mix(in srgb, var(--accent) 80%, #ffffff);
  }

  .metric__label {
    font-size: 0.8rem;
    color: #8a8a99;
  }

  .detail__grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: clamp(1.25rem, 3vw, 2.5rem);
  }

  .block__title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 1rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #f4f4f8;
    margin: 0 0 1rem;
  }

  .block__title .mdi {
    color: var(--accent);
  }

  .block__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.85rem;
  }

  .block__list li {
    position: relative;
    padding-left: 1.6rem;
    line-height: 1.55;
    color: #c9c9d6;
  }

  .block__list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: var(--accent);
    box-shadow: 0 0 12px var(--accent);
  }

  .block--side {
    padding: 1.25rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.02);
    height: fit-content;
  }

  .block__why {
    line-height: 1.6;
    color: #c9c9d6;
    margin: 0 0 1.25rem;
  }

  .block__subtitle {
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8a8a99;
    margin: 1.25rem 0 0.6rem;
  }

  .block__stack,
  .block__repos {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .block__stack li {
    font-size: 0.78rem;
    color: #d3d3dd;
    padding: 0.3rem 0.65rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .block__repos {
    flex-direction: column;
    gap: 0.5rem;
  }

  .block__repos a,
  .repo-private {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.85rem;
    color: #c9c9d6;
    text-decoration: none;
  }

  .block__repos a:hover {
    color: #fff;
  }

  .repo-private em {
    font-style: normal;
    font-size: 0.68rem;
    color: #8a8a99;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    padding: 0.1rem 0.45rem;
  }

  /* Transition */
  .detail-enter-active,
  .detail-leave-active {
    transition: opacity 0.35s ease;
  }

  .detail-enter-active .detail__sheet,
  .detail-leave-active .detail__sheet {
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
  }

  .detail-enter-from,
  .detail-leave-to {
    opacity: 0;
  }

  .detail-enter-from .detail__sheet,
  .detail-leave-to .detail__sheet {
    transform: translateY(40px) scale(0.97);
    opacity: 0;
  }

  @media (max-width: 760px) {
    .detail {
      padding: 0;
      align-items: stretch;
    }
    .detail__sheet {
      border-radius: 20px 20px 0 0;
      margin: auto 0 0;
      min-height: 92svh;
    }
    .detail__grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .detail-enter-from .detail__sheet,
    .detail-leave-to .detail__sheet {
      transform: none;
    }
  }
</style>
