import { Code2, Rocket, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
    const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development approach ensuring rapid iteration and deployment.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every pixel and byte for maximum speed and efficiency.",
    },
  ];

  return (
       <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          About Me
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          A passionate developer crafting digital experiences in the vast expanse of the tech universe
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow-cyan group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card border-2 border-secondary/20 rounded-lg p-8 box-glow-purple">
          <p className="text-lg leading-relaxed text-foreground">
            I'm a software developer with a passion for creating innovative solutions that push the boundaries of what's possible. 
            With expertise spanning multiple technologies and frameworks, I specialize in building scalable web applications 
            that combine stunning design with robust functionality. 
            {/* My journey through the tech universe has equipped me with 
            the skills to transform complex problems into elegant, user-friendly solutions. */}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About