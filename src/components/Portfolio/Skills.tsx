import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code, 
  Server, 
  Bot, 
  Shield, 
  Database,
  Figma,
  Chrome,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "HTML/CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: "Advanced" },
      { name: "Figma", level: "Advanced" },
      { name: "Wireframing", level: "Advanced" },
      { name: "Prototyping", level: "Advanced" },
      { name: "User Research", level: "Intermediate" },
      { name: "Design Systems", level: "Advanced" }
    ],
    color: "from-pink-500 to-violet-500"
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: [
      { name: "PHP/Laravel", level: "Intermediate" },
      { name: "Python/Flask", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "API Development", level: "Intermediate" },
      { name: "C#", level: "Beginner" },
      { name: "Database Design", level: "Intermediate" }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI & Tools",
    icon: Bot,
    skills: [
      { name: "OpenAI API", level: "Intermediate" },
      { name: "Dialogflow", level: "Intermediate" },
      { name: "Chatbot Development", level: "Advanced" },
      { name: "Speech-to-Text", level: "Intermediate" },
      { name: "AI Integration", level: "Intermediate" },
      { name: "Automation", level: "Intermediate" }
    ],
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "QA & Testing",
    icon: Shield,
    skills: [
      { name: "Manual Testing", level: "Advanced" },
      { name: "Test Automation", level: "Intermediate" },
      { name: "Application Testing", level: "Advanced" },
      { name: "Test Planning", level: "Advanced" },
      { name: "Bug Reporting", level: "Advanced" },
      { name: "Quality Assurance", level: "Advanced" }
    ],
    color: "from-orange-500 to-red-500"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced": return "bg-primary text-primary-foreground";
    case "Intermediate": return "bg-primary/70 text-primary-foreground";
    case "Beginner": return "bg-primary/40 text-primary-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning design, development, and emerging technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-smooth group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{skill.name}</span>
                          <Badge variant="secondary" className={getLevelColor(skill.level)}>
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};