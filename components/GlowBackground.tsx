"use client"

import Image from "next/image"
import { motion } from "motion/react"
import React from "react"

const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

      {/* 🌌 Aurora Image */}
      <Image
        src="/bg-dark.svg"
        alt="Aurora background"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* 🌑 Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      {/* ✨ Moving star particles */}
      {/* <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-50"
      /> */}

      {/* 💡 Cyan glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)]" />

    </div>
  )
}

export default GlowBackground
