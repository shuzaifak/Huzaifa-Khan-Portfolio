"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const PlayStoreIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.99c.4.22.87.2 1.27-.03l13.1-7.34-2.87-2.87L3.18 23.99zM20.5 10.77L17.6 9.1 14.37 12l3.24 3.24 2.9-1.63c.83-.47.83-1.37 0-1.84zM1.07.18C.74.55.55 1.07.55 1.73v20.54l10.9-10.9L1.07.18zM14.37 12L4.45.17C4.05-.05 3.58-.04 3.18.18l11.5 11.5-.31.32z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const projects = [
  {
    id: "scalar-pos",
    name: "Scalar POS",
    tech: ["Flutter", "Firebase", "Firestore"],
    mockups: ["/mockups/scalar_1.webp", "/mockups/scalar_2.webp", "/mockups/scalar_3.webp"],
    accent: "#ffffff",
    live: false,
    inProgress: false,
    bullets: [
      "Built, marketed, and sold an independent POS product that fully digitized a manual business, enabling real-time sales tracking and inventory management for the first time",
      "Developed comprehensive sales, inventory management, and inventory valuation modules with real-time Firestore sync for accurate stock tracking",
      "Implemented financial reporting covering liabilities, profit and loss, and month-on-month business performance analytics",
      "Integrated thermal receipt printing and JSON-based data communication with a pixel-perfect cashier interface that significantly reduced order processing time",
    ],
  },
  {
    id: "bonanza-conexion",
    name: "Bonanza Conexión",
    tech: ["Flutter", "Firebase", "Mercado Pago", "Cloud Functions"],
    mockups: ["/mockups/bonanza_1.webp", "/mockups/bonanza_2.webp", "/mockups/bonanza_3.webp"],
    accent: "#ffffff",
    live: true,
    playStore: "https://play.google.com/store/apps/details?id=com.ride.spanish",
    bullets: [
      "Built and deployed a production ride coordination platform end-to-end, now live on Google Play",
      "Implemented role-based flows for passengers, drivers, and coordinators with manual and automatic ride assignment",
      "Integrated Mercado Pago payment gateway via Firebase Cloud Functions for secure in-app wallet recharge and transaction processing",
      "Developed pixel-perfect bilingual (Spanish/English) responsive interface with location-based pickup and real-time monitoring",
    ],
  },
  {
    id: "reevall",
    name: "Reevall",
    tech: ["Flutter", "Firebase", "Firestore", "Storage", "Cloud Functions"],
    mockups: ["/mockups/reevall_1.webp", "/mockups/reevall_2.webp", "/mockups/reevall_3.webp"],
    accent: "#ffffff",
    live: true,
    playStore: "https://play.google.com/store/apps/details?id=com.reevall.app",
    bullets: [
      "Built Pakistan's first zero-waste campus marketplace enabling university students to buy and sell within their campus, live on Google Play",
      "Refactored entire app architecture for scalability and implemented pixel-perfect responsive UI delivering a significantly smoother experience",
      "Implemented secure in-app chat, listing management, push notifications via Cloud Functions, and student discount portal",
    ],
  },
  {
    id: "bluepin",
    name: "Bluepin",
    tech: ["Flutter", "Firebase", "Firestore", "Storage", "Stripe", "Google Maps API", "Cloud Functions"],
    mockups: ["/mockups/bluepin_1.webp", "/mockups/bluepin_2.webp", "/mockups/bluepin_3.webp"],
    accent: "#ffffff",
    live: false,
    inProgress: true,
    bullets: [
      "Developing parking reservation system with integrated admin and user panels for comprehensive parking space management",
      "Implementing Stripe payment integration via Cloud Functions and Google Maps API for real-time location-based parking search",
      "Building responsive pixel-perfect UI with REST API and JSON integration for seamless cross-platform experience",
    ],
  },
  {
    id: "ride-app",
    name: "Ride App",
    tech: ["Flutter", "Firebase", "Firestore", "Mapbox API"],
    mockups: ["/mockups/ride_1.webp", "/mockups/ride_2.webp", "/mockups/ride_3.webp"],
    accent: "#ffffff",
    live: false,
    bullets: [
      "Developed comprehensive ride-hailing application with Firebase and Firestore for real-time data management",
      "Integrated Mapbox API for real-time navigation and route optimization with seamless user experience",
      "Implemented dual user system with customer booking, ride history, driver reviews, and in-app communication",
      "Created driver registration with category-based verification and direct customer-driver call functionality",
    ],
  },
  {
    id: "studybuddy",
    name: "StudyBuddy",
    tech: ["Flutter", "Provider", "Hive"],
    mockups: ["/mockups/studybuddy_1.webp", "/mockups/studybuddy_2.webp", "/mockups/studybuddy_3.webp"],
    accent: "#ffffff",
    live: false,
    bullets: [
      "Developed comprehensive study organization mobile application designed to help students manage their academic schedules and improve productivity through structured planning",
      "Implemented assignment reminder system with calendar integration and to-do list functionality for efficient task management and deadline tracking",
      "Created focus timer feature with productivity tips integration to enhance concentration and make studying more efficient and stress-free for students",
      "Utilized Provider state management for seamless data flow and responsive user interface across all application features",
    ],
  },
  {
    id: "evoting",
    name: "E-Voting System",
    tech: ["Flutter", "Firebase", "Firestore"],
    mockups: ["/mockups/vote_1.webp", "/mockups/vote_2.webp", "/mockups/vote_3.webp"],
    accent: "#ffffff",
    live: false,
    bullets: [
      "Built secure digital voting application with biometric authentication including fingerprint and facial recognition",
      "Implemented real-time analytics dashboard for voter turnout tracking using Firestore's scalable NoSQL architecture",
      "Designed user friendly interface with comprehensive election management tools and candidate oversight for administrators",
      "Developed interactive dashboards with data encryption protecting voter information and ensuring process integrity",
    ],
  },
  {
    id: "cv-maker",
    name: "CV Maker – ATS Compliant",
    tech: ["Flutter", "Hive", "Provider", "AI Integration"],
    mockups: ["/mockups/cvgen_1.webp", "/mockups/cvgen_2.webp", "/mockups/cvgen_3.webp"],
    accent: "#ffffff",
    live: false,
    bullets: [
      "Built free, privacy-focused resume builder optimized for ATS with AI-powered scoring and personalized improvement feedback",
      "Designed fully offline application with on-device Hive storage ensuring complete privacy with no cloud dependency",
      "Integrated PDF generation with customizable fonts and intuitive file handling for seamless user experience",
    ],
  },
  {
    id: "motion-tracking",
    name: "Motion Tracking Analyzer",
    tech: ["Flutter", "Provider", "Hive", "REST APIs"],
    mockups: ["/mockups/motion_1.webp", "/mockups/motion_2.webp", "/mockups/motion_3.webp"],
    accent: "#ffffff",
    live: false,
    bullets: [
      "Developed Flutter frontend integrated with Python backend via REST APIs for Google ML model motion analysis",
      "Implemented categorized movement recording, Hive local storage, and Provider state management for efficient data handling",
    ],
  },
  {
    id: "plant-care",
    name: "Plant Care Companion",
    tech: ["Flutter", "Provider", "REST APIs"],
    mockups: ["/mockups/plantorix_1.webp", "/mockups/plantorix_2.webp", "/mockups/plantorix_3.webp"],
    accent: "#ffffff",
    live: false,
    bullets: [
      "Developed Flutter frontend integrated with ML model for plant health monitoring and disease identification via camera",
      "Implemented customizable watering reminder system and camera integration for ML-based plant health detection",
    ],
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
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)"}`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(255,255,255,0.04)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Mockup Gallery */}
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(0,0,0,0.25))",
        padding: "28px 24px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 10,
        minHeight: 260,
        overflow: "hidden",
      }}>
        {/* Glow behind phones */}
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "70%", height: "60%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {project.mockups.map((src, i) => (
          <div
            key={i}
            onClick={() => setCurrentMockup(i)}
            style={{
              position: "relative",
              width: i === currentMockup ? 118 : 78,
              height: i === currentMockup ? 236 : 156,
              borderRadius: 16,
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              border: i === currentMockup ? "2px solid rgba(255,255,255,0.4)" : "2px solid rgba(255,255,255,0.06)",
              opacity: i === currentMockup ? 1 : 0.45,
              flexShrink: 0,
              boxShadow: i === currentMockup ? "0 8px 28px rgba(255,255,255,0.06)" : "none",
            }}
          >
            <Image src={src} alt={`${project.name} screenshot ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="120px" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Status labels */}
        {(project.live || project.inProgress) && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
            {project.live && (
              <span style={{
                padding: "4px 12px", borderRadius: 50, fontSize: 10, fontWeight: 700,
                background: "rgba(100,200,100,0.08)", color: "#6b9e6b",
                border: "1px solid rgba(100,200,100,0.15)", fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.05em",
              }}>
                LIVE
              </span>
            )}
            {project.inProgress && (
              <span style={{
                padding: "4px 12px", borderRadius: 50, fontSize: 10, fontWeight: 700,
                background: "rgba(180,150,80,0.08)", color: "#b09060",
                border: "1px solid rgba(180,150,80,0.15)", fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.05em",
              }}>
                IN PROGRESS
              </span>
            )}
          </div>
        )}

        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#ededed", marginBottom: 12, fontFamily: "Poppins, sans-serif" }}>
          {project.name}
        </h3>

        {/* Bullet points */}
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 20 }}>
          {project.bullets.map((b, j) => (
            <li key={j} style={{
              fontSize: 13, color: "#555555", paddingLeft: 18, position: "relative",
              lineHeight: 1.65, fontFamily: "Poppins, sans-serif",
            }}>
              <span style={{ position: "absolute", left: 0, color: "#555555", top: 5 }}>
                <ArrowIcon />
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: project.live ? 16 : 0 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: "3px 10px", borderRadius: 50, fontSize: 11, fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#888888",
              background: "rgba(255,255,255,0.03)",
              fontFamily: "Poppins, sans-serif",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Play Store CTA */}
        {"playStore" in project && project.playStore && (
          <a
            href={project.playStore as string}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px",
              borderRadius: 50, fontSize: 13, fontWeight: 600,
              background: "rgba(255,255,255,0.04)", color: "#cccccc",
              border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none",
              fontFamily: "Poppins, sans-serif", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <PlayStoreIcon />
            View on Play Store
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 0", position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <AnimatedSection>
          <div className="section-heading">
            <span className="label">Portfolio</span>
            <h2>Featured <span className="gradient-text">Projects</span></h2>
            <p>A showcase of applications I have designed, built, and shipped — from concept to production.</p>
          </div>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.1} className="projects-grid">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
