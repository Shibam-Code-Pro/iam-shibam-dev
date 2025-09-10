'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import AnimatedHeading from '@/components/AnimatedHeading'
import { getPostBySlug, blogPosts as allBlogPosts } from '@/data/blogs'

// Remove generateMetadata from client component - it's not compatible
// Metadata should be handled at the page level or in a server component

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const postData = getPostBySlug(params.slug)
      if (!postData) {
        setError('Post not found')
        return
      }
      
      if (!postData.content) {
        setError('Post content is missing')
        return
      }
      
      setPost(postData)
    } catch (err) {
      console.error('Error loading post:', err)
      setError('Failed to load post')
    } finally {
      setLoading(false)
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue mx-auto mb-4"></div>
          <p className="text-text-light">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-cyber-bg flex items-center justify-center">
        <div className="text-center glass-card p-8 rounded-2xl border border-red-500/30 max-w-md">
          <h2 className="text-xl font-semibold text-red-400 mb-4">Error Loading Post</h2>
          <p className="text-text-light/80 mb-4">{error || 'Post not found'}</p>
          <Link 
            href="/blog" 
            className="inline-block px-4 py-2 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div>
      {/* Header Section */}
      <SectionWrapper className="bg-cyber-bg pt-24 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/blog" 
              className="text-neon-blue hover:text-neon-purple transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <div className="text-center mb-12">
            {/* Enhanced Category Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 text-neon-blue text-lg font-semibold rounded-full backdrop-blur-sm neon-glow-blue">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                {post.category}
              </div>
            </div>
            
            <AnimatedHeading 
              text={post.title}
              className="text-3xl md:text-5xl lg:text-6xl mb-0 leading-tight"
              gradient={true}
            />
            
            {/* Enhanced Author Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-text-light/80 mb-8 -mt-2">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  {/* Main Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink flex items-center justify-center text-white text-lg font-bold shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110">
                    S
                  </div>
                  
                  {/* Animated Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-neon-blue/30 animate-ping"></div>
                  <div className="absolute -inset-1 rounded-full border border-neon-purple/20 animate-pulse"></div>
                  <div className="absolute -inset-2 rounded-full border border-neon-pink/10 animate-bounce" style={{animationDuration: '3s'}}></div>
                  
                  {/* Rotating Glow */}
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-neon-blue/20 via-transparent to-neon-purple/20 animate-spin" style={{animationDuration: '4s'}}></div>
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{post.author || 'Shibam Banerjee'}</div>
                  <div className="text-sm text-text-light/60">Frontend Developer</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} min read
                </div>
              </div>
            </div>

            {/* Enhanced Featured Image */}
            <div className="relative">
              <div className="relative h-72 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden glass-card shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/80 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Live Article
                  </div>
                </div>
                
                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        #{post.category.toLowerCase()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Featured</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-neon-blue/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-neon-purple/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Article Content */}
      <SectionWrapper className="bg-gradient-to-br from-cyber-bg to-cyber-bg/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10">
            {/* Article Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-light/60">Reading Progress</span>
                <span className="text-sm text-neon-blue">0%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-300" style={{width: '0%'}}></div>
              </div>
            </div>

            <div 
              className="prose prose-lg prose-invert max-w-none"
              style={{
                '--tw-prose-body': '#E5E5E5',
                '--tw-prose-headings': '#FFFFFF',
                '--tw-prose-links': '#1F51FF',
                '--tw-prose-code': '#B026FF',
                '--tw-prose-pre-bg': 'rgba(31, 81, 255, 0.1)',
                '--tw-prose-pre-code': '#E5E5E5',
                '--tw-prose-bold': '#FFFFFF',
                '--tw-prose-strong': '#FFFFFF',
              }}
            >
              {(post.content && typeof post.content === 'string') ? post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <div key={index} className="mb-8">
                      <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6 gradient-text relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple rounded-full"></div>
                        {paragraph.replace('# ', '')}
                      </h1>
                    </div>
                  )
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <div key={index} className="mt-12 mb-6">
                      <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-white mb-4 relative group">
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-neon-blue rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="bg-gradient-to-r from-white to-text-light bg-clip-text text-transparent">
                          {paragraph.replace('## ', '')}
                        </span>
                      </h2>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-neon-blue to-transparent rounded-full"></div>
                    </div>
                  )
                } else if (paragraph.startsWith('```')) {
                  // Enhanced code block handling
                  const language = paragraph.replace('```', '') || 'code'
                  return (
                    <div key={index} className="my-8">
                      <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-text-light/60 text-sm ml-2">{language}</span>
                          </div>
                          <button className="text-neon-blue hover:text-neon-purple text-sm transition-colors duration-300">
                            Copy
                          </button>
                        </div>
                        <pre className="p-4 text-sm overflow-x-auto">
                          <code className="text-text-light/90">{/* Code content would go here */}</code>
                        </pre>
                      </div>
                    </div>
                  )
                } else if (paragraph.trim() === '') {
                  return <div key={index} className="h-4" />
                } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                  return (
                    <div key={index} className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-light/90 leading-relaxed">
                        {paragraph.replace(/^[*-] /, '')}
                      </p>
                    </div>
                  )
                } else {
                  return (
                    <p key={index} className="text-text-light/90 leading-relaxed mb-6 text-lg relative group">
                      <span className="relative z-10">{paragraph}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-2 -my-1"></div>
                    </p>
                  )
                }
              }) : (
                <div className="text-center text-text-light/60 py-8">
                  <div className="glass-card p-8 rounded-2xl border border-red-500/30">
                    <h3 className="text-xl font-semibold text-red-400 mb-4">Content Loading Error</h3>
                    <p className="mb-2">Unable to load blog content for: <span className="text-neon-blue">{params.slug}</span></p>
                    <p className="text-sm text-text-light/40">Please check the console for more details.</p>
                    <Link 
                      href="/blog" 
                      className="inline-block mt-4 px-4 py-2 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
                    >
                      Back to Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Article Stats */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue mb-1">{post.readTime}</div>
                  <div className="text-sm text-text-light/60">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple mb-1">{post.content.split(' ').length}</div>
                  <div className="text-sm text-text-light/60">Words</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink mb-1">{formatDate(post.date).split(' ')[1]}</div>
                  <div className="text-sm text-text-light/60">Published</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{post.category}</div>
                  <div className="text-sm text-text-light/60">Category</div>
                </div>
              </div>
            </div>
          </article>

          {/* Author Bio */}
          <div className="glass-card p-8 rounded-2xl mt-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-neon flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                S
              </div>
              <div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-2">
                  About {post.author}
                </h3>
                <p className="text-text-light/80 mb-4">
                  Frontend Web Developer specializing in modern web technologies. 
                  Passionate about creating clean, responsive and user-friendly web experiences. 
                  MCA & BCA Graduate from Kolkata, India.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/shibam-webdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Shibam-Code-Pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="/contact"
                    className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Link
              href="/blog"
              className="px-6 py-3 glass-card border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Posts
            </Link>
            
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-neon text-white font-semibold rounded-lg neon-glow-blue transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
