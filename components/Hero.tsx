"use client"

import React from "react"
import { motion } from "motion/react"

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        The Intelligent <span className="text-cyan-400">Media Platform</span>
      </motion.h1>

      <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
        Upload, transform, and optimize images & videos with AI — fast, secure, and production-ready.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl">
          Start Free
        </button>
        <button className="px-6 py-3 border border-gray-600 rounded-xl">
          View Demo
        </button>
      </div>
    </section>
  )
}

export default Hero
