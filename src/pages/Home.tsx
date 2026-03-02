import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Wind,
  Zap,
  Droplets,
  Flame,
  Shield,
  Phone,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Clock,
  Search,
  FileText,
  MousePointer2,
  FileCheck,
  Eye,
  ClipboardCheck,
  ThumbsUp,
  Globe,
  Cpu,
  Layers
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import SplitText from "@/components/ui/SplitText";
import PageHero from "@/components/ui/PageHero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import homeHeroBg from "@/assets/home-hero-bg.jpg";
import innovativeEngineeringImg from "@/assets/innovative-engineering.jpg";
import aboutEngineeringOfficeImg from "@/assets/about-engineering-office.jpg";
import hvacServiceImg from "@/assets/hvac-service.jpg";
import hvacEngineeringNewImg from "@/assets/hvac-engineering-new.jpg";
import fpsServiceImg from "@/assets/fps-service.jpg";
import pheServiceImg from "@/assets/phe-service.jpg";
import elvServiceImg from "@/assets/elv-service.png";
import luxuryVillaImg from "@/assets/luxury-villa-expertise.jpg";
import hvacServiceLatestImg from "@/assets/hvac-engineering-latest.jpg";

import pheServiceLatestImg from "@/assets/phe-engineering-latest.jpg";

import fpsServiceNewImg from "@/assets/Fire Protection.jpg";
import elvServiceLatestImg from "@/assets/elv-engineering-latest.jpg";
import elvServiceNewImg from "@/assets/ELV & Smart Systems.jpg";

import engineeringCollageImg from "@/assets/engineering-collage.jpg";
import engineerAtWorkImg from "@/assets/engineer-at-work.jpg";
import landmarksPrecisionImg from "@/assets/landmarks-precision.jpg";
import aboutAghoraLatestImg from "@/assets/about-aghora-latest.jpg";





// --- HERO SECTION ---
const HeroSection = () => {
  return (
    <PageHero
      isHome={true}
      badge="Excellence in Engineering"
      title="Building Your"
      subtitle="Vision"
      description="From your dreams to reality, we deliver premium MEP engineering solutions with precision, quality, and integrity."
      backgroundImage={homeHeroBg}
      buttons={[
        { label: "View Projects", link: "/projects" },
        { label: "Get a Quote", link: "/contact", variant: "outline" }
      ]}
    />
  );
};

