import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Briefcase,
  Award,
  Calendar,
  MapPin
} from "lucide-react";

const experience = [
  {
    role: "React Development",
    company: "VinixInfoTech Pvt. Ltd",
    type: "Internship",
    period: "Jun 2025 - Jul 2025",
    location: "On-Site",
    responsibilities: [
      "React Core Concepts - Components, Props, State, Hooks, Lifecycle Methods",
      "Advanced UI Development - Responsive design, reusable components, and animations",
      "API Integration - Fetching, managing and rendering dynamic data",
      "State Management - Redux, Context API, and efficient data flow",
      "Version Control - Git/GitHub collaboration and branching strategies"
    ],
    skills: [
      "Lifecycle Methods",
      "Responsive Web Design",
      "API Integration",
      "Redux Toolkit",
      "Version Control"
    ]
  },
  {
    role: "Flutter Development",
    company: "Techno Vedix Solutions Pvt. Ltd",
    type: "Internship",
    period: "Dec 2024 - Jan 2025",
    location: "On-Site",
    responsibilities: [
      "Developed a cross-platform Calculator App in Flutter/Dart",
      "Demonstrated Flutter widgets and responsive layouts",
      "Achieved pixel-perfect UI on both Android and iOS devices",
      "Collaborated with mentor to improve development quality"
    ],
    skills: [
      "Cross-Platform UI Development",
      "Custom Widgets & Theming",
      "Input Validation",
      "Logic Implementation"
    ]
  },
  {
    role: "Application Tester",
    company: "Wyreflow Technologies",
    type: "Internship",
    period: "Oct 2024 - Nov 2024",
    location: "Remote",
    responsibilities: [
      "Conducted comprehensive manual testing of mobile applications",
      "Developed and executed test cases for functionality and usability",
      "Identified and documented bugs with detailed reproduction steps",
      "Collaborated with development team on quality improvements"
    ],
    skills: [
      "Manual Testing",
      "Bug Reporting",
      "QA Processes",
      "Test Documentation"
    ]
  }
];

const achievements = [
  {
    title: "1st Place - College Hackathon",
    description: "Computer Lab Network Design",
    date: "November 2024",
    type: "Competition"
  },
  {
    title: "CS50x Certificate",
    description: "Harvard University's Introduction to Computer Science",
    date: "2024",
    type: "Certification"
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    description: "Comprehensive cybersecurity program",
    date: "2024",
    type: "Certification"
  },
  {
    title: "Cisco Ethical Hacker",
    description: "Comprehensive Ethical Hacking Certification",
    date: "2024",
    type: "Certification"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey combining practical experience with continuous learning
            </p>
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

          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-primary/20">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge variant="secondary">{exp.type}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Achievements & Certifications
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-primary/20 text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-glow bg-opacity-20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {achievement.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};