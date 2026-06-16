"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  Layout, 
  Building, 
  Leaf, 
  Award, 
  Wind, 
  Activity, 
  BarChart, 
  Map, 
  Trees, 
  Sofa, 
  Cuboid
} from 'lucide-react';

export default function ArchitecturalPage() {
  const offerings = [
    {
      icon: <Map className="w-6 h-6" />,
      title: "Site Master Planning",
      desc: "Integrated planning for optimized land utilization, operational efficiency, and future expansion."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Architectural Design",
      desc: "Solutions for Residential, Institutional, Commercial, Industrial, and Mixed-Use Developments."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "High-Performance Design",
      desc: "Energy-efficient building design focused on sustainability, occupant comfort, and operational cost reduction."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Green Building Consultancy",
      desc: "Certification support and compliance accreditation for LEED, IGBC, and GRIHA."
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Net-Zero Strategies",
      desc: "Energy and Carbon-Neutral design strategies to achieve long-term environmental sustainability goals."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance Assessment",
      desc: "Diagnostics for enhanced efficiency, durability, and lifecycle value of buildings."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Life Cycle Assessment",
      desc: "Evaluating environmental impacts (LCA) to support sustainable decision-making."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Urban Planning",
      desc: "Development studies for smart, resilient, and well-connected communities."
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: "Landscape Architecture",
      desc: "External environment design that harmonizes functionality, aesthetics, and ecological balance."
    },
    {
      icon: <Sofa className="w-6 h-6" />,
      title: "Interior Design",
      desc: "Space planning tailored to operational needs, user experience, and brand identity."
    },
    {
      icon: <Cuboid className="w-6 h-6" />,
      title: "Advanced 3D Modeling",
      desc: "Visualization & digital walkthroughs for improved design communication and project understanding."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Professional Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/3.jpg" 
          alt="Architectural Design Services" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-amber-500"></div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Core Services</span>
            <div className="w-8 h-1 bg-amber-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            ARCHITECTURAL <span className="text-amber-500">DESIGN</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Transforming ideas into functional, aesthetically refined, and future-ready environments.
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Layout className="w-12 h-12 text-amber-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-relaxed tracking-tight">
            Through innovative architectural and planning expertise, we build environments that <span className="font-bold text-amber-600">inspire, perform, and endure.</span>
          </h2>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Our Service Offerings</h3>
            <div className="w-20 h-1.5 bg-amber-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {offerings.map((offering, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {offering.icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">{offering.title}</h4>
                <p className="text-zinc-600 font-light leading-relaxed flex-grow">
                  {offering.desc}
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
            Designing Sustainable Spaces. <br/><span className="text-amber-500">Creating Lasting Value.</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Our architectural solutions seamlessly integrate innovation, functionality, sustainability, and visual excellence. From concept development to detailed design, we create spaces that support business objectives while enhancing the built environment for future generations.
          </p>
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
