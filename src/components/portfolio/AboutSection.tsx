import { MapPin, Calendar, GraduationCap, Mail, Phone, Globe } from "lucide-react";

export const AboutSection = () => {
  const details = [
    { icon: MapPin, label: "Location", value: "Maharashtra, India" },
    { icon: Calendar, label: "Birthday", value: "06 Oct 2003" },
    { icon: GraduationCap, label: "Degree", value: "B.Tech CSE" },
  ];

  const contacts = [
    { 
  icon: Mail, 
  label: "Email", 
  value: "amitsrathod1011@gmail.com", 
  href: "mailto:amitsrathod1011@gmail.com" 
},

    { icon: Phone, label: "Phone", value: "+91 9422449071", href: "tel:+919422449071" },
    { icon: Globe, label: "Website", value: "www.amitrathod.com", href: "https://amit-portfolio-t.vercel.app/" },
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
                I'm Amit Sanjay Rathod, a passionate Java Full Stack Developer and Graphic Designer from Maharashtra, India. 
                I have completed my B.Tech in Computer Science Engineering 2022-26 and am passionate about building modern, responsive, 
                and user-friendly web applications and creative digital designs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
               My expertise includes Java, Spring Boot, React.js, HTML, CSS, JavaScript, MySQL, REST APIs.
                I love creating high-performance websites and full-stack applications that solve real-world problems 
                while providing an excellent user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Along with software development, I have experience in Graphic Design using Canva and Basic CorelDRAW, 
                creating professional posters, flyers, social media creatives, and branding materials. 
                I believe in continuous learning and constantly improving my technical and creative skills by working on real-world projects and modern web technologies.
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
