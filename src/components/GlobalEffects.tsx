'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GlobalEffects() {
  const [particles, setParticles] = useState<Array<{ 
    id: number
    left: number
    delay: number
    duration: number
    size: number
  }>>([])

  useEffect(() => {
    // Generate floating petal particles
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 10,
      size: 0.8 + Math.random() * 0.4
    }))
    setParticles(particleArray)
  }, [])

  return (
    <>
      {/* Floating Petal Particles - Global */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute opacity-30"
            style={{
              left: `${particle.left}%`,
              top: '-5%',
              fontSize: `${particle.size}rem`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [
                0,
                Math.sin(particle.id * 0.5) * 80,
                Math.cos(particle.id * 0.3) * 60,
                0
              ],
              rotate: [0, 180, 360],
              opacity: [0, 0.3, 0.3, 0.2, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Mandala Watermark Background - Global */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            width="800" 
            height="800" 
            viewBox="0 0 200 200"
            className="w-full h-full max-w-4xl"
          >
            {/* Outer circle */}
            <circle cx="100" cy="100" r="90" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="85" fill="none" stroke="#800020" strokeWidth="0.3"/>
            
            {/* Middle circles */}
            <circle cx="100" cy="100" r="75" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="65" fill="none" stroke="#800020" strokeWidth="0.3"/>
            <circle cx="100" cy="100" r="55" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            
            {/* Inner circles */}
            <circle cx="100" cy="100" r="45" fill="none" stroke="#800020" strokeWidth="0.3"/>
            <circle cx="100" cy="100" r="35" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="25" fill="none" stroke="#800020" strokeWidth="0.3"/>
            
            {/* Petals - 8 directions */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 100 100)`}>
                {/* Outer petals */}
                <ellipse 
                  cx="100" 
                  cy="20" 
                  rx="8" 
                  ry="15" 
                  fill="none" 
                  stroke="#D4AF37" 
                  strokeWidth="0.5"
                />
                {/* Middle petals */}
                <ellipse 
                  cx="100" 
                  cy="40" 
                  rx="6" 
                  ry="12" 
                  fill="none" 
                  stroke="#800020" 
                  strokeWidth="0.3"
                />
                {/* Inner petals */}
                <ellipse 
                  cx="100" 
                  cy="60" 
                  rx="4" 
                  ry="8" 
                  fill="none" 
                  stroke="#D4AF37" 
                  strokeWidth="0.5"
                />
              </g>
            ))}
            
            {/* Center flower */}
            <circle cx="100" cy="100" r="15" fill="none" stroke="#800020" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="5" fill="#D4AF37" opacity="0.3"/>
            
            {/* Decorative dots */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x = 100 + Math.cos(rad) * 80
              const y = 100 + Math.sin(rad) * 80
              return (
                <circle 
                  key={`dot-${i}`} 
                  cx={x} 
                  cy={y} 
                  r="1.5" 
                  fill="#D4AF37"
                />
              )
            })}
          </svg>
        </div>
      </div>
    </>
  )
}
