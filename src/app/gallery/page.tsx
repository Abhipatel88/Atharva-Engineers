"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { X, ZoomIn } from 'lucide-react';

// Dummy Gallery Images
const GALLERY_IMAGES = [
  { id: 1, src: "/1.jpg", alt: "Industrial Facility Exterior", type: "landscape" },
  { id: 2, src: "/2.jpg", alt: "Commercial Interior Layout", type: "portrait" },
  { id: 3, src: "/3.jpg", alt: "Structural Engineering View", type: "square" },
  { id: 4, src: "/4.jpg", alt: "HVAC Installation Site", type: "landscape" },
  { id: 5, src: "/2.jpg", alt: "Power Grid Setup", type: "square" },
  { id: 6, src: "/1.jpg", alt: "Turnkey Project Overview", type: "portrait" },
  { id: 7, src: "/4.jpg", alt: "Architectural Model", type: "landscape" },
  { id: 8, src: "/3.jpg", alt: "Piping Network", type: "square" }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/3.jpg" 
          alt="Image Gallery" 
          fill 
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            IMAGE <span className="text-rose-500">GALLERY</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            A visual showcase of our engineering facilities, infrastructure projects, and architectural designs.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full flex-grow">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-zinc-100 transform hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-xl break-inside-avoid"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out forwards', 
                animationDelay: (idx * 0.1) + 's',
                opacity: 0
              }}
            >
              {/* Dynamic aspect ratio to create masonry effect */}
              <div className={"relative w-full " + (img.type === 'portrait' ? 'aspect-[3/4]' : img.type === 'landscape' ? 'aspect-[4/3]' : 'aspect-square')}>
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
              
              {/* Subtle caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium truncate">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedImage(null)}
          ></div>
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content - Pure Image */}
          <div className="relative w-full max-w-6xl h-full max-h-[85vh] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
            <div className="relative w-full h-full">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <p className="absolute bottom-[-2rem] text-zinc-400 text-sm tracking-wide">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}

      {/* Global CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}} />
    </main>
  );
}
