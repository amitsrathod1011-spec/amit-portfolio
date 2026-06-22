import { ExternalLink, Github, Leaf, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Virtual Herbal Garden Plants (3D Visualization)",
    category: "Web Development",
    description: "An interactive 3D herbal garden that lets users explore medicinal plants and their Ayurvedic benefits through immersive visualization.",
    image: "https://plus.unsplash.com/premium_photo-1742202420374-4ad88d386d81?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "GLB Models", "JSON", "Three.js"],
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Employee Management System",
    category: "Web Development",
    description: "A Java-based Employee Management System that enables efficient management of employee profiles, attendance, salary records, and leave requests through secure admin and employee dashboards.",
   image: "https://amit-portfolio-t.vercel.app/emp.png?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Java", "JSP", "Servlet", "JDBC", "MySQL", "MVC", "Tomcat"],
    icon: Shield,
    color: "from-red-500 to-orange-600",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-background/80 backdrop-blur rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
