<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from '@/composables/useData'
import { animateFadeUp } from '@/utils/animations'

const { data } = useData()

onMounted(() => {
  // Animate Description Paragraphs
  const paragraphs = document.querySelectorAll('.about-desc p')
  paragraphs.forEach((p, i) => animateFadeUp(p as HTMLElement, i * 0.1))

  // Animate Skills Tags
  const skills = document.querySelectorAll('.skill-tag')
  skills.forEach((s, i) => animateFadeUp(s as HTMLElement, 0.3 + (i * 0.05)))
})
</script>

<template>
  <section class="section-padding about-section" v-if="data.about">
    <div class="container">
      <div class="header-wrapper">
        <h2 class="section-title">About Me</h2>
        <div class="line"></div>
      </div>

      <div class="about-grid">
        <div class="about-desc">
          <p v-for="(paragraph, index) in data.about.description" 
             :key="index" 
             class="text-muted">
            {{ paragraph }}
          </p>
        </div>

        <div class="about-skills">
          <h3 class="skill-title">Tech Stack</h3>
          <div class="skills-wrapper">
            <span 
              v-for="skill in data.about.skills" 
              :key="skill" 
              class="skill-tag glass"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
}

.header-wrapper {
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--text-main);
  white-space: nowrap;
}

.line {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, var(--glass-border), transparent);
}

.about-grid {
  display: grid;
  gap: 4rem;
}

@media (min-width: 992px) {
  .about-grid {
    grid-template-columns: 3fr 2fr;
  }
}

.about-desc p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-muted);
}

.skill-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-main);
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
  user-select: none;
}

.skill-tag:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  border-color: var(--primary);
}
</style>
