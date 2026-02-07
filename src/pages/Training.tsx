import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Clock,
  Users,
  Award,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Wrench,
  Target,
  Phone,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";

import trainingHeroBg from "@/assets/training-hero-bg.png";

gsap.registerPlugin(ScrollTrigger);

// Training Benefits Data
const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry professionals with decades of hands-on experience.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Briefcase,
    title: "Practical Approach",
    description: "Real-world case studies and hands-on exercises for practical learning.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive recognized certificates upon successful course completion.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry peers and expand your professional network.",
    color: "from-purple-500/20 to-purple-600/5",
  },
];

const BenefitsSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".benefit-card", {
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-grey-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold tracking-[0.2em] mb-4 uppercase border border-secondary/20">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 uppercase tracking-tight">
            Training <span className="text-secondary">Benefits</span>
          </h2>
          <p className="text-lg text-primary/60 leading-relaxed">
            Our training programs are designed to give you practical skills that make an immediate impact in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="benefit-card group relative p-10 rounded-[2.5rem] bg-white border border-grey-100 shadow-xl hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full w-full">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-8 border border-white/50 shadow-inner group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                <benefit.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="min-h-[60px] flex items-center mb-4">
                <h3 className="text-2xl font-black text-primary uppercase tracking-tight leading-tight">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-primary/60 text-sm leading-relaxed font-medium flex-grow">
                {benefit.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Course Catalog Data
const courses = [
  {
    category: "HVAC",
    title: "Advanced HVAC System Design",
    duration: "5 Days",
    level: "Intermediate",
    topics: ["Load calculation methodologies", "Equipment selection criteria", "Duct and piping design", "Energy optimization", "BIM for HVAC"],
    accent: "bg-blue-600",
  },
  {
    category: "Electrical",
    title: "Electrical Power Systems",
    duration: "4 Days",
    level: "Advanced",
    topics: ["Power distribution design", "Short circuit analysis", "Protective coordination", "Emergency power", "Smart grid integration"],
    accent: "bg-yellow-500",
  },
  {
    category: "Plumbing",
    title: "Sustainable Plumbing Design",
    duration: "3 Days",
    level: "Beginner",
    topics: ["Water supply design", "Drainage fundamentals", "Conservation strategies", "Rainwater harvesting", "Greywater recycling"],
    accent: "bg-cyan-500",
  },
  {
    category: "Fire Protection",
    title: "Fire Protection Systems",
    duration: "4 Days",
    level: "Intermediate",
    topics: ["Fire code compliance", "Sprinkler design", "Detection systems", "Smoke management", "Life safety planning"],
    accent: "bg-red-600",
  },
  {
    category: "ELV",
    title: "Building Management (BMS)",
    duration: "3 Days",
    level: "Intermediate",
    topics: ["BMS architecture", "System integration", "Energy management", "Monitoring & analytics", "Cybersecurity"],
    accent: "bg-purple-600",
  },
  {
    category: "Software",
    title: "MEP BIM with Revit",
    duration: "5 Days",
    level: "Beginner",
    topics: ["Revit MEP fundamentals", "Creating MEP families", "Coordination workflows", "Clash detection", "Documentation"],
    accent: "bg-emerald-600",
  },
];

const CourseCard = ({ course }: { course: typeof courses[0] }) => {
  return (
    <div className="group course-card relative bg-white border border-grey-100 rounded-[3rem] p-10 shadow-2xl hover:shadow-secondary/10 transition-all duration-700 hover:-translate-y-3 flex flex-col h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-grey-50 group-hover:bg-secondary transition-colors duration-500" />

      <div className="flex items-center justify-between mb-8">
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${course.accent} shadow-lg`}>
          {course.category}
        </span>
        <div className="flex items-center gap-2 text-primary/40 font-bold text-xs uppercase tracking-tighter">
          <Clock className="w-4 h-4 text-secondary" />
          <span>{course.duration}</span>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-primary mb-6 uppercase tracking-tighter leading-tight group-hover:text-secondary transition-colors">
        {course.title}
      </h3>

      <div className="space-y-4 mb-10 flex-grow">
        <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">Core Modules</p>
        <ul className="space-y-3">
          {course.topics.map((topic, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:scale-150 transition-transform duration-300" />
              <span className="text-primary/60 text-sm font-medium leading-relaxed group-hover:text-primary transition-colors">{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-grey-50 mt-auto">
        <Button asChild className="w-full h-14 bg-grey-50 hover:bg-secondary text-primary font-black rounded-2xl group/btn transition-all duration-500">
          <Link to="/contact" className="flex items-center justify-between px-6">
            <span className="text-xs uppercase tracking-widest">Enroll Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const CourseCatalog = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".course-card", {
      y: 60,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-grey-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold tracking-[0.2em] mb-4 uppercase border border-secondary/20">
            Course Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 uppercase tracking-tight">
            Training <span className="text-secondary">Programs</span>
          </h2>
          <p className="text-lg text-primary/60 leading-relaxed">
            Meister the complexities of MEP engineering with our curriculum tailored for excellence in the modern industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CustomTraining = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".custom-reveal", {
      x: -50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%"
      }
    });
    gsap.from(".stats-card", {
      scale: 0.9,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-grey-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 -left-1/4 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="custom-reveal">
              <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block mb-4">Tailored Solutions</span>
              <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-[0.9] mb-8">
                Corporate <br /> <span className="text-secondary">Excellence</span>
              </h2>
              <p className="text-lg text-primary/70 leading-relaxed font-medium max-w-xl">
                We empower organizations with bespoke training solutions. Our experts deliver on-site and virtual programs designed for your specific project challenges.
              </p>
            </div>

            <div className="space-y-4 custom-reveal">
              {["Customized Curriculum", "On-site Delivery", "Skill Gap Analysis", "Ongoing Support"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors transition-duration-500">
                    <CheckCircle2 className="h-5 w-5 text-secondary group-hover:text-white" />
                  </div>
                  <span className="text-primary font-black uppercase text-xs tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="custom-reveal pt-4">
              <Button asChild className="group relative bg-primary text-white font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <Link to="/contact">
                  <span>Inquire Now</span>
                  <Phone className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Courses", val: "20+", icon: BookOpen },
              { label: "Graduates", val: "1k+", icon: Users },
              { label: "Focus", val: "Applied", icon: Wrench },
              { label: "Relevance", val: "100%", icon: Target },
            ].map((stat, i) => (
              <div key={i} className="stats-card p-10 bg-grey-50 rounded-[3rem] text-center border border-grey-100 hover:scale-105 transition-all duration-500">
                <stat.icon className="w-10 h-10 text-secondary mx-auto mb-6" />
                <p className="text-4xl font-black text-primary leading-none mb-2 tracking-tighter">{stat.val}</p>
                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-grey-50">
      <div className="container mx-auto px-6">
        <div className="rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/20">
              Training & Career
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Ready to Advance <br /><span className="text-secondary">Your Career?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button asChild className="group relative bg-white text-primary font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <Link to="/contact" className="flex items-center gap-3">
                  <span>Enroll Today</span>
                  <ArrowRight className="w-4 h-4 text-secondary transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild className="group relative bg-white text-primary font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                <a href="tel:+971501234567" className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary transition-transform duration-300 group-hover:rotate-12" />
                  <span>Call Admission</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Training = () => {
  return (
    <Layout>
      <PageHero
        badge="Professional Development"
        title="Professional MEP"
        subtitle="Training & Development"
        description="Enhance your skills with industry-leading training programs designed by experienced MEP professionals for the next generation of engineers."
        backgroundImage={trainingHeroBg}
        variant="clean"
      />

      <BenefitsSection />
      <CourseCatalog />
      <CustomTraining />
      <CTASection />
    </Layout>
  );
};

export default Training;
