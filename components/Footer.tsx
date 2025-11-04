import { Sparkles } from "lucide-react";

export default function Footer(){
    
    return(
  <footer data-name="footer" className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div data-name="footer-container" className="max-w-7xl mx-auto">
          <div data-name="footer-grid" className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div data-name="footer-brand">
              <div data-name="footer-logo" className="flex items-center space-x-2 mb-4">
                <div data-name="footer-logo-icon" className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span data-name="footer-logo-text" className="text-xl font-bold">Lumina AI</span>
              </div>
              <p data-name="footer-tagline" className="text-slate-400 text-sm">
                AI-powered media transformation platform
              </p>
            </div>
            
            {/* Product Column */}
            <div data-name="footer-column-product">
              <h4 data-name="footer-heading-product" className="font-semibold mb-4">Product</h4>
              <ul data-name="footer-list-product" className="space-y-2 text-slate-400 text-sm">
                <li data-name="footer-link-features"><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li data-name="footer-link-pricing"><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li data-name="footer-link-api"><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div data-name="footer-column-company">
              <h4 data-name="footer-heading-company" className="font-semibold mb-4">Company</h4>
              <ul data-name="footer-list-company" className="space-y-2 text-slate-400 text-sm">
                <li data-name="footer-link-about"><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li data-name="footer-link-blog"><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li data-name="footer-link-careers"><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div data-name="footer-column-legal">
              <h4 data-name="footer-heading-legal" className="font-semibold mb-4">Legal</h4>
              <ul data-name="footer-list-legal" className="space-y-2 text-slate-400 text-sm">
                <li data-name="footer-link-privacy"><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
                <li data-name="footer-link-terms"><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
                <li data-name="footer-link-security"><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div data-name="footer-copyright" className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>© 2024 Lumina AI. Built with Next.js & Cloudinary.</p>
          </div>
        </div>
      </footer>
    )
}