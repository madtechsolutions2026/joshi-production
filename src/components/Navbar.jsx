import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Sparkles, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenBooking, onOpenShowreel }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Artists", href: "#artists" },
    { name: "Process", href: "#workflow" },
    { name: "Instagram", href: "#social" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm py-3" 
        : "bg-white/80 backdrop-blur-sm border-b border-zinc-100 py-3.5 sm:py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-zinc-200 p-1 flex items-center justify-center shadow-xs group-hover:border-[#ff6200] transition-colors">
              <img 
                src="/logo.png" 
                alt="Joshi Productions Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-zinc-900 group-hover:text-[#ff6200] transition-colors leading-tight">
                Joshi <span className="text-[#ff6200]">Productions</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                Hyderabad • Creative Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-bold text-zinc-600 hover:text-[#ff6200] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenShowreel}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-all"
            >
              <Play className="w-3.5 h-3.5 text-[#ff6200] fill-[#ff6200]" />
              Watch Showreel
            </button>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg text-white bg-[#ff6200] hover:bg-[#e55800] shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book a Shoot
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/919999999999?text=Hi%20Joshi%20Productions,%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600/20" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#ff6200] text-white active:scale-95"
            >
              Inquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="p-2 rounded-lg bg-zinc-100 text-zinc-800 active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff6200]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Clean Light Mode) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[59px] sm:top-[66px] bottom-0 bg-white/98 backdrop-blur-xl border-t border-zinc-200 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-150 shadow-2xl">
          <div className="space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff6200]">
              Menu
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-zinc-900 hover:text-[#ff6200] py-3 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-400 text-xs">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShowreel();
              }}
              className="w-full py-3 px-4 rounded-xl bg-zinc-100 border border-zinc-200 text-sm font-bold text-zinc-800 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-[#ff6200] fill-[#ff6200]" />
              Watch 2026 Showreel
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#ff6200] text-sm font-bold text-white flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              Book a Consultation
            </button>
            <div className="text-center text-xs text-zinc-500 pt-2">
              Hyderabad, Telangana • Creating Beyond the Frame
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
