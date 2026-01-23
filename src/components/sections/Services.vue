<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from '@/composables/useData'
import { animateStaggerFadeUp } from '@/utils/animations'

const { data } = useData()

onMounted(() => {
  const container = document.querySelector('.services-grid')
  if (container) {
    animateStaggerFadeUp(container as HTMLElement, '.service-card')
  }
})
</script>

<template>
  <section class="section-padding services-section" v-if="data.services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ data.services.title }}</h2>
        <p class="section-subtitle">{{ data.services.description }}</p>
      </div>

      <div class="services-grid">
        <div 
          v-for="service in data.services.services" 
          :key="service.id" 
          class="service-card glass-card"
        >
          <div class="icon-wrapper">
            <div class="icon-circle"></div>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <div class="glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  position: relative;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 5rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 3rem 2rem;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  group: hover;
}

.service-card:hover {
  transform: translateY(-10px);
}

.icon-wrapper {
  margin-bottom: 1.5rem;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background: var(--primary);
  border-radius: 50%;
  opacity: 0.2;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

.glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, var(--primary-glow), transparent 40%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.service-card:hover .glow {
  opacity: 1;
}
</style>
