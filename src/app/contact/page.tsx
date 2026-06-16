"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavigationMenuDemo from "@/components/demo";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  ArrowRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image 
          src="/2.jpg" 
          alt="Contact Us" 
          fill 
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 h-1 bg-amber-500"></div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <div className="w-8 h-1 bg-amber-500"></div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            CONTACT <span className="text-amber-500">US</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            We're here to help you transform your engineering vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full flex-grow relative -mt-20 z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-5/12 bg-zinc-950 p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-8 tracking-tight">Contact Information</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-12">
                Whether you have a question about our services, need an engineering consultation, or want to discuss a new project, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Office Address</h4>
                    <p className="text-zinc-200 font-light leading-relaxed">
                      Atharva Engineers<br />
                      GIDC Industrial Estate,<br />
                      Vadodara, Gujarat, India 390010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Phone Number</h4>
                    <p className="text-zinc-200 font-light leading-relaxed">
                      +91 98765 43210<br />
                      +91 99887 76655
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Email Address</h4>
                    <p className="text-zinc-200 font-light leading-relaxed">
                      contact@atharvaengineers.com<br />
                      info@atharvaengineers.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                    <Clock className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Working Hours</h4>
                    <p className="text-zinc-200 font-light leading-relaxed">
                      Monday - Saturday<br />
                      09:00 AM - 06:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-14 bg-white">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-2 tracking-tight">Send us a Message</h2>
            <p className="text-zinc-500 font-light mb-8">Fill out the form below and we'll get back to you shortly.</p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">Message Sent!</h3>
                <p className="text-emerald-700 font-light mb-6">Thank you for reaching out. A member of our engineering team will contact you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-zinc-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-zinc-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-zinc-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-zinc-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-zinc-700">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-zinc-700"
                  >
                    <option value="">Select a subject...</option>
                    <option value="engineering">Engineering Consultation</option>
                    <option value="epc">Turnkey EPC Projects</option>
                    <option value="approvals">Regulatory Approvals</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-zinc-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={cn(
                    "w-full md:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
</main>
  );
}
