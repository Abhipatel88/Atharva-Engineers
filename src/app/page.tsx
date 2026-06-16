"use client";

import React from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselPrevious,
  CarouselNext,
  CarouselFraction,
  CarouselCustomNav,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const slides = [
  {
    title: "Welcome to Atharva Engineers",
    description: "Delivering excellence in engineering, structural design, and turnkey execution with precision and quality.",
    image: "/1.jpg",
  },
  {
    title: "Innovative Structural Designs",
    description: "Creating robust, modern, and sustainable architectural structures for the future.",
    image: "/2.jpg",
  },
  {
    title: "Expert Turnkey Solutions",
    description: "From concept to completion, we handle your projects with unparalleled expertise and care.",
    image: "/3.jpg",
  },
  {
    title: "Building the Future",
    description: "Comprehensive infrastructural projects executed with unmatched professionalism and safety standards.",
    image: "/4.jpg",
  },
];

const servicesData = [
  {
    title: "Structural Engineering",
    description: "Expert design and analysis of steel and concrete structures ensuring maximum safety and durability.",
    image: "/1.jpg",
  },
  {
    title: "Turnkey EPC Solutions",
    description: "Comprehensive end-to-end project execution from initial concept through to final commissioning.",
    image: "/2.jpg",
  },
  {
    title: "Industrial Fabrication",
    description: "High-quality custom fabrication services utilizing state-of-the-art technology and processes.",
    image: "/3.jpg",
  },
  {
    title: "Project Management",
    description: "Dedicated supervision and management to deliver complex engineering projects on time and within budget.",
    image: "/4.jpg",
  },
  {
    title: "Maintenance & Upgrades",
    description: "Ongoing support, plant maintenance, and technological upgrades for existing industrial facilities.",
    image: "/industrial_mask.png",
  }
];

const sectorsData = [
  {
    title: "Process Chemicals",
    description: "Engineering resources and domain consultants at SES bring a diverse knowledge base with them from working with variety of process industries. This enables us to widen our reach across multiple markets, and still be your single source strategic partner for all your needs.",
    image: "/2.jpg",
  },
  {
    title: "Oil & Gas",
    description: "Providing robust structural engineering and management solutions for the oil and gas sector, ensuring safety and efficiency in complex environments.",
    image: "/1.jpg",
  },
  {
    title: "Pharmaceuticals",
    description: "Delivering state-of-the-art infrastructure for pharmaceutical and biotechnology facilities, adhering to strict industry standards and regulations.",
    image: "/3.jpg",
  },
  {
    title: "Heavy Manufacturing",
    description: "Specialized in large-scale industrial structural design, capable of supporting heavy machinery and continuous manufacturing processes.",
    image: "/4.jpg",
  },
  {
    title: "Commercial Infrastructure",
    description: "Designing modern, sustainable commercial buildings and complexes that redefine urban landscapes with a focus on aesthetics and functionality.",
    image: "/1.jpg",
  },
];

