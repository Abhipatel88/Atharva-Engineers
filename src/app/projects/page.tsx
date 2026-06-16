"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Briefcase, 
  X,
  Maximize2
} from 'lucide-react';
import { cn } from "@/lib/utils";

// Dummy Data
const PROJECT_CATEGORIES = ["All", "Industrial", "Commercial", "Infrastructure"];

const PROJECTS = [
  {
    id: 1,
    title: "Apex Manufacturing Facility",
    category: "Industrial",
    image: "/1.jpg",
    client: "Apex Industries Ltd.",
    location: "Dahej, Gujarat",
    scope: "Complete Turnkey EPC execution including Civil, Structural Steel (PEB), and HVAC systems for a 200,000 sq.ft manufacturing plant.",
    completion: "March 2025"
  },
  {
    id: 2,
    title: "Horizon IT Park",
    category: "Commercial",
    image: "/2.jpg",
    client: "Horizon Developers",
    location: "Ahmedabad, Gujarat",
    scope: "Detailed architectural and structural engineering for a G+12 premium commercial office space, focusing on green building standards.",
    completion: "December 2024"
  },
  {
    id: 3,
    title: "GIDC Water Treatment Plant",
    category: "Infrastructure",
    image: "/3.jpg",
    client: "Gujarat Industrial Development Corporation",
    location: "Vapi, Gujarat",
    scope: "Utility network design, piping engineering, and structural layout for a high-capacity municipal water treatment and distribution facility.",
    completion: "August 2023"
  },
  {
    id: 4,
    title: "Zenith Pharma Lab",
    category: "Industrial",
    image: "/4.jpg",
    client: "Zenith Pharmaceuticals",
    location: "Ankleshwar, Gujarat",
    scope: "Clean room HVAC design, process piping, and structural stability certification for a modern API manufacturing laboratory.",
    completion: "June 2024"
  },
  {
    id: 5,
    title: "Nexus Corporate Hub",
    category: "Commercial",
    image: "/1.jpg",
    client: "Nexus Group",
    location: "Surat, Gujarat",
    scope: "Complete electrical engineering and HVAC climate control solutions for a twin-tower commercial complex.",
    completion: "Pending (Est. 2026)"
  },
  {
    id: 6,
    title: "National Highway Bridge",
    category: "Infrastructure",
    image: "/2.jpg",
    client: "National Highways Authority",
    location: "Bharuch, Gujarat",
    scope: "Structural engineering and infrastructure design for a heavy-load transport bridge spanning 400 meters.",
    completion: "January 2024"
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/4.jpg" 
          alt="Our Projects" 
          fill 
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            OUR <span className="text-sky-500">PROJECTS</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Showcasing engineering excellence and successful project delivery across multiple sectors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300",
                activeCategory === category 
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105" 
                  : "bg-white text-zinc-500 border border-slate-200 hover:border-sky-300 hover:text-zinc-900"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl bg-zinc-100 aspect-square md:aspect-[4/5] transform hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl border border-slate-200/50"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out forwards', 
                animationDelay: (idx * 0.1) + 's',
                opacity: 0
              }}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider rounded-full mb-3 backdrop-blur-md">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-2 text-zinc-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    {project.location}
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Interactive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Top Image Area */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-zinc-100">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-sky-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Right/Bottom Details Area */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-tight mb-8">
                {selectedProject.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <Building2 className="w-6 h-6 text-sky-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Client</h4>
                    <p className="text-zinc-900 font-medium">{selectedProject.client}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-6 h-6 text-sky-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-zinc-900 font-medium">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <Calendar className="w-6 h-6 text-sky-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Completion Date</h4>
                    <p className="text-zinc-900 font-medium">{selectedProject.completion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                  <Briefcase className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-2">Scope of Work</h4>
                    <p className="text-sky-900 font-light leading-relaxed">{selectedProject.scope}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
</main>
  );
}
