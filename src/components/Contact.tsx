import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { URLS } from "../constants/constants";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.open(`mailto:${URLS.EMAIL}?subject=${subject}&body=${body}`);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" style={{ padding: "6rem 0", background: "#0f0e0b", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#d4a853" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#d4a853", textTransform: "uppercase" }}>Contact</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#f0ead6", margin: 0, lineHeight: 1.15 }}>
            Let's <em style={{ color: "#d4a853" }}>Connect</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(240,234,214,0.6)", lineHeight: 1.8, margin: 0 }}>
              Open to new opportunities, collaborations, and interesting challenges. Feel free to reach out — I typically respond within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { Icon: Mail, label: "Email", value: URLS.EMAIL, href: `mailto:${URLS.EMAIL}` },
                { Icon: Phone, label: "Phone", value: URLS.PHONE_NUMBER, href: `tel:${URLS.PHONE_NUMBER.replaceAll(" ", "")}` },
                { Icon: MapPin, label: "Location", value: "Ahmedabad, India", href: "#" },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "1rem 1.2rem", border: "1px solid rgba(212,168,83,0.1)", textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(212,168,83,0.03)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.1)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <div style={{ width: "32px", height: "32px", border: "1px solid rgba(212,168,83,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={13} color="#d4a853" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", color: "rgba(240,234,214,0.35)", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(240,234,214,0.7)" }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { Icon: Linkedin, href: URLS.LINKED_IN, label: "LinkedIn" },
                { Icon: Github, href: URLS.GITHUB, label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", border: "1px solid rgba(212,168,83,0.2)", textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.5)"; (e.currentTarget as HTMLElement).style.color = "#d4a853"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.2)"; }}>
                  <Icon size={13} color="#d4a853" />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(240,234,214,0.6)", letterSpacing: "0.05em" }}>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
            {submitted ? (
              <div style={{ border: "1px solid rgba(212,168,83,0.3)", padding: "3rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#d4a853", marginBottom: "0.75rem" }}>Message Sent</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(240,234,214,0.6)", lineHeight: 1.7 }}>Your email client should have opened. I'll get back to you soon.</p>
              </div>
            ) : (
              <div style={{ border: "1px solid rgba(212,168,83,0.12)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {[
                  { field: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { field: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.15em", color: "rgba(240,234,214,0.4)", textTransform: "uppercase", marginBottom: "6px" }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[field as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", background: "rgba(240,234,214,0.03)", border: "1px solid rgba(212,168,83,0.15)", color: "#f0ead6", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(212,168,83,0.4)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(212,168,83,0.15)"; }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.15em", color: "rgba(240,234,214,0.4)", textTransform: "uppercase", marginBottom: "6px" }}>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", background: "rgba(240,234,214,0.03)", border: "1px solid rgba(212,168,83,0.15)", color: "#f0ead6", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", outline: "none", resize: "vertical", boxSizing: "border-box" }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(212,168,83,0.4)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(212,168,83,0.15)"; }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px 24px", background: "linear-gradient(135deg, #d4a853, #c17b3c)", color: "#0d0c0a", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.04em", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 25px rgba(212,168,83,0.25)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                  <Send size={14} /> Send Message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{ marginTop: "5rem", borderTop: "1px solid rgba(212,168,83,0.1)", paddingTop: "2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "rgba(240,234,214,0.3)", fontStyle: "italic" }}>Jignesh Dudharejiya</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "rgba(240,234,214,0.2)" }}>© 2024 · All rights reserved</span>
        </div>
      </div>
    </section>
  );
}
