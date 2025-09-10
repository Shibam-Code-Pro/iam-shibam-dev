'use client'
import { useState, useEffect } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [showText, setShowText] = useState(false)
  const [startBlurFade, setStartBlurFade] = useState(false)
  const [textOpacity, setTextOpacity] = useState(1)
  const [blurIntensity, setBlurIntensity] = useState(25)

  useEffect(() => {
    console.log('LoadingScreen mounted') // Debug log
    
    // Show welcome text after brief delay
    const textTimer = setTimeout(() => {
      console.log('Showing text') // Debug log
      setShowText(true)
    }, 800)

    // Start gradual blur reduction after 2.8 seconds
    const blurTimer = setTimeout(() => {
      console.log('Starting blur fade') // Debug log
      setStartBlurFade(true)
      
      // Gradual blur reduction for ultra-smooth effect
      let currentBlur = 25
      const blurInterval = setInterval(() => {
        currentBlur -= 0.8
        if (currentBlur <= 0) {
          currentBlur = 0
          clearInterval(blurInterval)
        }
        setBlurIntensity(currentBlur)
      }, 50) // Update every 50ms for smooth transition
      
    }, 2800)

    // Start gradual text fade at 4 seconds
    const textFadeTimer = setTimeout(() => {
      console.log('Starting text fade out') // Debug log
      
      // Gradual text opacity reduction for ultra-smooth fade
      let currentOpacity = 1
      const textFadeInterval = setInterval(() => {
        currentOpacity -= 0.02 // Very slow fade (0.02 per 50ms)
        if (currentOpacity <= 0) {
          currentOpacity = 0
          clearInterval(textFadeInterval)
        }
        setTextOpacity(currentOpacity)
      }, 50) // Update every 50ms for smooth fade
      
    }, 4000)

    // Complete loading after 7 seconds (extended for smooth text fade)
    const completeTimer = setTimeout(() => {
      console.log('Completing loading') // Debug log
      onComplete()
    }, 7000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(blurTimer)
      clearTimeout(textFadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  // Apply blur using backdrop-filter instead of direct body manipulation
  useEffect(() => {
    // No need to manipulate DOM structure
  }, [startBlurFade])

  return (
    <div 
      data-loading-screen="true"
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      style={{
        background: 'rgba(11, 12, 16, 0.95)',
        backdropFilter: `blur(${blurIntensity}px)`,
        opacity: textOpacity <= 0.1 ? 0 : 1,
        transition: 'opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
        pointerEvents: textOpacity <= 0.1 ? 'none' : 'auto'
      }}
    >
      {/* Welcome Text */}
      <div 
        className={`text-center relative z-[100000] ${
          showText ? 'transform translate-y-0' : 'transform translate-y-8'
        }`}
        style={{
          opacity: showText ? textOpacity : 0,
          transition: 'transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
        }}
      >
        <h1 
          className="text-5xl md:text-7xl font-bold text-white"
          style={{
            background: 'linear-gradient(135deg, #1F51FF 0%, #B026FF 50%, #FF4DFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px rgba(31, 81, 255, 1), 0 0 80px rgba(176, 38, 255, 0.6), 0 0 120px rgba(255, 77, 255, 0.3)',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '0.02em'
          }}
        >
          Welcome to My Portfolio
        </h1>
        
        {/* Subtle loading indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
