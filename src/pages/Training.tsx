import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";

import trainingHeroBg from "@/assets/training-hero-bg.png";


// Training Benefits
const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with decades of hands-on experience.",
  },
  {
    icon: Briefcase,
    title: "Practical Approach",
    description:
      "Real-world case studies and hands-on exercises for practical learning.",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Receive recognized certificates upon successful course completion.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with industry peers and expand your professional network.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Training Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Our training programs are designed to give you practical skills that
            make an immediate impact in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="card-hover bg-card text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Course Catalog
const courses = [
  {
    category: "HVAC",
    title: "Advanced HVAC System Design",
    duration: "5 Days",
    level: "Intermediate",
    topics: [
      "Load calculation methodologies",
      "Equipment selection criteria",
      "Duct and piping design",
      "Energy optimization techniques",
      "BIM for HVAC systems",
    ],
  },
  {
    category: "Electrical",
    title: "Electrical Power Systems Engineering",
    duration: "4 Days",
    level: "Advanced",
    topics: [
      "Power distribution design",
      "Short circuit analysis",
      "Protective coordination",
      "Emergency power systems",
      "Smart grid integration",
    ],
  },
  {
    category: "Plumbing",
    title: "Sustainable Plumbing Design",
    duration: "3 Days",
    level: "Beginner",
    topics: [
      "Water supply system design",
      "Drainage system fundamentals",
      "Water conservation strategies",
      "Rainwater harvesting",
      "Greywater recycling systems",
    ],
  },
  {
    category: "Fire Protection",
    title: "Fire Protection System Design",
    duration: "4 Days",
    level: "Intermediate",
    topics: [
      "Fire code compliance",
      "Sprinkler system design",
      "Fire detection systems",
      "Smoke management",
      "Life safety planning",
    ],
  },
  {
    category: "ELV",
    title: "Building Management Systems (BMS)",
    duration: "3 Days",
    level: "Intermediate",
    topics: [
      "BMS architecture and protocols",
      "System integration",
      "Energy management",
      "Monitoring and analytics",
      "Cybersecurity for smart buildings",
    ],
  },
  {
    category: "Software",
    title: "MEP BIM Modeling with Revit",
    duration: "5 Days",
    level: "Beginner",
    topics: [
      "Revit MEP fundamentals",
      "Creating MEP families",
      "Coordination workflows",
      "Clash detection",
      "Documentation and scheduling",
    ],
  },
];

const CourseCard = ({ course }: { course: (typeof courses)[0] }) => {
  return (
    <Card className="flex flex-col h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] border-border/50 overflow-hidden group">
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary rounded-full text-sm font-bold uppercase tracking-wide">
            {course.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/80 text-muted-foreground rounded-full text-sm font-semibold">
            {course.level}
          </span>
        </div>
        <CardTitle className="text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
          {course.title}
        </CardTitle>
        <div className="flex items-center gap-2.5 text-base text-muted-foreground font-medium">
          <Clock className="h-5 w-5 text-secondary" />
          {course.duration}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col px-6 pb-6">
        <ul className="space-y-3 flex-1 mb-6">
          {course.topics.map((topic, index) => (
            <li key={index} className="flex items-start gap-3 text-base">
              <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{topic}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          size="lg"
          className="group w-full bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-secondary-foreground font-bold text-base py-6 rounded-2xl shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
        >
          <Link to="/contact" className="flex items-center justify-center gap-2">
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const CourseCatalog = () => {
  return (
    <section className="section-padding pt-24">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-3">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Training Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our comprehensive range of MEP engineering courses
            tailored to different skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom Training Section
const CustomTraining = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-muted via-background to-muted/50 relative overflow-hidden">
      {/* Premium background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary/15 to-secondary/5 text-secondary rounded-full text-sm font-semibold mb-5 border border-secondary/20 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Tailored Solutions
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
                Corporate Training
                <span className="block bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                  Programs
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer customized training solutions designed specifically for
                your organization's needs. Our corporate training programs can be
                delivered on-site or virtually, with content tailored to your
                team's requirements.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Customized curriculum based on your needs",
                "Flexible scheduling and delivery options",
                "Team assessments and skill gap analysis",
                "Post-training support and resources",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <Link to="/contact">
                <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Request Custom Training
              </Link>
            </Button>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {/* Card 1: 20+ Courses */}
            <Card className="group bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 hover:border-secondary/40 shadow-lg hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <BookOpen className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="font-bold text-2xl text-foreground mb-1 group-hover:text-secondary transition-colors duration-300">20+ Courses</p>
                  <p className="text-sm text-muted-foreground font-medium">Available</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: 1000+ Professionals */}
            <Card className="group bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl border-0 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="font-bold text-2xl mb-1">1000+</p>
                  <p className="text-sm text-primary-foreground/70 font-medium">
                    Professionals Trained
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Hands-on */}
            <Card className="group bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl border-0 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Wrench className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="font-bold text-2xl mb-1">Hands-on</p>
                  <p className="text-sm text-primary-foreground/70 font-medium">
                    Practical Training
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: 100% Job-Relevant */}
            <Card className="group bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 hover:border-secondary/40 shadow-lg hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="font-bold text-2xl text-foreground mb-1 group-hover:text-secondary transition-colors duration-300">100%</p>
                  <p className="text-sm text-muted-foreground font-medium">
                    Job-Relevant Skills
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="pt-10 pb-10">
      <div className="container mx-auto px6">
        <div className="gradient-hero rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tighter leading-none mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our next training session and gain the skills needed to excel
            in MEP engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-secondary-foreground font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <span>Contact Us to Enroll</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group relative bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-105"
            >
              <a href="tel:+971501234567" className="flex items-center gap-3">
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call: +971 50 123 4567</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Training Page Component
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
      <div className="relative z-30">
        <CourseCatalog />
        <CustomTraining />
        <CTASection />
      </div>
    </Layout>
  );
};

export default Training;
