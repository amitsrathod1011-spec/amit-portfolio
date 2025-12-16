import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-50 animate-pulse-glow pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float">
              <img
                src={profileImage}
                alt="Amit Sanjay Rathod"
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hello, I'm
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Amit <span className="text-gradient">Rathod</span>
            </h1>
            <h2
              className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Web Developer & Designer
            </h2>
            <p
              className="text-muted-foreground mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Specializing in web design and development. I create beautiful, functional websites
              with expertise in front-end, back-end development, and modern design principles.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="mailto:amitsrathod1011@gmail.com"
                className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
