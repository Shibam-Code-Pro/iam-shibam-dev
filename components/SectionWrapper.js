'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const SectionWrapper = ({ children, className = '', id = '' }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element = sectionRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      // Optimized animation with faster timing and GPU acceleration
      gsap.fromTo(element.children,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          force3D: true, // GPU acceleration
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true // Animate only once
          }
        }
      )
    }, element)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`py-20 ${className}`}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
