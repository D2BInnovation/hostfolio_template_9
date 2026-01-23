<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from '@/composables/useData'
import gsap from 'gsap'

const { data } = useData()

onMounted(() => {
  gsap.from('.skill-category', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 80%'
    }
  })
})
</script>

<template>
  <section class="section-padding skills-section" v-if="data.skills">
    <div class="container">
      <h2 class="section-title">{{ data.skills.title }}</h2>
      
      <div class="skills-grid">
        <div 
          v-for="(category, index) in data.skills.categories" 
          :key="index" 
          class="skill-category glass-card"
        >
          <h3 class="category-title">{{ category.name }}</h3>
          
          <div class="skills-list">
            <div 
              v-for="skill in category.skills" 
              :key="skill.name" 
              class="skill-item"
            >
              <div class="skill-info">
                <span>{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  padding: 2rem;
}

.category-title {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
}

.skill-level {
  color: var(--text-muted);
}

.progress-bar-bg {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 3px;
  transform-origin: left;
  transition: width 1s ease-out;
}
</style>
