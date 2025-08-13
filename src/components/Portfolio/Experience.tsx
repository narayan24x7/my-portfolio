import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin
} from "lucide-react";

const experience = [
  {
    role: "React Development",
    company: "VinixInfoTech.PVT.LTD",
    type: "Internship",
    period: "Jun 2025 - July 2025",
    location: "On-Site",
    responsibilities: [
      "Conducted comprehensive manual testing of web applications",
      "Developed and executed test cases for functionality and usability",
      "Identified and documented bugs with detailed reproduction steps",
      "Collaborated with development team on quality improvements"
    ],
    skills: ["Manual Testing", "Bug Reporting", "QA Processes", "Test Documentation"]
  },
  {
    role: "Application Tester",
    company: "Wyreflow Technologies",
    type: "Internship",
    period: "Oct 2024 - Nov 2024",
    location: "Remote",
    responsibilities: [
      "Conducted comprehensive manual testing of web applications",
      "Developed and executed test cases for functionality and usability",
      "Identified and documented bugs with detailed reproduction steps",
      "Collaborated with development team on quality improvements"
    ],
    skills: ["Manual Testing", "Bug Reporting", "QA Processes", "Test Documentation"]
  }
];

const education = [
  {
    degree: "B.Voc in Software Development",
    institution: "C.P. Patel & F.H. Shah Commerce College",
    university: "Sardar Patel University",
    status: "Currently Pursuing",
    description: "Comprehensive software development program covering programming, databases, and software engineering principles."
  },
  {
    degree: "ITI COPA",
    institution: "Industrial Training Institute",
    university: "Computer Operator & Programming Assistant",
    status: "Completed",
    description: "Technical certification in computer operations, programming, and digital literacy."
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
            <h2 className="text-4xl lg:text-5xl font-bold">Experience & Education</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey combining practical experience with continuous learning
            </p>
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
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

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.university}</p>
                      <Badge variant="outline" className="w-fit">
                        {edu.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
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