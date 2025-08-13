import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A multidisciplinary software professional combining creative design with technical expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Creative Director & Software Professional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Narayan — a Creative Director and software professional with hands-on experience in 
                  UI/UX, web development, and application testing. I design intuitive interfaces and build 
                  robust web solutions — and I enjoy integrating AI features like interview bots and chat 
                  assistants into real projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With experience spanning both design and engineering, I bridge the gap between creative 
                  vision and technical implementation, ensuring that every project delivers both aesthetic 
                  appeal and functional excellence.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Available for freelance & contract work</span>
                </div>
              </div>
            </div>

            {/* Education & Milestones */}
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h4 className="text-lg font-semibold">Education</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium">B.Voc in Software Development</h5>
                        <p className="text-sm text-muted-foreground">
                          C.P. Patel & F.H. Shah Commerce College, Sardar Patel University
                        </p>
                        <p className="text-sm text-muted-foreground">Currently Pursuing</p>
                      </div>
                      <div>
                        <h5 className="font-medium">ITI COPA</h5>
                        <p className="text-sm text-muted-foreground">Computer Operator & Programming Assistant</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Recent Achievements</h4>
                    <div className="space-y-3">
                      <div className="border-l-2 border-primary pl-4">
                        <h5 className="font-medium">🏆 1st Place - College Hackathon</h5>
                        <p className="text-sm text-muted-foreground">Computer Lab Network Design (Nov 2024)</p>
                      </div>
                      <div className="border-l-2 border-primary/60 pl-4">
                        <h5 className="font-medium">💼 Application Tester Intern</h5>
                        <p className="text-sm text-muted-foreground">Wyreflow Technologies (Oct-Nov 2024)</p>
                      </div>
                      <div className="border-l-2 border-primary/40 pl-4">
                        <h5 className="font-medium">🎓 Multiple Certifications</h5>
                        <p className="text-sm text-muted-foreground">CS50x, Google Cybersecurity, Cisco, Microsoft C#</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};