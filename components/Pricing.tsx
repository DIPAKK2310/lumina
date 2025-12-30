import { Check } from "lucide-react";
import { plans } from "../config/Plans";

export default function Pricing(){
  

    return(
           <section data-name="pricing-section" id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div data-name="pricing-container" className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div data-name="pricing-header" className="text-center mb-16">
            <h2 data-name="pricing-title" className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p data-name="pricing-subtitle" className="text-xl text-slate-400">
              Choose the perfect plan for your needs
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div data-name="pricing-grid" className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div 
                key={idx}
                data-name={`pricing-card-${plan.name.toLowerCase()}`}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 bg-gradient-to-b from-purple-500/10 to-transparent scale-105 shadow-2xl shadow-purple-500/20' 
                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div data-name="pricing-badge-popular" className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                {/* Plan Header */}
                <div data-name={`pricing-header-${plan.name.toLowerCase()}`} className="mb-8">
                  <h3 data-name={`pricing-name-${plan.name.toLowerCase()}`} className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div data-name={`pricing-price-${plan.name.toLowerCase()}`} className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul data-name={`pricing-features-${plan.name.toLowerCase()}`} className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} data-name={`pricing-feature-${plan.name.toLowerCase()}-${fIdx + 1}`} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button data-name={`pricing-button-${plan.name.toLowerCase()}`} className={`w-full py-3 rounded-xl font-semibold transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50'
                    : 'border border-slate-700 hover:border-purple-500 hover:bg-slate-800'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    )
}