"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { Award, Star, Medal, CheckCircle2, TrendingUp } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A192F]">
        {/* Abstract pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-yellow-500"></div>
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Recognition</span>
            <div className="w-8 h-1 bg-yellow-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            AWARDS & <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">ACHIEVEMENTS</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Celebrating our milestones, industry recognitions, and the continuous pursuit of engineering perfection.
          </p>
        </div>
      </section>

      {/* Stats / Highlights Section */}
      <section className="relative w-full py-16 bg-white border-b border-slate-100 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">500+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">25+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">ISO</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">9001:2015 Certified</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-black text-zinc-900 mb-2">0</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">LTI (Lost Time Incidents)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4">Milestones</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Our Proudest Moments</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: "2023",
                title: "Best Industrial EPC Contractor",
                org: "National Engineering Awards",
                description: "Recognized for executing one of the largest automated warehousing facilities in the region with zero safety incidents.",
                icon: <Medal className="w-8 h-8" />
              },
              {
                year: "2022",
                title: "Excellence in Sustainable Design",
                org: "Green Building Council",
                description: "Awarded for innovative integration of solar infrastructure and rainwater harvesting in heavy industrial plant design.",
                icon: <Star className="w-8 h-8" />
              },
              {
                year: "2021",
                title: "ISO 9001, 14001 & 45001 Certification",
                org: "International Standards",
                description: "Achieved the trifecta of Quality, Environmental, and Occupational Health & Safety management systems.",
                icon: <CheckCircle2 className="w-8 h-8" />
              },
              {
                year: "2019",
                title: "Fastest Growing Engineering Firm",
                org: "Business Excellence Forum",
                description: "Acknowledged for a 300% growth in capacity and successful expansion into international structural markets.",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                year: "2018",
                title: "Safety First Award",
                org: "Construction Safety Board",
                description: "Honored for achieving 5 million safe man-hours without a single lost-time injury across all active sites.",
                icon: <ShieldCheck className="w-8 h-8" />
              },
              {
                year: "2015",
                title: "Outstanding Structural Innovation",
                org: "Institute of Civil Engineers",
                description: "Awarded for the structural design of the iconic Riverfront Commercial Complex.",
                icon: <Award className="w-8 h-8" />
              }
            ].map((award, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-yellow-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-white border border-slate-100 text-yellow-500 rounded-xl flex items-center justify-center shadow-sm">
                      {award.icon}
                    </div>
                    <span className="px-4 py-1.5 bg-zinc-900 text-white text-sm font-bold rounded-full tracking-wider">
                      {award.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-2">{award.title}</h4>
                  <p className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-4">{award.org}</p>
                  <p className="text-zinc-600 font-light leading-relaxed flex-grow">
                    {award.description}
                  </p>
                </div>
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
