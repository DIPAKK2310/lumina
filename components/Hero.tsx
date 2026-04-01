"use client"

import React from "react"
import { motion } from "motion/react"
import heroImage from "@/public/assets/hero-visual.jpg" // ✅ add your image
import Image from "next/image"

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          The Intelligent{" "}
          <span className="text-cyan-400">Media Platform</span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Upload, transform, and optimize images & videos with AI — fast, secure, and production-ready.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition">
            Start Free
          </button>
          <button className="px-6 py-3 border border-gray-500 rounded-xl hover:border-white transition">
            View Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero