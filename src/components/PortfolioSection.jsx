import React, { useState } from 'react';
import { Play, Film, ArrowUpRight, Clock, Star, Sparkles } from 'lucide-react';
import { portfolioProjects } from '../data/content';

export default function PortfolioSection({ onOpenVideo }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Music & Artist", "Commercials", "Photography", "Events"];

  const filtered = selectedCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-gradient-to-b from-white via-zinc-50/50 to-white border-b border-zinc-200/80 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#ff6200] text-xs font-bold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Selected Portfolio & Releases</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-tight">
              Featured Works & <br />
              <span className="text-gradient-brand">Cinematic Releases</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-xl">
              From commercial ad films to viral music releases in Hyderabad. Experience our latest creative deliveries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-[#ff6200] text-white shadow-md shadow-orange-500/25 scale-102"
                    : "bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200 shadow-xs hover:border-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-200 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Media Frame with Hover Zoom & Play Trigger */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* Widescreen Film Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-orange-400 border border-white/10 shadow-xs">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] text-zinc-200 font-medium border border-white/10">
                  <Clock className="w-3 h-3 text-orange-400" />
                  <span>{project.duration}</span>
                </div>

                {/* Center Glowing Play Button */}
                <button
                  onClick={() => onOpenVideo(project)}
                  aria-label={`Watch ${project.title}`}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#ff6200] text-white flex items-center justify-center shadow-xl group-hover:scale-115 active:scale-95 transition-all duration-300 opacity-95 group-hover:bg-white group-hover:text-[#ff6200]"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-2 font-semibold">
                    <span className="text-zinc-500">{project.client}</span>
                    <span className="text-[#ff6200] font-bold">{project.year}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-zinc-950 group-hover:text-[#ff6200] transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed mb-5">
                    {project.summary}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-800 flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{project.stats}</span>
                  </span>

                  <button
                    onClick={() => onOpenVideo(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ff6200] hover:text-[#d94800] group/btn"
                  >
                    <span>Watch Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
