'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface EventDetailsProps {
  date?: string
  time?: string
  venueName?: string
  venueAddress?: string
}

export default function EventDetails({
  date = '2026-12-15',
  time = '18:00',
  venueName = 'Grand Palace Hotel',
  venueAddress = '123 Royal Street, Mumbai'
}: EventDetailsProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(date).getTime()
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [date])

  const formatDate = (dateString: string) => {
    const d = new Date(dateString)
    return d.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const cards = [
    {
      icon: '📅',
      title: 'Date',
      content: formatDate(date),
      delay: 0.2
    },
    {
      icon: '🕐',
      title: 'Time',
      content: time,
      delay: 0.3
    },
    {
      icon: '🏛️',
      title: 'Venue',
      content: venueName,
      delay: 0.4
    },
    {
      icon: '📍',
      title: 'Address',
      content: venueAddress,
      delay: 0.5
    }
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gradient mb-4">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-gold to-royal-maroon mx-auto rounded-full" />
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-effect royal-shadow rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-center text-royal-maroon font-serif text-2xl mb-6">
              Countdown to Our Special Day
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/50 rounded-xl"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {value}
                  </div>
                  <div className="text-royal-maroon/70 capitalize text-sm md:text-base">
                    {unit}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.25)'
              }}
              className="glass-effect royal-shadow rounded-2xl p-8 hover:bg-white/40 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="font-serif text-2xl text-royal-maroon mb-3">
                {card.title}
              </h3>
              <p className="text-royal-maroon/80 text-lg">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dress Code (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect royal-shadow rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-royal-maroon/70 text-sm mb-2">Dress Code</p>
            <p className="font-serif text-xl text-royal-maroon">
              Traditional Indian Attire
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
