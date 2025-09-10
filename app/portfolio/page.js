'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'
import ProjectCard from '@/components/ProjectCard'
import { projects, projectCategories } from '@/data/projects'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilterChange = (category) => {
    setActiveFilter(category)
    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category === category || project.technologies.includes(category)
      ))
    }
  }

  return (
    <div>
      {/* Header Section */}
      <SectionWrapper className="bg-cyber-bg pt-14 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="My Portfolio" 
              className="text-4xl md:text-6xl mb-6"
              gradient={true}
            />
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              A collection of projects that showcase my skills in frontend development, 
              responsive design, and modern web technologies. Each project represents 
              a unique challenge and learning experience.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-neon text-white neon-glow-blue hover:shadow-neon-blue shadow-lg'
                    : 'glass-card text-text-light hover:text-neon-blue hover:border-neon-blue border-2 border-transparent hover:border-neon-blue/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-poppins font-semibold text-white mb-2">
                No projects found
              </h3>
              <p className="text-text-light/80">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </SectionWrapper>

      {/* Skills Used Section */}
      <SectionWrapper className="bg-gradient-to-br from-cyber-bg to-cyber-bg/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading 
              text="Technologies I Work With" 
              className="text-3xl md:text-4xl mb-4"
              gradient={true}
            />
            <p className="text-lg text-text-light/80 max-w-2xl mx-auto">
              These are the main technologies and tools I use to bring projects to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'HTML5', icon: '🌐', description: 'Semantic markup' },
              { name: 'CSS3', icon: '🎨', description: 'Modern styling' },
              { name: 'JavaScript', icon: '⚡', description: 'Interactive functionality' },
              { name: 'React', icon: '⚛️', description: 'Component-based UI' },
              { name: 'Bootstrap', icon: '📱', description: 'Responsive framework' },
              { name: 'WordPress', icon: '📝', description: 'Content management' },
              { name: 'Git', icon: '🔧', description: 'Version control' },
              { name: 'Figma', icon: '🎯', description: 'Design to code' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-poppins font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-text-light/60 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading 
            text="Like What You See?" 
            className="text-3xl md:text-4xl mb-6"
            gradient={true}
          />
          <p className="text-lg text-text-light/80 mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to work on new projects and collaborate with amazing people. 
            Let&apos;s discuss how we can bring your ideas to life!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-neon text-white font-semibold rounded-xl neon-glow-blue transition-all duration-300 hover:shadow-neon-blue shadow-lg"
            >
              Start a Project
            </motion.a>
            <motion.a
              href="/cv"
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                boxShadow: "0 0 25px rgba(31, 81, 255, 0.6)",
                borderColor: "rgba(31, 81, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card border-2 border-neon-blue text-neon-blue font-semibold rounded-xl hover:bg-neon-blue/20 hover:text-white transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
            >
              <span className="relative z-10">View My Resume</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
