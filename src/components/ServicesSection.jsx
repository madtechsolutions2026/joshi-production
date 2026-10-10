import React, { useState } from 'react';
import { Film, Music, Camera, Sparkles, Calendar, SlidersHorizontal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const servicesList = [
    {
      id: "01",
      title: "Cinematic & Ad Films",
      category: "Film",
      badge: "Cinema Grade",
      desc: "High-impact brand commercials, TVCs, narrative fiction, and digital films shot on anamorphic cinema cameras.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
      gear: "ARRI Alexa Mini LF • RED 8K",
      deliverables: ["TV Commercials (TVCs)", "Digital Ad Films", "Brand Storytelling", "Anamorphic Shorts"],
      accent: "from-orange-500/20 to-transparent"
    },
    {
      id: "02",
      title: "Music & Artist Management",
      category: "Music",
      badge: "Creator Economy",
      desc: "Complete music production, viral single releases, music video direction, and 360° artist representation.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
      gear: "Acoustic Stage • Dolby Master",
      deliverables: ["Music Video Direction", "Single & Track Releases", "Artist PR & Growth", "Digital Distribution"],
      accent: "from-amber-500/20 to-transparent"
    },
    {
      id: "03",
      title: "Photography & Studio Stills",
      category: "Stills",
      badge: "Studio Space",
      desc: "High-fashion lookbooks, celebrity portraits, luxury campaigns, and e-commerce shoots in our Hyderabad studio.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
      gear: "Medium Format Hasselblad • Profoto",
      deliverables: ["Fashion Editorials", "Celebrity Portraits", "Product & Lookbook", "Cyclorama Studio"],
      accent: "from-orange-500/20 to-transparent"
    },
    {
      id: "04",
      title: "Digital Growth & Viral Strategy",
      category: "Digital",
      badge: "Social Power",
      desc: "Content engineered for maximum retention. Viral short-form reels, YouTube series, and influencer campaigns.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
      gear: "High-Retention Multi-Cut • Analytics",
      deliverables: ["Viral Instagram Reels", "YouTube Show Formats", "Influencer Media", "Platform Strategy"],
      accent: "from-amber-500/20 to-transparent"
    },
    {
      id: "05",
      title: "Live Events & Mega Stages",
      category: "Live",
      badge: "Arena Scale",
      desc: "Zero-latency multi-camera 4K broadcast, live concert cine-coverage, conclaves, and grand launch productions.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
      gear: "Multi-Cam UHD 4K • FPV Drones",
      deliverables: ["Arena Concerts", "Corporate Summits", "Fashion Runway", "Live Webcasting"],
      accent: "from-orange-500/20 to-transparent"
    },
    {
      id: "06",
      title: "Post-Production & Color Lab",
      category: "Post",
      badge: "In-House Lab",
      desc: "Precision DaVinci Resolve color grading, Dolby Atmos sound design, high-end CGI, motion graphics, and mastering.",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
      gear: "DaVinci Resolve Studio • Atmos 7.1.4",
      deliverables: ["Cine Color Grading", "Dolby Atmos Audio", "VFX & Compositing", "DCI Cinema DCP"],
      accent: "from-amber-500/20 to-transparent"
    }
  ];

  const categories = ["All", "Film", "Music", "Stills", "Digital", "Live", "Post"];

  const filtered = activeCategory === "All"
    ? servicesList
    : servicesList.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-b border-zinc-200/80 scroll-mt-20 relative">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#ff6200] text-xs font-bold uppercase tracking-wider mb-3">
              Capabilities & Divisions
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-tight">
              Crafted With Precision. <br />
              <span className="text-gradient-brand">Engineered for Impact.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl">
              From commercial ad films to viral music releases in Hyderabad. Six specialized production divisions operating under one roof.
            </p>
          </div>

          {/* Clean Stylish Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "bg-zinc-100/80 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Unique Editorial Bento / Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-200/90 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Visual Imagery Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Visual Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

                {/* Index Number Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-zinc-900 text-xs font-extrabold flex items-center justify-center shadow-xs">
                    {item.id}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-orange-400 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                {/* Tech Gear Tag Top Right */}
                <div className="absolute top-3 right-3 hidden sm:block">
                  <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[9px] text-zinc-300 font-medium border border-white/10">
                    {item.gear}
                  </span>
                </div>

                {/* Card Title inside visual for cinematic depth */}
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-orange-400 transition-colors drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Body Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  {/* Deliverable Tags (Pill design instead of generic bullets) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-orange-50 hover:text-[#ff6200] text-zinc-700 text-[11px] font-semibold transition-colors border border-zinc-200/60"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Joshi Productions
                  </span>

                  <button
                    onClick={() => onSelectService(item.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-[#ff6200] text-[#ff6200] hover:text-white text-xs font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Inquire Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Luxury Studio VIP Production Callout Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden p-1 bg-gradient-to-r from-orange-400 via-[#ff6200] to-amber-500 shadow-xl shadow-orange-500/10">
          <div className="rounded-[22px] bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-7 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>360° Integrated Production</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Planning an Ambitious Campaign <br className="hidden sm:inline" />
                or Music Single?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
                We combine TV commercials, original music tracks, viral social reels, and high-fashion photography into one synchronized, budget-optimized schedule.
              </p>

              {/* 3 Value Pillars */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-5 text-xs text-zinc-300 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6200]" />
                  <span>48h Treatment & Budget</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6200]" />
                  <span>Senior Director & Crew</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6200]" />
                  <span>Hyderabad to Pan-India</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onSelectService("Custom Integrated Package")}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#ff6200] hover:bg-[#e55800] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <span>Get Custom Production Estimate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
}
