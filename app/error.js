'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({ error, reset }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 500 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#FF4DFF] via-[#B026FF] to-[#1F51FF] bg-clip-text text-transparent mb-4">
            500
          </h1>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 -z-10">
            <div className="w-32 h-32 mx-auto bg-[#FF4DFF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#D9D9D9] mb-4">
            Something Went Wrong
          </h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Oops! The application encountered an unexpected error. 
            Don&apos;t worry, these things happen in the digital world!
          </p>
          
          {/* Error details (only in development) */}
          {process.env.NODE_ENV === 'development' && error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6 text-left"
            >
              <h3 className="text-sm font-semibold text-[#FF4DFF] mb-2">Error Details:</h3>
              <code className="text-xs text-gray-300 break-all">
                {error.message || 'Unknown error occurred'}
              </code>
            </motion.div>
          )}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.button
            onClick={reset}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 77, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#FF4DFF] to-[#B026FF] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4DFF]/25"
          >
            🔄 Try Again
          </motion.button>

          <Link href="/">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(31, 81, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#1F51FF] text-[#1F51FF] font-semibold rounded-lg transition-all duration-300 hover:bg-[#1F51FF] hover:text-white hover:shadow-lg hover:shadow-[#1F51FF]/25"
            >
              🏠 Go Home
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(176, 38, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#B026FF] text-[#B026FF] font-semibold rounded-lg transition-all duration-300 hover:bg-[#B026FF] hover:text-white hover:shadow-lg hover:shadow-[#B026FF]/25"
            >
              📞 Report Issue
            </motion.button>
          </Link>
        </motion.div>

        {/* Helpful suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-900/30 border border-gray-700 rounded-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-[#D9D9D9] mb-4">What you can do:</h3>
          <ul className="text-gray-400 space-y-2 text-left">
            <li className="flex items-center">
              <span className="text-[#1F51FF] mr-2">•</span>
              Try refreshing the page
            </li>
            <li className="flex items-center">
              <span className="text-[#B026FF] mr-2">•</span>
              Check your internet connection
            </li>
            <li className="flex items-center">
              <span className="text-[#FF4DFF] mr-2">•</span>
              Clear your browser cache
            </li>
            <li className="flex items-center">
              <span className="text-[#1F51FF] mr-2">•</span>
              Contact me if the problem persists
            </li>
          </ul>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center space-x-8"
        >
          <div className="w-2 h-2 bg-[#FF4DFF] rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-[#B026FF] rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#1F51FF] rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </motion.div>

        {/* Fun message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 mb-12 text-sm text-gray-500 italic"
        >
          &quot;Every error is a step closer to perfection. Let&apos;s debug this together!&quot; 🛠️
        </motion.p>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF4DFF] rounded-full blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#B026FF] rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-3/4 w-64 h-64 bg-[#1F51FF] rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}
