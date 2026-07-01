"use client";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "FAST – National University of Computer & Emerging Sciences",
    short: "FAST-NUCES",
    location: "Karachi, Pakistan",
    period: "2022 – 2026 (Expected)",
    current: true,
    icon: "🎓",
    accent: "#00d4ff",
    highlights: [
      "Focus on Software Engineering & Mobile Development",
      "Active contributor to CS community events",
      "Projects: Multiple full-stack & Flutter applications",
    ],
  },
  {
    degree: "F.Sc – Pre-Engineering",
    institution: "Govt. Degree Science & Commerce College",
    short: "Karachi Board",
    location: "Karachi, Pakistan",
    period: "2020 – 2022",
    current: false,
    icon: "📚",
    accent: "#7b2fff",
    highlights: [
      "Physics, Chemistry, Mathematics",
      "Completed with distinction",
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
        background:
          "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(123,47,255,0.05) 0%, transparent 70%)",
      }}
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="label">Education</span>
          <h2>
            Academic{" "}
            <span className="gradient-text">Background</span>
          </h2>
          <p>Foundation built on strong computer science principles</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gap: 28,
            maxWidth: 960,
            margin: "0 auto",
          }}
          className="edu-grid"
        >
          {education.map((edu, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "36px",
                borderColor: `${edu.accent}20`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background accent */}
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${edu.accent}10 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${edu.accent}15`,
                  border: `1px solid ${edu.accent}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 20,
                }}
              >
                {edu.icon}
              </div>

              {/* Header */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#f0f4ff",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: 1.3,
                    }}
                  >
                    {edu.degree}
                  </h3>
                  {edu.current && (
                    <span
                      style={{
                        flexShrink: 0,
                        padding: "3px 10px",
                        borderRadius: 50,
                        fontSize: 11,
                        fontWeight: 600,
                        background: "rgba(0,212,255,0.1)",
                        color: "#00d4ff",
                        border: "1px solid rgba(0,212,255,0.2)",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: edu.accent,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    marginBottom: 4,
                  }}
                >
                  {edu.short}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "#4a5568",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {edu.institution}
                </p>
              </div>

              {/* Period & location */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 20,
                  fontSize: 13,
                  color: "#4a5568",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  📅 {edu.period}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  📍 {edu.location}
                </span>
              </div>

              {/* Highlights */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {edu.highlights.map((h, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13,
                      color: "#6b7a94",
                      paddingLeft: 16,
                      position: "relative",
                      lineHeight: 1.5,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: edu.accent,
                        fontSize: 10,
                        top: 4,
                      }}
                    >
                      ◆
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
