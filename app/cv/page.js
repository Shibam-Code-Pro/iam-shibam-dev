'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'
import { skills, education, experience } from '@/data/skills'

export default function CV() {
  const handleDownload = () => {
    // Download the PDF from the public folder
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Shibam_Banerjee_Resume.pdf'
    link.click()
  }

  return (
    <div>
      {/* Header Section */}
      <SectionWrapper className="bg-cyber-bg pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Resume" 
              className="text-4xl md:text-6xl mb-8"
              gradient={true}
            />
            <p className="text-xl md:text-2xl text-text-light/90 mb-12 font-light">
              Frontend Web Developer • MCA & BCA Graduate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-neon text-white font-semibold rounded-xl neon-glow-blue transition-all duration-300 hover:shadow-neon-blue shadow-lg"
              >
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF Resume
              </motion.button>
              
              <motion.button
                onClick={() => window.open('/resume.pdf', '_blank')}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: "0 0 25px rgba(31, 81, 255, 0.6)",
                  borderColor: "rgba(31, 81, 255, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card border-2 border-neon-blue text-neon-blue font-semibold rounded-xl hover:bg-neon-blue/20 hover:text-white transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View PDF Online
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Profile Section */}
      <SectionWrapper className="bg-gradient-to-br from-cyber-bg via-cyber-bg/95 to-cyber-bg py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-12 rounded-3xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Professional Summary */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-poppins font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-neon rounded-full"></div>
                  Professional Profile
                </h2>
                <p className="text-text-light/90 leading-relaxed text-lg">
                  Aspiring Front-End Developer with a strong academic foundation, holding a BCA (2017) and MCA (2022). 
                  Skilled in building clean, responsive and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, 
                  and WordPress. Experienced in developing and deploying live demo projects, with a solid understanding 
                  of modern web practices. A fast learner who quickly adapts to new technologies and a collaborative team 
                  player passionate about UI/UX design and creating visually appealing, functional web interfaces. Currently 
                  seeking an entry-level front-end role to apply skills, gain industry exposure, and deliver meaningful digital 
                  experiences.
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="lg:border-l lg:border-neon-blue/20 lg:pl-8">
                <h3 className="text-2xl font-poppins font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-neon-blue rounded-full"></div>
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neon-blue/10 transition-colors">
                    <div className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-text-light text-sm">Connect-With-Shibam@outlook.com</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neon-purple/10 transition-colors">
                    <div className="w-10 h-10 bg-neon-purple/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-text-light">+91 62902-18960</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neon-blue/10 transition-colors">
                    <div className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-neon-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-text-light text-sm">linkedin.com/in/shibam-webdev</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neon-pink/10 transition-colors">
                    <div className="w-10 h-10 bg-neon-pink/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-neon-pink" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="text-text-light text-sm">github.com/Shibam-Code-Pro</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Professional Experience */}
      <SectionWrapper className="bg-cyber-bg py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading 
              text="Professional Experience" 
              className="text-3xl md:text-5xl mb-4"
              gradient={true}
            />
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-neon rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-white mb-1">
                        MERN Stack Development Intern
                      </h3>
                      <p className="text-neon-blue font-semibold text-lg">Ardent Computech Pvt. Ltd.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="px-6 py-3 bg-neon-purple/20 border border-neon-purple/30 text-neon-purple rounded-xl font-semibold">
                    2021 - 2022
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 bg-neon-blue rounded-full"></div>
                  Key Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/20">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-text-light/90">Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neon-purple/5 border border-neon-purple/20">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-text-light/90">Implemented responsive design, RESTful APIs, and scalable UI solutions.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </SectionWrapper>

      {/* Education */}
      <SectionWrapper className="bg-gradient-to-br from-cyber-bg via-cyber-bg/95 to-cyber-bg py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading 
              text="Education" 
              className="text-3xl md:text-5xl mb-4"
              gradient={true}
            />
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <span className="px-4 py-2 bg-neon-blue/20 border border-neon-blue/30 text-neon-blue rounded-lg text-sm font-semibold">
                      2019 - 2022
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-poppins font-bold text-white mb-3">
                  Master of Computer Applications
                </h3>
                <p className="text-neon-blue font-semibold text-lg mb-2">MCA</p>
                <p className="text-text-light/80 leading-relaxed">
                  Future Institute of Engineering and Management
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-purple/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <span className="px-4 py-2 bg-neon-purple/20 border border-neon-purple/30 text-neon-purple rounded-lg text-sm font-semibold">
                      2014 - 2017
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-poppins font-bold text-white mb-3">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-neon-purple font-semibold text-lg mb-2">BCA</p>
                <p className="text-text-light/80 leading-relaxed">
                  Dinabandhu Andrews Institute of Technology & Management
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Summary */}
      <SectionWrapper className="bg-cyber-bg py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading 
              text="Technical Skills" 
              className="text-3xl md:text-5xl mb-4"
              gradient={true}
            />
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Front-end
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 text-neon-blue text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CMS Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                CMS
              </h3>
              <div className="flex flex-wrap gap-2">
                {['WordPress', 'Astra theme', 'Elementor'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/30 text-neon-purple text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Chrome DevTools'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neon-pink/20 border border-neon-pink/30 text-neon-pink text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Styling & UI Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
                Styling & UI
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Bootstrap', 'Flexbox', 'CSS Grid'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 text-neon-blue text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Other Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Other
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Responsive Design', 'Semantic HTML', 'Basic SEO & Accessibility', 'UI/UX Basics'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/30 text-neon-purple text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Problem-Solving', 'Communication', 'Adaptability'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neon-pink/20 border border-neon-pink/30 text-neon-pink text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper className="bg-cyber-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading 
            text="Projects" 
            className="text-3xl md:text-4xl mb-8"
            gradient={true}
          />
          
          <div className="space-y-6">
            {/* Main Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-poppins font-bold text-white mb-3">
                Personal Portfolio Website
              </h3>
              <p className="text-neon-blue font-medium mb-2">HTML, CSS, JavaScript, Bootstrap</p>
              <ul className="space-y-2 text-text-light/80">
                <li className="flex items-start gap-3">
                  <span className="text-neon-purple mt-1">•</span>
                  Shows responsive layout, Semantic HTML, mobile-first design + grid/flex usage.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-purple mt-1">•</span>
                  Demonstrates basic JS for interactivity (smooth scroll, nav toggle, contact form validation)
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-poppins font-bold text-white mb-3">
                E-Commerce Cart
              </h3>
              <p className="text-neon-blue font-medium mb-2">HTML, CSS, JavaScript, Bootstrap</p>
              <ul className="space-y-2 text-text-light/80">
                <li className="flex items-start gap-3">
                  <span className="text-neon-purple mt-1">•</span>
                  Shows core JS logic: add/remove items, update totals, cart persistence (localStorage).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-purple mt-1">•</span>
                  Demonstrates responsive product layout with Bootstrap and clean UI/UX (front-end only).
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-poppins font-bold text-white mb-3">
                Blog App
              </h3>
              <p className="text-neon-blue font-medium mb-2">WordPress, HTML, CSS</p>
              <ul className="space-y-2 text-text-light/80">
                <li className="flex items-start gap-3">
                  <span className="text-neon-purple mt-1">•</span>
                  Converted a static blog website into a custom WordPress theme by splitting templates.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-purple mt-1">•</span>
                  Integrated the design into WordPress (Astra + Elementor) to showcase CMS setup and front-end styling.
                </li>
              </ul>
            </motion.div>

            {/* Additional Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-lg font-poppins font-semibold text-white mb-4">Additional Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Weather App</h4>
                    <p className="text-neon-blue text-sm mb-1">HTML, CSS, JavaScript</p>
                    <p className="text-text-light/70 text-sm">Shows ability to call external APIs (fetch), parse JSON, and display dynamic data (async JS + DOM updates).</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Figma to HTML Conversion</h4>
                    <p className="text-neon-blue text-sm mb-1">HTML, CSS, Bootstrap</p>
                    <p className="text-text-light/70 text-sm">Shows pixel-perfect conversion skills — turning a design into responsive, semantic HTML/CSS.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">Mini Web Components Library</h4>
                    <p className="text-neon-blue text-sm mb-1">HTML, CSS, JavaScript</p>
                    <p className="text-text-light/70 text-sm">Shows ability to create reusable UI components with vanilla JS, component thinking and JS structure.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">Scientific Calculator</h4>
                    <p className="text-neon-blue text-sm mb-1">HTML, CSS, JavaScript</p>
                    <p className="text-text-light/70 text-sm">Shows problem-solving, JS logic (math operations, input parsing, operator precedence) and UI layout for a compact app.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">Modern To-Do List</h4>
                    <p className="text-neon-blue text-sm mb-1">HTML, CSS, JavaScript, Bootstrap</p>
                    <p className="text-text-light/70 text-sm">Shows CRUD in the browser (create/read/update/delete), use of localStorage for persistence, filters/sorting and simple UX polish.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">Google Homepage Clone</h4>
                    <p className="text-neon-blue text-sm mb-1">HTML, CSS, JavaScript, Bootstrap</p>
                    <p className="text-text-light/70 text-sm">Shows ability to recreate a clean, minimal public-facing layout and responsive header/search UI — attention to spacing, typography, and alignment.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
