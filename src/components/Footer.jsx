import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/90 pt-16 pb-24 sm:pb-16 text-zinc-600 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 p-1 flex items-center justify-center shadow-xs">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base tracking-tight text-zinc-900 block">
                  Joshi <span className="text-[#ff6200]">Productions</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                  Creating Beyond The Frame
                </span>
              </div>
            </div>

            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm">
              A full-service production company based in Hyderabad. We partner with brands, artists, and creators to engineer world-class cinematic storytelling and digital experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/joshi_productions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#ff6200] hover:text-white border border-zinc-200 flex items-center justify-center text-zinc-700 transition-all shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#ff6200] hover:text-white border border-zinc-200 flex items-center justify-center text-zinc-700 transition-all shadow-xs"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#ff6200] hover:text-white border border-zinc-200 flex items-center justify-center text-zinc-700 transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-zinc-900 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#ff6200] transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-[#ff6200] transition-colors">Production Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#ff6200] transition-colors">Selected Portfolio</a></li>
              <li><a href="#artists" className="hover:text-[#ff6200] transition-colors">Artist Roster</a></li>
              <li><a href="#workflow" className="hover:text-[#ff6200] transition-colors">Production Pipeline</a></li>
              <li><a href="#social" className="hover:text-[#ff6200] transition-colors">Instagram Feed</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-zinc-900 text-sm uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li><span>Commercial & TVC Ad Films</span></li>
              <li><span>Music Videos & Launches</span></li>
              <li><span>Artist Development & PR</span></li>
              <li><span>High-Fashion & Studio Stills</span></li>
              <li><span>Live Event & Mega Stages</span></li>
              <li><span>DaVinci Color & Sound Lab</span></li>
            </ul>
          </div>

          {/* Hyderabad Hub */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-zinc-900 text-sm uppercase tracking-wider">
              Hyderabad Hub
            </h4>
            <div className="space-y-2 text-zinc-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff6200] shrink-0 mt-0.5" />
                <span>Film Nagar / Jubilee Hills Corridor, Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff6200] shrink-0" />
                <a href="tel:+919999999999" className="hover:text-zinc-900 transition-colors">+91 99999 99999</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff6200] shrink-0" />
                <a href="mailto:hello@joshiproductions.in" className="hover:text-zinc-900 transition-colors">hello@joshiproductions.in</a>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-3 w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#ff6200] hover:text-white border border-zinc-200 text-zinc-900 font-bold text-xs shadow-xs transition-all"
            >
              Start Project Inquiry
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} Joshi Productions. All rights reserved. Hyderabad, India.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-[#ff6200] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
