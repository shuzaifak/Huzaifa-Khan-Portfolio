"use client";

const GraduationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const DiamondIcon = () => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 22,12 12,22 2,12"/>
  </svg>
);

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "FAST NUCES Islamabad Campus",
    short: "FAST-NUCES",
    location: "Islamabad, Pakistan",
    period: "Aug 2022 – Jun 2026",
    current: true,
    icon: <GraduationIcon />,
    accent: "#00d4ff",
    highlights: [
      "Focus on Software Engineering & Mobile Development",
      "Multiple full-stack and Flutter application projects",
      "Expected graduation: June 2026",
    ],
  },
  {
    degree: "F.Sc Pre Engineering",
    institution: "Government Boys PGC Pallandri Sudhnuti AJK",
    short: "F.Sc Pre-Engineering",
    location: "Sudhnuti, AJK",
    period: "Sep 2019 – Jul 2021",
    current: false,
    icon: <BookIcon />,
    accent: "#7b2fff",
    highlights: [
      "Pre-Engineering stream: Physics, Chemistry, Mathematics",
      "Strong analytical and problem-solving foundation",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
        background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(123,47,255,0.05) 0%, transparent 70%)",
      }}
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="label">Education</span>
          <h2>Academic <span className="gradient-text">Background</span></h2>
          <p>Foundation built on strong software engineering principles</p>
        </div>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: "36px", borderColor: `${edu.accent}20`, position: "relative", overflow: "hidden" }}
            >
              {/* Background accent */}
              <div style={{
                position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%",
                background: `radial-gradient(circle, ${edu.accent}10 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${edu.accent}12`,
                border: `1px solid ${edu.accent}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: edu.accent, marginBottom: 20,
              }}>
                {edu.icon}
              </div>

              {/* Header */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f0f4ff", fontFamily: "Poppins, sans-serif", lineHeight: 1.3 }}>
                    {edu.degree}
                  </h3>
                  {edu.current && (
                    <span style={{
                      flexShrink: 0, padding: "3px 10px", borderRadius: 50, fontSize: 11, fontWeight: 600,
                      background: "rgba(0,212,255,0.08)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.18)",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      Current
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14, color: edu.accent, fontWeight: 600, fontFamily: "Poppins, sans-serif", marginBottom: 4 }}>
                  {edu.short}
                </p>
                <p style={{ fontSize: 13, color: "#4a5568", fontFamily: "Poppins, sans-serif" }}>
                  {edu.institution}
                </p>
              </div>

              {/* Period & location */}
              <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#4a5568", fontFamily: "Poppins, sans-serif" }}>
                  <span style={{ color: "#2d3748" }}><CalendarIcon /></span>
                  {edu.period}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#4a5568", fontFamily: "Poppins, sans-serif" }}>
                  <span style={{ color: "#2d3748" }}><MapPinIcon /></span>
                  {edu.location}
                </span>
              </div>

              {/* Highlights */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {edu.highlights.map((h, j) => (
                  <li key={j} style={{
                    fontSize: 13, color: "#6b7a94", paddingLeft: 18, position: "relative",
                    lineHeight: 1.55, fontFamily: "Poppins, sans-serif",
                  }}>
                    <span style={{ position: "absolute", left: 0, color: edu.accent, top: 4 }}>
                      <DiamondIcon />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
