<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useData } from '@/composables/useData'
import gsap from 'gsap'

const { personalInfo, navItems } = useData()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  
  if (mobileMenuOpen.value) {
    gsap.to('.mobile-menu', { 
      height: 'auto', 
      opacity: 1, 
      duration: 0.3,
      display: 'block' 
    })
  } else {
    gsap.to('.mobile-menu', { 
      height: 0, 
      opacity: 0, 
      duration: 0.3, 
      display: 'none' 
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="container navbar-content">
      <a href="#" class="logo">
        <span class="logo-text">{{ personalInfo.name }}</span>
      </a>

      <!-- Desktop Menu -->
      <div class="desktop-menu">
        <a 
          v-for="item in navItems" 
          :key="item.name"
          :href="item.href"
          class="nav-link"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="toggleMobileMenu">
        <span class="hamburger" :class="{ 'active': mobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu glass">
      <div class="mobile-menu-content">
        <a 
          v-for="item in navItems" 
          :key="item.name"
          :href="item.href"
          class="mobile-nav-link"
          @click="toggleMobileMenu"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar-scrolled {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  height: 70px;
}

.navbar-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-text {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(to right, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desktop-menu {
  display: none;
  gap: 2rem;
}

@media (min-width: 768px) {
  .desktop-menu {
    display: flex;
  }
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--text-main);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

@media (min-width: 768px) {
  .mobile-toggle {
    display: none;
  }
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

.hamburger::before { top: -8px; }
.hamburger::after { bottom: -8px; }

.hamburger.active { background: transparent; }
.hamburger.active::before { transform: rotate(45deg); top: 0; }
.hamburger.active::after { transform: rotate(-45deg); bottom: 0; }

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 0;
  opacity: 0;
  overflow: hidden;
  display: none;
  background: rgba(10, 10, 10, 0.95);
}

.mobile-menu-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.mobile-nav-link {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-main);
}
</style>
