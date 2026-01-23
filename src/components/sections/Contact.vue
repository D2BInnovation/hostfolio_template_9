<script setup lang="ts">
import { useData } from '@/composables/useData'

const { data } = useData()
</script>

<template>
  <section class="section-padding contact-section" v-if="data.contact">
    <div class="container">
      <div class="contact-content glass-card">
        <div class="text-side">
          <h2 class="section-title">{{ data.contact.title }}</h2>
          <p class="desc">{{ data.contact.description }}</p>
          
          <div class="social-links">
            <a 
              v-for="link in data.contact.socialLinks" 
              :key="link.platform"
              :href="link.url"
              target="_blank"
              class="social-btn glass"
            >
              {{ link.platform }}
            </a>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-input glass" placeholder="Your Name" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-input glass" placeholder="Your Email" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-input glass" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  display: flex;
  align-items: center;
  min-height: 80vh;
}

.contact-content {
  display: grid;
  gap: 3rem;
  padding: 4rem;
}

@media (min-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
  }
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.desc {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.form-input {
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
}

.btn {
  padding: 1rem 2rem;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  align-self: flex-start;
}

.btn:hover {
  background: var(--secondary);
}
</style>
