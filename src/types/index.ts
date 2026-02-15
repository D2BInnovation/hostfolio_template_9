export interface PersonalInfo {
    name: string
    title: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
    github: string
    bio: string
    resume?: string
}

export interface ButtonConfig {
    text: string
    link: string
}

export interface HeroSection {
    greeting: string
    description: string
    primaryButton: ButtonConfig
    secondaryButton: ButtonConfig
}

export interface AboutSection {
    description: string[]
    skills: string[]
}

export interface ExperienceItem {
    id: number
    company: string
    position: string
    duration: string
    location: string
    description: string
    achievements: string[]
    technologies: string[]
}

export interface ProjectItem {
    id: number
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    image: string
    featured: boolean
}

export interface SkillItem {
    name: string
    level: number
}

export interface SkillCategory {
    name: string
    skills: SkillItem[]
}

export interface SkillsSection {
    title: string
    categories: SkillCategory[]
}

export interface ServiceItem {
    id: number
    title: string
    description: string
    icon: string
}

export interface ServicesSection {
    title: string
    description: string
    services: ServiceItem[]
}

export interface TestimonialItem {
    id: number
    name: string
    position: string
    company: string
    content: string
    avatar: string
}

export interface TestimonialsSection {
    title: string
    testimonials: TestimonialItem[]
}

export interface AchievementItem {
    id: number
    title: string
    description: string
    year: string
    icon: string
}

export interface AchievementsSection {
    title: string
    achievements: AchievementItem[]
}

export interface SocialLink {
    platform: string
    url: string
    icon: string
}

export interface ContactSection {
    title: string
    description: string
    socialLinks: SocialLink[]
}

export interface FooterLink {
    text: string
    url: string
}

export interface FooterSection {
    copyright: string
    links: FooterLink[]
}

export interface PortfolioData {
    personal: PersonalInfo
    hero?: HeroSection
    about?: AboutSection
    experience?: ExperienceItem[]
    projects?: ProjectItem[]
    skills?: SkillsSection
    services?: ServicesSection
    testimonials?: TestimonialsSection
    achievements?: AchievementsSection
    contact?: ContactSection
    footer?: FooterSection
    resume?: string
}
