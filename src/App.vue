<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from './components/layout/Navbar.vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Experience from './components/sections/Experience.vue'
import Projects from './components/sections/Projects.vue'
import Skills from './components/sections/Skills.vue'
import Services from './components/sections/Services.vue'
import Testimonials from './components/sections/Testimonials.vue'
import Achievements from './components/sections/Achievements.vue'
import Contact from './components/sections/Contact.vue'
import { useData } from './composables/useData'
import { initScrollTrigger } from './utils/animations'

const { 
  data,
  personalInfo,
  hasHero, 
  hasAbout, 
  hasExperience, 
  hasProjects, 
  hasSkills, 
  hasServices, 
  hasTestimonials,
  hasAchievements,
  hasContact 
} = useData()

onMounted(() => {
  initScrollTrigger()
})
</script>

<template>
  <div class="app-container">
    <div class="background-globes">
      <div class="globe globe-1"></div>
      <div class="globe globe-2"></div>
      <div class="globe globe-3"></div>
      <div class="noise-overlay"></div>
    </div>

    <Navbar />

    <main>
      <Hero v-if="hasHero" id="hero" />
      <About v-if="hasAbout" id="about" />
      <Services v-if="hasServices" id="services" />
      <Experience v-if="hasExperience" id="experience" />
      <Projects v-if="hasProjects" id="projects" />
      <Skills v-if="hasSkills" id="skills" />
      <Testimonials v-if="hasTestimonials" id="testimonials" />
      <Achievements v-if="hasAchievements" id="achievements" />
      <Contact v-if="hasContact" id="contact" />
    </main>
    
    <footer class="glass footer" v-if="data.footer">
      <div class="container">
        <p>{{ data.footer.copyright }}</p>
        <div class="footer-links" v-if="data.footer.links">
          <a v-for="link in data.footer.links" :key="link.text" :href="link.url">
            {{ link.text }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import './styles/main.css';
</style>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

.background-globes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: var(--bg-dark);
}

.globe {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.globe-1 {
  top: -10%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: var(--primary);
  animation-delay: 0s;
}

.globe-2 {
  bottom: -10%;
  right: -10%;
  width: 40vw;
  height: 40vw;
  background: var(--secondary);
  animation-delay: -5s;
}

.globe-3 {
  top: 40%;
  left: 30%;
  width: 30vw;
  height: 30vw;
  background: #4f46e5;
  opacity: 0.2;
  animation-delay: -10s;
}

.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.5;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -50px); }
  66% { transform: translate(-20px, 20px); }
}

.footer {
  padding: 2rem 0;
  text-align: center;
  margin-top: 4rem;
  color: var(--text-muted);
}
</style>