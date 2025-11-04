import React, { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
      const [scrolled, setScrolled] = useState(false);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [activeFeature, setActiveFeature] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      
  return (
      <nav data-name="navigation-bar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
           <div data-name="nav-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div data-name="nav-content" className="flex justify-between items-center h-16">
               {/* Logo */}
               <div data-name="logo-section" className="flex items-center space-x-2">
                 <div data-name="logo-icon" className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                   <Sparkles className="w-5 h-5" />
                 </div>
                 <span data-name="logo-text" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                   Lumina AI
                 </span>
               </div>
   
               {/* Desktop Menu */}
               <div data-name="desktop-menu" className="hidden md:flex items-center space-x-8">
                 <a data-name="nav-link-features" href="#features" className="hover:text-purple-400 transition-colors">Features</a>
                 <a data-name="nav-link-pricing" href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
                 <a data-name="nav-link-about" href="#about" className="hover:text-purple-400 transition-colors">About</a>
                 <button data-name="button-sign-in" className="px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all">
                   Sign In
                 </button>
                 <button data-name="button-get-started-nav" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                   Get Started
                 </button>
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
                 <a data-name="mobile-link-pricing" href="#pricing" className="block hover:text-purple-400 transition-colors">Pricing</a>
                 <a data-name="mobile-link-about" href="#about" className="block hover:text-purple-400 transition-colors">About</a>
                 <button data-name="mobile-button-sign-in" className="w-full px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all">
                   Sign In
                 </button>
                 <button data-name="mobile-button-get-started" className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                   Get Started
                 </button>
               </div>
             </div>
           )}
         </nav>
  )
}

