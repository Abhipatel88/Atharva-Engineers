"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  Snowflake, 
  Factory, 
  ShieldCheck, 
  Wind, 
  Settings, 
  Calculator, 
  HardHat, 
  Activity,
  Thermometer
} from 'lucide-react';

export default function HVACPage() {
  const expertiseItems = [
    {
      title: "Air Conditioning System Design & Detailing",
      desc: "Comprehensive design solutions tailored for Commercial Buildings and modern Office Spaces.",
      icon: <Snowflake className="w-6 h-6" />
    },
    {
      title: "Process Plant HVAC",
      desc: "Specialized HVAC Design & Engineering specifically developed for Pharmaceutical and complex Process Plants.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Clean Room Solutions",
      desc: "Advanced Clean Room HVAC Solutions and rigorously Controlled Environment Systems.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Ventilation & Exhaust",
      desc: "Precision Ventilation, Air Distribution & Exhaust System Design for optimal air quality.",
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: "Technical Specifications",
      desc: "Detailed Technical Specifications & rigorous Equipment Selection criteria.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Cost Estimation & BOQ",
      desc: "Accurate Cost Estimation and comprehensive Bill of Quantities (BOQ) Preparation.",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Site Supervision & Quality Control",
      desc: "Expert Site Supervision, Installation Monitoring & strict Quality Control protocols.",
      icon: <HardHat className="w-6 h-6" />
    },
    {
      title: "Testing & Commissioning",
      desc: "Thorough Testing, Commissioning & Performance Verification for all installed systems.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Professional Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/1.jpg" 
          alt="HVAC Engineering" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-cyan-500"></div>
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Core Services</span>
            <div className="w-8 h-1 bg-cyan-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            HVAC <span className="text-cyan-500">ENGINEERING</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Delivering efficient, reliable, and energy-conscious climate control solutions.
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Thermometer className="w-12 h-12 text-cyan-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-relaxed tracking-tight">
            Designed to ensure <span className="font-bold text-cyan-600">optimal indoor comfort, process requirements, and regulatory compliance</span> across commercial and industrial facilities.
          </h2>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Our Expertise</h3>
            <div className="w-20 h-1.5 bg-cyan-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3 leading-tight">{item.title}</h4>
                <p className="text-zinc-600 font-light leading-relaxed flex-grow text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outro Block */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Climate Control Solutions. <br/><span className="text-cyan-500">Long-Term Reliability.</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Providing customized HVAC solutions that enhance occupant comfort, process efficiency, energy performance, and long-term operational reliability.
          </p>
        </div>
      </section>

      {/* CSS for animations */}
</main>
  );
}
