import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  ExternalLink,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import contactHeroBg from "@/assets/contact-hero-bg.png";
import contactLocationBg from "@/assets/contact-location-bg.png";

// Main Contact Page Component
const Contact = () => {
  return (
    <Layout>
      <PageHero
        badge="24/7 Professional Support"
        title="Let's Build Something"
        subtitle="Amazing"
        description="Ready to start your dream project? We're here to help you every step of the way with expert MEP solutions."
        backgroundImage={contactHeroBg}
        variant="clean"
      />
      <ContactSection />
      <FAQSection />
    </Layout>
  );
};

// Contact Form
const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="bg-white/90 backdrop-blur-xl border border-white/70 rounded-3xl shadow-2xl shadow-black/8 overflow-hidden relative transition-all duration-500 hover:shadow-3xl hover:shadow-black/10 group/card">
      {/* Premium decorative gradient */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none transition-opacity duration-700 group-hover/card:opacity-80" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none transition-opacity duration-700 group-hover/card:opacity-80" />

      {/* Subtle animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 via-transparent to-primary/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <CardContent className="p-10 md:p-12 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/25 to-secondary/5 flex items-center justify-center shadow-lg shadow-secondary/10 transition-all duration-500 group-hover/card:scale-105 group-hover/card:shadow-xl group-hover/card:shadow-secondary/15">
            <Send className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Send Us a Message
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="space-y-3 group">
              <Label htmlFor="name" className="text-sm font-semibold text-foreground/80 group-focus-within:text-secondary transition-colors duration-300">Full Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Smith"
                required
                className="h-13 rounded-xl border-2 border-border/40 bg-white/60 backdrop-blur-sm shadow-sm hover:border-border/60 hover:shadow-md focus:bg-white focus:border-secondary/60 focus:shadow-lg focus:shadow-secondary/10 focus:ring-0 transition-all duration-400 ease-out"
              />
            </div>
            <div className="space-y-3 group">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground/80 group-focus-within:text-secondary transition-colors duration-300">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                className="h-13 rounded-xl border-2 border-border/40 bg-white/60 backdrop-blur-sm shadow-sm hover:border-border/60 hover:shadow-md focus:bg-white focus:border-secondary/60 focus:shadow-lg focus:shadow-secondary/10 focus:ring-0 transition-all duration-400 ease-out"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="space-y-3 group">
              <Label htmlFor="phone" className="text-sm font-semibold text-foreground/80 group-focus-within:text-secondary transition-colors duration-300">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+971 50 123 4567"
                className="h-13 rounded-xl border-2 border-border/40 bg-white/60 backdrop-blur-sm shadow-sm hover:border-border/60 hover:shadow-md focus:bg-white focus:border-secondary/60 focus:shadow-lg focus:shadow-secondary/10 focus:ring-0 transition-all duration-400 ease-out"
              />
            </div>
            <div className="space-y-3 group">
              <Label htmlFor="service" className="text-sm font-semibold text-foreground/80 group-focus-within:text-secondary transition-colors duration-300">Service Interest</Label>
              <Select name="service">
                <SelectTrigger className="h-13 rounded-xl border-2 border-border/40 bg-white/60 backdrop-blur-sm shadow-sm hover:border-border/60 hover:shadow-md focus:bg-white focus:border-secondary/60 focus:shadow-lg focus:shadow-secondary/10 focus:ring-0 transition-all duration-400 ease-out">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2 border-border/30 shadow-2xl bg-white/95 backdrop-blur-lg">
                  <SelectItem value="hvac">HVAC Systems</SelectItem>
                  <SelectItem value="electrical">Electrical Engineering</SelectItem>
                  <SelectItem value="plumbing">Plumbing & Drainage</SelectItem>
                  <SelectItem value="fire">Fire Protection</SelectItem>
                  <SelectItem value="elv">ELV Systems</SelectItem>
                  <SelectItem value="training">Training Programs</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3 group">
            <Label htmlFor="subject" className="text-sm font-semibold text-foreground/80 group-focus-within:text-secondary transition-colors duration-300">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="How can we help you?"
              required
              className="h-13 rounded-xl border-2 border-border/40 bg-white/60 backdrop-blur-sm shadow-sm hover:border-border/60 hover:shadow-md focus:bg-white focus:border-secondary/60 focus:shadow-lg focus:shadow-secondary/10 focus:ring-0 transition-all duration-400 ease-out"
            />
          </div>

          <div className="space-y-3 group">
            <Label htmlFor="message" className="text-sm font-semibold text-foreground/80 group-focus-within:text-secondary transition-colors duration-300">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or inquiry..."
              rows={5}
              required
              className="rounded-xl border-2 border-border/40 bg-white/60 backdrop-blur-sm shadow-sm hover:border-border/60 hover:shadow-md focus:bg-white focus:border-secondary/60 focus:shadow-lg focus:shadow-secondary/10 focus:ring-0 transition-all duration-400 ease-out resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-gradient-to-r from-secondary via-secondary to-secondary/90 hover:from-secondary/95 hover:via-secondary/90 hover:to-secondary/85 text-secondary-foreground font-bold text-base rounded-xl shadow-lg shadow-secondary/20 hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 ease-out hover:-translate-y-1 active:translate-y-0 active:shadow-lg group/btn disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="animate-pulse">Sending...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <Send className="h-5 w-5 transition-all duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1 group-hover/btn:scale-110" />
                <span>Send Message</span>
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Contact Info
const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Speak directly to our team",
    detail: "+91 99624 27775",
    footer: "MON-SAT 9AM-6PM",
    color: "blue",
    content: ["+91 99624 27775", "+91 422 123 4567"],
    links: ["tel:+919962427775", "tel:+914221234567"],
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Send us your queries",
    detail: "info@aghoramep.com",
    footer: "WE REPLY WITHIN 24 HOURS",
    color: "purple",
    content: ["info@aghoramep.com", "projects@aghoramep.com"],
    links: ["mailto:info@aghoramep.com", "mailto:projects@aghoramep.com"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    subtitle: "Come say hello",
    detail: "Coimbatore, Tamil Nadu",
    footer: "GET DIRECTIONS",
    color: "green",
    content: ["AEC AGHORA", "Coimbatore Office", "Tamil Nadu, India"],
    links: ["https://maps.google.com"],
  },
];

const ContactInfoCard = ({ info }: { info: (typeof contactInfo)[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colorStyles = {
    blue: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      icon: "text-blue-600",
      footer: "text-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      icon: "text-purple-600",
      footer: "text-purple-600",
    },
    green: {
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      icon: "text-emerald-600",
      footer: "text-emerald-600",
    },
  }[info.color as "blue" | "purple" | "green"];

  return (
    <>
      <Card
        className="group cursor-pointer h-full bg-white/95 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] overflow-hidden relative"
        onClick={() => setIsOpen(true)}
      >
        {/* Premium gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <CardContent className="p-10 relative z-10">
          {/* Icon container with animated background */}
          <div className={`w-16 h-16 rounded-2xl ${colorStyles.iconBg} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}>
            <info.icon className={`h-7 w-7 ${colorStyles.icon} transition-transform duration-500 group-hover:scale-110`} />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">{info.title}</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">{info.subtitle}</p>
          <p className="text-xl font-bold text-foreground mb-4 transition-colors duration-300">{info.detail}</p>
          <p className={`text-xs font-bold tracking-wider uppercase ${colorStyles.footer} flex items-center gap-2`}>
            {info.footer}
            <span className="inline-block w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-6" />
          </p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <info.icon className={`h-5 w-5 ${colorStyles.icon}`} />
              {info.title}
            </DialogTitle>
            <DialogDescription>{info.subtitle}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {info.content.map((line, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border">
                <span className="font-medium">{line}</span>
                {info.links && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={info.links[i]} target={info.links[0].startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Main Contact Section
const ContactSection = () => {
  return (
    <section className="relative z-30">
      {/* White background container for cards separation from hero */}
      <div className="bg-gradient-to-b from-background via-background to-muted/30 pt-20 pb-24">
        <div className="container mx-auto px-4">
          {/* Cards with proper spacing from hero - moved down for clear separation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 -mt-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ContactInfoCard info={info} />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="animate-fade-in">
              {/* Premium section header */}
              <div className="mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/15 to-secondary/5 text-secondary rounded-full text-sm font-semibold mb-5 border border-secondary/20">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
                  Send us a
                  <span className="block bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="animate-fade-in animation-delay-300">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative group mb-12">
                <div className="aspect-[4/3] relative">
                  <img
                    src={contactLocationBg}
                    alt="Office"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Coimbatore Office</h3>
                    <p className="text-white/80 mb-4 font-medium">Coimbatore, Tamil Nadu, Tamil Nadu</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold flex items-center gap-2 group/link"
                    >
                      VIEW ON GOOGLE MAPS
                      <div className="h-[2px] w-12 bg-white transition-all group-hover/link:w-20" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-white">
                <h3 className="text-2xl font-bold text-foreground mb-8">Common Questions</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Do you provide free consultation?</h4>
                    <p className="text-muted-foreground text-sm">Yes, our initial consultation and site visit within Coimbatore limits are completely free.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">What is your typical response time?</h4>
                    <p className="text-muted-foreground text-sm">We strive to respond to all inquiries within 2-4 business hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const faqs = [
  {
    question: "What types of projects do you handle?",
    answer:
      "We handle projects of all sizes and types, including residential, commercial, industrial, healthcare, hospitality, and educational facilities. Our team has experience with both new construction and renovation projects.",
  },
  {
    question: "Do you provide services outside Coimbatore?",
    answer:
      "Yes, we deliver projects across South India and internationally, specifically in the UAE (ADNOC projects). Our team is experienced in working with global codes and standards.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A typical design project can range from 4-12 weeks. We provide detailed schedules during the proposal phase.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we provide post-construction support including as-built documentation, commissioning assistance, and ongoing technical consultation as needed.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-muted via-background to-muted/50 relative overflow-hidden">
      {/* Premium background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Premium section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary/15 to-secondary/5 text-secondary rounded-full text-sm font-semibold mb-6 border border-secondary/20 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          {/* Premium FAQ Cards */}
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <CardContent className="p-8 relative z-10">
                  <div className="flex gap-6">
                    {/* Number indicator */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                        <span className="text-secondary font-bold text-lg">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
