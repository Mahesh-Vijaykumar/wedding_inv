'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftPanelRef = useRef<HTMLDivElement>(null)
  const rightPanelRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !leftPanelRef.current || !rightPanelRef.current || !contentRef.current) return

    // Smooth scroll configuration
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    })

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([leftPanelRef.current, rightPanelRef.current], {
        x: 0,
        force3D: true
      })

      // Create timeline for scroll animation with optimized settings
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%', // Longer scroll distance for smoother feel
          scrub: 0.5, // Lower value = more responsive, smoother
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        }
      })

      // Animate left panel with optimized settings
      tl.to(leftPanelRef.current, {
        x: '-100%',
        ease: 'none', // Linear for scrub animations is smoother
        force3D: true,
      }, 0)

      // Animate right panel
      tl.to(rightPanelRef.current, {
        x: '100%',
        ease: 'none', // Linear for scrub animations is smoother
        force3D: true,
      }, 0)

      // Fade out content
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        ease: 'power1.out',
        force3D: true,
      }, 0)

    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-screen w-full">
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#FFF5E1] to-[#F8EDE3]">
        {/* Subtle gold texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="gold-texture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="#D4AF37" opacity="0.3" />
                <circle cx="25" cy="15" r="1.5" fill="#D4AF37" opacity="0.2" />
                <circle cx="15" cy="25" r="1" fill="#D4AF37" opacity="0.4" />
                <circle cx="35" cy="35" r="1" fill="#D4AF37" opacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gold-texture)" />
          </svg>
        </div>

        {/* Multiple layered glows for rich depth */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Primary golden glow */}
          <div className="absolute w-[1400px] h-[1400px] bg-gradient-radial from-[#D4AF37]/25 via-[#D4AF37]/8 to-transparent rounded-full blur-3xl glow-pulse" />
          
          {/* Secondary warm glow */}
          <div className="absolute w-[1000px] h-[1000px] bg-gradient-radial from-[#FFDAB9]/20 via-transparent to-transparent rounded-full blur-2xl" />
          
          {/* Accent maroon glow */}
          <div className="absolute w-[800px] h-[800px] bg-gradient-radial from-[#800020]/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        {/* Layered shadow for depth */}
        <div className="absolute inset-0 shadow-inner pointer-events-none" style={{ boxShadow: 'inset 0 0 120px rgba(212, 175, 55, 0.15), inset 0 0 60px rgba(128, 0, 32, 0.05)' }} />

        {/* Split panels container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left Panel */}
          <div 
            ref={leftPanelRef}
            className="absolute inset-0"
            style={{ 
              clipPath: 'inset(0 50% 0 0)',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
              <div className="relative w-full max-w-7xl h-[55vh] md:h-[65vh] lg:h-[70vh] elephant-float">
                <div className="relative w-full h-full elephant-shadow">
                  <Image
                    src="/images/hero/elephants-hero.png"
                    alt="Royal wedding elephants with bride and groom"
                    fill
                    priority
                    className="object-contain"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                  />
                </div>
              </div>
            </div>
            
            {/* Shadow on right edge of left panel */}
            <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-black/30 via-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Right Panel */}
          <div 
            ref={rightPanelRef}
            className="absolute inset-0"
            style={{ 
              clipPath: 'inset(0 0 0 50%)',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
              <div className="relative w-full max-w-7xl h-[55vh] md:h-[65vh] lg:h-[70vh] elephant-float">
                <div className="relative w-full h-full elephant-shadow">
                  <Image
                    src="/images/hero/elephants-hero.png"
                    alt="Royal wedding elephants with bride and groom"
                    fill
                    priority
                    className="object-contain"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                  />
                </div>
              </div>
            </div>
            
            {/* Shadow on left edge of right panel */}
            <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Decorative corner flourishes */}
        <div className="absolute top-8 left-8 w-24 h-24 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 0 0 Q 50 0 50 50 Q 50 0 100 0" stroke="#D4AF37" strokeWidth="2" fill="none" />
            <path d="M 0 0 Q 0 50 50 50 Q 0 50 0 100" stroke="#D4AF37" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute top-8 right-8 w-24 h-24 opacity-20 pointer-events-none transform scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 0 0 Q 50 0 50 50 Q 50 0 100 0" stroke="#D4AF37" strokeWidth="2" fill="none" />
            <path d="M 0 0 Q 0 50 50 50 Q 0 50 0 100" stroke="#D4AF37" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Center content with royal typography */}
        <div 
          ref={contentRef} 
          className="relative h-full flex flex-col items-center justify-between py-12 md:py-16 px-4 z-10"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Top section - Royal heading */}
          <div className="flex-shrink-0 mt-8 md:mt-12">
            <div className="relative">
              {/* Decorative top flourish */}
              <div className="flex items-center justify-center mb-8">
                <svg width="200" height="40" viewBox="0 0 200 40" className="opacity-60">
                  <path d="M 0 20 Q 50 10 100 20 Q 150 30 200 20" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
                  <circle cx="100" cy="20" r="4" fill="#D4AF37"/>
                  <circle cx="50" cy="15" r="2" fill="#800020"/>
                  <circle cx="150" cy="25" r="2" fill="#800020"/>
                </svg>
              </div>

              {/* Royal heading with gradient */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center leading-tight mb-4 relative">
                <span className="block text-gradient" style={{ 
                  textShadow: '0 2px 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(128, 0, 32, 0.3)',
                  letterSpacing: '0.05em'
                }}>
                  Wedding
                </span>
                <span className="block text-gradient mt-2" style={{ 
                  textShadow: '0 2px 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(128, 0, 32, 0.3)',
                  letterSpacing: '0.05em'
                }}>
                  Invitation
                </span>
              </h1>

              {/* Decorative bottom flourish */}
              <div className="flex items-center justify-center mt-8">
                <svg width="200" height="40" viewBox="0 0 200 40" className="opacity-60">
                  <path d="M 0 20 Q 50 30 100 20 Q 150 10 200 20" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
                  <circle cx="100" cy="20" r="4" fill="#D4AF37"/>
                  <circle cx="50" cy="25" r="2" fill="#800020"/>
                  <circle cx="150" cy="15" r="2" fill="#800020"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom section - Elegant subtext */}
          <div className="flex-shrink-0 mb-8 md:mb-12">
            <div className="relative">
              {/* Decorative line above text */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
                <div className="mx-4">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3" fill="#D4AF37"/>
                    <circle cx="10" cy="10" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
                  </svg>
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
              </div>
              
              {/* Subtext */}
              <p className="text-[#800020]/70 text-base sm:text-lg md:text-xl font-light tracking-[0.4em] uppercase text-center mb-2">
                Scroll to Begin
              </p>
              
              {/* Scroll indicator */}
              <div className="flex justify-center mt-8">
                <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center pt-2 hover:border-[#D4AF37] transition-colors">
                  <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient shadow for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/8 via-black/3 to-transparent pointer-events-none" />
        
        {/* Top gradient for subtle vignette */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      </section>
    </div>
  )
}
