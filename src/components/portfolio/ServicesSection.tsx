import { Palette, Code, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Creating visually stunning and user-friendly website designs that capture your brand's essence and engage your audience.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Identity", "Wireframing"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites using modern technologies and best practices.",
    features: ["Frontend Development", "Backend Integration", "API Development", "Database Design"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring your website looks and works perfectly on all devices, from desktop to mobile.",
    features: ["Mobile-First Approach", "Cross-Browser Support", "Performance Optimization", "Accessibility"],
  },
  {
    icon: Layers,
    title: "Full Stack Solutions",
    description: "End-to-end development services covering both frontend and backend to bring your vision to life.",
    features: ["Complete Web Apps", "CMS Integration", "E-commerce Solutions", "Maintenance & Support"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">What I offer</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
