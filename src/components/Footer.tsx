import { Dumbbell, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'About Philosophy', href: '#about' },
    { name: 'Training Programs', href: '#classes' },
    { name: 'Class Schedule', href: '#schedule' },
    { name: 'Our Coaches', href: '#trainers' },
    { name: 'Membership Pricing', href: '#pricing' },
    { name: 'Book Free Trial', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-neutral-950 border-t border-(--card-border) pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / CTA Grid */}
        <div className="bg-gradient-to-r from-neutral-900 via-(--card-bg) to-neutral-900 border border-(--card-border) rounded-2xl p-8 sm:p-10 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-(--accent) text-xs font-bold uppercase tracking-wider mb-3">
              Stay Connected
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight">
              Ready to take the <span className="text-(--accent)">first step?</span>
            </h3>
            <p className="mt-2 text-sm text-(--muted)">
              Join our weekly newsletter for workout tips, community highlights, and schedule updates. No spam, just fitness.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to CrossFit Core!'); }} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent) flex-1"
            />
            <button
              type="submit"
              className="bg-(--accent) hover:bg-(--accent-hover) text-white font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 group inline-flex">
              <div className="w-10 h-10 rounded-lg bg-(--accent) flex items-center justify-center text-white">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white uppercase italic">
                  CrossFit <span className="text-(--accent)">Core</span>
                </span>
                <span className="text-[10px] tracking-widest text-(--muted) uppercase font-semibold">
                  Forge Your Strength
                </span>
              </div>
            </a>
            <p className="text-sm text-(--muted) leading-relaxed">
              High-intensity functional fitness designed for beginners and everyday enthusiasts. No egos, expert coaching, supportive community.
            </p>
            <div className="pt-2 text-xs text-(--muted)">
              <p>📍 1044 Industrial Parkway, Sector 4</p>
              <p>📞 (555) 389-2340</p>
              <p>✉️ coach@crossfitcore.example</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-(--accent) opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm text-(--muted)">
              <li className="flex justify-between py-1 border-b border-neutral-900">
                <span className="text-white font-medium">Mon - Fri:</span>
                <span>5:30 AM – 8:30 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-neutral-900">
                <span className="text-white font-medium">Saturday:</span>
                <span>8:00 AM – 1:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-neutral-900">
                <span className="text-white font-medium">Sunday:</span>
                <span>9:00 AM – 12:00 PM (Open Gym)</span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-(--accent) font-semibold">
              * Morning & evening class blocks available daily
            </div>
          </div>

          {/* Location & Map Preview Card */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Visit The Box
            </h4>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-(--muted)">
                <MapPin className="w-4 h-4 text-(--accent) shrink-0 mt-0.5" />
                <span>Spacious 6,000 sq ft facility equipped with Rogue Fitness gear, shower rooms, and lounge area.</span>
              </div>
              <a
                href="#contact"
                className="block text-center bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 rounded-lg text-xs transition-colors"
              >
                Get Directions & Map
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--muted)">
          <p>© {new Date().getFullYear()} CrossFit Core. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-(--accent) fill-current" /> for athletes everywhere
          </p>
        </div>

      </div>
    </footer>
  );
}
