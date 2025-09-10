'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BlogCard = ({ post, index = 0 }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.15, ease: "easeOut" }
      }}
      className="glass-card rounded-xl overflow-hidden group cursor-pointer"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image || 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=800&h=600&fit=crop'}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/60 to-transparent" />
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-4 py-2 text-sm font-bold rounded-full shadow-lg ${
              post.category === 'CSS' ? 'bg-neon-blue text-white shadow-neon-blue/50' :
              post.category === 'JavaScript' ? 'bg-neon-pink text-white shadow-neon-pink/50' :
              post.category === 'Design' ? 'bg-neon-purple text-white shadow-neon-purple/50' :
              post.category === 'Performance' ? 'bg-green-500 text-white shadow-green-500/50' :
              post.category === 'React' ? 'bg-cyan-500 text-white shadow-cyan-500/50' :
              'bg-neon-blue text-white shadow-neon-blue/50'
            }`}>
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-text-light/60">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          <h3 className="text-xl font-poppins font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-text-light/80 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center text-white text-sm font-bold">
                S
              </div>
              <span className="text-sm text-text-light/80">Shibam Banerjee</span>
            </div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center text-neon-blue text-sm font-medium"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default BlogCard
