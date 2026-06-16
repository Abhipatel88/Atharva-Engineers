"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { Zap, ShieldCheck, Clock, Users, Cpu, Trophy } from 'lucide-react';

export default function OurStrengthPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-900">
        <Image 
          src="/1.jpg" 
          alt="Our Strength" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-amber-500"></div>
            <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Competitive Edge</span>
            <div className="w-8 h-1 bg-amber-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">STRENGTH</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            The core competencies that make us the preferred partner for complex EPC projects.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-8">
            Built on a Foundation of <br/>
            <span className="text-amber-500">Excellence & Reliability</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed font-light">
            In an industry where precision and timing are critical, our strengths lie in our ability to execute complex projects flawlessly. We combine deep domain expertise, a robust supply chain, and an unwavering commitment to quality to deliver solutions that stand the test of time.
          </p>
        </div>
      </section>

      {/* Bento Grid of Strengths */}
      <section className="relative w-full py-12 md:py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Users className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4">Expert Engineering Team</h3>
                <p className="text-zinc-600 font-light leading-relaxed max-w-xl text-lg">
                  Our greatest asset is our people. We house a multidisciplinary team of veteran engineers, visionary architects, and skilled project managers who bring decades of collective experience to every challenge.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-950 text-white rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 text-amber-400 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">On-Time Execution</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  We employ rigorous project management frameworks to ensure that milestones are met and projects are delivered strictly on schedule, without compromising quality.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Quality Assurance</h3>
              <p className="text-zinc-600 font-light leading-relaxed">
                Adherence to strict international quality standards (ISO certified). Every material and process is subjected to stringent testing.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-8">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Technological Edge</h3>
              <p className="text-zinc-600 font-light leading-relaxed">
                Leveraging BIM, advanced ERP systems, and automated fabrication to increase accuracy, reduce waste, and enhance safety.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Turnkey Capability</h3>
              <p className="text-zinc-600 font-light leading-relaxed">
                From initial conceptualization and design to procurement, execution, and handover, we provide end-to-end solutions under one roof.
              </p>
            </div>

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
