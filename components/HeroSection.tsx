// components/HeroSection.tsx
"use client"

import GlowBackground from "./GlowBackground"
import Hero from "./Hero"
import Navbar from "./Navbar"

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <GlowBackground />

      {/* Content ABOVE background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default HeroSection
