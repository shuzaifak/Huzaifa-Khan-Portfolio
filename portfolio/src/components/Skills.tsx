"use client";

const skillGroups = [
  {
    title: "Mobile Development",
    icon: "📱",
    accent: "#00d4ff",
    skills: [
      { name: "Flutter", level: 92 },
      { name: "Dart", level: 90 },
      { name: "iOS (Flutter)", level: 80 },
      { name: "Android (Flutter)", level: 88 },
    ],
  },
  {
    title: "State Management",
    icon: "⚡",
    accent: "#7b2fff",
    skills: [
      { name: "Riverpod", level: 88 },
      { name: "BLoC / Cubit", level: 85 },
      { name: "Provider", level: 90 },
      { name: "GetX", level: 78 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🔥",
    accent: "#ff6b35",
    skills: [
      { name: "Firebase (Firestore)", level: 90 },
      { name: "Firebase Auth", level: 92 },
      { name: "REST APIs / Dio", level: 88 },
      { name: "Hive (Local DB)", level: 85 },
    ],
  },
  {
    title: "Integrations",
    icon: "🗺️",
    accent: "#00c896",
    skills: [
      { name: "Google Maps SDK", level: 82 },
      { name: "FCM (Push Notif.)", level: 85 },
      { name: "Stripe / Payments", level: 70 },
      { name: "WebRTC", level: 68 },
    ],
  },
];

const techBadges = [
  { name: "Flutter", emoji: "💙" },
  { name: "Dart", emoji: "🎯" },
  { name: "Firebase", emoji: "🔥" },
  { name: "Python", emoji: "🐍" },
  { name: "Git", emoji: "🔀" },
  { name: "Figma", emoji: "🎨" },
  { name: "REST APIs", emoji: "🌐" },
  { name: "Hive", emoji: "🗄️" },
  { name: "Dio", emoji: "📡" },
  { name: "Google Maps", emoji: "🗺️" },
  { name: "WebRTC", emoji: "📹" },
  { name: "TensorFlow", emoji: "🧠" },
  { name: "Clean Arch.", emoji: "🏗️" },
  { name: "MVVM", emoji: "📐" },
  { name: "Agile", emoji: "🔄" },
  { name: "Android Studio", emoji: "🤖" },
];

function SkillBar({ name, level, accent }: { name: string; level: number; accent: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 500, color: "#e2e8f0" }}>{name}</span>
        <span style={{ fontSize: 12, color: "#4a5568", fontWeight: 500 }}>{level}%</span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${level}%`,
            borderRadius: 3,
            background: `linear-gradient(90deg, ${accent}, ${accent}aa)`,
            boxShadow: `0 0 8px ${accent}60`,
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
        background:
          "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 60%)",
      }}
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="label">Skills</span>
          <h2>
            Technologies &{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p>My technical toolkit for building world-class mobile experiences</p>
        </div>

        {/* Skill Groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 64,
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card"
              style={{
                padding: "28px",
                borderColor: `${group.accent}18`,
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${group.accent}15`,
                    border: `1px solid ${group.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: group.accent,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Skill bars */}
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  accent={group.accent}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#4a5568",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "Poppins, sans-serif",
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            Also Familiar With
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {techBadges.map((badge) => (
              <div
                key={badge.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#8892a4",
                  fontFamily: "Poppins, sans-serif",
                  cursor: "default",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
                  (e.currentTarget as HTMLElement).style.color = "#f0f4ff";
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "#8892a4";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <span>{badge.emoji}</span>
                {badge.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
