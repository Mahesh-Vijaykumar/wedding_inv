'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

export default function PhotoGallery() {
  // Define your photos here - add as many as you want!
  // Just place images in public/images/gallery/ and list them here
  const photos = [
    {
      id: 1,
      src: '/images/gallery/WhatsApp Image 2026-01-09 at 12.05.49 PM.jpeg',
      caption: 'Beautiful Moments',
    },
    {
      id: 2,
      src: '/images/gallery/WhatsApp Image 2026-01-23 at 9.48.21 AM.jpeg',
      caption: 'Cherished Memories',
    },
    {
      id: 3,
      src: '/images/gallery/WhatsApp Image 2026-02-11 at 11.51.27 PM.jpeg',
      caption: 'Special Times',
    },
    {
      id: 4,
      src: '/images/gallery/WhatsApp Image 2026-02-14 at 11.47.30 AM.jpeg',
      caption: 'Together Forever',
    },
    {
      id: 5,
      src: '/images/gallery/WhatsApp Image 2026-02-14 at 12.09.34 PM.jpeg',
      caption: 'Our Journey',
    },
  ]

  // If no photos are added yet, show placeholder
  const hasPhotos = photos.length > 0

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-[#FFF5E1] to-[#F8EDE3]">
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
        {hasPhotos ? (
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
                  <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-royal-cream to-royal-peach/20">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      quality={90}
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    {/* Caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="font-serif text-2xl md:text-3xl text-white text-center">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ) : (
          // Placeholder when no photos
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect royal-shadow rounded-3xl overflow-hidden p-12 text-center"
          >
            <div className="text-6xl mb-4">📸</div>
            <p className="font-serif text-2xl text-royal-maroon mb-2">
              Photo Gallery Coming Soon
            </p>
            <p className="text-royal-maroon/60">
              Add your photos to public/images/gallery/ and update the photos array in PhotoGallery.tsx
            </p>
          </motion.div>
        )}

        {/* Gallery Note */}
        {hasPhotos && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-royal-maroon/60 mt-6 text-sm"
          >
            Swipe or use arrows to navigate • Auto-plays every 4 seconds
          </motion.p>
        )}
      </div>
    </section>
  )
}
