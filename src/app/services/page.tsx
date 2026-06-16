"use client";
import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-sky-500"></div>
            <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <div className="w-8 h-1 bg-sky-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            ALL <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">SERVICES</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Explore our comprehensive range of engineering and construction solutions. Please use the dropdown menu to navigate to specific service details.
          </p>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: 
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      }} />
    </main>
  );
}
