import { useState } from "react";
import { ArrowUpRight, Cpu, Shield, Tv, Wrench, X, type LucideIcon } from "lucide-react";

type Project = {
  title: string;
  tag: string;
  icon: LucideIcon;
  gradient: string;
  short: string;
  details: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "CyberSafeGuard",
    tag: "Cybersecurity Education",
    icon: Shield,
    gradient: "bg-gradient-primary",
    short: "An interactive site teaching students to spot phishing, scams, and unsafe behavior online.",
    details:
      "CyberSafeGuard is a cybersecurity education website designed for young learners and families. It walks users through real-world scenarios — phishing emails, suspicious links, password hygiene — using bite-sized lessons, quizzes, and friendly visuals.",
    stack: ["HTML", "CSS", "JavaScript", "Education"],
  },
  {
    title: "Helpdesk Ticketing System",
    tag: "Full-Stack Web App",
    icon: Wrench,
    gradient: "bg-gradient-sky",
    short: "A lightweight Flask + SQLite ticketing system to track and resolve IT support requests.",
    details:
      "A full-stack helpdesk app built with Python and Flask. Users can submit tickets, agents triage and update status, and admins view dashboards. Stored in SQLite with clean Jinja templates and form validation.",
    stack: ["Python", "Flask", "SQLite", "Jinja"],
  },
  {
    title: "STEM Lab Projects",
    tag: "Robotics & Engineering",
    icon: Cpu,
    gradient: "bg-gradient-mint",
    short: "Hands-on robotics, 3D-printed parts, and engineering builds across K–8 classrooms.",
    details:
      "A growing portfolio of student-built projects from the STEM Lab — line-following robots, 3D-printed prosthetics-inspired hands, marble runs, paper circuits, and more. Curriculum designed with Project-Based Learning at the core.",
    stack: ["Robotics", "3D Printing", "CAD", "PBL"],
  },
  {
    title: "Morning Show Production",
    tag: "Media & Leadership",
    icon: Tv,
    gradient: "bg-gradient-peach",
    short: "A weekly student-run broadcast — scripts, cameras, editing, and on-air talent.",
    details:
      "Each week students plan, write, film, and edit a school-wide morning broadcast. Roles rotate so kids build leadership, public speaking, and media literacy. Weekly themes tie back to classroom learning.",
    stack: ["Media", "Leadership", "Storytelling"],
  },
];

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="chip bg-sun/50 text-sun-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-foreground" />
            Featured projects
          </div>
          <h2 className="section-title">Things I've <span className="bg-gradient-sun bg-clip-text text-transparent">built & shipped</span></h2>
          <p className="text-muted-foreground mt-4">Click any card for the full story.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className="group text-left relative bg-card rounded-3xl p-7 border border-border shadow-soft hover-lift overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full ${p.gradient} opacity-25 blur-3xl group-hover:opacity-50 transition-opacity`} />
              <div className="relative flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl ${p.gradient} grid place-items-center shadow-soft group-hover:scale-110 group-hover:-rotate-6 transition-transform`}>
                  <p.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div className="relative">
                <p className="text-xs font-medium text-primary mb-1">{p.tag}</p>
                <h3 className="font-display font-bold text-2xl mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.short}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="chip bg-muted text-foreground text-[11px]">{s}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 grid place-items-center p-4 bg-foreground/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="relative bg-card rounded-3xl max-w-lg w-full p-8 shadow-glow animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className={`w-14 h-14 rounded-2xl ${active.gradient} grid place-items-center shadow-soft mb-4`}>
              <active.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="text-xs font-medium text-primary">{active.tag}</p>
            <h3 className="font-display font-bold text-2xl mb-3">{active.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">{active.details}</p>
            <div className="flex flex-wrap gap-1.5">
              {active.stack.map((s) => (
                <span key={s} className="chip bg-primary-soft text-primary">{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
