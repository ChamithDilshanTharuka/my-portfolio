import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
    const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "A comprehensive analytics platform leveraging machine learning to provide real-time insights and predictive analysis.",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Blockchain Explorer",
      description: "Decentralized application for exploring blockchain transactions with advanced visualization and search capabilities.",
      tech: ["Next.js", "Web3.js", "Solidity", "MongoDB"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Real-time Collaboration Suite",
      description: "Enterprise-grade collaboration platform with live editing, video conferencing, and project management features.",
      tech: ["React", "WebRTC", "Socket.io", "Redis"],
      gradient: "from-primary via-secondary to-primary",
    },
  ];
  return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Exploring innovative solutions across the digital frontier
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow-cyan hover:scale-105 group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-mono border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects