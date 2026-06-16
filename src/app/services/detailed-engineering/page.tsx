"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  Settings, 
  Zap, 
  Droplets, 
  Activity, 
  Network, 
  Building2, 
  Briefcase, 
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';

export default function DetailedEngineeringPage() {
  const disciplines = [
    {
      id: "A",
      title: "Process & Mechanical Engineering",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Process Flow Diagrams (PFD)",
        "Piping & Instrumentation Diagrams (P&ID)",
        "Process Equipment Lists & Datasheets",
        "Mechanical Equipment Specifications",
        "Equipment Layout & Plot Plan Development"
      ]
    },
    {
      id: "B",
      title: "Utility Engineering",
      icon: <Droplets className="w-6 h-6" />,
      items: [
        "Utility Load Calculations",
        "Utility Equipment Sizing & Selection",
        "Utility Equipment Lists",
        "Equipment Datasheet Preparation",
        "Utility Distribution System Design"
      ]
    },
    {
      id: "C",
      title: "Piping Engineering & Design",
      icon: <Network className="w-6 h-6" />,
      items: [
        "Piping Layout Development",
        "Isometric Drawings",
        "3D Plant Modeling & Routing",
        "Material Take-Off (MTO)",
        "Piping Design Coordination"
      ]
    },
    {
      id: "D",
      title: "Instrumentation & Control",
      icon: <Activity className="w-6 h-6" />,
      items: [
        "Instrument Specifications & Datasheets",
        "Instrument Location Plans",
        "Control System Engineering",
        "Cable Routing & Layout Drawings",
        "Control Panel & Field Instrument Design"
      ]
    },
    {
      id: "E",
      title: "Electrical Engineering",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Single Line Diagrams (SLD)",
        "Electrical Load Calculations",
        "Transformer, PCC & MCC Specifications",
        "Cable Sizing & Routing",
        "Lighting, Earthing & Lightning Protection Systems"
      ]
    },
    {
      id: "F",
      title: "Civil & Structural Engineering",
      icon: <Building2 className="w-6 h-6" />,
      items: [
        "Building & Structural Design",
        "Equipment Foundations",
        "Pipe Rack Structures",
        "RCC, Steel & Composite Structures",
        "Infrastructure Development Works"
      ]
    },
    {
      id: "G",
      title: "Project Management & Procurement",
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        "Technical Specifications & Cost Estimation",
        "Vendor Evaluation & Procurement Assistance",
        "Inspection & Quality Assurance Services",
        "Construction Monitoring & Site Coordination",
        "Project Scheduling & Progress Tracking"
      ]
    },
    {
      id: "H",
      title: "Safety & Fire Protection",
      icon: <ShieldAlert className="w-6 h-6" />,
      items: [
        "HAZOP & HAZID Studies",
        "SIL Assessments",
        "Fire Protection System Design",
        "Regulatory Compliance Support"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Professional Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/2.jpg" 
          alt="Detailed Engineering" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-indigo-500"></div>
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Core Services</span>
            <div className="w-8 h-1 bg-indigo-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            DETAILED <span className="text-indigo-500">ENGINEERING</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Integrated project delivery from concept development to successful implementation.
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Settings className="w-12 h-12 text-indigo-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-relaxed tracking-tight">
            Providing integrated engineering solutions ensuring <span className="font-bold text-indigo-600">technical accuracy, operational efficiency,</span> and successful project delivery.
          </h2>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Engineering Disciplines</h3>
            <div className="w-20 h-1.5 bg-indigo-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {disciplines.map((discipline, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {discipline.icon}
                  </div>
                  <div>
                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-1 block">Section {discipline.id}</span>
                    <h4 className="text-2xl font-bold text-zinc-900 leading-tight">{discipline.title}</h4>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {discipline.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
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
            Transforming Concepts into <br/><span className="text-indigo-500">Industrial Realities.</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Delivering multidisciplinary engineering expertise that transforms concepts into safe, efficient, and sustainable industrial facilities.
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
