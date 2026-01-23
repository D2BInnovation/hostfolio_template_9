<script setup lang="ts">
import { useData } from '@/composables/useData'

const { data } = useData()
</script>

<template>
  <section class="section-padding testimonials-section" v-if="data.testimonials">
    <div class="container">
      <h2 class="section-title">{{ data.testimonials.title }}</h2>
      
      <div class="testimonials-grid">
        <div 
          v-for="item in data.testimonials.testimonials" 
          :key="item.id" 
          class="testimonial-card glass-card"
        >
          <div class="quote-icon">"</div>
          <p class="content">{{ item.content }}</p>
          
          <div class="author">
            <div class="avatar-placeholder"></div>
            
            <div class="author-info">
              <h4>{{ item.name }}</h4>
              <span>{{ item.position }} at {{ item.company }}</span>
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  padding: 2.5rem;
  position: relative;
}

.quote-icon {
  font-size: 4rem;
  color: var(--primary);
  opacity: 0.2;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-family: serif;
}

.content {
  font-size: 1.1rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-placeholder {
  width: 50px;
  height: 50px;
  background: var(--glass-border);
  border-radius: 50%;
}

.author-info h4 {
  font-size: 1rem;
  margin-bottom: 0.2rem;
}

.author-info span {
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
