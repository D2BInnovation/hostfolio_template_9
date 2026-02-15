import { ref, computed } from 'vue'
import type { PortfolioData } from '@/types'
import portfolioData from '../../data.json'

const data = ref<PortfolioData>(portfolioData as PortfolioData)

export function useData() {
    const personalInfo = computed(() => data.value.personal)

    // Section Existence Checks
    const hasHero = computed(() => !!data.value.hero)
    const hasAbout = computed(() => !!data.value.about)
    const hasExperience = computed(() => !!data.value.experience && data.value.experience.length > 0)
    const hasProjects = computed(() => !!data.value.projects && data.value.projects.length > 0)
    const hasSkills = computed(() => !!data.value.skills)
    const hasServices = computed(() => !!data.value.services)
    const hasTestimonials = computed(() => !!data.value.testimonials)
    const hasAchievements = computed(() => !!data.value.achievements)
    const hasContact = computed(() => !!data.value.contact)
    const hasFooter = computed(() => !!data.value.footer)
    const resume = computed(() => (data.value as any).resume || data.value.personal?.resume)

    // Navigation Items Generator
    const navItems = computed(() => {
        const items = []
        if (hasHero.value) items.push({ name: 'Home', href: '#hero' })
        if (hasAbout.value) items.push({ name: 'About', href: '#about' })
        if (hasServices.value) items.push({ name: 'Services', href: '#services' })
        if (hasExperience.value) items.push({ name: 'Experience', href: '#experience' })
        if (hasProjects.value) items.push({ name: 'Work', href: '#projects' })
        if (hasSkills.value) items.push({ name: 'Skills', href: '#skills' })
        if (hasTestimonials.value) items.push({ name: 'Testimonials', href: '#testimonials' })
        if (hasAchievements.value) items.push({ name: 'Awards', href: '#achievements' })
        if (hasContact.value) items.push({ name: 'Contact', href: '#contact' })
        return items
    })

    return {
        data: computed(() => data.value),
        personalInfo,
        navItems,
        hasHero,
        hasAbout,
        hasExperience,
        hasProjects,
        hasSkills,
        hasServices,
        hasTestimonials,
        hasAchievements,
        hasContact,
        hasFooter,
        resume
    }
}
