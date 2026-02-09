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
import { getData, initialProjects, initialServices, syncProjects, syncServices } from "@/lib/data-store";
import * as LucideIcons from "lucide-react";

import projectsHeroBg from "@/assets/projects-hero-new.jpg";
import innovativeEngineeringImg from "@/assets/innovative-engineering.jpg";
import hvacExpertiseImg from "@/assets/hvac-engineering-latest.jpg";
import plumbingExpertiseImg from "@/assets/Plumbing Infrastructure.webp";
import fpsExpertiseImg from "@/assets/Fire Protection.jpg";

gsap.registerPlugin(ScrollTrigger);

// Helper to get icon component from name
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || LucideIcons.Building2;
};

// Project Card Component
const ProjectCard = ({ project, services }: { project: any, services: any[] }) => {
  const service = services.find(s => s.id === project.category);
  const Icon = service ? getIcon(service.icon) : LucideIcons.Building2;

  return (
    <div className="group project-card cursor-pointer">
      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-700 hover:-translate-y-2">
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

        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

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

const ExpertiseSection = () => {
  const containerRef = useRef(null);

  const projectTopics = [
    {
      title: "HVAC Engineering",
      description: "Specialized climate control and ventilation solutions for complex buildings.",
      image: hvacExpertiseImg,
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
      image: plumbingExpertiseImg,
      color: "bg-cyan-500",
    },
    {
      title: "Fire Protection",
      description: "Advanced safety systems designed to protect lives and complex assets.",
      image: fpsExpertiseImg,
      color: "bg-red-600",
    }
  ];

  useGSAP(() => {
    gsap.from(".expertise-card", {
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold tracking-[0.2em] mb-4 uppercase border border-secondary/20">
            Project Topics
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 uppercase tracking-tight leading-tight">
            Our Core <span className="text-secondary">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="group expertise-card relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-700 border border-grey-100/50"
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
                <div className={`w-16 h-2 ${topic.color} mb-6 rounded-full`} />
                <h3 className="text-2xl font-black text-white mb-4 leading-tight uppercase">{topic.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [dynamicCategories, setDynamicCategories] = useState<any[]>([]);
  const projectsRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const projectsData = await syncProjects();
      const servicesData = await syncServices();
      setProjects(projectsData);
      setServices(servicesData);

      const cats = [
        { id: "all", label: "All Projects", icon: LucideIcons.Building2 },
        ...servicesData.map((s: any) => ({
          id: s.id,
          label: s.title.split(' ')[0],
          icon: getIcon(s.icon)
        }))
      ];
      setDynamicCategories(cats);
    };
    loadData();
  }, []);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useGSAP(() => {
    gsap.fromTo(".project-card",
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, clearProps: "all" }
    );
  }, { scope: projectsRef, dependencies: [activeCategory, projects] });

  return (
    <section className="pb-24 bg-grey-50 min-h-screen">
      <div className="sticky top-[80px] z-30 py-6 bg-grey-50/80 backdrop-blur-lg mb-8 border-b border-primary/5">
        <div className="container mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 min-w-max">
            {dynamicCategories.map((category) => (
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
            <ProjectCard key={project.id} project={project} services={services} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <Building2 className="w-20 h-20 mx-auto mb-4 text-primary/20" />
            <h3 className="text-xl font-bold text-primary italic">No projects found in this category.</h3>
          </div>
        )}
      </div>
    </section>
  );
};

const StatisticsSection = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Projects Completed", val: "250+" },
            { label: "Key Clients", val: "85+" },
            { label: "Technical Experts", val: "45+" },
            { label: "Years Experience", val: "15+" },
          ].map((stat, i) => (
            <div key={i} className="space-y-4">
              <div className="text-5xl md:text-6xl font-black text-secondary tracking-tighter">{stat.val}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Have a Project <br /><span className="text-secondary">in Mind?</span>
          </h2>
          <Button asChild size="lg" className="bg-white text-primary font-black rounded-2xl px-12 h-16 uppercase shadow-xl hover:scale-105 transition-all">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <Layout>
      <PageHero
        badge="Showcasing Our Expertise"
        title="Projects That"
        subtitle="Define Excellence"
        description="Explore our portfolio of successfully completed MEP engineering projects across various sectors."
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
