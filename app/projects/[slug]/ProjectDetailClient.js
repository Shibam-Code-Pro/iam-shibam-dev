'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectDetailClient({ project }) {
  return (
    <div className="min-h-screen bg-cyber-bg pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/portfolio"
          className="inline-flex items-center gap-2 text-neon-blue hover:text-white transition-colors duration-300 mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <span className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/40 text-neon-blue text-sm font-semibold rounded-full backdrop-blur-sm shadow-lg shadow-neon-blue/20">
                  {project.category}
                </span>
              </div>
              <p className="text-xl text-text-light/80 leading-relaxed mb-6">
                {project.longDescription || project.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-neon text-white font-semibold rounded-xl neon-glow-blue transition-all duration-300 hover:shadow-neon-blue shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </motion.a>
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    boxShadow: "0 0 25px rgba(31, 81, 255, 0.6)",
                    borderColor: "rgba(31, 81, 255, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card border-2 border-neon-blue text-neon-blue font-semibold rounded-xl hover:bg-neon-blue/20 hover:text-white transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    View Source Code
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12 group"
        >
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-20 blur-sm animate-pulse rounded-2xl"></div>
            
            <div className="absolute inset-0 bg-cyber-bg rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
            
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5 rounded-2xl" />
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-poppins font-bold bg-gradient-to-r from-white to-neon-purple bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/40 text-neon-blue font-semibold rounded-xl backdrop-blur-sm shadow-lg shadow-neon-blue/10 hover:shadow-neon-blue/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-poppins font-bold bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Features
            </h2>
            <div className="space-y-4">
              {[
                { text: "Responsive design optimized for all devices", icon: "📱" },
                { text: "Modern UI/UX with smooth animations", icon: "✨" },
                { text: "Clean, maintainable code structure", icon: "🔧" },
                { text: "Performance optimized for fast loading", icon: "⚡" },
                { text: "Cross-browser compatibility", icon: "🌐" },
                { text: "SEO optimized and accessible", icon: "🎯" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-text-light/90 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                  <span className="ml-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.icon}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-text-light font-medium">{project.status}</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
