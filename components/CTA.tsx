
export default function CTA(){

    return(
           <section data-name="cta-section" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div data-name="cta-container" className="max-w-4xl mx-auto text-center">
          <div data-name="cta-card" className="relative p-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
            <h2 data-name="cta-headline" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Media?
            </h2>
            <p data-name="cta-subheadline" className="text-xl text-slate-300 mb-8">
              Join thousands of creators using Lumina AI to elevate their content
            </p>
            <button data-name="cta-button-primary" className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-lg font-semibold">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
    )
}