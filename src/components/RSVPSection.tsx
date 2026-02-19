'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import confetti from 'canvas-confetti'

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    attending: 'yes',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#800020', '#F8C8DC']
    })

    setSubmitted(true)
    setIsSubmitting(false)

    // Here you would typically send data to your backend
    // Example: await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(formData) })
    console.log('RSVP Data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <section className="relative py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect royal-shadow rounded-3xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-7xl mb-6"
            >
              🎉
            </motion.div>
            <h3 className="font-serif text-3xl text-gradient mb-4">
              Thank You!
            </h3>
            <p className="text-royal-maroon/80 text-lg mb-6">
              Your RSVP has been received. We can&apos;t wait to celebrate with you!
            </p>
            <motion.button
              onClick={() => setSubmitted(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-royal-gold hover:text-royal-maroon transition-colors"
            >
              Submit another RSVP
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gradient mb-4">
            RSVP
          </h2>
          <p className="text-royal-maroon/70 text-lg">
            Please confirm your attendance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-gold to-royal-maroon mx-auto rounded-full mt-4" />
        </motion.div>

        {/* RSVP Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-effect royal-shadow rounded-3xl p-8 md:p-12 space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-royal-maroon font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-royal-gold/30 focus:border-royal-gold outline-none transition-colors bg-white/50"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-royal-maroon font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-royal-gold/30 focus:border-royal-gold outline-none transition-colors bg-white/50"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guests" className="block text-royal-maroon font-medium mb-2">
              Number of Guests *
            </label>
            <select
              id="guests"
              name="guests"
              required
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-royal-gold/30 focus:border-royal-gold outline-none transition-colors bg-white/50"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Attendance */}
          <div>
            <label className="block text-royal-maroon font-medium mb-3">
              Will you be attending? *
            </label>
            <div className="flex gap-4">
              <label className="flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === 'yes'}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="px-6 py-3 rounded-xl border-2 border-royal-gold/30 peer-checked:border-royal-gold peer-checked:bg-royal-gold/10 cursor-pointer text-center transition-all hover:bg-white/50">
                  ✓ Yes, I&apos;ll be there
                </div>
              </label>
              <label className="flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="px-6 py-3 rounded-xl border-2 border-royal-gold/30 peer-checked:border-royal-maroon peer-checked:bg-royal-maroon/10 cursor-pointer text-center transition-all hover:bg-white/50">
                  ✗ Sorry, can&apos;t make it
                </div>
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-royal-maroon font-medium mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-royal-gold/30 focus:border-royal-gold outline-none transition-colors bg-white/50 resize-none"
              placeholder="Share your wishes or special requests..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="btn-glow w-full bg-gradient-to-r from-royal-gold to-royal-maroon text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="inline-block"
                >
                  ⏳
                </motion.span>
                Submitting...
              </span>
            ) : (
              'Submit RSVP'
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
