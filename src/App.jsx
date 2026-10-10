import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ArtistRosterSection from './components/ArtistRosterSection';
import ProductionWorkflow from './components/ProductionWorkflow';
import InstagramFeedSection from './components/InstagramFeedSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
import MobileFloatingBar from './components/MobileFloatingBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenBooking = (serviceName = "") => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleOpenShowreel = () => {
    setActiveProject({
      title: "Joshi Productions — Official 2026 Showreel",
      category: "Cinematic Reel",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4",
      summary: "A showcase of high-end commercial ad films, viral music videos, and creative productions produced out of Hyderabad."
    });
    setIsVideoOpen(true);
  };

  const handleOpenProjectVideo = (project) => {
    setActiveProject(project);
    setIsVideoOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden selection:bg-[#ff6200] selection:text-white">
      
      {/* Top Mobile & Desktop Navbar */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking("")} 
        onOpenShowreel={handleOpenShowreel} 
      />

      {/* Hero Section */}
      <main>
        <Hero 
          onOpenBooking={() => handleOpenBooking("")} 
          onOpenShowreel={handleOpenShowreel} 
        />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection 
          onSelectService={(srv) => handleOpenBooking(srv)} 
        />

        {/* Selected Portfolio / Showcase */}
        <PortfolioSection 
          onOpenVideo={handleOpenProjectVideo} 
        />

        {/* Talent & Music Roster */}
        <ArtistRosterSection 
          onOpenBooking={() => handleOpenBooking("Artist Management & Growth")} 
        />

        {/* 5-Step Production Workflow */}
        <ProductionWorkflow />

        {/* Instagram Profile & Reels Showcase */}
        <InstagramFeedSection 
          onOpenVideo={handleOpenProjectVideo} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking("")} 
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedService={preselectedService} 
      />

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        project={activeProject} 
      />

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <MobileFloatingBar 
        onOpenBooking={() => handleOpenBooking("")} 
        onOpenShowreel={handleOpenShowreel} 
      />

    </div>
  );
}
