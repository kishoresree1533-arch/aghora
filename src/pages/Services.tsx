import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wind,
  Zap,
  Droplets,
  Flame,
  Shield,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";

import servicesHeroBg from "@/assets/services-hero-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

// Services Data
const servicesData = [
  {
    id: "hvac",
    icon: Wind,
    title: "HVAC Systems Design",
    subtitle: "Climate Control Excellence",
    description:
      "Our HVAC engineering team designs innovative heating, ventilation, and air conditioning systems that optimize comfort, energy efficiency, and indoor air quality for all building types.",
    capabilities: [
      "Central air conditioning systems",
      "Variable Refrigerant Flow (VRF) systems",
      "Chilled water systems design",
      "District cooling integration",
      "Heat recovery systems",
      "Clean room and specialized HVAC",
      "Energy modeling and optimization",
      "LEED and sustainability consulting",
    ],
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Engineering",
    subtitle: "Power Your Vision",
    description:
      "We deliver comprehensive electrical engineering solutions that ensure reliable power distribution, safety, and efficiency for commercial, industrial, and residential projects.",
    capabilities: [
      "High and low voltage distribution",
      "Emergency power systems",
      "Lighting design and controls",
      "Power quality analysis",
      "Renewable energy integration",
      "Smart building systems",
      "Electrical load studies",
      "Arc flash analysis",
    ],
  },
  {
    id: "plumbing",
    icon: Droplets,
    title: "Plumbing & Drainage",
    subtitle: "Sustainable Water Solutions",
    description:
      "Our plumbing engineers design efficient water supply and drainage systems that conserve resources while meeting the highest standards of hygiene and performance.",
    capabilities: [
      "Domestic water supply systems",
      "Sanitary drainage design",
      "Stormwater management",
      "Water treatment systems",
      "Greywater recycling",
      "Rainwater harvesting",
      "Medical gas systems",
      "Swimming pool systems",
    ],
  },
  {
    id: "fire",
    icon: Flame,
    title: "Fire Protection Systems",
    subtitle: "Life Safety First",
    description:
      "We design comprehensive fire protection systems that safeguard lives and property through advanced detection, suppression, and evacuation solutions.",
    capabilities: [
      "Fire detection and alarm systems",
      "Sprinkler system design",
      "FM-200 and clean agent systems",
      "Fire pump systems",
      "Smoke management systems",
      "Fire risk assessment",
      "Emergency lighting design",
      "Evacuation system planning",
    ],
  },
  {
    id: "elv",
    icon: Shield,
    title: "ELV Systems",
    subtitle: "Smart Building Integration",
    description:
      "Our Extra Low Voltage systems expertise covers the full spectrum of building technology, creating intelligent environments that enhance security, communication, and comfort.",
    capabilities: [
      "Building Management Systems (BMS)",
      "Access control and security",
      "CCTV and surveillance",
      "Structured cabling",
      "Public address and AV systems",
      "Fire alarm system integration",
      "Home automation",
      "ICT infrastructure",
    ],
  },
];

// Main Services Page Component
const Services = () => {
  return (
    <Layout>
      <PageHero
        badge="Our Expertise"
        title="Comprehensive Services"
        subtitle="Integrated Solutions"
        description="End-to-end MEP engineering services tailored to modern regulatory standards and client requirements."
        backgroundImage={servicesHeroBg}
      />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};


const ServicesList = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.service-section');
    sections.forEach((section: any, i) => {
      gsap.from(section.querySelectorAll('.reveal-content'), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white space-y-32">
      {servicesData.map((service, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={service.id} className="service-section container mx-auto px-6 relative">
            {/* Connector Line */}
            {idx !== servicesData.length - 1 && (
              <div className={`hidden lg:block absolute left-1/2 top-full h-32 w-px bg-gradient-to-b from-secondary/50 to-transparent -translate-x-1/2 z-0`} />
            )}

            <div className={`flex flex-col lg:flex-row gap-16 items-center relative z-10 ${isEven ? "" : "lg:flex-row-reverse"}`}>
              {/* Info Column */}
              <div className="lg:w-1/2 space-y-8 reveal-content">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-lg shadow-secondary/5">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase border-b border-secondary/20 pb-1">
                    {service.subtitle}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">
                  {service.title}
                </h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full" />

                <p className="text-lg text-primary/70 leading-relaxed max-w-xl">
                  {service.description}
                </p>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="group relative bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary font-black rounded-2xl px-10 h-14 text-xs tracking-widest uppercase shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
                  >
                    <Link to="/contact" className="flex items-center gap-3">
                      <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      <span>Discuss Your Project</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Capabilities Card */}
              <div className="lg:w-1/2 reveal-content w-full">
                <div className="group relative bg-white border border-grey-100 rounded-[2.5rem] p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden hover:-translate-y-2">
                  {/* Glassmorphism Background Accent */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -z-10 group-hover:bg-secondary/10 transition-colors duration-500" />

                  <h3 className="text-2xl font-black text-primary mb-8 uppercase tracking-tight flex items-center gap-3">
                    <span className="w-2 h-8 bg-secondary rounded-full" />
                    Key Capabilities
                  </h3>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {service.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="text-primary/70 text-sm font-medium leading-relaxed group-hover/item:text-primary transition-colors">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

// Process Section
const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your project requirements and objectives.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team develops comprehensive engineering solutions.",
  },
  {
    number: "03",
    title: "Review",
    description: "We refine designs based on your feedback and requirements.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Complete documentation and ongoing support.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".process-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%"
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-primary relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-secondary/30">
            Workflow
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            How We <span className="text-secondary">Work</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            A streamlined, transparent approach to delivering exceptional engineering solutions on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="process-card group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10">
              <div className="text-7xl font-black text-white/5 group-hover:text-secondary/20 transition-colors duration-300 absolute -top-4 -right-4 select-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{step.description}</p>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
              )}
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
    <section className="pt-10 pb-10">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-muted/80 to-muted/40 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border border-border/50 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none max-w-4xl mx-auto">
              Need a Customized Solution?
            </h2>
            <p className="text-lg text-muted-foreground/50 max-w-xl mx-auto leading-relaxed">
              Every project is unique. Contact us to discuss your specific
              requirements and discover how AGHORA can help.
            </p>
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Request a Consultation</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Services;
