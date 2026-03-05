import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Award,
  Shield,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Zap,
  Droplets,
  Wind,
  Clock
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import aboutHeroBg from "@/assets/about-hero-bg.png";
import engineerMeeting from "@/assets/engineer-meeting.png";
import whyChooseUsBg from "@/assets/why-choose-us-new.jpg";

gsap.registerPlugin(ScrollTrigger);

// Reusable Service Card Component for About Page
const ServiceCard = ({ service, index }: { service: any, index: number }) => (
  <div
    className="group relative h-[280px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 
        hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 overflow-hidden flex flex-col justify-between"
  >
    {/* Background Gradient Blob */}
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full blur-[50px] group-hover:bg-secondary/30 transition-all duration-500" />

    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
        <service.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 leading-none">
        {service.title}
      </h3>
      <div className="w-12 h-1 bg-secondary/50 rounded-full mb-4 group-hover:w-20 transition-all duration-500" />
    </div>

    <div className="relative z-10">
      <p className="text-white/60 text-sm font-medium leading-relaxed group-hover:text-white/90 transition-colors">
        {service.desc}
      </p>
    </div>
  </div>
);

// Main About Page Component
const About = () => {
  useEffect(() => {
    document.title = "About Aghora Engineering Consultant | Trusted MEP Consultant";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Aghora Engineering Consultant, your trusted MEP engineering partner in Coimbatore. Discover our expertise in HVAC, Electrical, PHE, Fire Protection & ELV systems, and our commitment to innovation, quality, and sustainable engineering solutions.");
    }
  }, []);

  return (
    <Layout>
      <PageHero
        badge="About Aghora"
        title="Engineering"
        subtitle="Excellence Since 2015"
        description={
          <>
            MEP engineering consultancy committed to delivering integrated, high-performance building solutions. <br />
            Over the years, we have built a strong reputation for providing reliable Mechanical, Electrical, Plumbing, <br />
            and Fire Protection engineering services to modern infrastructure demands.
          </>
        }
        backgroundImage={aboutHeroBg}
        variant="clean"
      />
      <CompanyOverviewSection />
      <CoreServicesSection />
      <ExperienceIndustriesSection />
      <PhilosophySection />
      <WhyChooseUsSection />
      <CTASection />
    </Layout>
  );
};

// Company Overview Section with Timeline Style
const CompanyOverviewSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".reveal-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden reveal-item">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-grey-50 to-transparent -z-10" />
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          <div className="lg:w-1/2 flex flex-col justify-center space-y-8 lg:sticky lg:top-32">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-secondary/20">
                Company Overview
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-tight mb-6 mt-2 reveal-text">
                MEP Engineering <br /><span className="text-secondary">Excellence</span>
              </h2>
              <div className="w-24 h-1.5 bg-secondary rounded-full reveal-text" />
            </div>

            <p className="text-xl text-primary/70 leading-relaxed font-medium reveal-text">
              Aghora Engineering MEP Consultants is a professionally driven MEP engineering
              consultancy based in Coimbatore, delivering integrated Mechanical, Electrical, Plumbing, Fire
              Protection, and ELV engineering solutions for modern infrastructure projects.
            </p>
            <p className="text-lg text-primary/70 leading-relaxed reveal-text">
              Since our establishment on <strong className="text-primary">May 28, 2015</strong>, we have built a reputation for providing
              high-performance, energy-efficient, and code-compliant MEP design services across residential,
              commercial, and industrial developments.
            </p>
            <p className="text-lg text-primary/60 leading-relaxed reveal-text">
              Our expertise lies in developing fully coordinated building systems that prioritize quality, safety,
              operational efficiency, and long-term sustainability. By combining technical precision with
              practical site experience, we ensure every project is engineered to meet national and
              international standards.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center space-y-8 mt-10 lg:mt-0">
            {/* Timeline Item 1 */}
            <div className="relative pl-12 border-l-2 border-secondary/20 hover:border-secondary transition-colors duration-500 group reveal-text">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-secondary group-hover:scale-125 transition-transform duration-300" />
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 border border-grey-100 group-hover:border-secondary/30">
                <span className="text-secondary font-black text-lg mb-2 block">2015 - The Beginning</span>
                <h3 className="text-2xl font-bold text-primary mb-3">Foundation at GN Mills</h3>
                <p className="text-primary/60 leading-relaxed">
                  Aghora Engineering began its journey with a clear commitment to excellence, establishing strong roots in Coimbatore.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-12 border-l-2 border-secondary/20 hover:border-secondary transition-colors duration-500 group reveal-text">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-secondary group-hover:scale-125 transition-transform duration-300" />
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 border border-grey-100 group-hover:border-secondary/30">
                <span className="text-secondary font-black text-lg mb-2 block">2020 - Expansion</span>
                <h3 className="text-2xl font-bold text-primary mb-3">Growth to Gandhipuram</h3>
                <p className="text-primary/60 leading-relaxed">
                  Expanded operations to Gandhipuram, scaling capabilities to serve a wider range of technically complex projects.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative aspect-square lg:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group mt-8 reveal-text w-full">
              <img src={engineerMeeting} alt="Engineering Team" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-lg">Building the Future</p>
                <p className="text-white/80 text-sm">One project at a time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Core Services Section with "Holographic" Cards
