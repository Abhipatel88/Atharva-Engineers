"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  Lightbulb, 
  Network, 
  FileCheck, 
  Boxes, 
  HardHat, 
  ShieldCheck, 
  Activity, 
  Award,
  Factory
} from 'lucide-react';

export default function TurnkeyEPCPage() {
  const epcServices = [
    {
      title: "Conceptual Planning",
      desc: "Comprehensive Feasibility Studies and initial project conceptualization to ensure viable execution strategies.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Multidisciplinary Engineering",
      desc: "Integrated design covering Civil, Structural, Mechanical, Electrical, Instrumentation, and Utility Systems.",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Statutory Approvals",
      desc: "Navigating complex regulatory landscapes to ensure full Statutory Approvals & Regulatory Compliance.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Procurement Management",
      desc: "Strategic Procurement & Vendor Management to secure high-quality materials on schedule.",
      icon: <Boxes className="w-6 h-6" />
    },
    {
      title: "Construction Management",
      desc: "Expert Construction Management & Site Execution ensuring precise adherence to engineering designs.",
      icon: <HardHat className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      desc: "Stringent Quality Assurance, Inspection & Safety Management protocols throughout the lifecycle.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Testing & Commissioning",
      desc: "Rigorous Testing, Commissioning & Performance Validation before final handover.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Project Handover",
      desc: "Final Statutory Certification & seamless Project Handover to operational teams.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Professional Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/4.jpg" 
          alt="Turnkey EPC Project Execution" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-emerald-500"></div>
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Core Services</span>
            <div className="w-8 h-1 bg-emerald-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            TURNKEY <span className="text-emerald-500">EPC</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Complete Engineering, Procurement & Construction solutions with single-point responsibility.
          </p>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Factory className="w-12 h-12 text-emerald-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 leading-relaxed tracking-tight">
            Ensuring seamless project delivery from <span className="font-bold text-emerald-600">concept to commissioning.</span>
          </h2>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Our EPC Services</h3>
            <div className="w-20 h-1.5 bg-emerald-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {epcServices.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
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
            From Vision to <span className="text-emerald-500">Reality.</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            We provide end-to-end EPC solutions that integrate engineering excellence, efficient execution, and stringent quality control. Our comprehensive approach ensures projects are delivered safely, on schedule, within budget, and fully compliant with industry and regulatory standards.
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
