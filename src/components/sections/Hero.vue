<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { useData } from '@/composables/useData'
import { animateParallax } from '@/utils/animations'

const { data } = useData()
const heroContent = ref(null)
const heroImage = ref(null)

onMounted(() => {
  const tl = gsap.timeline()
  
  // Initial Load Animation
  tl.from('.hero-greeting', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  .from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.hero-description', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.hero-actions', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  
  // Parallax on image if available
  if (heroImage.value) {
    animateParallax(heroImage.value, 0.2)
  }
})
</script>

<template>
  <section class="hero-section" v-if="data.hero">
    <div class="container hero-container">
      <div class="hero-content" ref="heroContent">
        <span class="hero-greeting">{{ data.hero.greeting }}</span>
        <h1 class="hero-title">
          {{ data.personal.name }} <br>
          <span class="text-gradient-primary">{{ data.personal.title }}</span>
        </h1>
        <p class="hero-description">{{ data.hero.description }}</p>
        
        <div class="hero-actions">
          <a :href="data.hero.primaryButton.link" class="btn btn-primary glass">
            {{ data.hero.primaryButton.text }}
          </a>
          <a :href="data.hero.secondaryButton.link" class="btn btn-secondary">
            {{ data.hero.secondaryButton.text }}
          </a>
        </div>
      </div>
      
      <!-- Optional: Add 3D element or Image here -->
      <div class="hero-visual" ref="heroImage">
         <div class="abstract-shape glass"></div>
         <div class="abstract-circle"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: var(--nav-height);
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

@media (min-width: 992px) {
  .hero-container {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.hero-greeting {
  display: block;
  font-family: 'Fira Code', monospace;
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 5rem;
  }
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px var(--primary-glow);
}

.btn-secondary {
  color: var(--text-muted);
}

.btn-secondary:hover {
  color: #fff;
}

.hero-visual {
  position: relative;
  height: 400px;
  display: none;
}

@media (min-width: 992px) {
  .hero-visual {
    display: block;
  }
}

.abstract-shape {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
  border-radius: 200px;
  transform: rotate(-15deg);
}

.abstract-circle {
  position: absolute;
  top: 10%;
  right: 10%;
  width: 100px;
  height: 100px;
  background: var(--secondary);
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
}
</style>
