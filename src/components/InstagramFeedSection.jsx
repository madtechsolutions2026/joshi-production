import React from 'react';
import { Heart, Play, ExternalLink, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function InstagramFeedSection({ onOpenVideo }) {
  const instagramReels = [
    {
      id: "reel-1",
      title: "Jaisi aapki marzi — Official Music Track",
      views: "128K",
      likes: "14.2K",
      tag: "Music Video",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-singer-singing-into-a-microphone-in-a-studio-41584-large.mp4"
    },
    {
      id: "reel-2",
      title: "AMBSTER 50012 — Hyderabad Street Anthem",
      views: "245K",
      likes: "28.5K",
      tag: "Hip-Hop",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-guitarist-playing-at-a-concert-40285-large.mp4"
    },
    {
      id: "reel-3",
      title: "Stage & Conclave Live Cine-Coverage",
      views: "89K",
      likes: "9.8K",
      tag: "Live Event",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-audience-raising-their-arms-at-a-music-festival-42618-large.mp4"
    },
    {
      id: "reel-4",
      title: "Behind The Scenes: ARRI Alexa Mini LF Setup",
      views: "160K",
      likes: "19.1K",
      tag: "Behind The Lens",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-studio-posing-with-red-lighting-42358-large.mp4"
    }
  ];

  return (
    <section id="social" className="py-20 sm:py-28 bg-zinc-50/70 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#ff6200] text-xs font-bold uppercase tracking-wider mb-3">
            <InstagramIcon className="w-3.5 h-3.5" />
            Social & Creator Momentum
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-tight">
            Follow Our Journey on <br />
            <span className="text-gradient-brand">@joshi_productions</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-600 max-w-xl mx-auto">
            Behind the scenes, studio shoots, artist releases, and latest visual experiments live from Hyderabad.
          </p>
        </div>

        {/* Profile Highlight Card */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Profile Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-orange-500 shadow-sm bg-white">
                <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Joshi Productions Avatar"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#ff6200] border-2 border-white flex items-center justify-center text-white">
                <CheckCircle2 className="w-4 h-4 fill-white text-[#ff6200]" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-zinc-900 flex items-center justify-center sm:justify-start gap-2">
                    <span>joshi_productions</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-[#ff6200]">
                      Official Profile
                    </span>
                  </h3>
                  <div className="text-xs text-zinc-500 mt-0.5">Social Media Agency • Creative Production</div>
                </div>

                <a
                  href="https://www.instagram.com/joshi_productions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff6200] hover:bg-[#e55800] text-white text-xs font-bold shadow-sm transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Follow on Instagram</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Bio block matching user screenshot */}
              <div className="text-xs sm:text-sm text-zinc-700 space-y-1 mb-5 bg-zinc-50 p-3.5 rounded-xl border border-zinc-200">
                <p className="flex items-center gap-2">
                  <span>🎬</span> <strong className="text-zinc-900">Building Stars, Influencers & Brands</strong>
                </p>
                <p className="flex items-center gap-2">
                  <span>🎶</span> <span>Music | Songs | Artist Development</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📈</span> <span>Social Media Growth • Strategy • Hyderabad</span>
                </p>
              </div>

              {/* Counts */}
              <div className="flex items-center justify-center sm:justify-start gap-6 text-center sm:text-left text-xs">
                <div>
                  <span className="font-bold text-zinc-900 text-sm sm:text-base">24</span>
                  <span className="text-zinc-500 ml-1">posts</span>
                </div>
                <div>
                  <span className="font-bold text-zinc-900 text-sm sm:text-base">544+</span>
                  <span className="text-zinc-500 ml-1">followers</span>
                </div>
                <div>
                  <span className="font-bold text-zinc-900 text-sm sm:text-base">100%</span>
                  <span className="text-zinc-500 ml-1">original work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramReels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => onOpenVideo({
                title: reel.title,
                summary: `${reel.views} Views on Instagram • Produced by Joshi Productions Hyderabad`,
                videoUrl: reel.videoUrl,
                category: reel.tag
              })}
              className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-zinc-900 border border-zinc-200 hover:border-[#ff6200] transition-all cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] uppercase font-bold text-orange-400">
                  {reel.tag}
                </span>
              </div>

              <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#ff6200] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-xs font-bold text-white line-clamp-2 leading-tight mb-2">
                  {reel.title}
                </p>
                <div className="flex items-center justify-between text-[10px] text-zinc-300 font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                    {reel.likes}
                  </span>
                  <span className="flex items-center gap-1 text-orange-400">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    {reel.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
