"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';

export default function Page() {

  return (
    <div data-name="page-root" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Layer */}
      <div data-name="background-decorations" className="fixed inset-0 overflow-hidden pointer-events-none">
        <div data-name="bg-gradient-purple" className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div data-name="bg-gradient-blue" className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
    <Navbar/>

      {/* Hero Section */}
    <HeroSection/>

      {/* Features Section */}
      <Features/>
     

      {/* Pricing Section */}
      <Pricing/>

      {/* CTA Section */}
      <CTA/>
   

      {/* Footer */}
    <Footer/>
    </div>
  );
}