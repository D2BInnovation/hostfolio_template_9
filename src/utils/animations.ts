import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const initScrollTrigger = () => {
    ScrollTrigger.defaults({
        markers: false
    })
}

// Fade Up Animation
export const animateFadeUp = (el: HTMLElement, delay = 0) => {
    return gsap.fromTo(el,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    )
}

// Staggered Children Animation
export const animateStaggerFadeUp = (parent: HTMLElement, childrenSelector: string) => {
    const children = parent.querySelectorAll(childrenSelector)
    return gsap.fromTo(children,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: parent,
                start: 'top 80%'
            }
        }
    )
}

// Text Reveal Animation
export const animateSplitText = (el: HTMLElement) => {
    // Simple fade in for now, split text needs extra plugin or manual splitting
    return gsap.fromTo(el,
        { y: '100%', opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%'
            }
        }
    )
}

// Parallax Effect
export const animateParallax = (el: HTMLElement, speed = 0.5) => {
    return gsap.to(el, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed || -100,
        ease: "none",
        scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    })
}
