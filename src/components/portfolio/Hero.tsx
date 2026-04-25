import { ArrowRight, FileText, Linkedin, Sparkles, Code2, Cpu, GraduationCap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 mesh-bg -z-10" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-coral/30 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-mint/30 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: "6s" }} />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left column */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <div className="chip bg-card/70 backdrop-blur border border-border shadow-soft">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-mint-foreground opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-foreground" />
              </span>
              Available for STEM education & IT roles
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Heidy Veliz</span>
              <br />
              <span className="inline-flex items-center gap-3">
                building curious
                <span className="inline-block px-4 py-1 rounded-2xl bg-gradient-sun text-sun-foreground -rotate-2 shadow-pop">
                  innovators
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              <span className="font-semibold text-foreground">STEM Educator</span> · <span className="font-semibold text-foreground">IT Professional</span> · <span className="font-semibold text-foreground">Future Engineering Manager</span>
              <br />
              Blending creativity, technology, and education to inspire the next generation of innovators.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow group h-12 px-6">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-card/70 backdrop-blur h-12 px-6 border-2">
                <a href="#contact">
                  <FileText className="mr-1 w-4 h-4" />
                  Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full h-12 px-6 hover:bg-primary-soft">
                <a href="https://www.linkedin.com/in/heidy-veliz-fiu6393987/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-1 w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                { icon: GraduationCap, label: "FIU Cum Laude" },
                { icon: Cpu, label: "STEM Lab Builder" },
                { icon: Code2, label: "K–8 Educator" },
                { icon: Rocket, label: "Engineering Mgmt MS" },
              ].map((b) => (
                <div key={b.label} className="chip bg-card border border-border text-foreground">
                  <b.icon className="w-3.5 h-3.5 text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-4 rounded-[2.5rem]" />
              <div className="absolute inset-0 grid place-items-center">
                <img
                  src="/HeidyPic.png"
                  alt="Illustration of Heidy Veliz, STEM educator, with technology icons"
                  width={1024}
                  height={1024}
                  className="w-[88%] h-[88%] object-contain drop-shadow-xl animate-float-slow"
                />
              </div>

              <div className="absolute -top-2 -left-2 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 animate-float">
                <div className="w-9 h-9 rounded-xl bg-gradient-mint grid place-items-center">
                  <Sparkles className="w-4 h-4 text-mint-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Now teaching</div>
                  <div className="text-sm font-semibold">Robotics & AI</div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 glass-card rounded-2xl px-4 py-3 flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="w-9 h-9 rounded-xl bg-gradient-peach grid place-items-center">
                  <Code2 className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Building</div>
                  <div className="text-sm font-semibold">CyberSafeGuard</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 glass-card rounded-2xl px-3 py-2 animate-float" style={{ animationDelay: "0.7s" }}>
                <div className="text-xs font-mono text-primary">{"</>"}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
