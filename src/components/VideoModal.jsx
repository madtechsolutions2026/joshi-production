import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Video Container */}
      <div className="relative w-full max-w-4xl bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-3 sm:p-4 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
              {project.category || "Joshi Productions Showreel"}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-200 hover:bg-zinc-300 flex items-center justify-center text-zinc-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            src={project.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4"}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Footer */}
        <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-zinc-100">
          <div>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-zinc-900">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl">
              {project.summary || "Cinematic showcase produced by Joshi Productions Hyderabad."}
            </p>
          </div>

          <a
            href="https://www.instagram.com/joshi_productions/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-zinc-800 flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>View On Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ff6200]" />
          </a>
        </div>

      </div>
    </div>
  );
}
