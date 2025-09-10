'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const SkillsGrid = ({ skills, title = "Skills" }) => {
  const gridRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element = gridRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.fromTo(element.children,
        {
          scale: 0.8,
          opacity: 0,
          y: 30
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, element)

    return () => ctx.revert()
  }, [])

  const getSkillColor = (level) => {
    if (level >= 85) return 'neon-blue'
    if (level >= 70) return 'neon-purple'
    return 'neon-pink'
  }

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-poppins font-semibold text-white mb-6 gradient-text">
        {title}
      </h3>
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card p-4 rounded-lg text-center group cursor-pointer"
          >
            <div className="mb-3">
              <div className={`w-12 h-12 mx-auto rounded-full bg-${getSkillColor(skill.level)}/20 flex items-center justify-center mb-2 group-hover:neon-glow-${getSkillColor(skill.level)} transition-all duration-300`}>
                <span className={`text-${getSkillColor(skill.level)} font-bold text-sm`}>
                  {skill.level}%
                </span>
              </div>
              <h4 className="font-medium text-white text-sm group-hover:text-neon-blue transition-colors duration-300">
                {skill.name}
              </h4>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-glass-white/10 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-2 rounded-full bg-gradient-to-r from-${getSkillColor(skill.level)} to-${getSkillColor(skill.level)}/60`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsGrid
