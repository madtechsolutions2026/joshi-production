import React from 'react';
import { Sparkles, Film, Play, Star, Camera, Music, Clapperboard } from 'lucide-react';

export default function FilmstripMarquee() {
  const tickerItems = [
    { text: "CREATING BEYOND THE FRAME", icon: Sparkles },
    { text: "ARRI ALEXA MINI LF & RED 8K", icon: Camera },
    { text: "HYDERABAD SOUNDSTAGE & STUDIO", icon: Film },
    { text: "VIRAL MUSIC RELEASES & ARTIST PR", icon: Music },
    { text: "10M+ DIGITAL VIDEO IMPRESSIONS", icon: Star },
    { text: "COMMERCIAL TVCs & AD FILMS", icon: Clapperboard },
    { text: "DAVINCI RESOLVE COLOR LAB", icon: Sparkles },
    { text: "END-TO-END UNDER ONE ROOF", icon: Film },
  ];

  return (
    <div className="relative py-4 bg-zinc-950 overflow-hidden border-y border-orange-500/30 shadow-inner">
      {/* Filmstrip Sprocket Holes Top */}
      <div className="flex justify-around items-center h-2 opacity-30 mb-2 px-2 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={`top-${i}`} className="w-3.5 h-1.5 rounded-xs bg-white shrink-0 mx-2" />
        ))}
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused] items-center gap-8">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 shrink-0 select-none">
              <span className="w-7 h-7 rounded-lg bg-[#ff6200]/20 border border-[#ff6200]/40 flex items-center justify-center text-[#ff6200]">
                <IconComp className="w-3.5 h-3.5" />
              </span>
              <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase text-zinc-200">
                {item.text}
              </span>
              <span className="text-[#ff6200] font-bold text-xs">★</span>
            </div>
          );
        })}
      </div>

      {/* Filmstrip Sprocket Holes Bottom */}
      <div className="flex justify-around items-center h-2 opacity-30 mt-2 px-2 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={`bot-${i}`} className="w-3.5 h-1.5 rounded-xs bg-white shrink-0 mx-2" />
        ))}
      </div>
    </div>
  );
}
