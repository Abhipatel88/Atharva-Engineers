"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  Zap, 
  FileCheck, 
  Briefcase, 
  CheckCircle2,
  PlugZap
} from 'lucide-react';

export default function ElectricalPage() {
  const sections = [
    {
      id: "A",
      title: "Electrical Design & Engineering",
      icon: <Zap className="w-8 h-8" />,
      items: [
        "Electrical Load List Preparation & Load Calculations",
        "HT Yard Planning and Layout Design",
        "Single Line Diagrams (SLD) for PCC, MCC, APFC Panels, LDBs, and Distribution Systems",
        "Electrical Equipment Layouts",
        "Lighting System Design & Layouts",
        "Power Distribution Network Design",
        "Earthing & Lightning Protection Systems",
        "Cable Sizing, Routing & Layout Engineering"
      ]
    },
    {
      id: "B",
      title: "Regulatory Approvals & Compliance",
      icon: <FileCheck className="w-8 h-8" />,
      items: [
        "Approval Coordination with Electrical Inspectorate Authorities",
        "Liaison and Approval Support with Dakshin Gujarat Vij Company Limited (DGVCL)",
        "Preparation of Technical Drawings and Compliance Documentation",
        "Support for Statutory Inspections and Regulatory Clearances"
      ]
    },
    {
      id: "C",
      title: "Project Management & Procurement Support",
      icon: <Briefcase className="w-8 h-8" />,
      items: [
        "Technical Specifications & Cost Estimation",
        "Vendor Evaluation and Technical Bid Review",
        "Procurement Assistance & Material Selection",
        "Inspection, Testing & Quality Assurance",
        "Site Coordination and Construction Support",
        "Project Monitoring and Progress Management"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Professional Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/3.jpg" 
          alt="Electrical Engineering" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-yellow-500"></div>
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Core Services</span>
            <div className="w-8 h-1 bg-yellow-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            ELECTRICAL <span className="text-yellow-500">ENGINEERING</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Power System Solutions for industrial, commercial, and infrastructure projects.
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <PlugZap className="w-12 h-12 text-yellow-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-relaxed tracking-tight">
            Delivering reliable, safe, and efficient electrical solutions ensuring <span className="font-bold text-yellow-600">seamless power distribution, operational continuity, and regulatory compliance.</span>
          </h2>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Our Expertise</h3>
            <div className="w-20 h-1.5 bg-yellow-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-yellow-600 font-bold tracking-widest uppercase text-xs mb-1 block">Section {section.id}</span>
                    <h4 className="text-xl font-bold text-zinc-900 leading-tight">{section.title}</h4>
                  </div>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-600 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outro Block */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-outro" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-outro)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            End-to-End Electrical <br/><span className="text-yellow-500">Engineering Services.</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Providing services that ensure safe operation, optimized performance, regulatory compliance, and long-term reliability of power systems and electrical infrastructure.
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
