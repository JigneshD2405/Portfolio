import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { projectsData } from "../data/projectsData";

interface ProjectsProps {
  onProjectClick?: (projectId: string) => void;
}

const categoryColors: Record<string, string> = {
  Marketplace: "#d4a853",
  "Business Management": "#c17b3c",
  Education: "#d4a853",
  "Real Estate": "#e8c97a",
  Logistics: "#c17b3c",
  FinTech: "#d4a853",
  "Food & Hospitality": "#c17b3c",
  "Healthcare Software": "#e8c97a",
  "Enterprise Software": "#d4a853",
};

export function Projects({ onProjectClick }: ProjectsProps) {
  const featured = projectsData.slice(0, 4);
  const rest = projectsData.slice(4);

  return (
    <section id="projects" style={{ padding: "6rem 0", background: "#0d0c0a", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            marginBottom: "4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#d4a853" }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "#d4a853",
                  textTransform: "uppercase",
                }}
              >
                Portfolio
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#f0ead6",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Selected <em style={{ color: "#d4a853" }}>Projects</em>
            </h2>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "rgba(240,234,214,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            {projectsData.length} projects total
          </span>
        </motion.div>

        {/* Featured projects - 2 column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {featured.map((project, index) => {
            const accentColor = categoryColors[project.category] || "#d4a853";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => onProjectClick?.(project.id)}
                style={{
                  border: "1px solid rgba(212,168,83,0.12)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(212,168,83,0.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.12)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {/* Top accent */}
                <div style={{ height: "2px", background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

                <div style={{ padding: "1.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        padding: "3px 8px",
                        border: `1px solid ${accentColor}40`,
                        color: accentColor,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        color: "rgba(240,234,214,0.3)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {project.period}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#f0ead6",
                      margin: "0 0 0.6rem 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(240,234,214,0.55)",
                      lineHeight: 1.65,
                      margin: "0 0 1.2rem 0",
                    }}
                  >
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.2rem" }}>
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.62rem",
                          padding: "3px 8px",
                          border: "1px solid rgba(212,168,83,0.15)",
                          color: "rgba(240,234,214,0.45)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.62rem",
                          padding: "3px 8px",
                          color: "rgba(240,234,214,0.3)",
                        }}
                      >
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: accentColor }}>
                    <span
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em" }}
                    >
                      VIEW DETAILS
                    </span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Remaining projects - compact list */}
        <div style={{ border: "1px solid rgba(212,168,83,0.1)", overflow: "hidden" }}>
          <div
            style={{
              padding: "1rem 1.5rem",
              borderBottom: "1px solid rgba(212,168,83,0.08)",
              background: "rgba(212,168,83,0.02)",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "rgba(240,234,214,0.35)",
                textTransform: "uppercase",
              }}
            >
              More Projects
            </span>
          </div>
          {rest.map((project, index) => {
            const accentColor = categoryColors[project.category] || "#d4a853";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                onClick={() => onProjectClick?.(project.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  borderBottom: index < rest.length - 1 ? "1px solid rgba(212,168,83,0.06)" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(212,168,83,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "6px", height: "6px", background: accentColor, flexShrink: 0 }} />
                  <div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(240,234,214,0.8)",
                        marginRight: "0.75rem",
                      }}
                    >
                      {project.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        padding: "2px 7px",
                        border: `1px solid ${accentColor}35`,
                        color: accentColor,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.35rem" }}>
                    {project.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.6rem",
                          color: "rgba(240,234,214,0.3)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={12} color={accentColor} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
