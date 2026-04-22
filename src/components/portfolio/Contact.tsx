import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "velizheidy1578@gmail.com",
    href: "mailto:velizheidy1578@gmail.com",
    icon: Mail,
    gradient: "bg-gradient-primary",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/heidy-veliz-fiu6393987",
    href: "https://www.linkedin.com/in/heidy-veliz-fiu6393987/",
    icon: Linkedin,
    gradient: "bg-gradient-sky",
  },
  {
    label: "GitHub",
    value: "github.com/heidyv15",
    href: "https://github.com/heidyv15",
    icon: Github,
    gradient: "bg-gradient-mint",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="relative bg-gradient-hero rounded-[2.5rem] p-8 md:p-14 overflow-hidden shadow-card">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-coral/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="chip bg-card/70 backdrop-blur border border-white/40 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Let's connect
              </div>
              <h2 className="section-title mb-4">
                Got an idea, role, or classroom that needs a little <span className="bg-gradient-primary bg-clip-text text-transparent">spark</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                I love hearing from educators, recruiters, and fellow makers. Pick a channel — I'll get back to you.
              </p>
            </div>

            <div className="space-y-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-card/80 backdrop-blur border border-white/50 hover-lift"
                >
                  <div className={`w-12 h-12 rounded-xl ${l.gradient} grid place-items-center shadow-soft shrink-0`}>
                    <l.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{l.label}</div>
                    <div className="font-semibold truncate">{l.value}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-12 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Heidy Veliz. Built with curiosity & caffeine.</p>
          <p className="flex items-center gap-2">
            Designed for the next generation of <span className="font-semibold text-foreground">innovators</span>.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
