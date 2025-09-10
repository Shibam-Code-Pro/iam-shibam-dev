'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#1F51FF] via-[#B026FF] to-[#FF4DFF] bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 -z-10">
            <div className="w-32 h-32 mx-auto bg-[#1F51FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
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
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            The page you&apos;re looking for seems to have vanished into the digital void. 
            Don&apos;t worry, even the best developers get lost sometimes!
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(31, 81, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#1F51FF] to-[#B026FF] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1F51FF]/25"
            >
              🏠 Go Home
            </motion.button>
          </Link>

          <Link href="/portfolio">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(176, 38, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#B026FF] text-[#B026FF] font-semibold rounded-lg transition-all duration-300 hover:bg-[#B026FF] hover:text-white hover:shadow-lg hover:shadow-[#B026FF]/25"
            >
              💼 View Portfolio
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 77, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#FF4DFF] text-[#FF4DFF] font-semibold rounded-lg transition-all duration-300 hover:bg-[#FF4DFF] hover:text-white hover:shadow-lg hover:shadow-[#FF4DFF]/25"
            >
              📞 Contact Me
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
              Check the URL spelling
            </li>
            <li className="flex items-center">
              <span className="text-[#FF4DFF] mr-2">•</span>
              Navigate using the menu above
            </li>
            <li className="flex items-center">
              <span className="text-[#1F51FF] mr-2">•</span>
              Contact me if you need help
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
          <div className="w-2 h-2 bg-[#1F51FF] rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-[#B026FF] rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#FF4DFF] rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </motion.div>

        {/* Fun message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 mb-12 text-sm text-gray-500 italic"
        >
          &quot;In the world of code, every 404 is just a new adventure waiting to begin.&quot; 🚀
        </motion.p>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1F51FF] rounded-full blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#B026FF] rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#FF4DFF] rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}
