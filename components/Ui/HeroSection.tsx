import { ChevronRight, Image, Sparkles } from 'lucide-react';
export default function HeroSection() {
    return(
      <section data-name="hero-section" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div data-name="hero-container" className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div data-name="hero-badge" className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span data-name="badge-text" className="text-sm text-purple-300">Powered by Next.js & Cloudinary</span>
          </div>
          
          {/* Headline */}
          <h1 data-name="hero-headline" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Transform Media with
            <br />
            <span data-name="hero-headline-accent" className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>
          
          {/* Subheadline */}
          <p data-name="hero-subheadline" className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload, optimize, and transform your images and videos with cutting-edge AI technology. 
            Built for creators who demand perfection.
          </p>

          {/* CTA Buttons */}
          <div data-name="hero-cta-group" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button data-name="hero-button-primary" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-lg font-semibold flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button data-name="hero-button-secondary" className="px-8 py-4 rounded-xl border border-slate-700 hover:border-purple-500 hover:bg-slate-800/50 transition-all text-lg font-semibold">
              Watch Demo
            </button>
          </div>

          {/* Hero Image */}
          <div data-name="hero-image-container" className="mt-20 relative">
            <div data-name="hero-image-glow" className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
            <div data-name="hero-image-frame" className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div data-name="hero-image-grid" className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    data-name={`hero-image-placeholder-${i}`}
                    className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group hover:scale-105 transition-transform"
                  >
                    <Image className="w-12 h-12 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}