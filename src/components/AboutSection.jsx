import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      title: "Cinematic Standards",
      desc: "Top-tier cinema equipment (RED/ARRI), prime lenses, and professional master lighting setups."
    },
    {
      title: "Under One Roof",
      desc: "Seamless execution from initial concept and filming to sound design and color grading."
    },
    {
      title: "Artist & Talent Ecosystem",
      desc: "Developing and managing visionary music artists, creators, and digital influencers."
    },
    {
      title: "National Scale",
      desc: "Rooted in Hyderabad's thriving entertainment industry with production reach across India."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image & Logo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-lg bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop"
                  alt="Director on Set"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                
                {/* Floating Clean White Logo Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-md flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 p-1 flex items-center justify-center shrink-0">
                    <img 
                      src="/logo.png" 
                      alt="Joshi Productions Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase font-bold tracking-wider text-[#ff6200]">Hyderabad Headquarters</div>
                    <h4 className="text-sm font-bold text-zinc-900 leading-tight">Joshi Productions</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Creating Beyond The Frame</p>
                  </div>
                </div>
              </div>

              {/* Floating Top Pill */}
              <div className="absolute -top-3 -right-3 bg-[#ff6200] text-white py-2 px-3.5 rounded-xl shadow-md font-bold text-xs hidden sm:block">
                360° Studio Production
              </div>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#ff6200] text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              About Joshi Productions
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-tight mb-6">
              Rooted in Hyderabad. <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Built for the National Stage.</span>
            </h2>

            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-4">
              Based in Hyderabad, <strong className="text-zinc-950 font-bold">Joshi Productions</strong> is a full-service production house specialising in cinematic production, commercial filmmaking, photography, digital content, event coverage, studio production, and artist management.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
              We partner with brands, businesses, artists, creators, and organisations to transform ideas into impactful visual experiences. From concept and production to post-production and digital execution, we bring creative vision and professional production together under one roof.
            </p>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-200/80 hover:border-orange-300 hover:bg-orange-50/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6200] shrink-0" />
                    <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
