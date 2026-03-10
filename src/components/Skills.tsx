import { motion } from "motion/react";

const categories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Socket.IO", level: 88 },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "SQL", level: 80 },
      { name: "Redis", level: 85 },
      { name: "AWS S3", level: 82 },
    ],
  },
  {
    title: "Frontend & Full-Stack",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    title: "Integrations & Tools",
    skills: [
      { name: "Stripe / Razorpay", level: 85 },
      { name: "PayPal / PayTabs", level: 80 },
      { name: "Git & CI/CD", level: 85 },
      { name: "System Design", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0", background: "#0f0e0b", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#d4a853" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#d4a853", textTransform: "uppercase" }}>Expertise</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#f0ead6", margin: 0, lineHeight: 1.15 }}>
            Technical <em style={{ color: "#d4a853" }}>Skills</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              viewport={{ once: true }}
              style={{ border: "1px solid rgba(212,168,83,0.12)", padding: "1.75rem", position: "relative" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "2px", height: "40px", background: "linear-gradient(180deg, #d4a853, transparent)" }} />
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", color: "#d4a853", textTransform: "uppercase", marginBottom: "1.5rem" }}>{cat.title}</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(240,234,214,0.8)" }}>{skill.name}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(212,168,83,0.6)" }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: "2px", background: "rgba(240,234,214,0.06)", position: "relative", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + si * 0.06 }}
                        viewport={{ once: true }}
                        style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "linear-gradient(90deg, #d4a853, #c17b3c)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional soft skills row */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} style={{ marginTop: "2rem", border: "1px solid rgba(212,168,83,0.1)", padding: "1.5rem" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: "rgba(240,234,214,0.35)", textTransform: "uppercase", marginBottom: "1rem" }}>Soft Skills & Methodologies</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {["Problem Solving", "System Thinking", "Team Collaboration", "Communication", "Agile / Scrum", "Code Review", "Documentation", "Ownership & Responsibility", "Continuous Learning"].map((skill) => (
              <span key={skill} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", padding: "6px 14px", border: "1px solid rgba(212,168,83,0.15)", color: "rgba(240,234,214,0.6)", transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.4)"; (e.currentTarget as HTMLElement).style.color = "#d4a853"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.15)"; (e.currentTarget as HTMLElement).style.color = "rgba(240,234,214,0.6)"; }}
              >{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
