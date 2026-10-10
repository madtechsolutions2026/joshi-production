import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, MapPin, Sparkles, Film, Music, Clapperboard, Camera, Activity } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenShowreel }) {
  const [activeTab, setActiveTab] = useState(0);
  const [timecode, setTimecode] = useState("01:24:18:04");
  const [wordIndex, setWordIndex] = useState(0);

  const dynamicWords = [
    "Cinematic Ad Films",
    "Viral Music Singles",
    "Superstar Talents",
    "High-Fashion Stills",
    "Mega Arena Events"
  ];

  // Cycling animated headline words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Live ticking film timecode
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const f = String(Math.floor(Math.random() * 24)).padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      id: "cinema",
      label: "Commercial & Ad Films",
      icon: Film,
      image: "/hero-banner.jpg",
      tag: "FLAGSHIP PRODUCTION",
      tech: "ARRI Alexa Mini LF • Master Anamorphic",
      title: "Luxury TVCs & Brand Commercials",
      meta: "4K DCI • Soundstage Hyderabad",
      iso: "ISO 800",
      fps: "24.00 FPS",
      shutter: "180.0°"
    },
    {
      id: "music",
      label: "Music & Artist Singles",
      icon: Music,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      tag: "ORIGINAL MUSIC",
      tech: "RED 8K • Studio Master Audio",
      title: "Jaisi Aapki Marzi & Ambster 50012",
      meta: "150K+ Streams • Trending",
      iso: "ISO 1250",
      fps: "25.00 FPS",
      shutter: "180.0°"
    },
    {
      id: "live",
      label: "Live Stage & Conclaves",
      icon: Clapperboard,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      tag: "MEGA EVENT",
      tech: "Multi-Cam UHD • Cine Drones",
      title: "Arena Concerts & Tech Summits",
      meta: "5,000+ Attendees • Live Broadcast",
      iso: "ISO 1600",
      fps: "50.00 FPS",
      shutter: "90.0°"
    }
  ];

  const current = highlights[activeTab];

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-zinc-50/90 via-white to-zinc-50/60 overflow-hidden border-b border-zinc-200/80">
      
      {/* Dynamic Animated Ambient Spotlights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-[500px] h-[400px] bg-gradient-to-tr from-orange-300/40 via-amber-200/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[calc(100vh-140px)] lg:min-h-0 py-4 sm:py-6">
          
          {/* Left Column: Kinetic Animated Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Location & Live Camera Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-xs mb-5 w-fit"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6200] animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6200] -ml-4.5" />
              <span className="flex items-center gap-1 font-bold text-zinc-900">
                <MapPin className="w-3.5 h-3.5 text-[#ff6200]" /> Hyderabad
              </span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-600 font-medium">A Creative Production & Media Company</span>
            </motion.div>

            {/* Kinetic Animated Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.6rem] tracking-tight text-zinc-950 leading-[1.08] mb-5">
              <span>We Direct </span> <br className="hidden sm:inline" />
              <span className="relative inline-block min-w-[280px] sm:min-w-[420px] h-[1.25em] align-top overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="text-gradient-brand block absolute left-0 top-0 whitespace-nowrap"
                  >
                    {dynamicWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-zinc-950">Beyond The Frame.</span>
            </h1>

            {/* Subhead narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed mb-7 max-w-xl">
              Based in Hyderabad, <strong className="text-zinc-900 font-semibold">Joshi Productions</strong> is a full-service creative production house specialising in cinematic commercials, original music singles, studio photography, and artist management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenShowreel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#ff6200] hover:bg-[#e55800] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all cursor-pointer group"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
                <span>Watch 2026 Showreel</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-300 shadow-xs hover:border-zinc-400 transition-all cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#ff6200]" />
              </motion.button>
            </div>

            {/* Live Camera Viewfinder Info / Proof Points */}
            <div className="pt-5 border-t border-zinc-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-600">
              <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
                <span className="w-2 h-2 rounded-full bg-[#ff6200]" />
                <span>50+ Commercials</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
                <span className="w-2 h-2 rounded-full bg-[#ff6200]" />
                <span>10M+ Digital Views</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
                <span className="w-2 h-2 rounded-full bg-[#ff6200]" />
                <span>In-House Soundstage</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Cinema Viewfinder Monitor */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Viewfinder Outer Shell */}
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-orange-400 via-zinc-800 to-zinc-900 shadow-2xl shadow-orange-500/10 group">
              <div className="relative rounded-[22px] overflow-hidden bg-zinc-950 aspect-[4/3] sm:aspect-[16/10] w-full">
                
                {/* Active Imagery */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.92 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                {/* Camera Viewfinder Crosshairs & Corners */}
                <div className="absolute inset-4 pointer-events-none opacity-40 border-t border-l border-white w-5 h-5" />
                <div className="absolute top-4 right-4 pointer-events-none opacity-40 border-t border-r border-white w-5 h-5" />
                <div className="absolute bottom-4 left-4 pointer-events-none opacity-40 border-b border-l border-white w-5 h-5" />
                <div className="absolute bottom-4 right-4 pointer-events-none opacity-40 border-b border-r border-white w-5 h-5" />

                {/* Center Framing Cross */}
                <div className="absolute inset-0 m-auto w-6 h-6 pointer-events-none opacity-25 flex items-center justify-center">
                  <div className="w-full h-px bg-white" />
                  <div className="h-full w-px bg-white absolute" />
                </div>

                {/* Top Camera HUD Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono pointer-events-none">
                  
                  {/* Flashing REC + Live Timecode */}
                  <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold text-red-400">REC</span>
                    <span className="text-zinc-500">|</span>
                    <span className="text-white tracking-widest">{timecode}</span>
                  </div>

                  {/* Camera Settings HUD */}
                  <div className="hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-zinc-300">
                    <span className="text-orange-400 font-bold">{current.fps}</span>
                    <span>•</span>
                    <span>{current.shutter}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-bold">{current.iso}</span>
                  </div>
                </div>

                {/* Audio Equalizer Pulsating Monitor (Bottom Right Overlay) */}
                <div className="absolute top-14 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 hidden sm:flex items-center gap-1 pointer-events-none">
                  <span className="text-[9px] font-mono text-zinc-400 mr-1">AUDIO CH1/2</span>
                  {[40, 75, 55, 90, 65, 30].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
                      transition={{ duration: 0.6 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1 bg-gradient-to-t from-emerald-500 via-amber-400 to-red-500 rounded-full"
                      style={{ height: '14px' }}
                    />
                  ))}
                </div>

                {/* Center Dynamic Play Button */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenShowreel}
                  aria-label="Play showreel"
                  className="absolute inset-0 m-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white text-[#ff6200] flex items-center justify-center shadow-2xl hover:bg-[#ff6200] hover:text-white transition-colors duration-300 z-10 cursor-pointer"
                >
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </motion.button>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 text-left flex items-center justify-between gap-3">
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
                    className="px-3 py-1.5 rounded-lg bg-[#ff6200] text-white text-xs font-bold shrink-0 hover:bg-[#e55800] transition-colors flex items-center gap-1.5 shadow-md shadow-orange-500/30"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Watch Reel</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Interactive Switcher Tabs Underneath */}
            <div className="flex items-center justify-center gap-2 mt-3.5">
              {highlights.map((h, i) => {
                const IconComp = h.icon;
                const isActive = activeTab === i;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-zinc-900 text-white shadow-sm scale-102"
                        : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-[#ff6200]" : "text-zinc-500"}`} />
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
