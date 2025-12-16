import { useEffect, useRef, useState } from "react";
import { Code, Palette, Server, Users, Monitor, Database } from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Python", level: 70, category: "Programming" },
  { name: "SQL/Database", level: 75, category: "Backend" },
  { name: "UI/UX Design", level: 80, category: "Design" },
  { name: "Git/GitHub", level: 85, category: "Tools" },
];

const skillCategories = [
  { icon: Code, name: "Web Development", description: "Building responsive and modern websites" },
  { icon: Monitor, name: "Frontend Development", description: "Creating beautiful user interfaces" },
  { icon: Server, name: "Backend Development", description: "Server-side logic and APIs" },
  { icon: Palette, name: "Design Skills", description: "UI/UX and visual design" },
  { icon: Database, name: "Database Management", description: "SQL and NoSQL databases" },
  { icon: Users, name: "Event Management", description: "Organizing and coordinating events" },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary font-medium">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">What I can do</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-5 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Bars */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            <div className="glass rounded-2xl p-6 space-y-6">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
