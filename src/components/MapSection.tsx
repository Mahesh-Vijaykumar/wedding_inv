'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa'

interface MapSectionProps {
  venueName?: string
  venueAddress?: string
  lat?: number
  lng?: number
}

export default function MapSection({
  venueName = 'Grand Palace Hotel',
  venueAddress = '123 Royal Street, Mumbai, Maharashtra 400001',
  lat = 19.0760,
  lng = 72.8777
}: MapSectionProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gradient mb-4">
            Find Us Here
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-gold to-royal-maroon mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect royal-shadow rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🏛️</div>
                <div>
                  <h3 className="font-serif text-2xl text-royal-maroon mb-2">
                    {venueName}
                  </h3>
                  <p className="text-royal-maroon/70 leading-relaxed">
                    {venueAddress}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow flex items-center justify-center gap-2 bg-gradient-to-r from-royal-gold to-royal-maroon text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
                >
                  <FaMapMarkerAlt />
                  Open in Maps
                </motion.a>

                <motion.a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow flex items-center justify-center gap-2 glass-effect border-2 border-royal-gold text-royal-maroon px-6 py-3 rounded-full font-medium hover:bg-white/50 transition-all"
                >
                  <FaDirections />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect royal-shadow rounded-2xl overflow-hidden h-[400px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${lat},${lng}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
