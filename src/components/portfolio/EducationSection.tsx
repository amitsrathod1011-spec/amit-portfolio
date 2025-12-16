import { GraduationCap, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech in Computer Science Engineering",
    institution: "MIT CCORER Solapur",
    period: "2022 - 2026",
    description: "Currently pursuing Bachelor's degree with focus on software development, algorithms, and modern web technologies.",
    current: true,
  },
  {
    icon: School,
    degree: "Higher Secondary (12th)",
    institution: "S.M.U. Nanded",
    period: "2021 - 2022",
    score: "70.2%",
    description: "Completed higher secondary education with science stream.",
  },
  {
    icon: School,
    degree: "Secondary School (10th)",
    institution: "L.B.S.V. Nanded",
    period: "2019 - 2020",
    score: "89.8%",
    description: "Completed secondary education with excellent academic performance.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-secondary border-2 border-primary/30 items-center justify-center group-hover:border-primary group-hover:shadow-glow transition-all duration-300 z-10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content card */}
                <div className="flex-1 glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group-hover:translate-x-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded-full">
                        Current
                      </span>
                    )}
                    {item.score && (
                      <span className="text-sm font-semibold text-foreground">
                        Score: {item.score}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.institution}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
