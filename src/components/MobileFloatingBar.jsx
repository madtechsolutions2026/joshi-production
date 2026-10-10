import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function MobileFloatingBar({ onOpenBooking }) {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40 pointer-events-none">
      <div className="pointer-events-auto bg-white/95 backdrop-blur-xl border border-zinc-200/90 p-2 rounded-2xl shadow-xl shadow-zinc-900/10 flex items-center gap-2">
        
        {/* WhatsApp Quick Link */}
        <a
          href="https://wa.me/919999999999?text=Hi%20Joshi%20Productions,%20I'd%20like%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat"
          className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 active:scale-95 transition-transform shrink-0"
        >
          <MessageCircle className="w-5 h-5 fill-emerald-600/20" />
        </a>

        {/* Direct Phone Call */}
        <a
          href="tel:+919999999999"
          aria-label="Call Joshi Productions"
          className="w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 active:scale-95 transition-transform shrink-0"
        >
          <Phone className="w-4 h-4 text-[#ff6200]" />
        </a>

        {/* Primary Book Shoot Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 h-11 rounded-xl bg-[#ff6200] hover:bg-[#e55800] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Shoot</span>
        </button>

      </div>
    </div>
  );
}
