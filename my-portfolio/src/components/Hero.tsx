import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground.tsx";

const Hero = () => {
  return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="glow-cyan">Welcome to</span>
          <br />
          <span className="gradient-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Portfolio Universe
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in font-mono">
          Exploring the galaxy of software development
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan text-lg px-8"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-primary">
            <span className="text-sm mb-2 font-mono">Scroll to explore</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
