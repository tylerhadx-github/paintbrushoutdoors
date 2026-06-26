<template>
  <div class="home">
    <AnimatedHero />
    <ProjectTimeline />
    <ProjectShowcase />
    <SkillStack />
    <MakerShelf />
    <ContactCTA />
  </div>
</template>

<script setup>
  import AnimatedHero from '@/components/portfolio/AnimatedHero.vue'
  import ProjectTimeline from '@/components/portfolio/ProjectTimeline.vue'
  import ProjectShowcase from '@/components/portfolio/ProjectShowcase.vue'
  import SkillStack from '@/components/portfolio/SkillStack.vue'
  import MakerShelf from '@/components/portfolio/MakerShelf.vue'
  import ContactCTA from '@/components/portfolio/ContactCTA.vue'
</script>

<style scoped>
  .home {
    width: 100%;
  }
</style>
