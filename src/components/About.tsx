import { motion } from "motion/react";
import { Globe, User } from "lucide-react";

const SectionLabel = ({ children }: { children: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
    <div style={{ width: "24px", height: "1px", background: "#d4a853" }} />
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#d4a853", textTransform: "uppercase" }}>{children}</span>
  </div>
);

export function About() {
  const languages = [
    { name: "English", level: "Proficient", pct: 85 },
    { name: "Hindi", level: "Fluent", pct: 95 },
    { name: "Gujarati", level: "Native", pct: 100 },
  ];

  return (
    <section id="about" style={{ padding: "6rem 0", background: "#0d0c0a", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{ position: "absolute", top: "10%", right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
          <SectionLabel>About Me</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#f0ead6", margin: 0, lineHeight: 1.15 }}>
            Crafting <em style={{ color: "#d4a853" }}>Digital</em> Experiences
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
          {/* Professional Summary */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
            <div style={{ border: "1px solid rgba(212,168,83,0.12)", padding: "2rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "2px", height: "60%", background: "linear-gradient(180deg, #d4a853, transparent)" }} />
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#d4a853", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 500 }}>Professional Summary</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Seeking a challenging role as a Node.js / MERN Stack Developer where I can leverage my experience in building scalable backend systems and full-stack web applications.",
                  "Experienced Node.js Developer with 3 years of professional experience in RESTful APIs, scalable backend architectures, and modern web applications using Node.js, Express.js, MongoDB, React.js, and TypeScript.",
                  "Proven ability to design efficient database structures, optimize application performance, and integrate secure payment gateways such as Razorpay, PayPal, and PayTabs."
                ].map((text, i) => (
                  <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(240,234,214,0.6)", lineHeight: 1.75, margin: 0 }}>{text}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column: stats + languages */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Quick facts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { val: "3+", label: "Years Exp." },
                { val: "10+", label: "Projects" },
                { val: "5+", label: "Tech Stacks" },
                { val: "15+", label: "Libraries" },
              ].map(({ val, label }) => (
                <div key={label} style={{ border: "1px solid rgba(212,168,83,0.1)", padding: "1.2rem", position: "relative" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#d4a853", lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(240,234,214,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.3rem" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div style={{ border: "1px solid rgba(212,168,83,0.12)", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.2rem" }}>
                <Globe size={14} color="#d4a853" />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#d4a853", textTransform: "uppercase" }}>Languages</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {languages.map((lang, i) => (
                  <motion.div key={lang.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} viewport={{ once: true }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#f0ead6" }}>{lang.name}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(212,168,83,0.7)", letterSpacing: "0.05em" }}>{lang.level}</span>
                    </div>
                    <div style={{ height: "2px", background: "rgba(240,234,214,0.08)", position: "relative", overflow: "hidden" }}>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${lang.pct}%` }} transition={{ duration: 1, delay: 0.4 + i * 0.1 }} viewport={{ once: true }} style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "linear-gradient(90deg, #d4a853, #c17b3c)" }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Passion line */}
            <div style={{ border: "1px solid rgba(212,168,83,0.12)", padding: "1.5rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "2px", height: "60%", background: "linear-gradient(180deg, #d4a853, transparent)" }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "rgba(240,234,214,0.6)", lineHeight: 1.7, margin: 0 }}>
                "Passionate about writing clean, maintainable code and building reliable systems while continuously learning new technologies."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
