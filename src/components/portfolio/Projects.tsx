import { ExternalLink, Bot, Wrench, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
    id: string;
    title: string;
    tag: string;
    icon: React.ElementType;
    gradient: string;
    short: string;
    details: string;
    stack: string[];
    link?: string;
    linkLabel?: string;
};

const projects: Project[] = [
  {
        id: "velio",
        title: "Velio Tech – AI Business Automation Platform",
        tag: "AI Platform & Company",
        icon: Bot,
        gradient: "bg-gradient-primary",
        short: "Founded to help small businesses leverage AI without requiring technical expertise.",
        details:
                "Velio Tech develops AI-powered business assistants capable of handling customer inquiries, managing communications, processing documents, summarizing emails, supporting operational workflows, and automating repetitive administrative tasks. The mission is to help underserved and bilingual business owners adopt AI in a way that fits how they actually work — without needing a technical background. Every product is built around real people solving real problems.",
        stack: ["AI Agents", "Python", "APIs", "Workflow Automation", "Flask", "Business Automation"],
        link: "https://www.veliotech.org/",
        linkLabel: "Visit Velio Tech",
  },
  {
        id: "lv-welding",
        title: "LV Welding AI Business Assistant",
        tag: "Real-World AI Deployment",
        icon: Wrench,
        gradient: "bg-gradient-sky",
        short: "A custom AI assistant built to support a real-world welding business — originally built for my father.",
        details:
                "This AI assistant was originally built to help my father, a Spanish-speaking business owner, manage the administrative side of his welding business. It supports Spanish-language interaction, voice note processing, document understanding, quote generation, email summarization, customer communication assistance, and daily operational briefings. What started as a personal solution for one business became the foundation for broader AI business automation work — and the inspiration behind Velio Tech.",
        stack: ["Spanish NLP", "Voice Processing", "Document AI", "Email Automation", "Python", "Custom Agents"],
  },
  {
        id: "openclaw",
        title: "Personal AI Operations Hub",
        tag: "AI Ecosystem & Research Lab",
        icon: Network,
        gradient: "bg-gradient-mint",
        short: "A self-hosted AI ecosystem integrating multiple specialized agents and automation workflows.",
        details:
                "This environment serves as a personal testing ground for exploring advanced AI workflows, agent collaboration, and automation systems before deploying ideas into real-world business applications. It features a multi-agent architecture, Discord integration for notifications and commands, workflow automation pipelines, task orchestration, AI-powered productivity tools, and experimentation with both local and cloud-based AI systems. Ideas tested here often evolve into features deployed through Velio Tech.",
        stack: ["Multi-Agent AI", "Discord", "Workflow Automation", "Local LLMs", "Task Orchestration", "Python"],
  },
  ];

const Projects = () => {
    return (
          <section id="projects" className="py-24 relative">
                <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                                  <div className="chip bg-primary-soft text-primary mb-4 mx-auto">
                                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                              Projects
                                  </div>div>
                                  <h2 className="section-title">
                                              Real AI solutions.<br />
                                              <span className="bg-gradient-primary bg-clip-text text-transparent">Real business impact.</span>span>
                                  </h2>h2>
                                  <p className="text-muted-foreground text-lg mt-4">
                                              Every project here was built to solve a real problem for a real person — not as a classroom exercise, but as a working system deployed in the real world.
                                  </p>p>
                        </div>div>
                
                        <div className="space-y-8">
                          {projects.map((p) => (
                        <div
                                        key={p.id}
                                        className="glass-card rounded-3xl p-8 hover-lift transition-all duration-300"
                                      >
                                      <div className="grid lg:grid-cols-12 gap-8 items-start">
                                                      <div className="lg:col-span-8 space-y-4">
                                                                        <div className="flex items-center gap-3 flex-wrap">
                                                                                            <div className={`w-10 h-10 rounded-xl ${p.gradient} flex items-center justify-center`}>
                                                                                                                  <p.icon className="w-5 h-5 text-white" />
                                                                                              </div>div>
                                                                                            <span className="chip text-xs bg-primary-soft text-primary">{p.tag}</span>span>
                                                                        </div>div>
                                                                        <h3 className="text-2xl font-bold">{p.title}</h3>h3>
                                                                        <p className="text-muted-foreground font-medium">{p.short}</p>p>
                                                                        <p className="text-muted-foreground leading-relaxed">{p.details}</p>p>
                                                                        <div className="flex flex-wrap gap-2 pt-2">
                                                                          {p.stack.map((s) => (
                                                              <span key={s} className="chip bg-card border border-border text-foreground text-xs">
                                                                {s}
                                                              </span>span>
                                                            ))}
                                                                        </div>div>
                                                      </div>div>
                                                      <div className="lg:col-span-4 flex flex-col gap-3">
                                                        {p.link && (
                                                            <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow w-full">
                                                                                  <a href={p.link} target="_blank" rel="noreferrer">
                                                                                                          <ExternalLink className="mr-2 w-4 h-4" />
                                                                                    {p.linkLabel}
                                                                                    </a>a>
                                                            </Button>Button>
                                                                        )}
                                                      </div>div>
                                      </div>div>
                        </div>div>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
};

      export default Projects;


export default Projects;</section>
