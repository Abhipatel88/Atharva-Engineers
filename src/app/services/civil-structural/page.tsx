"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  Building2, 
  FileText, 
  Droplets,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Layers,
  HardHat,
  Network
} from 'lucide-react';
import { cn } from "@/lib/utils";

export default function CivilStructuralPage() {
  const [activeScrollItem, setActiveScrollItem] = useState(0);

  // For sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Rough calculation based on standard viewport heights to change active item
      // This is a simple visual effect for the demo
      if (scrollY > 2800) setActiveScrollItem(3);
      else if (scrollY > 2500) setActiveScrollItem(2);
      else if (scrollY > 2200) setActiveScrollItem(1);
      else setActiveScrollItem(0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Professional Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/4.jpg" 
          alt="Civil and Structural Engineering" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-sky-500"></div>
            <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Core Services</span>
            <div className="w-8 h-1 bg-sky-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            CIVIL & <span className="text-sky-500">STRUCTURAL</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Comprehensive engineering, regulatory, and infrastructure solutions engineered for strength and designed for performance.
          </p>
        </div>
      </section>

      {/* Section A: Regulatory Clearances (Pipeline Timeline) */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Regulatory Clearances
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
              End-to-end support for regulatory documentation and compliance submissions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-100 via-sky-500 to-sky-100 md:-translate-x-1/2 rounded-full"></div>

            {[
              {
                title: "GIDC & Urban Authorities",
                desc: "Securing mandatory approvals and permits from Gujarat Industrial Development Corporation and local urban development bodies.",
                icon: <Building2 className="w-6 h-6" />,
                align: "left"
              },
              {
                title: "DISH Approval",
                desc: "Factory plan approvals and industrial safety compliance from the Directorate of Industrial Safety and Health.",
                icon: <HardHat className="w-6 h-6" />,
                align: "right"
              },
              {
                title: "PESO Licensing",
                desc: "Licensing for petroleum storage, handling, and installation from the Petroleum and Explosives Safety Organisation.",
                icon: <FileText className="w-6 h-6" />,
                align: "left"
              }
            ].map((step, idx) => (
              <div key={idx} className={cn(
                "relative flex items-center justify-between md:justify-normal mb-12 group",
                step.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
              )}>
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-white border-4 border-sky-500 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-300 shadow-lg">
                  <div className="text-sky-500">{step.icon}</div>
                </div>

                {/* Content Card */}
                <div className={cn(
                  "w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] ml-auto md:mx-0 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300",
                  step.align === "left" ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
                  <p className="text-zinc-600 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section B: Structural Engineering (Bento Grid) */}
      <section className="relative w-full py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
                Structural Engineering
              </h2>
              <p className="text-zinc-500 text-lg">
                Robust, efficient, and sustainable structural systems engineered to meet the demands of modern infrastructure.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center">
                <Layers className="w-10 h-10 text-sky-600" />
              </div>
            </div>
          </div>

          {/* Interactive Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* RCC Structures - Large Card */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 flex flex-col justify-end">
              <Image src="/1.jpg" alt="RCC" fill className="object-cover opacity-40 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-2">RCC Structures</h3>
                <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-lg">
                  Reinforced Cement Concrete (RCC) structures designed for maximum durability in industrial, commercial, and institutional facilities.
                </p>
              </div>
            </div>

            {/* Steel Engineering - Tall Card */}
            <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-sky-900 p-8 flex flex-col justify-end">
              <Image src="/2.jpg" alt="Steel" fill className="object-cover opacity-30 group-hover:opacity-10 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-900/50 to-transparent"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">Structural Steel</h3>
                <p className="text-sky-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Engineered for strength, flexibility, and speed of construction. Ideal for heavy industrial applications.
                </p>
              </div>
            </div>

            {/* Composite Systems - Wide Card */}
            <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-3xl bg-zinc-100 p-8 flex flex-col justify-center border border-slate-200 hover:border-sky-300 transition-colors">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Composite Systems</h3>
                  <p className="text-zinc-600 max-w-md">Integrating steel and concrete to achieve superior performance and optimized project economics.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* PEB Solutions - Square Card */}
            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-amber-500 p-8 flex flex-col justify-center text-white">
              <div className="absolute inset-0 opacity-20">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="white"/></pattern></defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">PEB Solutions</h3>
                <p className="text-amber-100">Pre-Engineered Buildings for warehouses and logistics hubs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: Infrastructure Engineering (Sticky Scroll Layout) */}
      <section className="relative w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row gap-16 relative">
            
            {/* Sticky Left Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Network className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
                  Infrastructure & Utility Networks
                </h2>
                <p className="text-zinc-500 text-lg mb-8">
                  Integrated solutions that support efficient operations, sustainable development, and long-term asset performance.
                </p>
                
                {/* Progress Indicators */}
                <div className="hidden lg:flex flex-col gap-4 border-l-2 border-slate-100 pl-4">
                  {['Transportation', 'Storm Water', 'Water Supply', 'Fire Protection'].map((item, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "text-sm font-bold tracking-wider uppercase transition-colors duration-300",
                        activeScrollItem === idx ? "text-blue-600" : "text-slate-300"
                      )}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:w-2/3 space-y-12 md:space-y-32">
              {[
                { title: "Transportation Infrastructure", desc: "Design including roads, culverts, bridges, internal circulation networks, and access corridors ensuring smooth logistics and movement." },
                { title: "Storm Water Management", desc: "Systems designed for effective drainage, flood mitigation, and site sustainability to protect assets during extreme weather." },
                { title: "Water Supply Networks", desc: "Comprehensive distribution networks encompassing source planning, storage, pumping, and utility infrastructure for uninterrupted operations." },
                { title: "Fire Protection Systems", desc: "Hydrant systems engineered to meet statutory requirements, enhance safety, and ensure emergency preparedness across facilities." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-500">
                  <div className="text-blue-200 font-black text-6xl mb-6 opacity-50">0{idx + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                  <p className="text-zinc-600 text-lg leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Section D: Compliance Assessment (Dark Dashboard) */}
      <section className="relative w-full py-24 bg-[#050B14] overflow-hidden">
        {/* Subtle grid line background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <div className="text-center mb-16">
            <ShieldCheck className="w-12 h-12 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Compliance & Certification
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
              Ensuring structural safety and operational integrity through rigorous assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rule 3(C) Certification", desc: "Structural Stability Certification for buildings and structures as required under the Factories Act." },
              { title: "Safety Evaluation", desc: "Certification for industrial facilities, utility structures, storage systems, and operational buildings." },
              { title: "Tank Testing", desc: "Certification in compliance with applicable petroleum safety regulations and statutory requirements." },
              { title: "Integrity Verification", desc: "Condition assessment of existing structures to support renewals and operational approvals." }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-teal-500/50 transition-all duration-300">
                {/* Glowing corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CheckCircle2 className="w-6 h-6 text-teal-500 mb-6" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold rounded-full transition-colors duration-300 inline-flex items-center gap-2">
              Request Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
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
