<script setup lang="ts">
import { useData } from '@/composables/useData'

const { data } = useData()
</script>

<template>
  <section class="section-padding achievements-section" v-if="data.achievements">
    <div class="container">
      <div class="achievements-grid">
        <div 
          v-for="item in data.achievements.achievements" 
          :key="item.id" 
          class="achievement-card glass-card"
        >
          <div class="icon-box">
             <!-- Icon placeholder -->
             <span>★</span> 
          </div>
          <h3 class="achievement-title">{{ item.title }}</h3>
          <p class="achievement-desc">{{ item.description }}</p>
          <span class="year">{{ item.year }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.achievement-card {
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.icon-box {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.achievement-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.achievement-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.year {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
}
</style>
