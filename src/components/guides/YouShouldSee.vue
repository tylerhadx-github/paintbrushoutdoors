<template>
  <figure v-if="text" class="moment">
    <div v-if="image" class="moment__photo">
      <img :src="image" :alt="text" />
    </div>
    <div
      v-else-if="panel"
      class="moment__device"
      :class="device === 'phone' ? 'moment__device--phone' : 'moment__device--browser'"
    >
      <div v-if="device !== 'phone'" class="moment__chrome" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="moment__sheet">
        <p class="moment__bar">{{ panel.title }}</p>
        <div
          v-for="(item, index) in panel.rows"
          :key="index"
          class="moment__row"
          :class="`moment__row--${item.kind}`"
        >
          <i v-if="item.kind === 'check' || item.kind === 'radio'" aria-hidden="true">{{ item.on ? '●' : '○' }}</i>
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <figcaption>You should see: {{ text }}</figcaption>
  </figure>
</template>

<script setup>
  import { computed } from 'vue'
  import { screenshot } from '@/data/screenshots'
  import { screenFor } from '@/data/guideScreens'

  const props = defineProps({
    title: { type: String, required: true },
    text: { type: String, default: '' },
  })

  const visual = computed(() => screenFor(props.title))
  const image = computed(() => screenshot(visual.value?.shot))
  const panel = computed(() => visual.value?.panel || null)
  const device = computed(() => visual.value?.device || 'browser')
</script>
