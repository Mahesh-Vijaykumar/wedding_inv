'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface InvitationSectionProps {
  groomName?: string
  brideName?: string
  guestName?: string
}

export default function InvitationSection({ 
  groomName = 'Groom', 
  brideName = 'Bride',
  guestName 
}: InvitationSectionProps) {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    // Generate falling petals
    const petalArray = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4
    }))
    setPetals(petalArray)
  }, [])

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] // Custom easing for emotional feel
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8EDE3] via-[#FFF5E1] to-[#F8EDE3] py-20 px-4">
      {/* Falling Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute text-2xl"
            style={{
              left: `${petal.left}%`,
              top: '-5%',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, Math.sin(petal.id) * 50, 0],
              rotate: [0, 360, 720],
              opacity: [0, 1, 1, 0.5, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Soft golden glow behind couple */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute w-[1000px] h-[1000px] bg-gradient-radial from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="absolute w-[700px] h-[700px] bg-gradient-radial from-[#FFDAB9]/25 via-transparent to-transparent rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center"
        >
          {/* Couple Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-2xl h-[400px] md:h-[500px] lg:h-[600px] mb-16"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/invitation/couple-namaskar.png"
                alt="Bride and Groom performing Namaskar"
                fill
                className="object-contain drop-shadow-2xl"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                priority
              />
            </div>
          </motion.div>

          {/* Personalized Greeting */}
          {guestName && (
            <motion.div variants={itemVariants} className="mb-12">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#800020] text-center">
                Dear {guestName},
              </p>
            </motion.div>
          )}

          {/* Spacing */}
          <div className="h-8" />

          {/* Blessing Text */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#800020]/80 text-center font-light leading-relaxed">
              With the blessings of our parents
            </p>
          </motion.div>

          {/* Spacing */}
          <div className="h-12" />

          {/* Main Invitation Text */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#800020]/80 text-center font-light leading-relaxed">
              We cordially invite you to celebrate
            </p>
          </motion.div>

          {/* Spacing */}
          <div className="h-16" />

          {/* Names with Heart */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gradient text-center">
                {groomName}
              </h2>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-4xl md:text-5xl"
              >
                ❤️
              </motion.div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gradient text-center">
                {brideName}
              </h2>
            </div>
          </motion.div>

          {/* Spacing */}
          <div className="h-16" />

          {/* Wedding Ceremony Text */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#800020]/70 text-center font-light italic">
              The Wedding Ceremony
            </p>
          </motion.div>

          {/* Spacing */}
          <div className="h-12" />

          {/* Decorative Divider */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 w-full max-w-md"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
            <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-8 left-8 w-20 h-20 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#800020" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#800020" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  )
}
