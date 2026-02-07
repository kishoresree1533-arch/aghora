import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  ArrowRight,
  Building2,
  Wind,
  Zap,
  Droplets,
  Flame,
  Shield,
  Filter,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";

import projectsHeroBg from "@/assets/projects-hero-new.jpg";
import marinaHeightsImg from "@/assets/marina-heights.jpg";
import hvacServiceImg from "@/assets/hvac-service.jpg";
import fpsServiceImg from "@/assets/fps-service.jpg";
import pheServiceImg from "@/assets/phe-service.jpg";
import elvServiceImg from "@/assets/elv-service.png";
import innovativeEngineeringImg from "@/assets/innovative-engineering.jpg";
import gulfIndustrialParkImg from "@/assets/gulf-industrial-park.jpg";
import skylineDataCenterImg from "@/assets/skyline-data-center.jpg";

gsap.registerPlugin(ScrollTrigger);

// Projects Data
const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "hvac", label: "HVAC", icon: Wind },
  { id: "electrical", label: "Electrical", icon: Zap },
  { id: "plumbing", label: "Plumbing", icon: Droplets },
  { id: "fire", label: "Fire Protection", icon: Flame },
  { id: "elv", label: "ELV", icon: Shield },
];

const projects = [
  {
    id: 1,
    title: "Marina Heights Tower",
    category: "hvac",
    type: "Commercial",
    location: "Dubai Marina, UAE",
    scope: "Complete HVAC design for 45-story mixed-use tower including VRF systems and district cooling integration.",
    image: marinaHeightsImg,
  },
  {
    id: 2,
    title: "Al Rashid Hospital Complex",
    category: "electrical",
    type: "Healthcare",
    location: "Abu Dhabi, UAE",
    scope: "Power distribution, emergency systems, and medical-grade electrical infrastructure for 300-bed hospital.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Palm Residences Phase 2",
    category: "plumbing",
    type: "Residential",
    location: "Palm Jumeirah, UAE",
    scope: "Sustainable plumbing design with greywater recycling for 150 luxury villas.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Gulf Industrial Park",
    category: "fire",
    type: "Industrial",
    location: "Jebel Ali, UAE",
    scope: "Comprehensive fire protection systems including high-hazard sprinkler design and FM-200 systems.",
    image: gulfIndustrialParkImg,
  },
  {
    id: 5,
    title: "Emirates Financial Center",
    category: "elv",
    type: "Commercial",
    location: "DIFC, Dubai",
    scope: "Integrated BMS, security systems, and smart building infrastructure for Class A office complex.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Sunset Mall Expansion",
    category: "hvac",
    type: "Retail",
    location: "Sharjah, UAE",
    scope: "Energy-efficient HVAC retrofit and expansion for 200,000 sqm retail development.",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 7,
    title: "Al Wasl University Campus",
    category: "electrical",
    type: "Educational",
    location: "Dubai, UAE",
    scope: "Complete electrical infrastructure for 5-building campus including renewable energy systems.",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 8,
    title: "Greenview Apartments",
    category: "plumbing",
    type: "Residential",
    location: "Al Reem Island, UAE",
    scope: "Water-efficient plumbing design with rainwater harvesting for 500-unit residential complex.",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 9,
    title: "Logistics Hub Warehouse",
    category: "fire",
    type: "Industrial",
    location: "Dubai South, UAE",
    scope: "High-piled storage fire protection design meeting NFPA standards for 50,000 sqm facility.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 10,
    title: "Skyline Data Center",
    category: "elv",
    type: "Technology",
    location: "Abu Dhabi, UAE",
    scope: "Tier III data center ELV systems, carrier-neutral connectivity, and advanced security infrastructure.",
    image: skylineDataCenterImg,
  },
  {
    id: 11,
    title: "Grand Terminal Expansion",
    category: "hvac",
    type: "Infrastructure",
    location: "Dubai International Airport",
    scope: "Specialized aircraft cooling systems and large-scale terminal air handling units.",
    image: "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 12,
    title: "Azure Beach Resort",
    category: "plumbing",
    type: "Hospitality",
    location: "Ras Al Khaimah, UAE",
    scope: "Premium plumbing systems for 250 keys, 5 swimming pools, and extensive spa facilities.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
  },
];