const visionData = [
  {
    time: "1 min",
    title: "Engineering Precision: Agrochemical Formulation Facility",
    image: "/1.jpg"
  },
  {
    time: "3 min",
    title: "Engineering Excellence For World Class Food & Beverage Facility",
    image: "/2.jpg"
  },
  {
    time: "3 min",
    title: "Transforming Innovation Into Reality: Engineering Excellence For A Fluorochemical Facility",
    image: "/3.jpg"
  },
  {
    time: "3 min",
    title: "Expanding Horizons: Engineering Excellence For A 600 TPD Chlor-Alkali Facility",
    image: "/4.jpg"
  },
  {
    time: "2 min",
    title: "Engineering Excellence For Bromine Recovery And Derivatives Facility",
    image: "/1.jpg"
  }
];

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  useGSAP(() => {
    // 1. Hero text parallax effect on scroll
    gsap.to(".hero-text-container", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 2. About Section - Complex Reveal
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
      }
    });
    aboutTl.from(".about-image-mask", {
      clipPath: "inset(100% 0 0 0)",
      duration: 1.5,
      ease: "power4.inOut"
    })
    .from(".about-image-mask img", {
      scale: 1.5,
      duration: 1.5,
      ease: "power4.inOut"
    }, "<")
    .from(".about-content > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=1");

    // 3. Services Section - Stagger with slight rotation
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 70%",
      },
      y: 100,
      rotationX: -15,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      transformPerspective: 1000
    });

    // 4. Stats Section - Scrubbed scale and opacity
    gsap.fromTo(".stats-bg", 
      { backgroundPosition: "50% 0%" },
      { 
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );

    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 70%",
      },
      scale: 0.5,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "elastic.out(1, 0.5)"
    });

    // 5. Sectors Section - Clip Path Reveal
    gsap.from(".sector-item", {
      scrollTrigger: {
        trigger: ".sectors-section",
        start: "top 60%",
      },
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      y: 50,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    });
  });

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />
      
      <section className="hero-section w-full h-[80vh] flex overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative flex h-full w-full items-center justify-center p-6 md:p-12 text-center text-white">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    className="object-cover absolute inset-0 -z-20" 
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50 -z-10" />
                  <div className="hero-text-container max-w-4xl space-y-6 md:space-y-8 z-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">{slide.title}</h2>
                    <p className="text-lg md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto">{slide.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots direction="vertical" className="text-white absolute right-8 top-1/2 -translate-y-1/2 gap-3" />
        </Carousel>
      </section>

      {/* About Us Section */}
      <section className="about-section w-full max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Masked Logo */}
        <div className="about-image-mask relative w-full aspect-square max-w-sm mx-auto lg:max-w-md flex items-center justify-center" style={{ clipPath: "inset(0 0 0 0)" }}>
          <div 
            className="w-full h-full drop-shadow-2xl"
            style={{
              WebkitMaskImage: "url('/file (1).svg')",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: "url('/file (1).svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <Image 
              src="/industrial_mask.png" 
              alt="Industrial Plant" 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="about-content flex flex-col space-y-6">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-tight leading-none">ATHARVA</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-wide uppercase">ENGINEERS PVT. LTD</h3>
          </div>
          
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              At Atharva Engineers, we specialize in delivering comprehensive Engineering, Procurement, and Construction (EPC) services for a wide range of industries. Our dedicated expert team ensures seamless project execution, from initial engineering design to procurement and construction to commissioning.
            </p>
            <p>
              With our commitment to innovation, efficiency, and sustainability, we deliver every project with high-quality results, on time and within budget. Partner with Atharva Engineers for reliable end-to-end EPC solutions that bring your vision to life with excellence and precision.
            </p>
          </div>

          <div>
            <button className="px-8 py-2.5 text-sm font-semibold tracking-wide text-[#0b1154] border border-[#0b1154] hover:bg-[#0b1154] hover:text-white transition-colors duration-300 rounded">
              ABOUT US
            </button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section relative w-full bg-[#f4f7fc] pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <GridPattern
          width={40}
          height={40}
          className={cn(
            "absolute inset-0 h-full w-full opacity-30 stroke-blue-900/10",
            "[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
          )}
        />
        <div className="relative w-full px-4 md:px-12 lg:px-16 mx-auto">
          <div className="mb-8 md:mb-10 text-center lg:text-left">
            <h2 className="text-sm font-bold text-blue-900 tracking-widest uppercase mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900">Our Services</h3>
            <div className="w-20 h-1 bg-blue-900 mt-6 mx-auto lg:mx-0"></div>
          </div>
        </div>

        <div className="relative w-full px-4 md:px-12 lg:px-16 mx-auto">
          <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 py-8">
                {servicesData.map((service, index) => (
                  <CarouselItem key={index} className="service-card pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                      {/* Card Image */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                        />
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>
                        
                        {/* Button */}
                        <div className="mt-auto">
                          <button className="text-sm font-semibold text-blue-900 hover:text-blue-700 flex items-center transition-colors group/btn">
                            LEARN MORE
                            <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="text-blue-900 gap-3 mt-8 justify-center" />
            </Carousel>
          </div>
      </section>

      {/* Parallax Stats Section */}
      <section 
        className="stats-section stats-bg relative w-full py-16 md:py-20 flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: 'url("/2.jpg")', backgroundSize: 'cover', backgroundPosition: '50% 0%' }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-zinc-900/80"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest mb-10 md:mb-12 uppercase">
            Engineering Excellence
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="stat-item flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-xs md:text-sm font-semibold tracking-widest text-blue-200 uppercase">Years Experience</div>
            </div>
            
            <div className="stat-item flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-xs md:text-sm font-semibold tracking-widest text-blue-200 uppercase">Engineers</div>
            </div>
            
            <div className="stat-item flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">350+</div>
              <div className="text-xs md:text-sm font-semibold tracking-widest text-blue-200 uppercase">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="sectors-section w-full bg-white py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 w-full">
          {/* Header */}
          <div className="relative mb-8 md:mb-12">
            {/* Watermark text */}
            <h2 className="absolute -top-6 md:-top-10 left-0 text-6xl md:text-8xl lg:text-9xl font-black text-slate-100 opacity-70 pointer-events-none select-none tracking-tighter">
              SECTORS
            </h2>
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6 md:pt-10">
              <h3 className="text-2xl md:text-3xl font-normal text-zinc-600 tracking-wider uppercase">
                Industries We Serve
              </h3>
              <button className="text-xs md:text-sm font-bold text-sky-500 hover:text-sky-700 tracking-wider uppercase transition-colors">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectorsData.map((sector, index) => (
              <div 
                key={index} 
                className={cn(
                  "sector-item relative h-[400px] rounded-xl overflow-hidden group cursor-pointer",
                  index === 0 ? "lg:col-span-2 lg:row-span-2 h-[400px] lg:h-[816px]" : ""
                )}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                <Image 
                  src={sector.image} 
                  alt={sector.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-end w-full">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">{sector.title}</h4>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-sm text-white/80 leading-relaxed pt-2">
                        {sector.description}
                      </p>
                      <button className="mt-4 flex items-center text-xs font-bold text-sky-400 uppercase tracking-widest hover:text-sky-300 transition-colors group/btn">
                        Read More
                        <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision to Reality Section */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-16 overflow-hidden relative">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          {/* Header Area */}
          <div className="max-w-[1400px] mx-auto px-4 w-full mb-12 relative">
            <div className="flex flex-col-reverse md:flex-row md:items-end justify-between">
              <div className="mt-8 md:mt-0 md:mb-2 z-10 relative">
                <CarouselCustomNav />
              </div>
              
              <div className="relative text-left md:text-right w-full md:w-auto">
                {/* Watermark text */}
                <h2 className="absolute top-1/2 -translate-y-1/2 left-0 md:left-auto md:right-0 text-5xl md:text-6xl lg:text-[110px] font-black text-slate-100 opacity-80 pointer-events-none select-none tracking-tighter whitespace-nowrap z-0">
                  FROM VISION TO REALITY
                </h2>
                <h3 className="relative z-10 text-xl md:text-3xl font-normal text-zinc-800 tracking-wide uppercase mt-6 md:mt-0">
                  Transforming Visions Into Reality
                </h3>
              </div>
            </div>
          </div>

          {/* Full-width Carousel Content */}
          <CarouselContent className="-ml-0">
            {visionData.map((item, index) => (
              <CarouselItem key={index} className="pl-0 basis-full md:basis-1/2 lg:basis-1/4 border-r border-white/20">
                <div className="relative w-full h-[400px] md:h-[500px] group cursor-pointer overflow-hidden bg-zinc-900">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 ease-out" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/10 rounded-full text-xs font-bold text-white tracking-widest">
                        {item.time}
                      </span>
                    </div>
                    <h4 className="text-white text-lg md:text-xl font-medium leading-snug transform group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32 bg-[#00122A] overflow-hidden">
        {/* Subtle Architectural Grid Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Ready to Engineer the Future?
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with us to transform your complex industrial challenges into state-of-the-art, high-performance facilities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold tracking-widest uppercase text-sm transition-colors rounded-sm shadow-lg shadow-sky-500/20">
              Contact Our Experts
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-bold tracking-widest uppercase text-sm transition-all rounded-sm hover:bg-white/5">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
