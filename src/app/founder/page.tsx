"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/2.jpg" 
          alt="Leadership Background" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-sky-500"></div>
            <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Leadership</span>
            <div className="w-8 h-1 bg-sky-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-zinc-500">FOUNDER</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            The visionary driving engineering excellence and innovation at Atharva Engineers.
          </p>
        </div>
      </section>

      {/* Profile & Message Section */}
      <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Left: Founder Image */}
            <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-sky-100 rounded-2xl transform -rotate-3 scale-105 z-0 transition-transform duration-500 hover:-rotate-6"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 shadow-2xl border border-slate-100">
                <Image 
                  src="/1.jpg" 
                  alt="Founder Portrait" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold tracking-tight">John Doe</h3>
                  <p className="text-sky-400 font-medium text-sm tracking-wider uppercase">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  A Message From <br/>
                  <span className="text-sky-600">Our Founder</span>
                </h2>
                <div className="w-20 h-1.5 bg-sky-500"></div>
              </div>
              
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-light">
                <p>
                  <span className="text-4xl font-serif text-sky-500 font-bold opacity-50 float-left mr-2 -mt-2">"</span>
                  Welcome to Atharva Engineers. When we first started this journey, our goal was simple yet ambitious: to redefine the standards of engineering and construction by delivering uncompromising quality and innovative solutions.
                </p>
                <p>
                  Over the years, we have grown from a small team of passionate engineers into a premier EPC organization. This growth has been fueled by our unwavering commitment to our core principles—precision, safety, and a deep understanding of our clients' unique challenges.
                </p>
                <p>
                  Every structure we build is a testament to our dedication. We believe that true engineering excellence is not just about the technicalities of design; it's about imagining a better, more robust future and having the expertise to make it a reality.
                </p>
                <p>
                  I am incredibly proud of the talented professionals at Atharva who bring their best to every project. Together, we continue to push the boundaries of what's possible, building a legacy of trust and performance.
                </p>
                <div className="pt-4">
                  <Image 
                    src="/image.png" 
                    alt="Signature" 
                    width={150} 
                    height={60} 
                    className="opacity-50 grayscale"
                  />
                  <p className="mt-2 text-sm font-bold text-zinc-900 uppercase tracking-widest">
                    John Doe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy Section */}
      <section className="relative w-full py-20 md:py-32 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">The Driving Force</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Guiding Philosophy</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Visionary Leadership",
                description: "Anticipating industry trends and steering the company towards innovative, sustainable engineering solutions.",
                icon: (
                  <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: "Unwavering Integrity",
                description: "Fostering a culture of transparency, ethical business practices, and mutual respect with all stakeholders.",
                icon: (
                  <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Commitment to Excellence",
                description: "Never compromising on quality and constantly seeking ways to improve methodologies and project outcomes.",
                icon: (
                  <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-6">
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