// Project Card
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const categoryIcon = categories.find((c) => c.id === project.category)?.icon || Building2;
  const Icon = categoryIcon;

  return (
    <div className="group project-card cursor-pointer">
      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-700 hover:-translate-y-2">
        {/* Image with zoom effect */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center">
            <Icon className="h-20 w-20 text-white/20" />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 absolute top-8 right-8">
            <Button size="icon" className="rounded-full bg-white text-primary hover:bg-secondary hover:text-white transition-colors duration-300 w-12 h-12 shadow-lg">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-3">
            <span className="inline-block px-3 py-1 bg-secondary text-primary font-bold text-xs rounded-full uppercase tracking-wider mb-2">
              {project.type}
            </span>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 transform translate-y-2 group-hover:translate-y-0">
              {project.scope}
            </p>
            <div className="flex items-center text-white/60 text-xs font-medium pt-2 border-t border-white/10 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
              <MapPin className="h-3 w-3 mr-1.5 text-secondary" />
              {project.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Topics / Expertise Section (Enhanced)
const projectTopics = [
  {
    title: "HVAC Engineering",
    description: "Specialized climate control and ventilation solutions for complex buildings.",
    image: hvacServiceImg,
    color: "bg-blue-600",
  },
  {
    title: "Electrical Systems",
    description: "Robust power distribution and lighting design for safety and efficiency.",
    image: innovativeEngineeringImg,
    color: "bg-yellow-500",
  },
  {
    title: "Plumbing Infrastructure",
    description: "Sustainable water management and high-performance drainage systems.",
    image: pheServiceImg,
    color: "bg-cyan-500",
  },
  {
    title: "Fire Protection",
    description: "Advanced safety systems designed to protect lives and complex assets.",
    image: fpsServiceImg,
    color: "bg-red-600",
  },
  {
    title: "ELV & Smart Systems",
    description: "Integrated building technologies for security, data, and automation.",
    image: elvServiceImg,
    color: "bg-purple-600",
  },
];

const ExpertiseSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".expertise-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold tracking-[0.2em] mb-4 uppercase border border-secondary/20">
            Project Topics
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 uppercase tracking-tight">
            Our Core <span className="text-secondary">Expertise</span>
          </h2>
          <p className="text-lg text-primary/60 leading-relaxed">
            We deliver world-class MEP engineering across key technical disciplines, ensuring every project is handled with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projectTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="group expertise-card relative h-[400px] rounded-[2rem] overflow-hidden cursor-default shadow-lg hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500"
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent p-6 flex flex-col justify-end transition-all duration-300 group-hover:via-primary/70">
                <div className={`w-10 h-1.5 ${topic.color} mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]`} />
                <h3 className="text-xl font-black text-white mb-2 leading-tight uppercase tracking-tight">{topic.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Grid with Sticky Filter
const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef(null);

  // Use a ref to store the filtered projects to compare
  const projectsRef = useRef(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useGSAP(() => {
    // Animate projects when category changes
    gsap.fromTo(".project-card",
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, clearProps: "all" }
    );
  }, { scope: projectsRef, dependencies: [activeCategory] });

  return (
    <section className="pb-24 bg-grey-50 min-h-screen">
      <div className="sticky top-[80px] z-30 py-6 bg-grey-50/80 backdrop-blur-lg mb-8 border-b border-primary/5">
        <div className="container mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                onClick={() => setActiveCategory(category.id)}
                className={`
                    rounded-full px-6 py-6 border transition-all duration-300 hover:-translate-y-1
                    ${activeCategory === category.id
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-white text-primary/70 border-primary/5 hover:border-primary/20 hover:text-primary hover:bg-white"
                  }
                `}
              >
                <category.icon className={`h-4 w-4 mr-2 ${activeCategory === category.id ? "text-secondary" : "text-primary/40"}`} />
                <span className="font-bold tracking-wide text-xs uppercase">{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6" ref={projectsRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <div className="bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-primary/40" />
            </div>
            <p className="text-xl font-bold text-primary">No projects found</p>
            <p className="text-primary/60">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Statistics Section
const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50M+", label: "Sq. Ft. Designed" },
  { value: "15+", label: "Countries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const StatisticsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".stat-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%"
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item text-center">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-2">
                {stat.value}
              </p>
              <div className="h-1 w-12 bg-secondary mx-auto mb-4 rounded-full" />
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/20">
              Let's Build Together
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Have a Project <br /><span className="text-secondary">in Mind?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how AGHORA can bring your vision to life with our proven MEP engineering expertise and innovative solutions.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="group relative bg-white text-primary font-black rounded-2xl px-12 h-16 text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Projects Page Component
const Projects = () => {
  return (
    <Layout>
      <PageHero
        badge="Showcasing Our Expertise"
        title="Projects That"
        subtitle="Define Excellence"
        description="Explore our portfolio of successfully completed MEP engineering projects across various sectors, delivering technical perfection in every structure."
        backgroundImage={projectsHeroBg}
        variant="clean"
      />

      <ExpertiseSection />
      <ProjectsGrid />
      <StatisticsSection />
      <CTASection />
    </Layout>
  );
};

export default Projects;
