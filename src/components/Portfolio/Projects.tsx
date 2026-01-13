"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Bot,
  Network,
  TestTube,
  Filter,
  Icon
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

const projects = [
   {
  id: 1,
  title: "Secure File Sharing",
  category: "Security",
  description:
    "A secure file sharing web application that allows users to upload, encrypt, and share files safely with role-based access control and time-limited download links.",
  tech: [
    "Next.js",
    "PostgreSQL",
    "AES Encryption",
    "JWT Authentication"
  ],
  features: [
    "End-to-end file encryption before storage",
    "Secure file upload and download system",
    "Role-based access control (RBAC)",
    "Time-limited and password-protected share links",
    "User authentication using JWT",
    "Activity logging and access tracking"
  ],
    status: "Featured",
    Icon: Lock,
    color: "from-blue-500 to-cyan-500",
    githubLink: "https://github.com/narayan24x7/secure-file-sharing"
  },
  {
    id: 2,
    title: "Placeifiy-AI",
    category: "AI",
    description:
      "Speech-to-text interview web-application supporting video/voice interviews with real-time analysis",
    tech: [
      "Next.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Google Gemini API",
      "Speech Recognition"
    ],
    features: [
      "Real-time speech-to-text conversion",
      "AI-powered interview analysis",
      "Video/voice interview support",
      "Automated scoring system"
    ],
    status: "Featured",
    icon: Bot,
    color: "from-purple-500 to-indigo-500",
    githubLink: "https://github.com/narayan24x7/Placeifiy-AI"
  },
   {
    id: 3,
    title: "Wyreflow Testing Project",
    category: "Testing",
    description:
      "Application testing and QA work during internship at Wyreflow Technologies",
    tech: ["Manual Testing", "Test Automation", "Bug Reporting", "QA Processes"],
    features: [
      "Comprehensive test planning",
      "Manual testing execution",
      "Automated test development",
      "Quality assurance processes"
    ],
    status: "Professional",
    icon: TestTube,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Computer Lab Network Design",
    category: "Hackathon",
    description:
      "1st place college hackathon project for comprehensive lab network infrastructure",
    tech: ["Network Design", "System Architecture", "Security Planning"],
    features: [
      "Complete network topology design",
      "Security implementation strategy",
      "Cost-effective solution planning",
      "Scalable infrastructure design"
    ],
    status: "🏆 1st Place",
    icon: Network,
    color: "from-green-500 to-emerald-500",
  }
];

const categories = ["All", "AI", "Development", "Testing", "Hackathon"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of technical projects spanning AI, web development, and
              testing
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={project.id}
                  className="border-primary/20 hover:border-primary/40 transition-all group hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}
                        >
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {project.title}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm uppercase tracking-wide text-primary">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground"
                          >
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm uppercase tracking-wide text-primary">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        View Details
                      </Button>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            GitHub
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View More */}
          <div className="text-center">
            <a
              href="https://github.com/narayan24x7?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Dialog for Project Details */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-lg">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {selectedProject.tech.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mt-4 mb-2">Features:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {selectedProject.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
