import { CreditCard, Shield, Video, Wand2, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Features(){
      const features = [
    {
      icon: Wand2,
      title: "AI-Powered Transformations",
      description: "Transform your media with cutting-edge AI. Background removal, object detection, smart cropping, and more.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Optimization",
      description: "Automatic format conversion, compression, and delivery optimization for blazing-fast load times.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Universal Media Support",
      description: "Upload images, videos, and more. Our platform handles all formats with intelligent processing.",
      gradient: "from-orange-500 to-red-500"
    }
  ];
    const [activeFeature, setActiveFeature] = useState(0);
     useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    return(
         <section data-name="features-section" id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div data-name="features-container" className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div data-name="features-header" className="text-center mb-16">
            <h2 data-name="features-title" className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features, Simple Interface
            </h2>
            <p data-name="features-subtitle" className="text-xl text-slate-400">
              Everything you need to create stunning media experiences
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div data-name="features-grid-main" className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  data-name={`feature-card-${idx + 1}`}
                  className={`relative group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 cursor-pointer ${
                    activeFeature === idx ? 'scale-105 border-purple-500' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  <div data-name={`feature-icon-${idx + 1}`} className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 data-name={`feature-title-${idx + 1}`} className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p data-name={`feature-description-${idx + 1}`} className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Features */}
          <div data-name="features-grid-additional" className="mt-16 grid md:grid-cols-2 gap-8">
            <div data-name="feature-card-security" className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
              <Shield data-name="feature-icon-security" className="w-12 h-12 text-blue-400 mb-4" />
              <h3 data-name="feature-title-security" className="text-2xl font-bold mb-3">Secure Authentication</h3>
              <p data-name="feature-description-security" className="text-slate-400">Enterprise-grade security with Clerk. Your data is always protected.</p>
            </div>
            <div data-name="feature-card-payments" className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
              <CreditCard data-name="feature-icon-payments" className="w-12 h-12 text-green-400 mb-4" />
              <h3 data-name="feature-title-payments" className="text-2xl font-bold mb-3">Flexible Payments</h3>
              <p data-name="feature-description-payments" className="text-slate-400">Seamless billing integration. Pay as you grow with transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>
    )
}