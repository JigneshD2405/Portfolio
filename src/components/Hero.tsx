import { ArrowRight, GithubIcon, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { URLS } from "../constants/constants";

export function Hero() {
  const roles = ["Node.js Developer", "MERN Stack Engineer", "Backend Architect", "API Specialist"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.slice(0, displayText.length + 1));
        if (displayText.length + 1 === role.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(role.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#0d0c0a" }}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute" style={{ top: "12%", right: "-5%", width: "55%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.25), transparent)", transformOrigin: "right" }} />
        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }} className="absolute" style={{ bottom: "20%", left: "-5%", width: "45%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)", transformOrigin: "left" }} />
        <div className="absolute" style={{ top: "30%", right: "15%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} className="absolute top-0 right-0" style={{ width: "280px", height: "280px", borderBottom: "1px solid rgba(212,168,83,0.1)", borderLeft: "1px solid rgba(212,168,83,0.1)" }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1.2 }} className="absolute bottom-0 left-0" style={{ width: "180px", height: "180px", borderTop: "1px solid rgba(212,168,83,0.08)", borderRight: "1px solid rgba(212,168,83,0.08)" }} />
        <div className="absolute" style={{ top: "15%", left: "5%", width: "120px", height: "120px", backgroundImage: "radial-gradient(circle, rgba(212,168,83,0.2) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center" style={{ minHeight: "90vh" }}>
          <div className="lg:col-span-7 space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3">
              <div style={{ width: "32px", height: "1px", background: "#d4a853" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#d4a853", textTransform: "uppercase" }}>Available for opportunities</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 8vw, 6.5rem)", fontWeight: 700, lineHeight: 1.0, color: "#f0ead6", margin: 0 }}>Jignesh</h1>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 8vw, 6.5rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.05, background: "linear-gradient(135deg, #e8c97a, #d4a853, #c17b3c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", margin: 0 }}>Dudharejiya</h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} style={{ height: "2rem", display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "rgba(240,234,214,0.65)", letterSpacing: "0.03em" }}>
                {displayText}
                <span style={{ display: "inline-block", width: "2px", height: "1.1em", background: "#d4a853", marginLeft: "2px", verticalAlign: "text-bottom", animation: "blink 1s step-end infinite" }} />
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "rgba(240,234,214,0.6)", lineHeight: 1.75, maxWidth: "520px" }}>
              Node.js & MERN Stack developer with 3+ years crafting scalable backend systems, REST APIs, and real-time applications. Focused on clean architecture and performance-driven solutions.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-wrap gap-4 items-center">
              <button onClick={() => window.open(`mailto:${URLS.EMAIL}`)} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 28px", background: "linear-gradient(135deg, #d4a853, #c17b3c)", color: "#0d0c0a", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.04em", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(212,168,83,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <Mail size={14} /> Get In Touch
              </button>
              <button onClick={() => scrollToSection("projects")} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 28px", background: "transparent", color: "#f0ead6", border: "1px solid rgba(212,168,83,0.3)", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.04em", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.7)"; (e.currentTarget as HTMLElement).style.color = "#d4a853"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.3)"; (e.currentTarget as HTMLElement).style.color = "#f0ead6"; }}>
                View Work <ArrowRight size={14} />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }} className="flex items-center gap-5">
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: "rgba(240,234,214,0.3)", textTransform: "uppercase" }}>Connect</span>
              {[
                { Icon: Linkedin, href: URLS.LINKED_IN, label: "LinkedIn" },
                { Icon: GithubIcon, href: URLS.GITHUB, label: "GitHub" },
                { Icon: Phone, href: `tel:${URLS.PHONE_NUMBER.replaceAll(" ", "")}`, label: "Phone" },
              ].map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} whileHover={{ y: -3 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", border: "1px solid rgba(212,168,83,0.2)", color: "rgba(240,234,214,0.5)", transition: "all 0.3s ease", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.6)"; (e.currentTarget as HTMLElement).style.color = "#d4a853"; (e.currentTarget as HTMLElement).style.background = "rgba(212,168,83,0.08)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(240,234,214,0.5)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }} className="lg:col-span-5 hidden lg:flex flex-col gap-4">
            <div style={{ border: "1px solid rgba(212,168,83,0.15)", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg, #d4a853, transparent)" }} />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 700, color: "#d4a853", lineHeight: 1, letterSpacing: "-0.02em" }}>3+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(240,234,214,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.5rem" }}>Years of professional experience</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "10+", label: "Projects Shipped" }, { value: "5+", label: "Payment Gateways" }].map(({ value, label }) => (
                <div key={label} style={{ border: "1px solid rgba(212,168,83,0.1)", padding: "1.5rem", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: "linear-gradient(90deg, #d4a853, transparent)", opacity: 0.4 }} />
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 600, color: "#e8c97a", lineHeight: 1 }}>{value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(240,234,214,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.4rem" }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid rgba(212,168,83,0.1)", padding: "1.5rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: "rgba(240,234,214,0.35)", textTransform: "uppercase", marginBottom: "1rem" }}>Core Stack</div>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "React.js", "TypeScript", "Socket.IO", "AWS S3"].map((tech) => (
                  <span key={tech} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", padding: "4px 10px", border: "1px solid rgba(212,168,83,0.2)", color: "rgba(240,234,214,0.55)", letterSpacing: "0.03em" }}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="absolute bottom-8 left-1/2" style={{ transform: "translateX(-50%)", cursor: "pointer" }} onClick={() => scrollToSection("about")}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(240,234,214,0.25)", textTransform: "uppercase" }}>Scroll</div>
            <div style={{ width: "1px", height: "40px", background: "linear-gradient(180deg, rgba(212,168,83,0.5), transparent)" }} />
          </motion.div>
        </motion.div>
      </div>
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </section>
  );
}
