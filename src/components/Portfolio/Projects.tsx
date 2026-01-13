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
  Lock
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
    title: "Placeifiy-AI",
    category: "AI",
    description:
      "Speech-to-text interview web application supporting video and voice interviews with real-time AI-based analysis.",
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
      "Video and voice interview support",
      "Automated candidate scoring"
    ],
    status: "Completed",
    icon: Bot,
    color: "from-purple-500 to-indigo-500",
    githubLink: "https://github.com/narayan24x7/Placeifiy-AI"
  },
  {
    id: 2,
    title: "End-to-End Encrypted File Sharing",
    category: "Security",
    description:
      "A high-performance end-to-end encrypted (E2EE) file sharing web application focused on privacy and security. Files are encrypted client-side using hybrid cryptography and shared via password-protected, time-limited links, ensuring only intended recipients can decrypt the data.",
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "Rust (Axum)",
      "Tokio Async Runtime",
      "PostgreSQL",
      "SQLx",
      "AES-256-CBC Encryption",
      "RSA-2048 Key Exchange",
      "Argon2 Password Hashing",
      "JWT Authentication",
  ],
  features: [
      "End-to-end encrypted (E2EE) file storage using AES-256-CBC",
      "Hybrid cryptography with RSA-2048 for secure key exchange",
      "Client-side encryption before file upload",
      "Password-protected and time-limited sharing links",
      "JWT-based authentication using HTTP-only cookies",
      "Per-user RSA key pair generation for secure file decryption",
      "Automated cleanup of expired files via background job scheduler",
      "Recipient search using email-based public key discovery",
      "Responsive dashboard with sent and received file tracking",
      "Dark mode support and enhanced UI/UX",
      "Centralized error handling and Zod-based form validation"
  ],
    status: "Featured",
    icon: Lock,
    color: "from-blue-600 to-cyan-500",
    githubLink: "https://github.com/narayan24x7/secure-file-sharing"
  },

  {
    id: 3,
    title: "Wyreflow Testing Project",
    category: "Testing",
    description:
      "Manual and automation testing work performed during internship at Wyreflow Technologies.",
    tech: [
      "Manual Testing",
      "Automation Testing",
      "Bug Reporting",
      "QA Processes"
    ],
    features: [
      "Test case creation and execution",
      "Manual testing cycles",
      "Automated testing scripts",
      "Bug tracking and reporting"
    ],
    status: "Professional",
    icon: TestTube,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Computer Lab Network Design",
    category: "Hackathon",
    description:
      "Award-winning hackathon project focused on designing a scalable and secure computer lab network infrastructure.",
    tech: ["Network Design", "System Architecture", "Security Planning"],
    features: [
      "Complete network topology planning",
      "Security-focused architecture",
      "Cost-efficient infrastructure",
      "Scalable network design"
    ],
    status: "🏆 1st Place",
    icon: Network,
    color: "from-green-500 to-emerald-500"
  }
];

const categories = ["All", "AI", "Security", "Testing", "Hackathon"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of technical projects across AI, security, testing,
            and networking.
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
                className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary">
                      Key Features
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature: string, idx: number) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary">
                      Tech Stack
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((tech: string, idx: number) => (
                        <Badge key={idx} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm">
                          <Github className="mr-2 h-4 w-4" />
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
            <Button variant="outline" size="lg">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Project Details Dialog */}
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

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold">Technologies</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {selectedProject.tech.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Features</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {selectedProject.features.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};