import { Bot, Brain, Cat, Gamepad2, Globe2, Palette, Rocket, type LucideIcon } from "lucide-react";

type Week = {
  week: string;
  title: string;
  emoji: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  rotate: string;
};

const weeks: Week[] = [
  {
    week: "Week 1",
    emoji: "🎢",
    title: "Roller Coaster Engineering",
    description: "Physics meets design thinking — students designed, prototyped, and tested marble coasters.",
    icon: Rocket,
    gradient: "bg-gradient-peach",
    rotate: "-rotate-1",
  },
  {
    week: "Week 2 & 7",
    emoji: "🤖",
    title: "AI & Machine Learning",
    description: "Hands-on with ChatGPT and creative AI projects — prompts, ethics, and building cool stuff.",
    icon: Brain,
    gradient: "bg-gradient-primary",
    rotate: "rotate-1",
  },
  {
    week: "Week 3",
    emoji: "🐱",
    title: "Scratch Coding",
    description: "Block-based animations and games. From sprite movement to fully playable mini-games.",
    icon: Cat,
    gradient: "bg-gradient-sun",
    rotate: "-rotate-2",
  },
  {
    week: "Week 4",
    emoji: "🌍",
    title: "Minecraft Engineering",
    description: "Collaborative city builds and engineering challenges inside Minecraft Education.",
    icon: Globe2,
    gradient: "bg-gradient-mint",
    rotate: "rotate-2",
  },
  {
    week: "Week 5",
    emoji: "🎨",
    title: "Graphic Design",
    description: "Designed and printed custom hoodies & t-shirts — from concept sketches to final product.",
    icon: Palette,
    gradient: "bg-gradient-peach",
    rotate: "-rotate-1",
  },
  {
    week: "Week 6",
    emoji: "🎮",
    title: "Roblox Game Design",
    description: "Lua scripting, game mechanics, and publishing playable Roblox experiences.",
    icon: Gamepad2,
    gradient: "bg-gradient-sky",
    rotate: "rotate-1",
  },
];

const Lavner = () => {
  return (
    <section id="lavner" className="py-24 relative overflow-hidden">
      {/* fun background */}
      <div className="absolute inset-0 mesh-bg opacity-60 -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sun/40 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-mint/40 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: "4s" }} />

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="chip bg-card border border-border shadow-soft mb-4 mx-auto">
            <Bot className="w-3.5 h-3.5 text-primary" />
            Lavner STEM — Summer Highlight Reel
          </div>
          <h2 className="section-title">
            Seven weeks of <span className="bg-gradient-sun bg-clip-text text-transparent">pure curiosity</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A peek into what kids built, broke, and built better — week by week.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-8">
            {weeks.map((w, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={w.week} className="md:grid md:grid-cols-2 md:gap-12 relative">
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className={`w-5 h-5 rounded-full ${w.gradient} ring-4 ring-background shadow-soft`} />
                  </div>

                  <div className={`${isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <article className={`group glass-card rounded-3xl p-6 hover-lift ${w.rotate} hover:rotate-0 transition-all`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className={`w-12 h-12 rounded-2xl ${w.gradient} grid place-items-center shadow-soft text-2xl`}>
                          {w.emoji}
                        </div>
                        <div className={isLeft ? "md:text-right" : ""}>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider">{w.week}</p>
                          <h3 className="font-display font-bold text-lg leading-tight">{w.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lavner;
