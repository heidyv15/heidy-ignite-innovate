import { Award, GraduationCap, Palette, Sparkles, Trello } from "lucide-react";

const degrees = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Florida International University",
    detail: "Cum Laude · Dean's List",
    status: "Completed",
    icon: GraduationCap,
    gradient: "bg-gradient-primary",
  },
  {
    degree: "Master's in Engineering Management",
    school: "Florida International University",
    detail: "Focus on leadership, systems, and innovation",
    status: "In Progress",
    icon: Sparkles,
    gradient: "bg-gradient-mint",
  },
  {
    degree: "Web Design & Development Certification",
    school: "America On Tech",
    detail: "Hands-on training in HTML, CSS, and modern web fundamentals",
    status: "Completed",
    icon: Palette,
    gradient: "bg-gradient-peach",
  },
  {
    degree: "Google Project Management Certificate",
    school: "Google · Coursera",
    detail: "Agile, Scrum, and end-to-end project delivery",
    status: "In Progress",
    icon: Trello,
    gradient: "bg-gradient-sky",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="chip bg-secondary text-secondary-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground" />
            Education
          </div>
          <h2 className="section-title">
            Always learning, <span className="bg-gradient-sky bg-clip-text text-transparent">always teaching</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((d) => (
            <div key={d.degree} className="relative bg-card rounded-3xl p-7 border border-border shadow-soft hover-lift overflow-hidden">
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full ${d.gradient} opacity-20 blur-2xl`} />
              <div className="relative flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl ${d.gradient} grid place-items-center shadow-soft shrink-0`}>
                  <d.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-display font-bold text-lg leading-tight">{d.degree}</h3>
                    <span className={`chip shrink-0 text-[11px] ${d.status === "In Progress" ? "bg-mint/40 text-mint-foreground" : "bg-primary-soft text-primary"}`}>
                      {d.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{d.school}</p>
                  <p className="text-sm text-foreground mt-2">{d.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
