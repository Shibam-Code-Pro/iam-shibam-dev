'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProjectCard({ project, index }) {
  const router = useRouter()
  
  console.log('ProjectCard rendering:', {
    title: project.title,
    id: project.id,
    slug: project.slug,
    generatedURL: `/projects/${project.slug || project.id}`
  })
  
  const handleClick = () => {
    const url = `/projects/${project.slug || project.id}`
    console.log('Navigating to:', url, 'for project:', project.title)
    router.push(url)
  }
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer relative"
        onClick={handleClick}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Always visible dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          {/* Hover overlay for extra effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30 shadow-lg">
              {project.category}
            </span>
          </div>
          {/* Project title overlay for better visibility */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h4 className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.title}
            </h4>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-poppins font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-light/80 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-glass-white/10 text-text-light text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-glass-white/10 text-text-light text-xs rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-text-light/60">{project.status}</span>
            <div className="flex space-x-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 glass-card rounded-full flex items-center justify-center text-neon-blue"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

    </>
  )
}

