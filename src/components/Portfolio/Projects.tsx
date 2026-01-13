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
      "A high-performance end-to-end encrypted (E2EE) file sharing web application focused on privacy and security.",
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "Rust (Axum)",
      "PostgreSQL",
      "AES-256-CBC",
      "RSA-2048",
      "JWT",
      "Argon2"
    ],
    features: [
      "End-to-end encrypted file storage (E2EE)",
      "Hybrid cryptography with RSA & AES",
      "Client-side encryption before upload",
      "Password-protected & time-limited links",
      "JWT authentication using HTTP-only cookies",
      "Per-user RSA key pair generation",
      "Automated cleanup of expired files",
      "Recipient email-based key discovery",
      "Dashboard for sent & received files",
      "Dark mode & responsive UI",
      "Centralized error handling & Zod validation"
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
      "Test case creation & execution",
      "Manual testing cycles",
      "Automated test scripts",
      "Bug tracking & reporting"
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
      "Award-winning hackathon project focused on designing a scalable and secure computer lab network.",
    tech: ["Network Design", "System Architecture", "Security Planning"],
    features: [
      "Network topology planning",
      "Security-focused architecture",
      "Cost-efficient infrastructure",
      "Scalable design"
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
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                className="h-fit border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
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

                  {/* Features (LIMITED PREVIEW) */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary">
                      Key Features
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                      {project.features.length > 4 && (
                        <li className="text-xs italic text-muted-foreground">
                          + {project.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary">
                      Tech Stack
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
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
      </div>

      {/* Dialog */}
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