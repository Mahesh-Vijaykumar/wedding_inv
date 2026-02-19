'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaHeart } from 'react-icons/fa'

interface FooterProps {
  groomName?: string
  brideName?: string
}

export default function Footer({ 
  groomName = 'Groom', 
  brideName = 'Bride' 
}: FooterProps) {
  
  const shareOnWhatsApp = () => {
    const message = `You're invited to the wedding of ${groomName} & ${brideName}! 💑\n\nJoin us in celebrating our special day.\n\nView invitation: ${window.location.href}`
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#D4AF37"/>
          </pattern>
          <rect width="100" height="100" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Fireworks Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex justify-center gap-4 text-4xl">
            {['🎆', '✨', '🎊', '✨', '🎆'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Share Button */}
        <motion.button
          onClick={shareOnWhatsApp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-glow inline-flex items-center gap-2 glass-effect royal-shadow px-6 py-3 rounded-full text-royal-maroon hover:bg-white/50 transition-all mb-8"
        >
          <FaWhatsapp className="text-green-600 text-xl" />
          Share on WhatsApp
        </motion.button>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent mb-8" />

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="font-serif text-2xl text-gradient flex items-center justify-center gap-2">
            {groomName} <FaHeart className="text-red-500 text-lg" /> {brideName}
          </p>
          
          <p className="text-royal-maroon/70">
            We can&apos;t wait to celebrate with you!
          </p>

          <p className="text-royal-maroon/50 text-sm">
            © {new Date().getFullYear()} • Made with love
          </p>
        </motion.div>

        {/* Floating Lotus */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mt-8 text-4xl"
        >
          🪷
        </motion.div>
      </div>
    </footer>
  )
}
