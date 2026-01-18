# HostFolio Template 9 - Vue 3 + GSAP

A creative and interactive portfolio built with Vue 3 featuring advanced GSAP animations and smooth scroll effects.

## 🎨 Design Features

- **GSAP Animations**: Professional timeline-based animations
- **Smooth Scroll**: Lenis for buttery smooth scrolling
- **Scroll Triggers**: Elements animate on scroll
- **Interactive Cursors**: Custom cursor animations
- **Split Text**: Character and word animations
- **Magnetic Effects**: Interactive hover states
- **Creative Layouts**: Asymmetric and dynamic designs

## 🚀 Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP 3 + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Icons**: Lucide Vue

## 📦 Installation

```bash
# Create Vue 3 app
npm create vue@latest hostfolio_template_9

# Select options:
# ✓ TypeScript
# ✓ Router
# ✓ Pinia (state management)

# Navigate to directory
cd hostfolio_template_9

# Install dependencies
npm install

# Install GSAP and other packages
npm install gsap @studio-freight/lenis lucide-vue-next

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Run development server
npm run dev
```

## 📁 Project Structure

```
hostfolio_template_9/
├── src/
│   ├── components/
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Experience.vue
│   │   ├── Projects.vue
│   │   ├── Contact.vue
│   │   └── Navbar.vue
│   ├── composables/
│   │   ├── useGSAP.ts
│   │   ├── useSmoothScroll.ts
│   │   └── useScrollTrigger.ts
│   ├── stores/
│   │   └── portfolio.ts
│   ├── assets/
│   │   └── data.json
│   ├── App.vue
│   └── main.ts
├── tailwind.config.js
└── vite.config.ts
```

## 🎬 GSAP Setup

### Main Composable

```typescript
// composables/useGSAP.ts
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAP() {
  const tl = gsap.timeline();

  onMounted(() => {
    // Your animations
  });

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  });

  return { gsap, tl };
}
```

### Smooth Scroll Setup

```typescript
// composables/useSmoothScroll.ts
import { onMounted, onUnmounted } from 'vue';
import Lenis from '@studio-freight/lenis';

export function useSmoothScroll() {
  let lenis: Lenis | null = null;

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  onUnmounted(() => {
    lenis?.destroy();
  });

  return { lenis };
}
```

## 🎭 Animation Examples

### Hero Animations

```vue
<script setup lang="ts">
import { onMounted } from 'vue';
import { useGSAP } from '@/composables/useGSAP';

const { gsap } = useGSAP();

onMounted(() => {
  const tl = gsap.timeline();
  
  tl.from('.hero-title', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  })
  .from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-cta', {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  }, '-=0.4');
});
</script>
```

### Scroll-Triggered Animations

```typescript
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '.project-card',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    markers: false
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power3.out'
});
```

### Magnetic Button Effect

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const magneticBtn = ref<HTMLElement | null>(null);

onMounted(() => {
  const btn = magneticBtn.value;
  if (!btn) return;

  btn.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = btn;
    
    const x = (offsetX - offsetWidth / 2) / 5;
    const y = (offsetY - offsetHeight / 2) / 5;
    
    gsap.to(btn, {
      x,
      y,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});
</script>

<template>
  <button ref="magneticBtn" class="magnetic-button">
    Click Me
  </button>
</template>
```

## 🎨 Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          // ... more shades
          900: '#14532d',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};
```

## 🔧 Pinia Store

```typescript
// stores/portfolio.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { PortfolioData } from '@/types';

export const usePortfolioStore = defineStore('portfolio', () => {
  const data = ref<PortfolioData | null>(null);
  const loading = ref(false);

  async function fetchData() {
    loading.value = true;
    try {
      const response = await fetch('/data.json');
      data.value = await response.json();
    } catch (error) {
      console.error('Failed to load portfolio data:', error);
    } finally {
      loading.value = false;
    }
  }

  return { data, loading, fetchData };
});
```

## 🚀 Build & Deploy

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint
npm run lint
```

## 📱 Responsive Design

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Cards -->
  </div>
</template>
```

## ⚡ Performance Tips

1. **Lazy Load Components**:
```typescript
const Projects = defineAsyncComponent(() => import('./components/Projects.vue'));
```

2. **Kill ScrollTriggers**:
```typescript
onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
```

3. **Optimize GSAP**:
```typescript
gsap.config({
  force3D: true,
  nullTargetWarn: false
});
```

## 🎯 Advanced Features

### Custom Cursor

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const cursor = ref({ x: 0, y: 0 });

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor.value, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3
    });
  });
});
</script>

<template>
  <div 
    class="custom-cursor"
    :style="{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }"
  />
</template>
```

## 📚 Resources

- [GSAP Docs](https://greensock.com/docs/)
- [Vue 3 Docs](https://vuejs.org/)
- [Lenis](https://github.com/studio-freight/lenis)
- [Pinia](https://pinia.vuejs.org/)

---

Built with ❤️ for HostFolio
