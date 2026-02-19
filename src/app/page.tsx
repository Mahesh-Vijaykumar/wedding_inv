'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import HeroSection from '@/components/HeroSection'
import InvitationSection from '@/components/InvitationSection'
import EventDetails from '@/components/EventDetails'
import MapSection from '@/components/MapSection'
import CalendarButton from '@/components/CalendarButton'
import PhotoGallery from '@/components/PhotoGallery'
import Footer from '@/components/Footer'
import GlobalEffects from '@/components/GlobalEffects'

function WeddingContent() {
  const searchParams = useSearchParams()
  const guestName = searchParams.get('guest')

  // Get configuration from environment variables
  const config = {
    groomName: process.env.NEXT_PUBLIC_GROOM_NAME || 'Groom',
    brideName: process.env.NEXT_PUBLIC_BRIDE_NAME || 'Bride',
    weddingDate: process.env.NEXT_PUBLIC_WEDDING_DATE || '2026-12-15',
    weddingTime: process.env.NEXT_PUBLIC_WEDDING_TIME || '18:00',
    venueName: process.env.NEXT_PUBLIC_VENUE_NAME || 'Grand Palace Hotel',
    venueAddress: process.env.NEXT_PUBLIC_VENUE_ADDRESS || '123 Royal Street, Mumbai',
    venueLat: parseFloat(process.env.NEXT_PUBLIC_VENUE_LAT || '19.0760'),
    venueLng: parseFloat(process.env.NEXT_PUBLIC_VENUE_LNG || '72.8777'),
  }

  return (
    <>
      {/* Global Effects - Petals & Mandala */}
      <GlobalEffects />
      
      <main className="relative">
        {/* Hero with Split Animation */}
        <HeroSection />

      {/* Invitation with Namaskar Animation */}
      <InvitationSection
        groomName={config.groomName}
        brideName={config.brideName}
        guestName={guestName || undefined}
      />

      {/* Event Details with Countdown */}
      <EventDetails
        date={config.weddingDate}
        time={config.weddingTime}
        venueName={config.venueName}
        venueAddress={config.venueAddress}
      />

      {/* Google Maps Integration */}
      <MapSection
        venueName={config.venueName}
        venueAddress={config.venueAddress}
        lat={config.venueLat}
        lng={config.venueLng}
      />

      {/* Google Calendar Button */}
      <CalendarButton
        groomName={config.groomName}
        brideName={config.brideName}
        date={config.weddingDate}
        time={config.weddingTime}
        venueName={config.venueName}
        venueAddress={config.venueAddress}
      />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Footer */}
      <Footer
        groomName={config.groomName}
        brideName={config.brideName}
      />
    </main>
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">💑</div>
          <p className="text-royal-maroon font-serif text-xl">Loading invitation...</p>
        </div>
      </div>
    }>
      <WeddingContent />
    </Suspense>
  )
}
