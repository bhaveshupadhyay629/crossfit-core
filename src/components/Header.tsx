import { useState } from 'react';
import { Menu, X, Dumbbell, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#classes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Coaches', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-(--bg)/95 backdrop-blur-md border-b border-(--card-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-(--accent) flex items-center justify-center text-white transition-transform group-hover:scale-105">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-(--muted) hover:text-(--fg) transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-(--accent) hover:bg-(--accent-hover) text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-red-950/40 hover:shadow-red-900/60"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Class</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-(--accent) text-white p-2 rounded-lg"
              title="Book Class"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-(--muted) hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-(--card-bg) border-b border-(--card-border) px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-(--fg) hover:bg-neutral-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-(--accent) hover:bg-(--accent-hover) text-white font-bold py-3 rounded-lg text-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Trial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
