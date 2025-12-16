import { ExternalLink, Github, Leaf, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Virtual Herbal Garden",
    category: "Web Development",
    description: "An interactive web-based platform showcasing virtual herbal plants with detailed information, 3D visualization, and educational content about medicinal properties.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Cyber Phishing Detection",
    category: "Security Project",
    description: "A web application designed to detect and prevent phishing attacks using machine learning algorithms and real-time URL analysis.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    technologies: ["Python", "React", "Machine Learning", "API"],
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
