"use client"

import React, { useEffect, useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { inter } from "@/app/styles/fonts"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { isSignedIn } = useUser()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <span className={`${inter.className} text-lg font-semibold tracking-tight`}>
              Lumina <span className="text-cyan-400">AI</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            {!isSignedIn && (
              <>
                <SignInButton mode="redirect">
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton mode="redirect">
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl px-5">
                    Get Started
                  </Button>
                </SignUpButton>
              </>
            )}

            {isSignedIn && <UserButton afterSignOutUrl="/" />}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-6 space-y-4 text-gray-300">
            <a href="#features" className="block hover:text-white">Features</a>
            <Link href="/pricing" className="block hover:text-white">Pricing</Link>
            <Link href="/about" className="block hover:text-white">About</Link>

            {!isSignedIn && (
              <div className="pt-4 space-y-3">
                <SignInButton mode="redirect">
                  <Button variant="outline" className="w-full border-white/20">
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton mode="redirect">
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            )}

            {isSignedIn && (
              <div className="flex justify-center pt-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
