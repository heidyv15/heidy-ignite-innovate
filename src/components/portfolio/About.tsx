import { Bot, Building2, Users, GraduationCap, type LucideIcon } from "lucide-react";

const stats = [
  { icon: Bot, label: "AI Systems Built", value: "Real-World" },
  { icon: Building2, label: "Business Revenue Supported", value: "$500K+" },
  { icon: Users, label: "Business Owners Helped", value: "Growing" },
  { icon: GraduationCap, label: "Degree", value: "Engineering Mgmt MS" },
  ];

const About = () => {
    return (
          <section id="about" className="py-24 relative">
                <div className="container">
                        <div className="grid lg:grid-cols-12 gap-12">
                                  <div className="lg:col-span-5">
                                              <div className="chip bg-primary-soft text-primary mb-4">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            About me
                                              </div>div>
                                              <h2 className="section-title">
                                                            Builder at heart,<br />
                                                            <span className="bg-gradient-primary bg-clip-text text-transparent">innovator</span>span> by mission.
                                              </h2>h2>
                                  
                                              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 pt-6">
                                                {stats.map((s) => (
                            <div key={s.label} className="glass-card rounded-2xl p-4 hover-lift">
                                              <div className="flex items-center gap-2 mb-1">
                                                                  <s.icon className="w-4 h-4 text-primary" />
                                                                  <div className="text-xs text-muted-foreground">{s.label}</div>div>
                                              </div>div>
                                              <div className="text-sm font-semibold">{s.value}</div>div>
                            </div>div>
                          ))}
                                              </div>div>
                                  </div>div>
                        
                                  <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
                                              <p>
                                                            My journey into AI started close to home. My father owns a successful business, but as a Spanish-speaking owner, language barriers and administrative work consumed hours of his time every day — time that should have gone toward growing his business and serving his customers.
                                              </p>p>
                                              <p>
                                                            I started building AI tools to help him. What began as a personal project quickly became something more powerful: an AI assistant capable of managing customer communication, processing documents, summarizing emails, generating quotes, and handling daily operational tasks — all in Spanish. The AI assistant now supports operations for a business generating{" "}
                                                            <span className="text-foreground font-semibold">over $500,000 annually.</span>span>
                                              </p>p>
                                              <p>
                                                            As I built those tools, I realized my father wasn't alone. Many small business owners — especially bilingual and immigrant-owned businesses — face the same challenges: too much administrative work, too little time, and limited access to technology that actually speaks their language. That realization became the foundation for{" "}
                                                            <span className="text-foreground font-semibold">Velio Tech</span>span>, a company focused on helping underserved business owners adopt AI without needing a technical background.
                                              </p>p>
                                              <p>
                                                            I also teach STEM, and that experience directly shapes how I build. Teaching strengthened my ability to simplify complex ideas, improved my communication and problem-solving skills, and taught me the most important lesson in technology: build around people, not around technical complexity. Every AI system I design starts with the real person who needs to use it.
                                              </p>p>
                                              <p>
                                                            I hold a degree from{" "}
                                                            <span className="text-foreground font-semibold">Florida International University</span>span>{" "}
                                                            (Dean's List, Cum Laude) and am currently completing my{" "}
                                                            <span className="text-foreground font-semibold">Master's in Engineering Management</span>span>. My passion for learning and teaching directly influences how I design AI solutions — practical, human-centered, and built to create real value.
                                              </p>p>
                                  </div>div>
                        </div>div>
                </div>div>
          </section>section>
        );

  export export default About;
};

export default About;</section>
