"use client"
import React, { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { SignInButton,SignUpButton,UserButton,useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { inter, satoshi } from "@/app/styles/fonts";
import { Button } from "@/components/ui/button"


export default function Navbar() {
      const {isSignedIn} = useUser();
      const [scrolled, setScrolled] = useState(false);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      
  return (
      <nav data-name="navigation-bar" className={`fixed top-0 w-full  z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
           <div data-name="nav-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div data-name="nav-content" className="flex justify-between items-center h-16">
               {/* Logo */}
               <div data-name="logo-section" className="flex items-center space-x-2">
                 <div data-name="logo-icon" className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center">
                   <Sparkles className="w-5 h-5" />
                 </div>
                 <span data-name="logo-text" className={`${inter.className} text-xl bg-gradient-to-r bg-clip-text text-white `}>
                   Lumina AI
                 </span>
               </div>
   
               {/* Desktop Menu */}
               <div data-name="desktop-menu" className="hidden md:flex items-center space-x-14">
                 <a data-name="nav-link-features" href="#features" className="hover:text-purple-400 transition-colors">Features</a>
                 <Link data-name="nav-link-pricing" href="/price" className="hover:text-purple-400 transition-colors">Pricing</Link>
                 <Link data-name="nav-link-about" href="/about" className="hover:text-purple-400 transition-colors">About</Link>
              {/* Shacn Button*/ }
                {!isSignedIn && (
                  <SignInButton mode="redirect">
                    <Button
                      asChild
                      className="bg-white text-black hover:bg-purple "
                    >
                      <span>Sign In</span>
                    </Button>
                  </SignInButton>
                )}
                  {/* If user signed in, show profile icon */}
        {isSignedIn && <UserButton />}
                <SignUpButton mode='redirect'>
                 <button data-name="button-get-started" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer">
                   Get Started
                 </button>
                 </SignUpButton>
               </div>
   
               {/* Mobile Menu Button */}
               <button 
                 data-name="mobile-menu-toggle"
                 className="md:hidden"
                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                 {mobileMenuOpen ? <X /> : <Menu />}
               </button>
             </div>
           </div>
   
           {/* Mobile Menu */}
           {mobileMenuOpen && (
             <div data-name="mobile-menu-dropdown" className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
               <div data-name="mobile-menu-content" className="px-4 py-4 space-y-3">
                 <a data-name="mobile-link-features" href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
                 <Link data-name="mobile-link-pricing" href="/pricing" className="block hover:text-purple-400 transition-colors">Pricing</Link>
                 <Link data-name="mobile-link-about" href="/about" className="block hover:text-purple-400 transition-colors" >About</Link>
                 { !isSignedIn && (
                  <SignInButton mode='redirect'>
                 <button data-name="mobile-button-sign-in" className="w-full px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all">
                   Sign In
                 </button>
                 <button data-name="mobile-button-get-started" className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                   Get Started
                 </button>
                 </SignInButton>
                 )}
                    {isSignedIn && (
              <div className="flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
               </div>
             </div>
           )}
         </nav>
  )
}

