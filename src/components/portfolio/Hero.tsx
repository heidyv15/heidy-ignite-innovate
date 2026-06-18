import { ArrowRight, Linkedin, ExternalLink, Bot, Zap, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Bot, label: "AI Builder" },
  { icon: Zap, label: "Technology Innovator" },
  { icon: Building2, label: "Founder, Velio Tech" },
  { icon: GraduationCap, label: "Engineering Mgmt MS" },
];

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 mesh-bg -z-10" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-coral/30 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-mint/30 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: "6s" }} />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <div className="chip bg-card/70 backdrop-blur border border-border shadow-soft">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-mint-foreground opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-foreground" />
              </span>
              AI Builder &amp; Founder of Velio Tech
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Building{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">AI Solutions</span>
              <br />
              <span className="inline-flex items-center gap-3">
                That Empower{" "}
                <span className="inline-block px-4 py-1 rounded-2xl bg-gradient-sun text-sun-foreground -rotate-2 shadow-pop">
                  Small Businesses
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I design and deploy practical AI systems that help businesses automate operations, improve communication, and reclaim valuable time. From AI business assistants to custom workflow automation, I focus on building technology that solves real problems for real people.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow group h-12 px-6">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-card/70 backdrop-blur h-12 px-6 border-2">
                <a href="https://www.veliotech.org/" target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-1 w-4 h-4" />
                  Visit Velio Tech
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
              {badges.map((b) => (
                <div key={b.label} className="chip bg-card border border-border text-foreground">
                  <b.icon className="w-3.5 h-3.5 text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src="/HeidyPic.png"
                alt="Heidy Veliz"
                className="w-full object-cover rounded-3xl"
              />
              <div className="absolute top-4 right-4 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 shadow-soft text-sm font-medium">
                <Bot className="w-4 h-4 text-primary" />
                Building AI Solutions
              </div>
              <div className="absolute bottom-4 left-4 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 shadow-soft text-sm font-medium">
                <Building2 className="w-4 h-4 text-primary" />
                Founder, Velio Tech
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
