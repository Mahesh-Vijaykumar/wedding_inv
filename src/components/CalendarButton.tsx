'use client'

import { motion } from 'framer-motion'
import { FaCalendarPlus } from 'react-icons/fa'

interface CalendarButtonProps {
  groomName?: string
  brideName?: string
  date?: string
  time?: string
  venueName?: string
  venueAddress?: string
}

export default function CalendarButton({
  groomName = 'Groom',
  brideName = 'Bride',
  date = '2026-12-15',
  time = '18:00',
  venueName = 'Grand Palace Hotel',
  venueAddress = '123 Royal Street, Mumbai'
}: CalendarButtonProps) {
  
  const addToGoogleCalendar = () => {
    const eventDate = new Date(`${date}T${time}`)
    const endDate = new Date(eventDate.getTime() + 4 * 60 * 60 * 1000) // 4 hours duration

    const formatDate = (d: Date) => {
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `Wedding of ${groomName} & ${brideName}`,
      dates: `${formatDate(eventDate)}/${formatDate(endDate)}`,
      details: `Join us in celebrating the wedding of ${groomName} and ${brideName}. We look forward to your presence on this special day.`,
      location: `${venueName}, ${venueAddress}`,
      trp: 'true',
      sprop: 'website:wedding-invitation'
    })

    const url = `https://calendar.google.com/calendar/render?${params.toString()}`
    window.open(url, '_blank')
  }

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-royal-maroon/80 mb-6 text-lg">
            Save the date and never miss our special day
          </p>
          
          <motion.button
            onClick={addToGoogleCalendar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow inline-flex items-center gap-3 bg-gradient-to-r from-royal-gold to-royal-maroon text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <FaCalendarPlus className="text-xl" />
            Add to Google Calendar
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
