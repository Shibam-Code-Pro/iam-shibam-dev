/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#0B0C10',
        'neon-blue': '#1F51FF',
        'neon-purple': '#B026FF',
        'neon-pink': '#FF4DFF',
        'text-light': '#D9D9D9',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'handwriting': ['Kalam', 'cursive'],
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #1F51FF 0%, #B026FF 50%, #FF4DFF 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #0B0C10 0%, #1a1a2e 50%, #16213e 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(31, 81, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(176, 38, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 77, 255, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px rgba(31, 81, 255, 0.5)' },
          '100%': { textShadow: '0 0 30px rgba(31, 81, 255, 0.8)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
        },
        '.glass-nav': {
          background: 'rgba(11, 12, 16, 0.9)',
          backdropFilter: 'blur(20px)',
          border: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
        },
        '.neon-text': {
          textShadow: '0 0 10px currentColor',
        },
        '.neon-border': {
          border: '1px solid currentColor',
          boxShadow: '0 0 20px rgba(31, 81, 255, 0.3)',
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #1F51FF 0%, #B026FF 50%, #FF4DFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
