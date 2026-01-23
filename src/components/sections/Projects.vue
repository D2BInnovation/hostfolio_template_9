<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from '@/composables/useData'
import { animateStaggerFadeUp } from '@/utils/animations'

const { data } = useData()

onMounted(() => {
  const container = document.querySelector('.projects-grid')
  if (container) {
    animateStaggerFadeUp(container as HTMLElement, '.project-card')
  }
})

const getBgImage = (img: string) => {
  return img ? `url(${img})` : 'linear-gradient(45deg, #1a1a1a, #2a2a2a)'
}
</script>

<template>
  <section class="section-padding projects-section" v-if="data.projects">
    <div class="container">
      <h2 class="section-title">Selected Work</h2>
      
      <div class="projects-grid">
        <div 
          v-for="project in data.projects" 
          :key="project.id" 
          class="project-card glass-card"
        >
          <div class="card-image">
            <div class="img-placeholder" :style="{ background: getBgImage(project.image) }"></div>
            <div class="overlay">
              <div class="links">
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="icon-btn">
                  Code
                </a>
                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="icon-btn">
                  Live
                </a>
              </div>
            </div>
          </div>
          
          <div class="card-content">
             <div class="header">
               <h3 class="project-title">{{ project.title }}</h3>
               <span v-if="project.featured" class="featured-badge">Featured</span>
             </div>
             
             <p class="project-desc">{{ project.description }}</p>
             
             <div class="tech-list">
               <span v-for="tech in project.technologies" :key="tech" class="tech-pill">
                 {{ tech }}
               </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.project-card {
  padding: 0;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-glow);
}

.card-image {
  height: 220px;
  position: relative;
  overflow: hidden;
}

.img-placeholder {
  width: 100%;
  height: 100%;
  background-size: cover !important;
  background-position: center !important;
  transition: transform 0.5s ease;
}

.project-card:hover .img-placeholder {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
}

.project-card:hover .overlay {
  opacity: 1;
}

.links {
  display: flex;
  gap: 1rem;
}

.icon-btn {
  padding: 0.5rem 1.2rem;
  background: #fff;
  color: #000;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform 0.2s ease;
}

.icon-btn:hover {
  transform: scale(1.1);
}

.card-content {
  padding: 1.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
}

.featured-badge {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  background: var(--secondary);
  border-radius: 4px;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  font-size: 0.8rem;
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
}
</style>
