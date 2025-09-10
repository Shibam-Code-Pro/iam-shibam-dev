'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-card p-8 rounded-2xl h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-text-light font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full form-input"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-text-light font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full form-input"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-text-light font-medium mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full form-input"
          placeholder="What's this about?"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-text-light font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full form-input resize-none"
          placeholder="Tell me about your project or inquiry..."
        />
      </div>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg ${
            submitStatus === 'success' 
              ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
              : 'bg-red-500/20 border border-red-500/30 text-red-400'
          }`}
        >
          {submitStatus === 'success' 
            ? 'Thank you! Your message has been sent successfully.' 
            : 'Sorry, there was an error sending your message. Please try again.'}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '100%',
          padding: '16px 32px',
          background: 'linear-gradient(135deg, #1F51FF 0%, #B026FF 50%, #FF4DFF 100%) !important',
          color: 'white !important',
          fontWeight: '600',
          borderRadius: '12px',
          border: 'none !important',
          boxShadow: '0 0 20px rgba(31, 81, 255, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2)',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.5 : 1,
          transition: 'all 0.3s ease',
          fontSize: '16px',
          backgroundImage: 'linear-gradient(135deg, #1F51FF 0%, #B026FF 50%, #FF4DFF 100%)',
          backgroundColor: '#1F51FF'
        }}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="spinner mr-2"></div>
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
