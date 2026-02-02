"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-400 overflow-hidden border-t border-white/10">

      {/* GRID LINE SYSTEM */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Vertical grid lines */}
        <div className="absolute left-[12%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-[37%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-[62%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-[87%] top-0 bottom-0 w-px bg-white/5" />

        {/* Horizontal divider */}
        <div className="absolute top-[68%] left-0 right-0 h-px bg-white/5" />
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-20 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-white font-semibold text-xl">
                Lumina <span className="text-cyan-400">AI</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              AI-powered platform for transforming, optimizing, and delivering media at scale.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-gray-500 uppercase tracking-wider text-xs mb-6">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/docs" className="hover:text-white">API Docs</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-gray-500 uppercase tracking-wider text-xs mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-gray-500 uppercase tracking-wider text-xs mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-16 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Lumina AI. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">GitHub</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
