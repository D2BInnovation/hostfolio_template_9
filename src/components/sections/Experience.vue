<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from '@/composables/useData'
import gsap from 'gsap'

const { data } = useData()

onMounted(() => {
  const items = document.querySelectorAll('.timeline-item')
  items.forEach((item, i) => {
    gsap.from(item, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: item,
        start: 'top 85%'
      }
    })
  })
})
</script>

<template>
  <section class="section-padding experience-section" v-if="data.experience">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      
      <div class="timeline">
        <div 
          v-for="job in data.experience" 
          :key="job.id" 
          class="timeline-item"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-date">{{ job.duration }}</div>
          
          <div class="timeline-content glass-card">
            <div class="job-header">
              <h3>{{ job.position }}</h3>
              <span class="company">{{ job.company }}</span>
              <span class="location">{{ job.location }}</span>
            </div>
            
            <p class="job-desc">{{ job.description }}</p>
            
            <ul class="achievements">
              <li v-for="(achievement, index) in job.achievements" :key="index">
                {{ achievement }}
              </li>
            </ul>
            
            <div class="tech-stack">
              <span v-for="tech in job.technologies" :key="tech" class="tech-tag">
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
.experience-section {
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20px;
  width: 2px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  padding-left: 50px;
}

@media (min-width: 768px) {
  .timeline-item {
    padding-left: 0;
    width: 50%;
    left: 0;
  }
  
  .timeline-item:nth-child(even) {
    left: 50%;
    padding-left: 50px;
  }
  
  .timeline-item:nth-child(odd) {
    padding-right: 50px;
    text-align: right;
  }

  .timeline-item:nth-child(odd) .timeline-content {
    text-align: right;
  }
  
  .timeline-item:nth-child(odd) .job-header {
    flex-direction: column;
    align-items: flex-end;
  }
  
  .timeline-item:nth-child(odd) .timeline-date {
    left: auto;
    right: -120px;
    text-align: left;
  }
  
  .timeline-item:nth-child(odd) .timeline-dot {
    left: auto;
    right: -11px;
  }
}

.timeline-dot {
  position: absolute;
  left: 11px;
  top: 0;
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 50%;
  border: 4px solid var(--bg-dark);
  z-index: 2;
  box-shadow: 0 0 10px var(--primary-glow);
}

.timeline-date {
  position: absolute;
  top: 0;
  left: -120px;
  width: 100px;
  text-align: right;
  color: var(--primary);
  font-weight: 600;
  display: none;
}

@media (min-width: 768px) {
  .timeline-date {
    display: block;
  }
}

.timeline-content {
  padding: 2rem;
}

.job-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.company {
  color: var(--secondary);
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.location {
  font-size: 0.9rem;
  color: var(--text-muted);
  display: block;
  margin-bottom: 1.5rem;
}

.job-desc {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.achievements {
  list-style: none;
  margin-bottom: 1.5rem;
}

.achievements li {
  position: relative;
  margin-bottom: 0.5rem;
  color: #ddd;
  padding-left: 20px;
}

.timeline-item:nth-child(odd) .achievements li {
  padding-left: 0;
  padding-right: 0;
}

@media (min-width: 768px) {
  .timeline-item:nth-child(odd) .achievements li {
    padding-right: 20px; 
    padding-left: 0;
  }
  .timeline-item:nth-child(odd) .achievements li::before {
    left: auto;
    right: 0;
  }
}

.achievements li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .timeline-item:nth-child(odd) .tech-stack {
    justify-content: flex-end;
  }
}

.tech-tag {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  color: var(--text-muted);
}
</style>
