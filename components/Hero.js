'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
import Lottie from 'lottie-react'

const Hero = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)

  // Placeholder Lottie animation data
  const animationData = {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 90,
    w: 400,
    h: 400,
    nm: "Coding Animation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { t: 89, s: [360] }] },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [100, 100] },
                p: { a: 0, k: [0, 0] }
              },
              {
                ty: "st",
                c: { a: 0, k: [0.122, 0.318, 1, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 3 }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 90,
        st: 0
      }
    ]
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements
      gsap.fromTo(textRef.current.children, 
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      )

      // Animate CTA buttons
      gsap.fromTo(ctaRef.current.children,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          stagger: 0.1,
          delay: 0.8,
          ease: "power3.out"
        }
      )

      // Floating animation for the hero section
      gsap.to(heroRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-cyber opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 leading-tight">
              <span className="block text-white mb-2">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent font-black tracking-tight">
                Shibam Banerjee
              </span>
            </h1>

            <h2 className="text-lg md:text-xl lg:text-2xl font-poppins font-medium text-text-light mb-6">
              Frontend Web Developer • MCA & BCA Graduate
            </h2>

            <p className="text-base md:text-lg text-text-light/80 mb-8 max-w-2xl leading-relaxed">
              I build clean, responsive and user-friendly web experiences using modern technologies. 
              Passionate about creating digital solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-neon text-white font-semibold rounded-xl neon-glow-blue transition-all duration-300 hover:shadow-neon-blue shadow-lg"
                >
                  View My Projects
                </motion.button>
              </Link>
              
              <Link href="/cv">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    boxShadow: "0 0 25px rgba(31, 81, 255, 0.6)",
                    borderColor: "rgba(31, 81, 255, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 glass-card border-2 border-neon-blue text-neon-blue font-semibold rounded-xl hover:bg-neon-blue/20 hover:text-white transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
                >
                  <span className="relative z-10">Download CV</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start text-text-light/60">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kolkata, India</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Connect-With-Shibam@outlook.com</span>
              </div>
            </div>
          </div>

          {/* Animation/Visual */}
          <div ref={heroRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 glass-card rounded-full flex items-center justify-center neon-glow-blue relative overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-neon-blue/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 border border-neon-purple/20 rounded-full animate-ping"></div>
                
                {/* Profile Picture with Lottie Background */}
                <div className="w-56 h-56 md:w-64 md:h-64 relative z-10">
                  {/* Lottie Animation as Background */}
                  <Lottie 
                    animationData={animationData}
                    className="w-full h-full absolute inset-0"
                    loop={true}
                  />
                  
                  {/* Profile Picture Overlay */}
                  <div className="w-40 h-40 md:w-48 md:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden">
                    <Image 
                      src="/profile-picture.png" 
                      alt="Shibam Banerjee"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-full drop-shadow-2xl"
                      style={{ objectPosition: '50% 30%' }}
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-lg flex items-center justify-center text-neon-blue neon-glow-blue shadow-lg"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 glass-card rounded-full flex items-center justify-center text-neon-purple neon-glow-purple shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </motion.div>

              {/* Additional Orbiting Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute top-1/4 right-0 w-3 h-3 bg-neon-blue rounded-full blur-sm opacity-60"></div>
                <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-neon-purple rounded-full blur-sm opacity-40"></div>
                <div className="absolute top-0 left-1/3 w-2 h-2 bg-neon-pink rounded-full blur-sm opacity-50"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-text-light/60">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
