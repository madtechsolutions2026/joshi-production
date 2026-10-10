import React, { useState } from 'react';
import { Play, ArrowRight, MapPin, Sparkles, Film, Music, Clapperboard, CheckCircle2, Volume2 } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenShowreel }) {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      id: "cinema",
      label: "Commercial & Ad Films",
      icon: Film,
      image: "/hero-banner.jpg",
      tag: "FLAGSHIP PRODUCTION",
      tech: "ARRI Alexa Mini LF • Master Anamorphic",
      title: "Luxury TVCs & Brand Commercials",
      meta: "4K DCI • Soundstage Hyderabad"
    },
    {
      id: "music",
      label: "Music & Artist Singles",
      icon: Music,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      tag: "ORIGINAL MUSIC",
      tech: "RED 8K • Studio Master Audio",
      title: "Jaisi Aapki Marzi & Ambster 50012",
      meta: "150K+ Streams • Trending"
    },
    {
      id: "live",
      label: "Live Stage & Conclaves",
      icon: Clapperboard,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      tag: "MEGA EVENT",
      tech: "Multi-Cam UHD • Cine Drones",
      title: "Arena Concerts & Tech Summits",
      meta: "5,000+ Attendees • Live Broadcast"
    }
  ];

  const current = highlights[activeTab];

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-zinc-50/90 via-white to-zinc-50/60 overflow-hidden border-b border-zinc-200/80">
      
      {/* Background Soft Glow */}
      <div className="absolute top-12 left-1/3 w-[450px] h-[350px] bg-gradient-to-tr from-orange-200/35 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Split-Screen Hero Banner Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[calc(100vh-140px)] lg:min-h-0 py-4 sm:py-6">
          
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-xs mb-5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#ff6200] animate-pulse" />
              <span className="flex items-center gap-1 font-bold text-zinc-900">
                <MapPin className="w-3.5 h-3.5 text-[#ff6200]" /> Hyderabad
              </span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-600 font-medium">A Creative Production & Media Company</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.5rem] tracking-tight text-zinc-950 leading-[1.1] mb-5">
              Creating <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Beyond The Frame.</span>
            </h1>

            {/* Subhead */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed mb-7 max-w-xl">
              Based in Hyderabad, <strong className="text-zinc-900 font-semibold">Joshi Productions</strong> is a full-service production house specialising in cinematic production, commercial filmmaking, photography, digital content, event coverage, and artist management.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 w-full sm:w-auto">
              <button
                onClick={onOpenShowreel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#ff6200] hover:bg-[#e55800] shadow-md shadow-orange-500/25 hover:shadow-lg transition-all active:scale-95 group"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
                <span>Watch 2026 Showreel</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-300 shadow-xs hover:border-zinc-400 transition-all active:scale-95"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#ff6200]" />
              </button>
            </div>

            {/* Quick Credentials / Mini Metrics Row */}
            <div className="pt-5 border-t border-zinc-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-600">
              <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6200]" />
                <span>50+ Commercials</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6200]" />
                <span>10M+ Digital Views</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6200]" />
                <span>In-House Studio</span>
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Stylish Interactive Visual Showcase */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Outer Frame with Glow and Subtle Border */}
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-orange-200/60 via-zinc-200 to-zinc-300/40 shadow-xl shadow-zinc-900/5 group">
              <div className="relative rounded-[22px] overflow-hidden bg-zinc-950 aspect-[4/3] sm:aspect-[16/10] w-full">
                
                {/* Visual Image */}
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-all duration-700 opacity-90 animate-in fade-in"
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />

                {/* Top Floating Glass HUD */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold text-orange-400">REC</span>
                    <span className="text-zinc-400">•</span>
                    <span>{current.tech}</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-bold text-zinc-200">
                    {current.tag}
                  </span>
                </div>

                {/* Center Dynamic Play Trigger */}
                <button
                  onClick={onOpenShowreel}
                  aria-label="Play showreel"
                  className="absolute inset-0 m-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/95 text-[#ff6200] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#ff6200] group-hover:text-white transition-all duration-300 z-10"
                >
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </button>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-left flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-orange-400 block">
                      {current.meta}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-tight mt-0.5">
                      {current.title}
                    </h3>
                  </div>

                  <button
                    onClick={onOpenShowreel}
                    className="px-3 py-1.5 rounded-lg bg-[#ff6200] text-white text-xs font-bold shrink-0 hover:bg-[#e55800] transition-colors flex items-center gap-1.5"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Reel</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Switcher Pills underneath the card */}
            <div className="flex items-center justify-center gap-2 mt-3.5">
              {highlights.map((h, i) => {
                const IconComp = h.icon;
                const isActive = activeTab === i;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-zinc-900 text-white shadow-xs"
                        : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <IconComp className={`w-3 h-3 ${isActive ? "text-[#ff6200]" : "text-zinc-500"}`} />
                    <span>{h.label}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
