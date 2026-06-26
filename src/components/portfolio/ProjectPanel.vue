<template>
  <article
    class="panel"
    :class="{ 'panel--reverse': reverse }"
    :style="{ '--accent': project.accent }"
    tabindex="0"
    role="button"
    :aria-label="`${project.cta || 'View project'} - ${project.name}`"
    @click="$emit('open', project)"
    @keydown.enter.prevent="$emit('open', project)"
    @keydown.space.prevent="$emit('open', project)"
  >
    <div class="panel__media">
      <div class="frame">
        <div class="frame__bar">
          <span></span><span></span><span></span>
          <em class="frame__url">{{ displayUrl }}</em>
        </div>
        <div class="frame__screen">
          <span class="frame__mark">{{ initials }}</span>
          <span class="frame__glow"></span>
        </div>
      </div>
    </div>

    <div class="panel__body">
      <div class="panel__top">
        <span class="panel__category">{{ project.category }}</span>
        <span class="badge" :class="statusClass">{{ project.status }}</span>
      </div>

      <h3 class="panel__name">{{ project.name }}</h3>
      <p class="panel__tagline">{{ project.tagline }}</p>

      <ul class="panel__tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>

      <div class="panel__actions">
        <span class="panel__open">
          {{ project.cta || 'View project' }} <i class="mdi mdi-arrow-right"></i>
        </span>
        <div class="panel__links" @click.stop>
          <a
            v-if="project.links.live"
            :href="project.links.live"
            target="_blank"
            rel="noopener"
            class="iconlink"
            :aria-label="`${project.name} live site`"
          >
            <i class="mdi mdi-open-in-new"></i>
          </a>
          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener"
            class="iconlink"
            :aria-label="`${project.name} on GitHub`"
          >
            <i class="mdi mdi-github"></i>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    project: { type: Object, required: true },
    reverse: { type: Boolean, default: false },
  })

  defineEmits(['open'])

  const initials = computed(() =>
    props.project.name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 3)
      .toUpperCase()
  )

  const displayUrl = computed(() => {
    const url = props.project.links.live || props.project.links.github || ''
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  })

  const statusClass = computed(() => {
    const s = props.project.status.toLowerCase()
    if (s.includes('live')) return 'badge--live'
    if (s.includes('open source')) return 'badge--open'
    return 'badge--progress'
  })
</script>

<style scoped>
  .panel {
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: center;
    padding: clamp(1.25rem, 3vw, 2.25rem);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(120% 140% at 0% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 55%),
      rgba(255, 255, 255, 0.025);
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, box-shadow 0.4s ease;
    will-change: transform;
    outline: none;
  }

  .panel--reverse {
    grid-template-columns: 1fr 1.05fr;
  }

  .panel--reverse .panel__media {
    order: 2;
  }

  .panel:hover,
  .panel:focus-visible {
    transform: translateY(-6px);
    border-color: color-mix(in srgb, var(--accent) 55%, transparent);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
  }

  /* Browser frame placeholder */
  .frame {
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #0e0e15;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .panel:hover .frame {
    transform: translateY(-4px) scale(1.01);
  }

  .frame__bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    background: rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .frame__bar span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
  }

  .frame__url {
    margin-left: 10px;
    font-style: normal;
    font-size: 0.72rem;
    color: #7d7d8c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .frame__screen {
    position: relative;
    aspect-ratio: 16 / 10;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 60%),
      linear-gradient(160deg, #15151f, #0c0c12);
    overflow: hidden;
  }

  .frame__mark {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    letter-spacing: -0.03em;
    color: color-mix(in srgb, var(--accent) 80%, #ffffff);
    text-shadow: 0 6px 30px color-mix(in srgb, var(--accent) 45%, transparent);
  }

  .frame__glow {
    position: absolute;
    width: 70%;
    height: 60%;
    bottom: -30%;
    border-radius: 50%;
    background: var(--accent);
    filter: blur(60px);
    opacity: 0.4;
  }

  /* Body */
  .panel__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .panel__category {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--accent) 75%, #ffffff);
  }

  .badge {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    white-space: nowrap;
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

  .panel__name {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0 0 0.6rem;
    color: #f4f4f8;
  }

  .panel__tagline {
    margin: 0 0 1.25rem;
    font-size: 1.02rem;
    line-height: 1.55;
    color: #a7a7b4;
  }

  .panel__tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0;
    margin: 0 0 1.5rem;
  }

  .panel__tags li {
    font-size: 0.76rem;
    color: #c9c9d6;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
  }

  .panel__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .panel__open {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-weight: 600;
    color: #f4f4f8;
  }

  .panel__open .mdi {
    transition: transform 0.3s ease;
  }

  .panel:hover .panel__open .mdi {
    transform: translateX(5px);
  }

  .panel__links {
    display: flex;
    gap: 0.5rem;
  }

  .iconlink {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: #c9c9d6;
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-decoration: none;
    font-size: 1.1rem;
    transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  }

  .iconlink:hover {
    color: #fff;
    transform: translateY(-2px);
    border-color: var(--accent);
  }

  @media (max-width: 860px) {
    .panel,
    .panel--reverse {
      grid-template-columns: 1fr;
    }
    .panel--reverse .panel__media {
      order: 0;
    }
  }
</style>
