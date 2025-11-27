import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


const Contact = () => {

    const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-primary" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-primary" },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-primary" },
  ];
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Let's connect and explore the possibilities of collaboration across the tech universe
        </p>

            <Card className="bg-card border-2 border-primary/20 box-glow-cyan">
                  <CardContent className="p-8 sm:p-12">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4">Let's Build Soultions🙌</h3>
                      <p className="text-muted-foreground mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                      </p>
                      <Button
                        size="lg"
                        // className="bg-econdary text-white hover:opacity-90 box-glow-purple text-lg px-8"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
        
                    <div className="border-t border-border pt-8 mt-8">
                      <p className="text-center text-sm text-muted-foreground mb-6">Or connect with me on</p>
                      <div className="flex justify-center gap-4">
                        {socialLinks.map((social, index) => {
                          const Icon = social.icon;
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              size="icon"
                              className={`border-primary/20 ${social.color} transition-all hover:box-glow-cyan`}
                              asChild
                            >
                              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                <Icon className="h-5 w-5" />
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
        </div>
    </section>
  )
}

export default Contact