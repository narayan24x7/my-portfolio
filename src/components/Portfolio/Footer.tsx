import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Download, Heart, Code2 } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow bg-opacity-20">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl gradient-primary bg-clip-text text-transparent">
                Narayan Kachhi
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              UI/UX Designer · Web Developer · AI & Testing Practitioner
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home","About","Skills","Portfolio","Experience"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ 
                      behavior: "smooth" 
                    });
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a 
                    href="https://www.linkedin.com/in/narayandas-kachhi-648b02285/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
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
              <Button variant="outline" size="sm" className="w-fit">
                <Download className="mr-2 h-3 w-3" />
                Resume PDF
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Narayan Kachhi. Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>in India</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a 
              href="#contact" 
              className="hover:text-primary transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ 
                  behavior: "smooth" 
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