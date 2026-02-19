'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

export default function PhotoGallery() {
  // Placeholder images - replace with actual couple photos
  const photos = [
    {
      id: 1,
      caption: 'Our First Meeting',
      color: 'from-royal-pink/20 to-royal-peach/20'
    },
    {
      id: 2,
      caption: 'The Proposal',
      color: 'from-royal-gold/20 to-royal-cream/20'
    },
    {
      id: 3,
      caption: 'Engagement Ceremony',
      color: 'from-royal-maroon/20 to-royal-pink/20'
    },
    {
      id: 4,
      caption: 'Pre-Wedding Celebration',
      color: 'from-royal-peach/20 to-royal-gold/20'
    }
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gradient mb-4">
            Our Journey
          </h2>
          <p className="text-royal-maroon/70 text-lg mb-4">
            Moments that led us here
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-gold to-royal-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect royal-shadow rounded-3xl overflow-hidden p-4"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect="fade"
            loop
            className="rounded-2xl"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden">
                  {/* Placeholder gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
                    <div className="text-center p-8">
                      <div className="text-6xl md:text-8xl mb-4">📸</div>
                      <p className="font-serif text-2xl md:text-4xl text-royal-maroon">
                        {photo.caption}
                      </p>
                      <p className="text-royal-maroon/60 mt-4 text-sm">
                        Replace with actual photo
                      </p>
                    </div>
                  </div>
                  {/* Replace the above div with actual image:
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Gallery Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-royal-maroon/60 mt-6 text-sm"
        >
          Swipe or use arrows to navigate • Auto-plays every 4 seconds
        </motion.p>
      </div>
    </section>
  )
}
