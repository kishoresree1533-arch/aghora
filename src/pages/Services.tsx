import { useRef, useState, useEffect } from "react";
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
  Briefcase
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import { getData, initialServices, syncServices } from "@/lib/data-store";
import serviceHeroBg from "@/assets/service.jpg";


gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  Wind, Zap, Droplets, Flame, Shield, Briefcase
};

const ServicesList = () => {
  const [servicesData, setServicesData] = useState<any[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await syncServices();
      setServicesData(data);
    };
    loadData();
  }, []);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.service-section');
    sections.forEach((section: any) => {
      gsap.from(section.querySelectorAll('.reveal-content'), {
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });
    });
  }, { scope: containerRef, dependencies: [servicesData] });

  return (
    <section ref={containerRef} className="pb-10 pt-10 bg-grey-50 space-y-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>
      {servicesData.map((service, idx) => {
        const isEven = idx % 2 === 0;
        const Icon = iconMap[service.icon] || Briefcase;

        return (
          <div key={service.id} className="service-section container mx-auto px-6 relative">
            {idx !== servicesData.length - 1 && (
              <div className={`hidden lg:block absolute left-1/2 top-full h-32 w-px bg-gradient-to-b from-secondary/50 to-transparent -translate-x-1/2 z-0`} />
            )}

            <div className={`flex flex-col lg:flex-row gap-16 items-center relative z-10 ${isEven ? "" : "lg:flex-row-reverse"}`}>
              <div className="lg:w-1/2 space-y-8 reveal-content">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-lg shadow-secondary/5">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase border-b border-secondary/20 pb-1">
                    {service.subtitle || "Engineering Excellence"}
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
                  <Button asChild size="lg" className="bg-primary text-white font-black rounded-2xl px-10 h-14 uppercase shadow-xl hover:-translate-y-1 transition-all">
                    <Link to="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 reveal-content w-full">
                <div className="group relative bg-white border border-grey-100 rounded-[2.5rem] p-10 shadow-2xl hover:shadow-secondary/20 transition-all duration-700 overflow-hidden hover:-translate-y-2">

                  <h3 className="text-2xl font-black text-primary mb-8 uppercase tracking-tight flex items-center gap-3">
                    <span className="w-2 h-8 bg-secondary rounded-full" />
                    Key Capabilities
                  </h3>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {(service.capabilities || ["Consultancy", "Design", "Implementation", "Maintenance"]).map((capability: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-primary/70 text-base font-bold leading-relaxed">{capability}</span>
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

const ProcessSection = () => {
  const processSteps = [
    { number: "01", title: "Consultation", description: "In-depth discovery to understand your vision." },
    { number: "02", title: "Site Audit", description: "Comprehensive site evaluation." },
    { number: "03", title: "Design", description: "Developing precise engineering blueprints." },
    { number: "04", title: "Testing", description: "Rigorous quality assurance." },
    { number: "05", title: "Handover", description: "Smooth hand-over with documentation." },
  ];

  return (
    <section className="py-24 bg-primary relative text-white">
      <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-20 uppercase tracking-tighter">How We <span className="text-secondary">Work</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <div key={step.number} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center">
              <span className="text-3xl font-black text-secondary mb-4">{step.number}</span>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <Layout>
      <PageHero
        badge="Our Expertise"
        title="Comprehensive Services"
        subtitle="Integrated Solutions"
        description="End-to-end MEP engineering services tailored to modern regulatory standards."
        backgroundImage={serviceHeroBg}
        variant="clean"
      />
      <ServicesList />
      <ProcessSection />
    </Layout>
  );
};

export default Services;