const CoreServicesSection = () => {
  const containerRef = useRef(null);
  const services = [
    { title: "Mechanical", icon: Wind, desc: "HVAC & Thermal Systems" },
    { title: "Electrical", icon: Zap, desc: "Power & Lighting" },
    { title: "Plumbing", icon: Droplets, desc: "Water & Drainage" },
    { title: "Fire Protection", icon: Shield, desc: "Safety Systems" },
    { title: "ELV Systems", icon: CheckCircle2, desc: "Data & Security" }
  ];

  useGSAP(() => {
    gsap.from(".service-card", {
      y: 60,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    })
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-primary relative overflow-hidden reveal-item">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block mb-4">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Core <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-white/50 font-medium max-w-3xl mx-auto leading-relaxed">
            At our firm, engineering excellence is more than a promise, it is the foundation of every MEP
            project we deliver. We provide specialized Mechanical, Electrical, and Plumbing (MEP)
            engineering services designed to enhance performance, safety, and long-term sustainability in
            modern buildings.
          </p>
        </div>

        {/* Single Line 5-Column Grid Layout */}
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-stretch">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience & Industries Section - Interactive Grid
const ExperienceIndustriesSection = () => {
  const sectors = [
    {
      title: "Healthcare Facilities",
      desc: "Specialized HVAC, electrical, and life safety systems for hospitals and medical centers."
    },
    {
      title: "IT & Commercial Buildings",
      desc: "Energy-efficient power distribution, cooling systems, and integrated ELV solutions."
    },
    {
      title: "Educational Institutions",
      desc: "Safe and sustainable infrastructure for schools and universities."
    },
    {
      title: "Hospitality Projects",
      desc: "Performance-driven MEP systems for hotels and luxury developments."
    },
    {
      title: "Residential Developments",
      desc: "Optimized plumbing, HVAC, and electrical systems for modern living spaces."
    },
    {
      title: "Industrial Infrastructure",
      desc: "Substation design, administrative facilities, and large-scale mechanical and electrical systems."
    }
  ];

  return (
    <section className="py-24 bg-grey-50 relative overflow-hidden reveal-item">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block mb-6">Experience</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-8 leading-none">
              Trusted by <br /><span className="text-secondary">Industry Leaders</span>
            </h2>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-primary/5 mb-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-[4rem] transition-all duration-500 group-hover:scale-150" />
              <h3 className="text-xl font-bold text-primary mb-2">Global Reach</h3>
              <p className="text-primary/70 leading-relaxed mb-4">
                Part of prestigious international projects including <strong className="text-primary font-bold decoration-secondary underline decoration-2 underline-offset-4">ADNOC</strong>.
              </p>
              <p className="text-sm text-primary/50">Delivering engineering excellence across South India and the Middle East.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['NBC', 'IS', 'ASHRAE', 'ISHRAE', 'SMACNA'].map(std => (
                <span key={std} className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-bold text-primary/60 uppercase tracking-wider">
                  {std}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
              {sectors.map((sector, idx) => (
                <div key={idx} className="group bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-secondary/20 flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-grey-50 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary/30 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-primary uppercase tracking-tight text-sm opacity-80 group-hover:opacity-100">{sector.title}</h4>
                  </div>
                  <p className="text-xs text-primary/60 leading-relaxed font-medium pl-14">
                    {sector.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-secondary/10 rounded-[2rem] p-8 flex items-center justify-between border border-secondary/20">
              <div>
                <p className="text-primary font-bold text-lg">Energy Auditing</p>
                <p className="text-primary/60 text-sm">Optimizing efficiency & reliability</p>
              </div>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-xl">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Philosophy Section (Vision & Mission) - Kept mostly same but ensures alignment
const PhilosophySection = () => {
  const philosophies = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the most trusted and innovative MEP engineering consultancy, recognized for delivering sustainable Mechanical, Electrical, Plumbing and Fire Protection that meet global engineering standards. We strive to shape future-ready infrastructure that balances performance, efficiency, and environmental responsibility."
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver excellence in every MEP engineering project through teamwork, advanced technical expertise, and a client-focused approach. We are committed to designing integrated building systems that enhance safety, optimize energy efficiency, and ensure long-term operational performance."
    },
    {
      icon: Lightbulb,
      title: "Our Philosophy",
      description: "We believe engineering goes beyond designing systems, it is about solving complex infrastructure challenges with precision and innovation. Our philosophy centers on creating efficient, sustainable, and safe environments where businesses operate seamlessly and communities thrive."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden reveal-item">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block mb-4">Foundation</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
            Built on <span className="text-secondary">Purpose</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {philosophies.map((item, idx) => (
            <div key={idx} className="group p-10 bg-grey-50 rounded-[2.5rem] border border-transparent hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-secondary transition-colors">
                <item.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-primary/60 leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section (Replaces LedByExperience)
const WhyChooseUsSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // Premium "3D Spring Pop" for Image
    tl.fromTo(".why-choose-visual",
      {
        scale: 0.8,
        rotationY: 25,
        y: 80,
        opacity: 0,
        filter: "blur(20px)",
        perspective: 1000
      },
      {
        scale: 1,
        rotationY: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "elastic.out(1, 0.75)"
      }
    )
      // Content Sections: Elastic "Pop" Effect
      .from(".why-choose-content > div", {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=1.0");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden relative reveal-item">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          <div className="lg:w-1/2 relative group why-choose-visual flex flex-col justify-center">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white aspect-[4/5] md:aspect-square w-full bg-grey-50 transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
              <img src={whyChooseUsBg} alt="Why Choose Us" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-md p-10 text-white border-t border-white/10 transition-transform duration-500 group-hover:translate-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-6xl font-black text-secondary mb-1">12+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">Years Experience</p>
                  </div>
                  <div className="w-px h-16 bg-white/10" />
                  <div>
                    <p className="text-6xl font-black text-secondary mb-1">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">Commitment</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-secondary/20 rounded-[3.5rem] -z-10 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <div className="absolute top-1/2 -right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
          </div>

          <div className="lg:w-1/2 space-y-10 why-choose-content">
            <div>
              <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block mb-4">Why Choose Us</span>
              <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-[0.9]">
                Technical <br /> <span className="text-secondary">Integrity</span>
                <span className="text-primary text-2xl md:text-3xl block mt-4 font-black">In MEP Engineering</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-primary/70 leading-relaxed font-medium">
              <p>
                At Aghora Engineering Consultant, technical integrity is the foundation of every MEP
                engineering project we deliver. Backed by over <strong className="text-primary border-b-2 border-secondary/30">12+ years of hands-on industry experience</strong>,
                our team of skilled engineers provides integrated Mechanical, Electrical, Plumbing and Fire
                Protection that are technically precise, cost-effective, and future-ready.
              </p>
              <p>
                We design building systems that are not only compliant with national and international
                engineering standards but also optimized for long-term performance, energy efficiency, and
                operational reliability.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild className="group relative bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden">
                <Link to="/services" className="flex items-center gap-3">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-grey-50 px-6 reveal-item">
      <div className="section-container">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-10 grayscale bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200')]" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-4xl mx-auto">
              Partner With <br /> <span className="text-secondary">Leading Experts</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Experience the difference that technical mastery and 12+ years of industry leadership can make for your project.
            </p>
            <Button asChild size="lg" className="group relative bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden">
              <Link to="/contact" className="flex items-center gap-3">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};



export default About;
