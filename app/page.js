'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import LoadingScreen from '@/components/LoadingScreen'
import { featuredProjects } from '@/data/projects'
import { getFeaturedPosts } from '@/data/blogs'
import { motion, AnimatePresence } from 'framer-motion'


// Get featured blog posts from centralized data
const featuredPosts = getFeaturedPosts()

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if user has visited homepage before in this browser session
    const hasVisited = sessionStorage.getItem('hasVisitedHomepage')
    
    console.log('SessionStorage check:', hasVisited) // Debug
    
    if (hasVisited === null || hasVisited === undefined) {
      // First time visitor in this session - show loading animation
      console.log('First time this session - showing loading') // Debug
      setIsFirstVisit(true)
      setIsLoading(true)
      setShowContent(false)
      
      // Set sessionStorage only after loading completes, not immediately
      // This prevents the double useEffect issue in React Strict Mode
    } else {
      // Returning visitor in same session - skip loading animation
      console.log('Returning visitor same session - no loading') // Debug
      setIsFirstVisit(false)
      setIsLoading(false)
      setShowContent(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setShowContent(true)
    // Set sessionStorage flag after loading completes
    sessionStorage.setItem('hasVisitedHomepage', 'true')
  }

  return (
    <>
      {/* Loading Screen - Only on first visit */}
      {isLoading && isFirstVisit && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      <div className={`overflow-hidden transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <SectionWrapper className="bg-cyber-bg" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Featured Projects" 
              className="text-4xl md:text-5xl mb-4"
              gradient={true}
            />
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in frontend development, 
              responsive design, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 glass-card border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue/10 transition-all duration-300 group"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Preview Section */}
      <SectionWrapper className="bg-gradient-to-br from-cyber-bg to-cyber-bg/80" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Technical Skills" 
              className="text-4xl md:text-5xl mb-4"
              gradient={true}
            />
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              I specialize in frontend technologies and have experience with modern web development tools and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'HTML5', icon: '🌐', color: 'neon-blue' },
              { name: 'CSS3', icon: '🎨', color: 'neon-purple' },
              { name: 'JavaScript', icon: '⚡', color: 'neon-pink' },
              { name: 'React', icon: '⚛️', color: 'neon-blue' },
              { name: 'Bootstrap', icon: '📱', color: 'neon-purple' },
              { name: 'WordPress', icon: '📝', color: 'neon-pink' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-xl text-center group hover:neon-glow-blue transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-medium text-white group-hover:text-neon-blue transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 glass-card border border-neon-purple text-neon-purple font-semibold rounded-lg hover:bg-neon-purple/10 transition-all duration-300 group"
            >
              Learn More About Me
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Blog Teasers Section */}
      <SectionWrapper className="bg-cyber-bg" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Latest Blog Posts" 
              className="text-4xl md:text-5xl mb-4"
              gradient={true}
            />
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              I share my thoughts on web development, coding tips, and industry insights. 
              Check out my latest articles below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/blog"
              className="inline-flex items-center px-8 py-4 glass-card border border-neon-pink text-neon-pink font-semibold rounded-lg hover:bg-neon-pink/10 transition-all duration-300 group"
            >
              Read All Posts
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" id="cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading 
            text="Let's Work Together" 
            className="text-4xl md:text-5xl mb-6"
            gradient={true}
          />
          <p className="text-xl text-text-light/80 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;m always excited to work on new projects 
            and collaborate with amazing people. Let&apos;s create something awesome together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-neon text-white font-semibold rounded-lg neon-glow-blue transition-all duration-300 hover:shadow-neon-blue hover:scale-105 hover:-translate-y-1 transform relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/30 to-neon-blue/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out"></div>
            </a>
            <a
              href="/cv"
              className="px-8 py-4 glass-card border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue/20 hover:text-white transition-all duration-300 hover:scale-108 hover:-translate-y-1 transform hover:border-neon-blue/80 hover:shadow-neon-blue backdrop-blur-md relative overflow-hidden group"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out"></div>
            </a>
          </div>
        </div>
      </SectionWrapper>
      </div>
    </>
  )
}
