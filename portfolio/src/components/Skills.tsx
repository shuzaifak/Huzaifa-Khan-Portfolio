"use client";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

// SVG Icons for skill group headers
const MobileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const ServerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const PuzzleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
    <path d="M9 9h6v6H9z"/>
  </svg>
);
const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const ToolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);
const AgileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
  </svg>
);

const skillGroups = [
  {
    title: "Mobile",
    icon: <MobileIcon />,
    skills: [
      "Flutter", "Dart", "iOS Development", "Android Development",
      "Cross-Platform Development", "Provider", "MVVM", "UI/UX Design",
    ],
  },
  {
    title: "Backend",
    icon: <ServerIcon />,
    skills: [
      "Firebase", "Firestore", "Supabase", "MySQL", "SQLite",
      "Spring Boot", "Cloud Functions", "REST APIs", "WebSockets",
    ],
  },
  {
    title: "Integrations",
    icon: <PuzzleIcon />,
    skills: [
      "Mapbox", "Google Maps", "Stripe", "Mercado Pago",
      "ML Models", "Thermal Printing",
    ],
  },
  {
    title: "Languages",
    icon: <CodeIcon />,
    skills: ["Dart", "Java", "C++"],
  },
  {
    title: "Tools",
    icon: <ToolIcon />,
    skills: ["Android Studio", "VS Code", "Git", "GitHub", "Docker"],
  },
  {
    title: "Methodology",
    icon: <AgileIcon />,
    skills: ["Agile Development"],
  },
];

function SkillChip({ name }: { name: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 16px",
        borderRadius: 12,
        fontSize: 13,
        fontWeight: 500,
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        color: "#888888",
        fontFamily: "Poppins, sans-serif",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLElement).style.color = "#ededed";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(255,255,255,0.03)";
        const dot = (e.currentTarget as HTMLElement).querySelector(".bullet-dot") as HTMLElement;
        if (dot) {
          dot.style.background = "#ffffff";
          dot.style.boxShadow = "0 0 8px rgba(255,255,255,0.5)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.02)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.05)";
        (e.currentTarget as HTMLElement).style.color = "#888888";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        const dot = (e.currentTarget as HTMLElement).querySelector(".bullet-dot") as HTMLElement;
        if (dot) {
          dot.style.background = "#3a3a3a";
          dot.style.boxShadow = "none";
        }
      }}
    >
      <span
        className="bullet-dot"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#3a3a3a",
          transition: "all 0.3s",
        }}
      />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "140px 0",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.015) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div className="section-heading">
            <span className="label">Skills</span>
            <h2>Technologies &amp; <span className="gradient-text">Expertise</span></h2>
            <p>My technical toolkit for building world-class mobile experiences</p>
          </div>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.08} className="skills-grid">
          {skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <div
                className="glass-card"
                style={{
                  padding: "32px",
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(255,255,255,0.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.05)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top indicator line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)",
                  }}
                />

                {/* Card header */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999999",
                  }}>
                    {group.icon}
                  </div>
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#ededed",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "-0.01em"
                  }}>
                    {group.title}
                  </h3>
                </div>

                {/* Skill chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {group.skills.map((skill) => (
                    <SkillChip key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
