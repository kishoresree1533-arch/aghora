import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "PROJECT", path: "/projects" },
  { name: "SERVICE", path: "/services" },
  { name: "TRAINING", path: "/training" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-grey-200 py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center gap-1 group">
            <img
              src={logo}
              alt="Aghora Logo"
              className={`h-12 w-auto transition-all duration-300 ${!isScrolled ? "brightness-0 invert" : ""}`}
            />
            <span className={`text-[0.55rem] font-bold tracking-[0.1em] uppercase whitespace-nowrap transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>Aghora Engineering Consultant</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[0.75rem] font-bold tracking-[0.2em] transition-all hover:text-secondary relative group/link ${isActive(link.path)
                  ? "text-secondary"
                  : isScrolled ? "text-primary/80" : "text-white/90"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-8 h-[2px] bg-secondary transform transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-none px-8 h-12 text-xs tracking-widest transition-all"
            >
              <Link to="/contact">
                GET A QUOTE
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-primary" : "text-white"}>
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-primary text-white border-none p-0">
              <div className="flex flex-col h-full">
                <div className="p-10 border-b border-white/5">
                  <Link
                    to="/"
                    className="flex flex-col items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img
                      src={logo}
                      alt="Aghora Logo"
                      className="h-10 w-auto brightness-0 invert"
                    />
                    <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/80">Aghora Engineering Consultant</span>
                  </Link>
                </div>

                <nav className="flex flex-col p-10 gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-bold tracking-[0.2em] transition-colors py-4 border-b border-white/5 flex items-center justify-between group ${isActive(link.path)
                        ? "text-secondary"
                        : "text-white/80 hover:text-white"
                        }`}
                    >
                      {link.name}
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto p-10">
                  <Button
                    asChild
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-none h-16 text-sm tracking-widest"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      GET A QUOTE
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
