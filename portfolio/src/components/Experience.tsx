"use client";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const experiences = [
  {
    role: "Flutter Developer",
    company: "Surge",
    location: "Manchester, England, United Kingdom (Remote)",
    period: "Aug 2025 – Present",
    type: "Full-time",
    current: true,
    bullets: [
      "Integrated thermal receipt printing using Android native code, improving receipt generation speed by 70% and eliminating cashier workflow bottlenecks",
      "Optimized multiple screens and resolved critical crash-causing bugs, reducing screen load times by up to 40% and significantly improving app stability",
      "Collaborate with backend team to integrate new APIs, implement new features, and maintain code quality across the POS platform",
    ],
    tech: ["Flutter", "Dart", "Provider", "Android Native", "REST APIs"],
  },
  {
    role: "Mobile App Intern",
    company: "Surge",
    location: "Manchester, England, United Kingdom (Remote)",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    current: false,
    bullets: [
      "Built frontend of multilingual (English/Italian) license test prep app with clean UI, Provider state management, and REST API integration",
      "Developed rider delivery app frontend directly integrated with the company POS system for real-time order management",
      "Integrated REST APIs and WebSockets across multiple applications, collaborating with backend team to ensure smooth data flow",
    ],
    tech: ["Flutter", "Dart", "Provider", "REST APIs", "WebSockets"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
        background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,255,255,0.015) 0%, transparent 70%)",
      }}
    >
      <div className="section-container">
        <AnimatedSection>
          <div className="section-heading">
            <span className="label">Experience</span>
            <h2>Professional <span className="gradient-text">Journey</span></h2>
            <p>Building real-world products with a talented international team at Surge</p>
          </div>
        </AnimatedSection>

        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 27, top: 0, bottom: 0, width: 2,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05), transparent)",
            opacity: 0.4,
          }} />

          <StaggerContainer staggerDelay={0.15} style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experiences.map((exp, i) => (
              <StaggerItem key={i}>
                <div style={{ display: "flex", gap: 32 }}>
                  {/* Timeline dot */}
                  <div style={{ flexShrink: 0, paddingTop: 6 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: "50%",
                      background: exp.current
                        ? "linear-gradient(135deg, #ffffff, #888888)"
                        : "rgba(255,255,255,0.04)",
                      border: exp.current ? "none" : "1.5px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: exp.current ? "#000000" : "#3a3a3a",
                      boxShadow: exp.current ? "0 0 24px rgba(255,255,255,0.1)" : "none",
                    }}>
                      <BriefcaseIcon />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1, padding: "28px 32px",
                      borderColor: exp.current ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Header */}
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                      flexWrap: "wrap", gap: 12, marginBottom: 20,
                    }}>
                      <div>
                        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#ededed", fontFamily: "Poppins, sans-serif", marginBottom: 4 }}>
                          {exp.role}
                        </h3>
                        <div style={{ fontSize: 15, color: "#cccccc", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                          {exp.company}
                          <span style={{ color: "#2a2a2a", margin: "0 8px" }}>·</span>
                          <span style={{ color: "#555555", fontWeight: 400, fontSize: 14 }}>{exp.location}</span>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                        <span style={{
                          padding: "4px 12px", borderRadius: 50, fontSize: 12, fontWeight: 600,
                          background: exp.current ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                          color: exp.current ? "#ffffff" : "#555555",
                          border: exp.current ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.06)",
                          fontFamily: "Poppins, sans-serif",
                        }}>
                          {exp.current ? "● Current" : exp.type}
                        </span>
                        <span style={{ fontSize: 13, color: "#3a3a3a", fontFamily: "Poppins, sans-serif" }}>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} style={{
                          fontSize: 14, color: "#777777", paddingLeft: 20, position: "relative",
                          lineHeight: 1.65, fontFamily: "Poppins, sans-serif",
                        }}>
                          <span style={{ position: "absolute", left: 0, color: "#555555", top: 5 }}>
                            <ArrowIcon />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
