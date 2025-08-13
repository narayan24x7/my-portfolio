import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      scrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-elegant" 
        : "bg-transparent"
    }`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow bg-opacity-20">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="gradient-primary bg-clip-text text-transparent">
              NkTechInfo
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-sm hover:text-primary-foreground transition-smooth"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="gradient-primary text-white border-0 hover:shadow-glow transition-smooth"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-left hover:text-primary transition-smooth"
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="mt-4 gradient-primary text-white border-0"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};