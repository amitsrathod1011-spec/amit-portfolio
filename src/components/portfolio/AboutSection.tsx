import { MapPin, Calendar, GraduationCap, Mail, Phone, Globe } from "lucide-react";

export const AboutSection = () => {
  const details = [
    { icon: MapPin, label: "Location", value: "Nanded, India" },
    { icon: Calendar, label: "Birthday", value: "06 Oct 2003" },
    { icon: GraduationCap, label: "Degree", value: "B.Tech CSE" },
  ];

  const contacts = [
    { icon: Mail, label: "Email", value: "amitsrathod1011@gmail.com", href: "mailto:amitsrathod1011@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9422449071", href: "tel:+919422449071" },
    { icon: Globe, label: "Website", value: "www.amitrathod.dev", href: "#" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Amit Sanjay Rathod, a passionate web developer from Nanded, India. Currently pursuing
                my B.Tech in Computer Science Engineering, I'm dedicated to creating beautiful and
                functional websites that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in web development started with a curiosity about how things work on the
                internet, and it has evolved into a full-fledged passion. I specialize in both
                front-end and back-end development, with a keen eye for design and user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm also involved in event management, which has helped me develop
                strong organizational and communication skills. I believe in continuous learning and
                staying updated with the latest technologies and trends.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 text-center hover:border-primary/50 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="glass rounded-2xl p-6 h-fit">
            <h3 className="text-lg font-semibold mb-6 text-gradient">Contact Info</h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-sm font-medium break-all">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
