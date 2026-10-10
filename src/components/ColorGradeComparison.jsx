import React, { useState, useRef } from 'react';
import { Sliders, Sparkles, Check, ArrowLeftRight, Film } from 'lucide-react';

export default function ColorGradeComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 text-white relative overflow-hidden border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#ff6200]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6200]/20 border border-[#ff6200]/40 text-[#ff8a34] text-xs font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Color Grading Lab</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            From Raw Log To <br />
            <span className="text-gradient-brand">Cinematic Master</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Drag the interactive slider below to inspect our in-house DaVinci Resolve color science. We transform flat sensor raw footage into rich, filmic imagery.
          </p>
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/20 shadow-2xl select-none cursor-ew-resize group"
          >
            {/* Graded Image (Right / Base) */}
            <img
              src="/hero-banner.jpg"
              alt="Color Graded Master"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter contrast-125 saturate-125 brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Flat Raw Log Image (Left / Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/hero-banner.jpg"
                alt="Raw Camera Log"
                className="absolute inset-0 w-full h-full object-cover max-w-none filter contrast-75 saturate-50 brightness-110"
                style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Left Label: RAW CAMERA LOG */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <span className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono font-bold text-zinc-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                RAW LOG (FLAT C-LOG/ARRI RAW)
              </span>
            </div>

            {/* Right Label: DAVINCI RESOLVE MASTER */}
            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <span className="px-3 py-1.5 rounded-xl bg-[#ff6200] text-white text-[10px] sm:text-xs font-mono font-bold shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                DAVINCI RESOLVE GRADE (DCI-P3)
              </span>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-2xl border-2 border-[#ff6200] group-hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-[#ff6200]" />
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-zinc-300 font-medium border border-white/10 hidden sm:inline-flex items-center gap-2">
                <span>◀ Slide left or right to compare color science ▶</span>
              </span>
            </div>
          </div>

          {/* Quick Metrics under slider */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Color Science</div>
              <div className="text-sm font-bold text-white mt-0.5">DaVinci Resolve Studio</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Color Space</div>
              <div className="text-sm font-bold text-[#ff8a34] mt-0.5">Rec.709 & DCI-P3 Cinema</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Audio Mastering</div>
              <div className="text-sm font-bold text-white mt-0.5">Dolby Atmos 7.1.4</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400">Master Deliverables</div>
              <div className="text-sm font-bold text-[#ff8a34] mt-0.5">ProRes 4444 XQ & DCP</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
