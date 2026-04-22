import { BookOpen, Code2, Cpu, Laptop, Sparkles } from "lucide-react";

const jobs = [
  {
    role: "K–8 STEM Educator",
    org: "Brauser Maimonides Academy",
    period: "Current",
    icon: Cpu,
    accent: "bg-gradient-primary",
    chipBg: "bg-primary-soft text-primary",
    bullets: [
      "Built and ran a full STEM Lab from the ground up (K–8)",
      "Led robotics, coding, and engineering projects across grade levels",
      "Founded student clubs: Girls Who Design, Robotics, 3D Pen Engineering",
      "Hosted and produced the school's weekly Morning Show",
      "Integrated technology meaningfully into core classroom curricula",
    ],
  },
  {
    role: "Python Instructor — Break Through Tech",
    org: "Hosted at my former high school",
    period: "Recent",
    icon: Code2,
    accent: "bg-gradient-sky",
    chipBg: "bg-sky/40 text-sky-foreground",
    bullets: [
      "Brought the Break Through Tech program back to my old high school",
      "Taught Python fundamentals to a cohort of high school girls",
      "Mentored students on building confidence in coding and tech careers",
      "Created an inclusive space for young women exploring computer science",
    ],
  },
  {
    role: "Freelance K–8 Computer Science Tutor",
    org: "Private 1:1 & small group sessions",
    period: "Ongoing",
    icon: Laptop,
    accent: "bg-gradient-mint",
    chipBg: "bg-mint/40 text-mint-foreground",
    bullets: [
      "Designed personalized CS lessons tailored to each student's pace and interests",
      "Introduced kids to block coding, Python, web basics, and creative tech projects",
      "Helped students build real projects they're proud to share with family",
      "Partnered with parents to support long-term growth in tech literacy",
    ],
  },
  {
    role: "Reading Tutor",
    org: "America Reads",
    period: "Past",
    icon: BookOpen,
    accent: "bg-gradient-peach",
    chipBg: "bg-accent text-accent-foreground",
    bullets: [
      "Worked one-on-one and in small groups with K–2 students",
      "Improved reading fluency, comprehension, and classroom engagement",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="chip bg-coral/40 text-coral-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-foreground" />
            Experience
          </div>
          <h2 className="section-title">Where I've made <span className="bg-gradient-peach bg-clip-text text-transparent">an impact</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((j) => (
            <article key={j.role} className="group relative bg-card rounded-3xl p-7 border border-border shadow-soft hover-lift overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${j.accent}`} />
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${j.accent} grid place-items-center shadow-soft`}>
                    <j.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl leading-tight">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.org}</p>
                  </div>
                </div>
                <span className={`chip ${j.chipBg} shrink-0`}>{j.period}</span>
              </div>

              <ul className="space-y-2.5">
                {j.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
