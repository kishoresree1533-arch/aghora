import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "HVAC Engineering", path: "/services#hvac" },
    { name: "PHE Engineering", path: "/services#plumbing" },
    { name: "Electrical Engineering", path: "/services#electrical" },
    { name: "FPS Engineering", path: "/services#fire" },
    { name: "ELV Engineering", path: "/services#elv" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Training", path: "/training" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary pt-24 pb-12 text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col items-start gap-2 group">
              <img
                src={logo}
                alt="Aghora Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-[0.6rem] font-bold tracking-[0.1em] uppercase text-white/50">Aghora Engineering Consultant</span>
            </Link>
            <p className="text-white/60 text-sm leading-loose max-w-sm">
              <span className="text-white font-black block mb-2">Where Innovation is Engineered</span>
              At Aghora Engineering Consultant (AEC), we deliver innovative and reliable MEP
              engineering solutions designed to power modern infrastructure. As a trusted MEP
              consultant in Coimbatore, we specialize in providing end-to-end Mechanical, Electrical,
              and Plumbing (MEP) services for commercial, residential, industrial, and institutional
              projects. With a commitment to quality, efficiency, and technical excellence, we transform
              complex engineering challenges into sustainable, high-performance solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-none bg-white/5 hover:bg-secondary hover:text-primary transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 text-secondary">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-white/60 hover:text-secondary transition-colors text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-secondary mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 text-secondary">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-secondary transition-colors text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-secondary mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 text-secondary">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aghora+Design+Academy+MEP+Coimbatore+VKK+Menon+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-secondary transition-colors text-sm leading-relaxed"
                >
                  65-67, 3rd Floor, VKK Menon Road, (Above Central Bank of India),
                  New Sidhapudur, Coimbatore - 44
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919962427775"
                  className="text-white/60 hover:text-secondary transition-colors text-sm font-medium"
                >
                  +91 99624 27775
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@aghoramep.com"
                  className="text-white/60 hover:text-secondary transition-colors text-sm font-medium break-all"
                >
                  info@aghoramep.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-24 border-t border-white/5 pt-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-[0.7rem] uppercase tracking-widest font-bold text-center md:text-left">
              © {currentYear} AGHORA MEP Engineering Consultants. All rights
              reserved.
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-white/40 hover:text-secondary transition-colors text-[0.7rem] uppercase tracking-widest font-bold"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/40 hover:text-secondary transition-colors text-[0.7rem] uppercase tracking-widest font-bold"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
