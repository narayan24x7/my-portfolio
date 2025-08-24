import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Heart, Code2 } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container max-w-6xl mx-auto px-4 py-6">
        {/* Top Section */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow bg-opacity-20">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-base gradient-primary bg-clip-text text-transparent">
                Narayan Kachhi
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-snug">
              Full-Stack Developer · Cyber Security Enthusiast · AI & Testing Practitioner
            </p>
          </div>

          {/* Quick Links (compact grid) */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {["Home", "About", "Skills", "Portfolio", "Experience"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-smooth"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs">Connect</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                <a
                  href="https://www.linkedin.com/in/narayandas-kachhi-648b02285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
                <a
                  href="https://github.com/narayan24x7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Narayandas Kachhi. Made with</span>
            <Heart className="h-3 w-3 text-primary fill-primary" />
            <span>in India</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hover:text-primary transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Privacy
            </a>
            <span>•</span>
            <span>Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
