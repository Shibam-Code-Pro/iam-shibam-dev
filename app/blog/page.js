'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'
import BlogCard from '@/components/BlogCard'
import { blogPosts, getCategories } from '@/data/blogs'

// Get blog posts and categories from centralized data
const categories = getCategories()

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)
  return (
    <div>
      {/* Header Section */}
      <SectionWrapper className="bg-cyber-bg pt-14 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Blog" 
              className="text-4xl md:text-6xl mb-6"
              gradient={true}
            />
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Welcome to my blog! Here I share my thoughts on web development, 
              coding tips, industry insights, and everything related to frontend development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 glass-card border-2 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-neon-blue text-neon-blue bg-neon-blue/20'
                    : 'border-transparent text-text-light hover:text-neon-blue hover:border-neon-blue/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Featured Post - Only show when "All" is selected */}
          {activeCategory === 'All' && (
            <div className="mb-16">
              <h2 className="text-2xl font-poppins font-semibold text-white mb-8 text-center">
                Featured Article
              </h2>
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm font-medium rounded-full backdrop-blur-sm">
                        {blogPosts[0].category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-text-light/60">
                      <time>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      <span>•</span>
                      <span>{blogPosts[0].readTime} min read</span>
                    </div>
                    <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-text-light/80 mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <motion.a
                      href={`/blog/${blogPosts[0].slug}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-neon text-white font-semibold rounded-xl neon-glow-blue transition-all duration-300 hover:shadow-neon-blue shadow-lg"
                    >
                      Read Full Article
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          <div>
            <h2 className="text-2xl font-poppins font-semibold text-white mb-8 text-center">
              {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard post={post} index={index} />
                </motion.div>
              ))}
            </div>
            
            {/* No posts message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-light/60 text-lg">
                  No articles found in the {activeCategory} category.
                </p>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter Section */}
      <SectionWrapper className="bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading 
            text="Stay Updated" 
            className="text-3xl md:text-4xl mb-6"
            gradient={true}
          />
          <p className="text-lg text-text-light/80 mb-8 max-w-2xl mx-auto">
            Want to stay up-to-date with my latest articles and web development tips? 
            Follow me on social media or connect with me directly!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://linkedin.com/in/shibam-webdev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-neon text-white font-semibold rounded-xl neon-glow-blue transition-all duration-300 hover:shadow-neon-blue shadow-lg"
            >
              Follow on LinkedIn
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                boxShadow: "0 0 25px rgba(31, 81, 255, 0.6)",
                borderColor: "rgba(31, 81, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card border-2 border-neon-blue text-neon-blue font-semibold rounded-xl hover:bg-neon-blue/20 hover:text-white transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
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
