import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Download, ArrowRight, Sparkles, Code, Palette, Bot } from "lucide-react";
import portraitImage from "@/assets/unnamed.jpg";

const FloatingElement = ({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute opacity-20 ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const skillBadges = [
  { icon: Palette, text: "UI/UX", color: "from-pink-500 to-violet-500" },
  { icon: Code, text: "React", color: "from-blue-500 to-cyan-500" },
  { icon: Bot, text: "AI", color: "from-purple-500 to-indigo-500" }
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Floating Icons */}
        <FloatingElement className="top-20 left-20 animate-float" delay={1}>
          <Code className="h-8 w-8 text-primary/30" />
        </FloatingElement>
        <FloatingElement className="top-32 right-32 animate-float" delay={3}>
          <Palette className="h-6 w-6 text-primary-glow/30" />
        </FloatingElement>
        <FloatingElement className="bottom-32 left-40 animate-float" delay={2}>
          <Bot className="h-7 w-7 text-purple-500/30" />
        </FloatingElement>
        <FloatingElement className="bottom-20 right-20 animate-float" delay={4}>
          <Sparkles className="h-5 w-5 text-cyan-500/30" />
        </FloatingElement>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <Badge
              variant="outline"
              className="glass-morphism border-primary/30 text-primary animate-fade-in w-fit"
            >
              <Sparkles className="mr-2 h-3 w-3" />
              Welcome to my Portfolio
            </Badge>

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight animate-fade-in-up stagger-1">
                  Hello, I'm{" "}
                  <span className="text-gradient">
                    Narayandas
                  </span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground animate-fade-in-up stagger-2">
                  Full-Stack Developer · Cyber Security Enthusiast · AI & Testing Practitioner
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up stagger-3">
                  Designing usable interfaces, building reliable web apps, and creating
                  <span className="text-primary font-medium"> AI-powered experiences </span>
                  that make a difference.
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up stagger-4">
                {skillBadges.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className={`glass-morphism px-4 py-2 rounded-full flex items-center gap-2 hover-scale cursor-default border border-primary/20`}
                    >
                      <div className={`p-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                        <IconComponent className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{skill.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300"
              >
                <a href="#portfolio">
                  <span className="relative z-10 flex items-center">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group glass-morphism border-primary/30 hover:border-primary/50 hover:bg-primary/5"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                <a
                  href="/MyCV.pdf"
                  download="Narayan_Kachhi_Resume.pdf"
                >
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in-up stagger-4">
              <Button
                variant="ghost"
                size="icon"
                className="glass-morphism border border-primary/20 hover:border-primary/40 hover:bg-primary/10 group"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/narayandas-kachhi-648b02285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="glass-morphism border border-primary/20 hover:border-primary/40 hover:bg-primary/10 group"
                asChild
              >
                <a
                  href="https://github.com/narayan24x7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-purple-500 rounded-full blur-2xl opacity-30 scale-110 animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary rounded-full blur-xl opacity-20 scale-105 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

              {/* Portrait Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glassmorphism Frame */}
                <div className="absolute inset-0 glass-morphism rounded-full border-2 border-primary/30"></div>

                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden p-2">
                  <img
                    src={portraitImage}
                    alt="Narayan Kachhi - UI/UX Designer & Software Developer"
                    className="w-full h-full object-cover rounded-full transition-smooth hover:scale-105"
                  />
                </div>

                {/* Floating Status Indicator */}
                <div className="absolute bottom-6 right-6 glass-morphism px-3 py-1 rounded-full border border-green-500/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-400">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up stagger-4">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};