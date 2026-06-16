"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    title: "Uncompromising Quality",
    description: "We adhere to the highest global standards, ensuring that every project is executed with flawless precision and durability.",
    icon: (
      <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Innovative Engineering",
    description: "Leveraging cutting-edge technology and advanced methodologies to solve complex structural and infrastructural challenges.",
    icon: (
      <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Safety First",
    description: "A steadfast commitment to creating secure environments for our workforce, clients, and the communities we serve.",
    icon: (
      <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    )
  },
  {
    title: "Client-Centric Approach",
    description: "Building lasting partnerships through transparent communication, reliability, and exceeding project expectations.",
    icon: (
      <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/4.jpg" 
          alt="Atharva Engineers Hero" 
          fill 
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-start justify-center">
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-12 h-1 bg-sky-500"></div>
            <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">Our Identity</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            ABOUT <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-zinc-500">
              ATHARVA
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Transforming complex visions into enduring realities through engineering excellence, innovative design, and uncompromising precision.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform origin-top-right z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  Building the Foundation of <span className="text-sky-600">Tomorrow</span>
                </h2>
                <div className="w-20 h-1.5 bg-sky-500"></div>
              </div>
              
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-light">
                <p>
                  Founded in 2003, Atharva Engineers is a leading multidisciplinary engineering consultancy delivering innovative, sustainable, and value-driven solutions across industrial, commercial, residential, institutional, and infrastructure sectors. With over 22 years of professional experience, we have built a strong reputation for technical excellence, reliability, and successful project delivery.
                </p>
                <p>
                  Atharva Engineers provides comprehensive services encompassing engineering design, architectural planning, project management, statutory compliance, detailed engineering, EPC support, and technical consultancy. Our integrated approach enables clients to benefit from a single-source solution throughout the entire project lifecycle—from concept and planning to execution, commissioning, and handover.
                </p>
                <p>
                  Our team comprises experienced engineers, architects, project managers, and technical specialists who combine industry expertise with innovative thinking to deliver practical, efficient, and future-ready solutions. We are committed to creating designs that optimize performance, enhance safety, improve sustainability, and maximize long-term value.
                </p>
                <p>
                  Over the years, Atharva Engineers has successfully partnered with private industries, commercial organizations, institutions, government bodies, and public-sector enterprises across India, delivering projects that meet the highest standards of quality, functionality, and compliance.
                </p>
                <p className="font-medium text-zinc-900 pt-2">
                  <span className="text-sky-600 font-bold">Engineering Innovation. Delivering Excellence.</span><br/>
                  At Atharva Engineers, we transform ideas into enduring assets through intelligent engineering, meticulous planning, and a commitment to excellence—helping clients achieve their vision with confidence, efficiency, and lasting success.
                </p>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-200 overflow-hidden relative">
                      <Image src="/1.jpg" alt="Team" fill className="object-cover" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-300 overflow-hidden relative">
                      <Image src="/2.jpg" alt="Team" fill className="object-cover" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-zinc-400 overflow-hidden relative">
                      <Image src="/3.jpg" alt="Team" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-zinc-800">
                    <span className="font-bold text-sky-600">200+</span> Engineering Professionals
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-sky-100 rounded-3xl transform rotate-3 scale-105 z-0 transition-transform duration-500 hover:rotate-6"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden z-10 shadow-2xl">
                <Image 
                  src="/3.jpg" 
                  alt="Atharva Engineering Team" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-medium text-lg leading-snug border-l-4 border-sky-500 pl-4">
                    "Engineering is not merely about mathematics and materials; it's about imagining a better world and making it real."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Our Principles</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Core Values</h3>
            <p className="mt-6 text-zinc-600 text-lg font-light leading-relaxed">
              The foundational pillars that guide our every decision, shape our culture, and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-sky-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{value.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed font-light flex-grow">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Stats Section (Consistent with homepage but slightly different style) */}
      <section 
        className="relative w-full py-24 md:py-32 bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: 'url("/1.jpg")' }}
      >
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16">
            A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Impact</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "350+", label: "Projects Completed" },
              { number: "200+", label: "Expert Engineers" },
              { number: "50+", label: "Global Clients" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center group">
                <div className="text-5xl md:text-6xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-semibold tracking-widest text-sky-400 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-zinc-50 border-y border-zinc-100"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight mb-6">
            Let's Build The Future <span className="text-sky-600">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how Atharva Engineers can bring unmatched expertise and innovative solutions to your next industrial project.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-sky-600 text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 rounded-sm shadow-xl shadow-zinc-200 hover:shadow-sky-200">
              Contact Us Today
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 hover:border-zinc-900 text-zinc-900 font-bold tracking-widest uppercase text-sm transition-all duration-300 rounded-sm hover:bg-zinc-50">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
</main>
  );
}
