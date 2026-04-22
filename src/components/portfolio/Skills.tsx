import { Code2, GraduationCap, Server, Sparkles, type LucideIcon } from "lucide-react";

type Group = {
  title: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  skills: string[];
};

const groups: Group[] = [
  {
    title: "Tech & Innovation",
    icon: Code2,
    gradient: "bg-gradient-primary",
    iconColor: "text-primary-foreground",
    skills: ["HTML", "CSS", "Python (foundational)", "CAD", "3D Printing", "Robotics", "Digital Fabrication", "Prompt Engineering", "Innovation", "Engineering"],
  },
  {
    title: "Education",
    icon: GraduationCap,
    gradient: "bg-gradient-peach",
    iconColor: "text-accent-foreground",
    skills: ["Project-Based Learning", "Curriculum Design", "Student Engagement", "Instructional Coaching", "Instruction Delivery", "Project-Based Learning", "Technology Integration"],
  },
  {
    title: "IT",
    icon: Server,
    gradient: "bg-gradient-sky",
    iconColor: "text-secondary-foreground",
    skills: ["Troubleshooting", "Virtual Machines", "Operating Systems", "Hardware Setup", "Data Analysis",],
  },
  {
    title: "Soft Skills",
    icon: Sparkles,
    gradient: "bg-gradient-mint",
    iconColor: "text-mint-foreground",
    skills: ["Public Speaking", "Collaboration", "Creativity", "Strategic thinking", "Adaptability", "Emotional Intelligance", "Problem Solving"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="chip bg-mint/40 text-mint-foreground mb-4 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-mint-foreground" />
            Toolbox
          </div>
          <h2 className="section-title">A blend of <span className="bg-gradient-primary bg-clip-text text-transparent">code, classroom & craft</span></h2>
          <p className="text-muted-foreground mt-4">Four overlapping superpowers that show up in every project.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="group relative bg-card rounded-3xl p-6 border border-border shadow-soft hover-lift overflow-hidden">
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${g.gradient} opacity-20 group-hover:opacity-40 transition-opacity blur-2xl`} />
              <div className={`relative w-12 h-12 rounded-2xl ${g.gradient} grid place-items-center mb-4 shadow-soft group-hover:rotate-6 group-hover:scale-110 transition-transform`}>
                <g.icon className={`w-6 h-6 ${g.iconColor}`} />
              </div>
              <h3 className="font-display font-bold text-lg mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span key={s} className="chip bg-muted text-foreground text-[11px]">
                    {s}
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

export default Skills;
