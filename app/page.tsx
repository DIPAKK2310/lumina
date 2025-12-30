"use client"
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import AppContainer from '@/components/Background_Gradient';
import Navbar from '@/components/Navbar';
import PricingFAQ from '@/components/FAQ';

export default function Page() {

  return (
    <div data-name="page-root" className="min-h-screen bg-white text-black">
      {/* Background Layer */}
      <Navbar/>
        <AppContainer/>
     
      {/* Hero Section */}
        <HeroSection/>
      {/* Features Section */}
        <Features/>
      {/* Pricing Section */}
        <Pricing/>
      {/* CTA Section */}
      <PricingFAQ/>
        <CTA/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}