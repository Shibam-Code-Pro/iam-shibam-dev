'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'CV', href: '/cv' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          background: scrolled ? 'rgba(11, 12, 16, 0.95)' : 'rgba(11, 12, 16, 0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease'
        }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with Welcome Badge */}
            <div className="flex items-center gap-4">
              <Link href="/" className="text-3xl font-poppins font-bold gradient-text">
                Shibam.dev
              </Link>
              <div className="hidden lg:block">
                <motion.span 
                  className="inline-flex items-center gap-2 px-4 py-2 glass-card border border-neon-blue/40 text-yellow-400 text-sm font-medium rounded-full backdrop-blur-md hover:border-neon-blue/70 hover:text-yellow-300 transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  <motion.span 
                    className="text-base"
                    animate={{ 
                      rotate: [0, 20, -10, 15, -5, 10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  >
                    👋
                  </motion.span>
                  <motion.span
                    animate={{ 
                      scale: [1, 1.05, 1, 1.02, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                  >
                    Welcome to my digital space
                  </motion.span>
                </motion.span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={`relative font-medium transition-colors duration-200 hover:text-yellow-400 ${
                    pathname === item.href ? 'text-white font-semibold' : 'text-text-light'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-text-light block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-text-light block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-text-light block transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 max-w-full glass-nav z-40 md:hidden"
          >
            <div className="flex flex-col pt-20 px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    prefetch={true}
                    className={`block py-4 text-lg font-medium transition-colors duration-200 hover:text-neon-blue ${
                      pathname === item.href ? 'text-neon-blue neon-text' : 'text-text-light'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
