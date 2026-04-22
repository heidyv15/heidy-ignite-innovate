import { GraduationCap, Heart, Lightbulb, Users } from "lucide-react";

const stats = [
  { icon: Users, label: "Students taught", value: "K–12" },
  { icon: GraduationCap, label: "GPA honors", value: "Cum Laude" },
  { icon: Lightbulb, label: "STEM clubs led", value: "3+" },
  { icon: Heart, label: "Driven by", value: "Curiosity" },
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
            </div>
            <h2 className="section-title">
              Educator at heart, <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">technologist</span> by craft.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm an <span className="text-foreground font-semibold">IT student at Florida International University</span>{" "}
              (Dean's List, graduating Cum Laude) currently pursuing my{" "}
              <span className="text-foreground font-semibold">Master's in Engineering Management</span>.
            </p>
            <p>
              My passion lives at the intersection of STEM education, innovation, and design.
              I've taught everyone from kindergarteners discovering their first robot to
              high schoolers shipping real projects — and I love making technology feel
              <span className="text-foreground font-semibold"> engaging, creative, and hands-on</span>.
            </p>
            <p>
              Whether I'm building a STEM Lab from scratch, scripting a Roblox game with
              middle schoolers, or troubleshooting a stubborn virtual machine, I bring the
              same energy: curious, collaborative, and a little bit playful.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-4 hover-lift">
                  <s.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="font-display font-bold text-lg text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
