"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { Target, Eye, Shield, Globe, Cpu, Users } from 'lucide-react';

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#00122A]">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00122A] to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-sky-500"></div>
            <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Purpose & Direction</span>
            <div className="w-8 h-1 bg-sky-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            VISION & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">MISSION</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Defining our path forward and the foundational principles that guide our everyday pursuit of engineering excellence.
          </p>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Content */}
            <div className="flex flex-col space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-2">
                <Eye className="w-8 h-8 text-sky-500" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  Our Vision
                </h2>
              </div>
              <div className="w-20 h-1.5 bg-sky-500"></div>
              
              <div className="text-zinc-600 text-lg leading-relaxed font-light space-y-6">
                <p className="text-2xl font-medium text-zinc-800 border-l-4 border-sky-500 pl-6 py-2">
                  "To be the globally recognized leader in delivering innovative, sustainable, and world-class engineering solutions that shape the infrastructure of tomorrow."
                </p>
                <p>
                  We envision a future where complex industrial and architectural challenges are met with intelligent, efficient, and robust engineering. Our goal is to continually push the boundaries of design and construction, fostering environments where progress and sustainability coexist harmoniously.
                </p>
                <p>
                  By embracing technological advancements and maintaining an uncompromising standard of quality, we aim to inspire trust and become the preferred partner for complex EPC projects worldwide.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
              <div className="absolute inset-0 bg-zinc-100 rounded-[3rem] transform rotate-6 scale-105 z-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden z-10 shadow-xl border-4 border-white">
                <Image 
                  src="/3.jpg" 
                  alt="Our Vision" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-sky-900/20 mix-blend-multiply"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="relative w-full py-20 md:py-32 bg-zinc-950 text-white overflow-hidden">
        {/* Subtle background texture */}
        <Image 
          src="/1.jpg" 
          alt="Background" 
          fill 
          className="object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Image */}
            <div className="relative w-full aspect-video max-w-lg mx-auto lg:mx-0 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-black border border-zinc-800">
                <Image 
                  src="/4.jpg" 
                  alt="Our Mission" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <Target className="w-8 h-8 text-sky-400" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Our Mission
                </h2>
              </div>
              <div className="w-20 h-1.5 bg-sky-500"></div>
              
              <div className="text-zinc-300 text-lg leading-relaxed font-light space-y-6">
                <p>
                  To provide our clients with exceptional engineering, procurement, and construction services through a commitment to excellence, continuous innovation, and uncompromising safety.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-500/50">
                      <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                    </div>
                    <p><strong className="text-white font-medium">Delivering Value:</strong> Execute projects on time, within budget, and to the highest quality standards, ensuring maximum ROI for our clients.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-500/50">
                      <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                    </div>
                    <p><strong className="text-white font-medium">Empowering People:</strong> Foster a culture of continuous learning, respect, and safety for our workforce and partners.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-500/50">
                      <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                    </div>
                    <p><strong className="text-white font-medium">Sustainable Growth:</strong> Adopt eco-friendly practices and green building solutions that minimize environmental impact.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Strategic Focus</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Our Core Pillars</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Global Standards",
                description: "Adhering to strict international codes to ensure structural integrity and compliance.",
                icon: <Globe className="w-8 h-8" />
              },
              {
                title: "Innovation",
                description: "Integrating the latest technologies and methodologies in detailed engineering.",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                title: "Reliability",
                description: "Building trust through transparent processes and consistent, high-quality deliverables.",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "Collaboration",
                description: "Working closely with stakeholders to align technical execution with business goals.",
                icon: <Users className="w-8 h-8" />
              }
            ].map((pillar, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-slate-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">{pillar.title}</h4>
                <p className="text-zinc-600 font-light leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS for animations */}
</main>
  );
}
