import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  ];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
          const onScroll = () => setScrolled(window.scrollY > 24);
          onScroll();
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
          <header
                  className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                            scrolled ? "py-2" : "py-4"
                  }`}
                >
                <div className="container">
                        <nav
                                    className={`flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all duration-300 ${
                                                  scrolled ? "glass-card shadow-soft" : "bg-transparent"
                                    }`}
                                  >
                                  <a href="#top" className="flex items-center gap-2 group">
                                              <span className="grid place-items-center w-9 h-9 rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-soft group-hover:rotate-6 transition-transform text-sm">
                                                            HV
                                              </span>span>
                                              <span className="font-display font-bold text-lg hidden sm:inline">Heidy Veliz</span>span>
                                  </a>a>
                        
                                  <div className="hidden lg:flex items-center gap-1">
                                    {links.map((l) => (
                                                  <a
                                                                    key={l.href}
                                                                    href={l.href}
                                                                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary-soft rounded-full transition-colors"
                                                                  >
                                                    {l.label}
                                                  </a>a>
                                                ))}
                                              <a
                                                              href="https://www.veliotech.org/"
                                                              target="_blank"
                                                              rel="noreferrer"
                                                              className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary-soft rounded-full transition-colors flex items-center gap-1"
                                                            >
                                                            Velio Tech
                                                            <ExternalLink className="w-3 h-3" />
                                              </a>a>
                                  </div>div>
                        
                                  <div className="hidden lg:flex items-center gap-2">
                                              <Button asChild size="sm" className="rounded-full bg-gradient-primary text-primary-foreground">
                                                            <a href="#contact">Let's talk</a>a>
                                              </Button>Button>
                                  </div>div>
                        
                                  <button
                                                className="lg:hidden p-2 rounded-full hover:bg-primary-soft transition-colors"
                                                onClick={() => setOpen((v) => !v)}
                                                aria-label="Toggle menu"
                                              >
                                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                  </button>button>
                        </nav>nav>
                
                  {open && (
                            <div className="lg:hidden mt-2 glass-card rounded-2xl p-4 space-y-1">
                              {links.map((l) => (
                                            <a
                                                              key={l.href}
                                                              href={l.href}
                                                              onClick={() => setOpen(false)}
                                                              className="block px-4 py-2.5 text-sm font-medium rounded-xl hover:bg-primary-soft transition-colors"
                                                            >
                                              {l.label}
                                            </a>a>
                                          ))}
                                        <a
                                                        href="https://www.veliotech.org/"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-primary rounded-xl hover:bg-primary-soft transition-colors"
                                                      >
                                                      Velio Tech
                                                      <ExternalLink className="w-3 h-3" />
                                        </a>a>
                            </div>div>
                        )}
                </div>div>
          </header>header>
        );
};

export default Navbar;</header>
