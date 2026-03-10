import { motion } from "motion/react";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    title: "Senior Node.js Developer",
    company: "Mighty Ventures",
    location: "Ahmedabad, India",
    period: "Nov 2024 — Present",
    status: "current",
    achievements: [
      "Designed and developed scalable backend services using Node.js, Express, and MongoDB for multiple production applications.",
      "Implemented secure REST APIs with authentication, payment integrations, and third-party services.",
      "Built high-performance systems handling real-time features using Socket.IO and event-driven architecture.",
      "Integrated multiple payment gateways including Stripe, Razorpay, PayPal, and PayTabs.",
      "Improved API performance and database queries resulting in faster response times and improved scalability.",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "Next.js", "TypeScript", "Socket.IO", "Stripe", "Razorpay"],
  },
  {
    title: "Node.js Developer",
    company: "Saturn Cube Technology",
    location: "Ahmedabad, India",
    period: "Aug 2023 — Oct 2024",
    status: "past",
    achievements: [
      "Developed backend APIs and business logic for multiple web platforms using Node.js and MongoDB.",
      "Built multilingual systems by integrating translation APIs for global user accessibility.",
      "Implemented geolocation-based search features for restaurant discovery platforms.",
      "Developed secure payment workflows and subscription systems using Stripe and PayPal.",
      "Optimized database queries and API responses to improve application performance.",
    ],
    techStack: ["Node.js", "MongoDB", "React.js", "Stripe", "DeepL API", "Google Maps API", "PayPal"],
  },
  {
    title: "Junior Node.js Developer",
    company: "Aris Infosystems",
    location: "Ahmedabad, India",
    period: "Jan 2022 — Jul 2023",
    status: "past",
    achievements: [
      "Built and maintained backend APIs for healthcare and enterprise software platforms.",
      "Implemented real-time communication features using Socket.IO for an HRMS project.",
      "Designed and developed automated leave management logic with complex business rules.",
      "Contributed to nursing workforce scheduling system with multi-hospital support.",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "JavaScript"],
  },
];

export function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" style={{ padding: "6rem 0", background: "#0d0c0a", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#d4a853" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#d4a853", textTransform: "uppercase" }}>Career</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#f0ead6", margin: 0, lineHeight: 1.15 }}>
            Work <em style={{ color: "#d4a853" }}>Experience</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0", maxWidth: "900px" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ position: "relative", paddingLeft: "2.5rem", paddingBottom: "3rem", cursor: "pointer" }}
              onClick={() => setActiveExp(activeExp === index ? -1 : index)}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div style={{ position: "absolute", left: "7px", top: "20px", bottom: 0, width: "1px", background: "linear-gradient(180deg, rgba(212,168,83,0.3), transparent)" }} />
              )}

              {/* Timeline dot */}
              <div style={{
                position: "absolute", left: 0, top: "6px", width: "15px", height: "15px",
                border: exp.status === "current" ? "2px solid #d4a853" : "1px solid rgba(212,168,83,0.3)",
                background: exp.status === "current" ? "rgba(212,168,83,0.15)" : "#0d0c0a",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {exp.status === "current" && <div style={{ width: "5px", height: "5px", background: "#d4a853" }} />}
              </div>

              <div style={{ border: "1px solid rgba(212,168,83,0.1)", padding: "1.5rem", background: activeExp === index ? "rgba(212,168,83,0.03)" : "transparent", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#f0ead6", margin: 0 }}>{exp.title}</h3>
                      {exp.status === "current" && (
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", padding: "2px 8px", border: "1px solid rgba(212,168,83,0.5)", color: "#d4a853", letterSpacing: "0.1em" }}>CURRENT</span>
                      )}
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#d4a853", fontStyle: "italic" }}>{exp.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end", marginBottom: "2px" }}>
                      <Calendar size={11} color="rgba(240,234,214,0.35)" />
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(240,234,214,0.4)", letterSpacing: "0.05em" }}>{exp.period}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>
                      <MapPin size={11} color="rgba(240,234,214,0.35)" />
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(240,234,214,0.35)" }}>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {activeExp === index && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                    <div style={{ borderTop: "1px solid rgba(212,168,83,0.08)", marginTop: "1rem", paddingTop: "1rem" }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.2rem 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {exp.achievements.map((ach, i) => (
                          <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                            <ChevronRight size={12} color="#d4a853" style={{ flexShrink: 0, marginTop: "4px" }} />
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(240,234,214,0.65)", lineHeight: 1.6 }}>{ach}</span>
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {exp.techStack.map((tech) => (
                          <span key={tech} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", padding: "3px 8px", border: "1px solid rgba(212,168,83,0.2)", color: "rgba(240,234,214,0.5)", letterSpacing: "0.03em" }}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(212,168,83,0.5)", letterSpacing: "0.1em" }}>{activeExp === index ? "COLLAPSE" : "EXPAND"}</span>
                  <motion.div animate={{ rotate: activeExp === index ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight size={10} color="rgba(212,168,83,0.5)" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
