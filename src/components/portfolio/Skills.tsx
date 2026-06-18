import { Bot, Code2, Users, Sparkles, type LucideIcon } from "lucide-react";

type Group = {
  title: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  skills: string[];
};

const groups: Group[] = [
  {
    title: "AI & Automation",
    icon: Bot,
    gradient: "bg-gradient-primary",
    iconColor: "text-primary-foreground",
    skills: [
      "AI Agent Development",
      "Workflow Automation",
      "Prompt Engineering",
      "Business Process Automation",
      "AI Integration",
      "Multi-Agent Systems",
      "Local LLMs",
      "Voice & Document AI",
    ],
  },
  {
    title: "Technology",
    icon: Code2,
    gradient: "bg-gradient-sky",
    iconColor: "text-secondary-foreground",
    skills: [
      "Python",
      "APIs",
      "Flask",
      "GitHub",
      "Web Development",
      "System Design",
      "HTML / CSS",
      "JavaScript",
    ],
  },
  {
    title: "Leadership & Communication",
    icon: Users,
    gradient: "bg-gradient-peach",
    iconColor: "text-accent-foreground",
    skills: [
      "Project Management",
      "Technical Communication",
      "Process Improvement",
      "Team Collaboration",
      "Curriculum Design",
      "Problem Solving",
    ],
  },
  {
    title: "Strengths",
    icon: Sparkles,
    gradient: "bg-gradient-mint",
    iconColor: "text-mint-foreground",
    skills: [
      "Fast Learner",
      "Builder Mindset",
      "Human-Centered Design",
      "Bilingual (EN / ES)",
      "Adaptability",
      "Curiosity",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="chip bg-primary-soft text-primary mb-4 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Skills
          </div>
          <h2 className="section-title">
            Built to <span className="bg-gradient-primary bg-clip-text text-transparent">build</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="glass-card rounded-2xl p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl ${g.gradient} grid place-items-center`}>
                  <g.icon className={`w-4 h-4 ${g.iconColor}`} />
                </div>
                <h3 className="font-semibold text-sm">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="chip bg-card border border-border text-foreground text-xs">
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
