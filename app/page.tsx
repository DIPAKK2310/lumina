"use client"
import HeroSection from '@/components/Ui/HeroSection';
import Features from '@/components/Ui/Features';
import Footer from '@/components/Ui/Footer';
import Pricing from '@/components/Ui/Pricing';
import CTA from '@/components/Ui/CTA';
import AppContainer from '@/components/Ui/Background_Gradient';
import Navbar from '@/components/Ui/Navbar';
import PricingFAQ from '@/components/Ui/FAQ';

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