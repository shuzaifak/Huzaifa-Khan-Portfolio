"use client";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Surge",
    location: "Karachi, Pakistan",
    period: "Aug 2025 – Present",
    type: "Full-time",
    current: true,
    bullets: [
      "Develop and maintain cross-platform mobile applications using Flutter & Dart",
      "Implement scalable state management using Riverpod and BLoC patterns",
      "Integrate Firebase services (Firestore, Auth, Cloud Functions, FCM)",
      "Collaborate with UI/UX designers to implement pixel-perfect interfaces",
      "Build RESTful API integrations using Dio with clean architecture principles",
      "Optimize app performance and reduce bundle sizes for production releases",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Riverpod", "BLoC", "REST APIs"],
  },
  {
    role: "Flutter Developer Intern",
    company: "Surge",
    location: "Karachi, Pakistan",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    current: false,
    bullets: [
      "Assisted in building features for production Flutter mobile applications",
      "Learned and applied clean architecture with Provider and BLoC",
      "Worked on Firebase integration including Authentication and Firestore",
      "Participated in code reviews and agile development cycles",
      "Built reusable UI components and animations",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Provider", "Hive"],
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
        background:
          "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(123,47,255,0.05) 0%, transparent 70%)",
      }}
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="label">Experience</span>
          <h2>
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p>Building real-world products with a talented team at Surge</p>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(to bottom, #00d4ff, #7b2fff, transparent)",
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: 32 }}>
                {/* Timeline dot */}
                <div style={{ flexShrink: 0, paddingTop: 6 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: exp.current
                        ? "linear-gradient(135deg, #00d4ff, #7b2fff)"
                        : "rgba(255,255,255,0.06)",
                      border: exp.current
                        ? "none"
                        : "2px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      boxShadow: exp.current ? "0 0 20px rgba(0,212,255,0.3)" : "none",
                      animation: exp.current ? "pulse-glow 3s ease-in-out infinite" : "none",
                    }}
                  >
                    💼
                  </div>
                </div>

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: "28px 32px",
                    borderColor: exp.current ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#f0f4ff",
                          fontFamily: "Poppins, sans-serif",
                          marginBottom: 4,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          fontSize: 15,
                          color: "#00d4ff",
                          fontWeight: 600,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {exp.company}
                        <span style={{ color: "#4a5568", margin: "0 8px" }}>·</span>
                        <span style={{ color: "#8892a4", fontWeight: 400 }}>{exp.location}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: 50,
                          fontSize: 12,
                          fontWeight: 600,
                          background: exp.current ? "rgba(0,212,255,0.1)" : "rgba(255,255,255,0.05)",
                          color: exp.current ? "#00d4ff" : "#8892a4",
                          border: exp.current ? "1px solid rgba(0,212,255,0.2)" : "1px solid rgba(255,255,255,0.08)",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {exp.current ? "● Current" : exp.type}
                      </span>
                      <span style={{ fontSize: 13, color: "#4a5568", fontFamily: "Poppins, sans-serif" }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      marginBottom: 20,
                    }}
                  >
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: 14,
                          color: "#8892a4",
                          paddingLeft: 18,
                          position: "relative",
                          lineHeight: 1.6,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "#00d4ff",
                            fontSize: 12,
                            top: 4,
                          }}
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
