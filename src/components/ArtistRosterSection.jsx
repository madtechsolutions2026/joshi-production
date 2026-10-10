import React from 'react';
import { Mic, Radio, ArrowRight } from 'lucide-react';
import { artistRoster } from '../data/content';

export default function ArtistRosterSection({ onOpenBooking }) {
  return (
    <section id="artists" className="py-20 sm:py-28 bg-zinc-50/70 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#ff6200] text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5" />
            Talent & Music Development
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-tight">
            Building Stars, <br />
            <span className="text-gradient-brand">Influencers & Brands</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-600 max-w-xl mx-auto">
            From song production and studio tracks to music video direction and national digital PR, we foster talent that commands attention.
          </p>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artistRoster.map((artist) => (
            <div
              key={artist.id}
              className="rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-orange-300 transition-all duration-200 flex flex-col justify-between hover:shadow-lg group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-zinc-900 shadow-xs border border-zinc-200">
                  {artist.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 group-hover:text-[#ff6200] transition-colors">
                    {artist.name}
                  </h3>
                  <div className="text-xs text-[#ff6200] font-bold mt-0.5 mb-2">
                    {artist.role}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {artist.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span>{artist.speciality}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Talent Callout Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-orange-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#ff6200] shrink-0 mx-auto sm:mx-0">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-900">
                Are you an artist, singer, or content creator?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Collaborate with Joshi Productions for music video shoots, song distribution, and artist management in Hyderabad.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ff6200] hover:bg-[#e55800] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <span>Submit Your Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