// --- LOGO STRIP ---
const TrustedBySection = () => {
  const clients = [
    "PRANAV HOSPITAL",
    "SUBSTATION DUBAI",
    "ADMIN OFFICE DUBAI",
    "ADNOC OIL PROJECTS",
    "APOLLO HOSPITAL",
    "RESIDENTIAL PROJECTS",
    "HOTELS MADURAI",
    "HCL IT OFFICE",
    "COMMERCIAL BUILDINGS",
    "APARTMENTS ERODE"
  ];

  return (
    <div className="pt-12 pb-6 bg-white border-b border-grey-100 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 mb-8">
        <p className="text-center text-[0.65rem] font-bold tracking-[0.4em] text-primary/40 uppercase">
          Trusted by Families & Businesses Across the Region
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee gap-12 md:gap-24 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500 py-4">
          {/* First Set of Names */}
          {clients.map((client, idx) => (
            <div key={`set1-${idx}`} className="text-xl font-black italic tracking-tighter whitespace-nowrap px-4">
              {client}
            </div>
          ))}
          {/* Duplicated Set for Seamless Loop */}
          {clients.map((client, idx) => (
            <div key={`set2-${idx}`} className="text-xl font-black italic tracking-tighter whitespace-nowrap px-4">
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- PREMIUM HIGHLIGHT + STATS ---
const PremiumStatsSection = () => {
  const containerRef = useRef(null);
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Projects" },
    { value: "12+", label: "Expert Team" },
    { value: "100%", label: "Quality Assurance" },
  ];

  useGSAP(() => {
    // Stats animation
    gsap.from(".stat-item", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Premium popup animation for the image
    gsap.from(".premium-popup", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: ".premium-popup",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-16 pb-32 bg-white overflow-hidden reveal-item">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative group premium-popup">
              <img
                src={landmarksPrecisionImg}
                alt="Innovative Engineering"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors" />

              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 bg-secondary p-8 rounded-[2rem] shadow-2xl shadow-secondary/40 text-primary animate-float">
                <p className="text-5xl font-black tracking-tighter leading-none">15+</p>
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mt-2">Years Experience</p>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-secondary/30 -z-10 rounded-tl-[3rem]" />
          </div>

          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block">
                Engineering Excellence
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-[0.95]">
                Crafting Landmarks <br /> <span className="text-secondary/50">With Precision</span>
              </h2>
              <p className="text-lg text-primary/60 leading-relaxed font-medium">
                Our commitment to engineering perfection transforms complex blueprints into
                sustainable realities. We ensure every bolt, duct, and circuit is optimized
                for performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-item space-y-2">
                  <p className="text-5xl font-black text-primary tracking-tighter">{stat.value}</p>
                  <p className="text-[0.7rem] font-bold tracking-[0.2em] text-primary/40 uppercase">{stat.label}</p>
                  <div className="w-12 h-1 bg-secondary rounded-full" />
                </div>
              ))}
            </div>

            <Button
              asChild
              className="group relative bg-gradient-to-r from-primary via-primary to-primary/90 text-white font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <Link to="/about" className="flex items-center gap-3">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ABOUT SECTION ---
const AboutSection = () => {
  const containerRef = useRef(null);
  const highlights = [
    { icon: Award, title: "Industry Expertise" },
    { icon: Users, title: "Expert Team" },
    { icon: ClipboardCheck, title: "Quality Assurance" },
    { icon: Clock, title: "On-Time Delivery" },
  ];

  useGSAP(() => {
    gsap.from(".about-popup", {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-popup",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-10 pb-10 bg-grey-50 overflow-hidden reveal-item">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-stretch">
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
                AGHORA MEP <br /> <span className="text-secondary">Engineering Consultants</span>
              </h2>
              <div className="w-20 h-1 bg-secondary" />
            </div>

            <p className="text-lg text-primary/70 leading-relaxed font-medium mb-6">
              We are dedicated to delivering innovative, practical, and sustainable MEP (Mechanical, Electrical & Plumbing) design solutions for residential, commercial, and industrial projects.
            </p>
            <p className="text-lg text-primary/70 leading-relaxed">
              Our team blends technical excellence with field experience to ensure every project runs efficiently from conceptual planning through execution and commissioning.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-secondary transition-colors">
                    <item.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
            <div className="relative about-popup w-full">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white active-image-mask aspect-[4/5] md:aspect-square w-full">
                <img
                  src={aboutAghoraLatestImg}
                  alt="MEP Engineering Office"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 -z-10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SERVICES SECTION ---
const services = [
  {
    icon: Wind,
    title: "HVAC Engineering",
    id: "hvac",
    description: "Heating Ventilation and Air Conditioning. Comprehensive design and sizing for optimal thermal comfort.",
    image: hvacServiceLatestImg

  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    id: "electrical",
    description: "Power Distribution and Panel Board Design for robust industrial and commercial infrastructure.",
    image: innovativeEngineeringImg
  },
  {
    icon: Droplets,
    title: "PHE Engineering",
    id: "plumbing",
    description: "Public Health Engineering. Sustainable plumbing, drainage, and water distribution systems.",
    image: pheServiceLatestImg

  },
  {
    icon: Flame,
    title: "FPS Engineering",
    id: "fire",
    description: "Fire Protection Systems. Sprinklers, hydrants, and advanced alarm systems for safety.",
    image: fpsServiceNewImg
  },
  {
    icon: Shield,
    title: "ELV Engineering",
    id: "elv",
    description: "Extra Low Voltage. Integrated Security, CCTV, PA, and Access Control systems.",
    image: elvServiceLatestImg

  },
  {
    icon: Cpu,
    title: "Smart Automation",
    id: "smart",
    description: "High-end residential MEP and building automation systems for modern luxury living.",
    image: luxuryVillaImg
  },
];


const ServicesSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Ensure accurate ScrollTrigger calculations after render
    ScrollTrigger.refresh();

    gsap.from(".service-card", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      clearProps: "all", // Clear styles after animation to prevent stacking context issues
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Trigger earlier
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-10 pb-12 bg-white overflow-hidden reveal-item">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
            Delivering Engineering <span className="text-secondary">Excellence</span>
          </h2>
          <p className="text-lg text-primary/50 font-medium">
            At our firm, engineering excellence is more than a promise, it is the foundation of every MEP
            project we deliver. We provide specialized Mechanical, Electrical, and Plumbing (MEP)
            engineering services designed to enhance performance, safety, and long-term sustainability in
            modern buildings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card group relative h-[500px] rounded-[3rem] overflow-hidden bg-white shadow-lg border border-grey-100 transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 hover:border-secondary/30"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="eager" // Force immediate loading
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              </div>

              <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-secondary transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>

                <div className="text-secondary/80 font-black text-4xl mb-4">0{idx + 1}</div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-secondary mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {service.description}
                </p>

                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-secondary font-black uppercase text-[0.65rem] tracking-[0.4em] transition-all group-hover:tracking-[0.5em]"
                >
                  Explore Service
                  <ArrowRight className="ml-4 h-5 w-5 transform group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- STRATEGIC CAPABILITIES SECTION ---
const StrategicCapabilitiesSection = () => {
  const containerRef = useRef(null);

  const points = [
    {
      title: "Global Compliance",
      desc: "Engineering designs strictly adhering to ASHRAE, ISHRAE, SMACNA, and NBC standards for international quality assurance.",
      icon: Globe,
      stats: "7+ Standards"
    },
    {
      title: "Advanced Simulation",
      desc: "Strategic utilization of HAP v5.11 and DIALux for high-precision thermal and lighting analytics.",
      icon: Cpu,
      stats: "Elite Tools"
    },
    {
      title: "Cross-Sector Mastery",
      desc: "Delivering complex infrastructure for Oil & Gas (ADNOC), Healthcare (Apollo), and Enterprise IT Sectors (HCL).",
      icon: Layers,
      stats: "15+ Sectors"
    }
  ];

  useGSAP(() => {
    gsap.from(".cap-item", {
      x: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".cap-text", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-12 pb-12 bg-primary relative overflow-hidden reveal-item">
      {/* Visual background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8 cap-text">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[0.6rem]">Technical Superiority</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase">
              Strategic Capabilities <br /> <span className="text-secondary/50">in MEP Engineering</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              With over 12 years of hands-on industry experience, we bring strategic insight and technical
              precision to every MEP engineering project. Our team integrates global engineering
              standards, advanced technologies, and practical site expertise to deliver infrastructure
              solutions built for long-term performance, safety, and efficiency.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {["Mechanical", "Electrical", "Plumbing", "Fire Protection"].map((tag) => (
                <div key={tag} className="px-6 py-3 border border-white/10 rounded-full text-white/40 text-[0.6rem] font-bold tracking-widest uppercase hover:border-secondary/40 hover:text-secondary transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            {points.map((point, idx) => (
              <div key={idx} className="cap-item group p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-500">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <point.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">{point.title}</h3>
                      <span className="text-[0.6rem] font-bold text-secondary tracking-widest uppercase bg-secondary/10 px-3 py-1 rounded-full">{point.stats}</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- TECHNICAL MASTERY SECTION ---
const TechnicalMasterySection = () => {
  const containerRef = useRef(null);

  const excellenceItems = [
    {
      label: "Industry Benchmarks",
      title: "Global Standards",
      desc: "Engineering excellence verified against ASHRAE, ISHRAE, NBC, SMACNA, IPC, UPC, and IS protocols.",
      icon: Shield
    },
    {
      label: "Digital Precision",
      title: "Advanced Software",
      desc: "Leveraging AutoCAD, HAP v5.11, and DIALux for high-fidelity technical schematics and simulations.",
      icon: Cpu
    }
  ];

  const verticals = [
    { name: "HVAC", sub: "District Cooling & Life Safety" },
    { name: "ELECTRICAL", sub: "HT/LT & Power Distribution" },
    { name: "PHE", sub: "Sustainable Water & Drainage" },
    { name: "FPS", sub: "Fire Suppression Mastery" },
    { name: "ELV", sub: "Integrated Security & PA" }
  ];

  useGSAP(() => {
    gsap.from(".mastery-card", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-12 pb-12 bg-white overflow-hidden reveal-item">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block">Our Backbone</span>
              <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
                Technical <br /> <span className="text-secondary">Mastery</span>
              </h2>
              <div className="w-20 h-1 bg-secondary" />
            </div>

            <div className="space-y-8">
              {excellenceItems.map((item, idx) => (
                <div key={idx} className="mastery-card flex gap-8 items-start">
                  <div className="w-14 h-14 bg-grey-50 rounded-2xl flex items-center justify-center shrink-0 border border-grey-100">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[0.6rem] font-bold text-secondary tracking-widest uppercase">{item.label}</span>
                    <h3 className="text-xl font-black text-primary uppercase tracking-tight">{item.title}</h3>
                    <p className="text-primary/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group/vert">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover/vert:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-12">Core Verticals</h3>
              <div className="grid sm:grid-cols-2 gap-y-10 gap-x-12">
                {verticals.map((v, idx) => (
                  <div key={idx} className="mastery-card space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <h4 className="text-lg font-black text-white uppercase tracking-tight">{v.name}</h4>
                    </div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-wider pl-6">{v.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract background text */}
            <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/5 pointer-events-none select-none uppercase tracking-tighter leading-none">
              MEP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PROCESS SECTION ---
const ProcessSection = () => {
  const steps = [
    { icon: Search, title: "Site Visit", desc: "Due Diligence & Estimation" },
    { icon: FileText, title: "Design Report", desc: "Basic Technical Documentation" },
    { icon: MousePointer2, title: "Concept Design", desc: "Preliminary Architecture" },
    { icon: FileCheck, title: "Approvals", desc: "Shop Drawing & TDS" },
    { icon: Eye, title: "Witnessing", desc: "Testing & Commissioning" },
    { icon: ClipboardCheck, title: "Site Visits", desc: "Snag report & Audit" },
    { icon: ThumbsUp, title: "Handover", desc: "Feedback & Transfer" },
  ];

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".process-step", {
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-10 pb-10 bg-grey-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6 block">Workflow</span>
          <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter">Our Seamless <span className="text-secondary">Process</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step group text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:bg-primary transition-all duration-500 border-4 border-transparent group-hover:border-secondary">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-1/2 w-full h-[1px] bg-primary/10 -z-10" />
                )}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary font-black text-[0.65rem] border-4 border-grey-50">
                  0{idx + 1}
                </div>
              </div>
              <div>
                <h4 className="font-black text-primary uppercase text-[0.7rem] tracking-widest mb-2">{step.title}</h4>
                <p className="text-[0.6rem] text-primary/40 font-bold uppercase leading-tight px-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA SECTION ---
const CTASection = () => {
  return (
    <section className="pt-10 pb-10 bg-white reveal-item">
      <div className="section-container">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-10 grayscale hover:opacity-20 transition-opacity">
            <img src={innovativeEngineeringImg} alt="Background" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-4xl mx-auto">
              Ready to Build Your <br /> <span className="text-secondary">Masterpiece?</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
              Connect with our experts today and start your journey towards
              engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group relative bg-white/5 border-2 border-white/30 text-white font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase backdrop-blur-md hover:bg-white hover:text-primary hover:border-white shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                <Link to="/projects" className="flex items-center gap-3">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CUSTOM ICON ---
const TargetIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// --- MAIN HOME PAGE COMPONENT ---
const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <PremiumStatsSection />
      <AboutSection />
      <ServicesSection />
      <StrategicCapabilitiesSection />
      <TechnicalMasterySection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
