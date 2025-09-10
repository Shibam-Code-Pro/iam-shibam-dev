'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const AnimatedHeading = ({ 
  text, 
  className = '', 
  gradient = false 
}) => {
  const headingRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element = headingRef.current
    if (!element || !text) return

    try {
      // Set initial opacity to 0 immediately
      element.style.opacity = '0'
      
      // Split text into spans for animation
      const words = text.split(' ')
      element.innerHTML = words.map(word => 
        `<span class="inline-block" style="opacity: 0; transform: translateY(50px) rotateX(45deg);">${word}</span>`
      ).join(' ')

      const ctx = gsap.context(() => {
        // Set parent element to visible first
        gsap.set(element, { opacity: 1 })
        
        // Animate children with improved timing
        gsap.fromTo(element.children,
          {
            y: 50,
            opacity: 0,
            rotateX: 45
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.1, // Small delay to ensure proper initialization
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true
            }
          }
        )
      }, element)

      return () => ctx.revert()
    } catch (error) {
      console.error('AnimatedHeading error:', error)
      // Fallback: show text without animation but with proper opacity
      if (element) {
        element.style.opacity = '1'
        element.textContent = text
      }
    }
  }, [text])

  return (
    <h1 
      ref={headingRef}
      className={`font-poppins font-bold ${gradient ? 'gradient-text' : 'text-white'} ${className}`}
      style={{ opacity: 0 }} // Initially hidden to prevent flash
    >
      {text}
    </h1>
  )
}

export default AnimatedHeading
