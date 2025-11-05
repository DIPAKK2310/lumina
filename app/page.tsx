"use client"
import Navbar from '@/components/Ui/Navbar';
import HeroSection from '@/components/Ui/HeroSection';
import Features from '@/components/Ui/Features';
import Footer from '@/components/Ui/Footer';
import Pricing from '@/components/Ui/Pricing';
import CTA from '@/components/Ui/CTA';
import BackgroundLayer from '@/components/Ui/BackgroundLayer';

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