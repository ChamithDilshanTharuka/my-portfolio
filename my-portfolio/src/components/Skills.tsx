import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 88 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 93 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
      ],
    },
  ];
  return (
       <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          Skills Galaxy
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Navigating through various technologies and frameworks across the development universe
        </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {skillCategories.map((category, catIndex) => (
                    <Card
                      key={catIndex}
                      className="bg-card border-2 border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:box-glow-purple"
                    >
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-6 text-center glow-cyan">{category.category}</h3>
                        <div className="space-y-4">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="animate-slide-in" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                              <div className="flex justify-between mb-2">
                                <span className="font-mono text-sm">{skill.name}</span>
                                <span className="font-mono text-sm text-primary">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
      </div>
    </section>
  )
}

export default Skills