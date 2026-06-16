"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { Building2, Factory, Wrench, PackageSearch } from 'lucide-react';

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/4.jpg" 
          alt="Infrastructure Background" 
          fill 
          className="object-cover opacity-40 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-sky-500"></div>
            <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Capabilities</span>
            <div className="w-8 h-1 bg-sky-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            STATE OF THE ART <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">INFRASTRUCTURE</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Equipped with cutting-edge technology and expansive facilities to handle the most demanding engineering projects.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-sky-100 rounded-3xl transform -rotate-3 scale-105 z-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden z-10 shadow-2xl border-4 border-white">
                <Image 
                  src="/2.jpg" 
                  alt="Manufacturing Facility" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <Factory className="w-8 h-8 text-sky-500" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  Our Facilities
                </h2>
              </div>
              <div className="w-20 h-1.5 bg-sky-500"></div>
              
              <div className="text-zinc-600 text-lg leading-relaxed font-light space-y-6">
                <p>
                  Atharva Engineers boasts a world-class manufacturing and fabrication infrastructure spread across a vast area, strategically located to facilitate seamless logistics and transportation.
                </p>
                <p>
                  Our workshop is equipped with the latest CNC machinery, automated welding stations, and heavy-duty overhead cranes, allowing us to fabricate complex structural components with unparalleled precision and efficiency.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong className="text-zinc-900 font-medium">100,000+ sq. ft.</strong> of covered fabrication area.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong className="text-zinc-900 font-medium">Advanced CNC Machinery</strong> for cutting, drilling, and shaping.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><strong className="text-zinc-900 font-medium">In-house Testing Labs</strong> ensuring strict quality control.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech & Tools Grid */}
      <section className="relative w-full py-20 md:py-32 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Technology & Equipment</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Engineering Arsenal</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Design & Drafting",
                description: "Utilizing advanced CAD, STAAD.Pro, and TEKLA software for precise 3D modeling and structural analysis.",
                icon: <Building2 className="w-8 h-8" />
              },
              {
                title: "Fabrication Unit",
                description: "State-of-the-art CNC plate cutting machines, automated beam welding lines, and shot blasting facilities.",
                icon: <Wrench className="w-8 h-8" />
              },
              {
                title: "Quality Assurance Lab",
                description: "Fully equipped NDT testing tools, ultrasonic flaw detectors, and material grade analyzers.",
                icon: <PackageSearch className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h4>
                <p className="text-zinc-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </main>
  );
}
