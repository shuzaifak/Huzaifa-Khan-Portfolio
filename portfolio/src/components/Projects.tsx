"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: "scalar-pos",
    name: "Scalar POS",
    tagline: "Point of Sale & Inventory Management System",
    description:
      "A comprehensive mobile POS solution for retail businesses. Features real-time inventory tracking, sales analytics, employee management, purchase orders, and detailed financial reports. Built for a helmet & accessories retailer.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Riverpod", "Hive"],
    mockups: ["/mockups/scalar_1.png", "/mockups/scalar_2.png", "/mockups/scalar_3.png"],
    accent: "#00d4ff",
    live: false,
    featured: true,
    category: "Business",
  },
  {
    id: "bonanza-conexion",
    name: "Bonanza Conexión",
    tagline: "Sustainable Student Commerce Platform",
    description:
      "A student-focused marketplace promoting eco-friendly and sustainable brands with exclusive student discounts. Live on Google Play Store with real users browsing green brands like Green Upshot, Reelife, and Grans.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps", "Provider", "REST APIs"],
    mockups: ["/mockups/bonanza_1.png", "/mockups/bonanza_2.png", "/mockups/bonanza_3.png"],
    accent: "#00c896",
    live: true,
    playStore: "https://play.google.com/store",
    featured: true,
    category: "E-Commerce",
  },
  {
    id: "reevall",
    name: "Reevall",
    tagline: "Smart Product Discovery & Review App",
    description:
      "A social commerce platform where users discover, review, and share product recommendations. Swipe-based discovery UX, category filtering, and a clean feed of genuine user reviews. Live on Google Play Store.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "BLoC", "REST APIs"],
    mockups: ["/mockups/reevall_1.png", "/mockups/reevall_2.png", "/mockups/reevall_3.png"],
    accent: "#7b2fff",
    live: true,
    playStore: "https://play.google.com/store",
    featured: true,
    category: "Social",
  },
  {
    id: "bluepin",
    name: "Bluepin",
    tagline: "Smart Parking Meets Convenience",
    description:
      "A sleek parking management app that helps users find, reserve, and navigate to parking spots. Features real-time availability, Google Maps integration, and a minimal dark UI. Currently in active development.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps", "Riverpod"],
    mockups: ["/mockups/bluepin_1.png", "/mockups/bluepin_2.png", "/mockups/bluepin_3.png"],
    accent: "#00d4ff",
    live: false,
    inProgress: true,
    category: "Utilities",
  },
  {
    id: "ride-app",
    name: "Transport Collective",
    tagline: "Ride-Sharing & Logistics Platform",
    description:
      "A full-featured ride-hailing and logistics app supporting rides, freight, courier, group rides, and house shifting. Includes live driver tracking, fare estimation, and special promotions.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps", "WebRTC", "Provider"],
    mockups: ["/mockups/ride_1.png", "/mockups/ride_2.png", "/mockups/ride_3.png"],
    accent: "#ff6b35",
    live: false,
    category: "Transport",
  },
  {
    id: "studybuddy",
    name: "StudyBuddy",
    tagline: "Productivity & Study Management App",
    description:
      "A comprehensive study assistant with task management, Pomodoro timer, calendar scheduling, and note-taking. Dark mode first design with daily progress tracking and personalized productivity tips.",
    tech: ["Flutter", "Dart", "Hive", "Provider", "Local Notifications"],
    mockups: ["/mockups/studybuddy_1.png", "/mockups/studybuddy_2.png", "/mockups/studybuddy_3.png"],
    accent: "#7b2fff",
    live: false,
    category: "Productivity",
  },
  {
    id: "cv-generator",
    name: "CV Generator",
    tagline: "Professional Resume Builder",
    description:
      "A mobile app for creating polished CVs and resumes with ease. Choose between full CV or concise resume formats, customize sections, and export as professional PDFs ready for job applications.",
    tech: ["Flutter", "Dart", "PDF Generation", "Provider"],
    mockups: ["/mockups/cvgen_1.png", "/mockups/cvgen_2.png", "/mockups/cvgen_3.png"],
    accent: "#4285f4",
    live: false,
    category: "Productivity",
  },
  {
    id: "motion-tracking",
    name: "Motion Tracking Analyzer",
    tagline: "AI-Powered Pose & Motion Analysis",
    description:
      "A cross-platform app leveraging computer vision and ML to analyze human motion and pose estimation in real time. Useful for fitness coaching, sports training, and physical rehabilitation.",
    tech: ["Flutter", "Dart", "Python", "TensorFlow", "ML Kit", "OpenCV"],
    mockups: ["/mockups/motion_1.png", "/mockups/motion_2.png", "/mockups/motion_3.png"],
    accent: "#ff4081",
    live: false,
    category: "AI / ML",
  },
  {
    id: "plantorix",
    name: "Plantorix",
    tagline: "Smart Plant Care & Garden Management",
    description:
      "A plant care companion app with reminders for watering, fertilizing, and pruning. Features plant disease diagnosis, a beautiful plant library, and progress tracking for your indoor garden.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Provider"],
    mockups: ["/mockups/plantorix_1.png", "/mockups/plantorix_2.png", "/mockups/plantorix_3.png"],
    accent: "#00c896",
    live: false,
    category: "Lifestyle",
  },
  {
    id: "vote",
    name: "Vote App",
    tagline: "Digital Voting & Poll Platform",
    description:
      "A secure digital voting platform enabling organizations and communities to conduct transparent polls and elections. Includes admin panel, real-time results, and multi-level authentication.",
    tech: ["Flutter", "Dart", "Firebase", "Authentication", "Firestore"],
    mockups: ["/mockups/vote_1.png", "/mockups/vote_2.png", "/mockups/vote_3.png"],
    accent: "#4285f4",
    live: false,
    category: "Civic Tech",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentMockup, setCurrentMockup] = useState(0);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${hovered ? project.accent + "40" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${project.accent}20` : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Mockup Gallery */}
      <div
        style={{
          position: "relative",
          background: `linear-gradient(135deg, ${project.accent}12, rgba(0,0,0,0.3))`,
          padding: "28px 24px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 12,
          minHeight: 260,
          overflow: "hidden",
        }}
      >
        {/* Glow behind phones */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "60%",
          background: `radial-gradient(ellipse, ${project.accent}20 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {project.mockups.map((src, i) => (
          <div
            key={i}
            onClick={() => setCurrentMockup(i)}
            style={{
              position: "relative",
              width: i === currentMockup ? 120 : 80,
              height: i === currentMockup ? 240 : 160,
              borderRadius: 16,
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              border: i === currentMockup
                ? `2px solid ${project.accent}`
                : "2px solid rgba(255,255,255,0.1)",
              opacity: i === currentMockup ? 1 : 0.6,
              flexShrink: 0,
              boxShadow: i === currentMockup ? `0 8px 24px ${project.accent}30` : "none",
            }}
          >
            <Image
              src={src}
              alt={`${project.name} mockup ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="120px"
            />
          </div>
        ))}

        {/* Badges */}
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
          {project.live && (
            <span style={{
              padding: "4px 10px",
              borderRadius: 50,
              fontSize: 11,
              fontWeight: 700,
              background: "rgba(0,200,150,0.15)",
              color: "#00c896",
              border: "1px solid rgba(0,200,150,0.3)",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "0.05em",
            }}>
              ● LIVE
            </span>
          )}
          {project.inProgress && (
            <span style={{
              padding: "4px 10px",
              borderRadius: 50,
              fontSize: 11,
              fontWeight: 700,
              background: "rgba(255,170,0,0.15)",
              color: "#ffaa00",
              border: "1px solid rgba(255,170,0,0.3)",
              fontFamily: "Poppins, sans-serif",
            }}>
              IN PROGRESS
            </span>
          )}
          <span style={{
            padding: "4px 10px",
            borderRadius: 50,
            fontSize: 11,
            fontWeight: 600,
            background: "rgba(255,255,255,0.06)",
            color: "#8892a4",
            fontFamily: "Poppins, sans-serif",
          }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#f0f4ff",
            marginBottom: 6,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: project.accent,
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            marginBottom: 12,
          }}
        >
          {project.tagline}
        </p>
        <p
          style={{
            fontSize: 13,
            color: "#6b7a94",
            lineHeight: 1.7,
            fontFamily: "Poppins, sans-serif",
            flex: 1,
            marginBottom: 20,
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 10px",
                borderRadius: 50,
                fontSize: 11,
                fontWeight: 500,
                border: `1px solid ${project.accent}30`,
                color: project.accent,
                background: `${project.accent}0d`,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.live && project.playStore && (
          <a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 600,
              background: `${project.accent}15`,
              color: project.accent,
              border: `1px solid ${project.accent}30`,
              textDecoration: "none",
              fontFamily: "Poppins, sans-serif",
              transition: "all 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.99c.4.22.87.2 1.27-.03l13.1-7.34-2.87-2.87L3.18 23.99zM20.5 10.77L17.6 9.1 14.37 12l3.24 3.24 2.9-1.63c.83-.47.83-1.37 0-1.84zM1.07.18C.74.55.55 1.07.55 1.73v20.54l10.9-10.9L1.07.18zM14.37 12L4.45.17C4.05-.05 3.58-.04 3.18.18l11.5 11.5-0.31.32z"/>
            </svg>
            View on Play Store
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Business", "E-Commerce", "Social", "Utilities", "Transport", "Productivity", "AI / ML", "Lifestyle", "Civic Tech"];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="label">Portfolio</span>
          <h2>
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p>
            A showcase of mobile applications I&apos;ve designed and built — from concept to App Store.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
                transition: "all 0.2s",
                border: filter === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                background: filter === cat
                  ? "linear-gradient(135deg, #00d4ff, #7b2fff)"
                  : "rgba(255,255,255,0.04)",
                color: filter === cat ? "white" : "#8892a4",
                boxShadow: filter === cat ? "0 4px 15px rgba(0,212,255,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 28,
          }}
          className="projects-grid"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
