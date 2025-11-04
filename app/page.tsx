"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import BackgroundLayer from '@/components/BackgroundLayer';

export default function Page() {

  return (
    <div data-name="page-root" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Layer */}
        <BackgroundLayer/>
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