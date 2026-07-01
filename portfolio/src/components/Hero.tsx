"use client";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Three.js Canvas */}
      <HeroCanvas />

      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 60%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: 50,
            marginBottom: 28,
            animation: "fadeIn 0.8s ease forwards",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#00d4ff",
              display: "inline-block",
              boxShadow: "0 0 8px #00d4ff",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#00d4ff",
              textTransform: "uppercase",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Available for Opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 86px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 16,
            animation: "fadeUp 0.8s ease 0.1s both",
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          Huzaifa{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #7b2fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Khan
          </span>
        </h1>

        {/* Role */}
        <div
          style={{
            fontSize: "clamp(18px, 3vw, 28px)",
            fontWeight: 500,
            color: "#8892a4",
            marginBottom: 24,
            animation: "fadeUp 0.8s ease 0.2s both",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Flutter Developer
          <span style={{ color: "#00d4ff", margin: "0 12px" }}>·</span>
          Mobile App Engineer
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "#6b7a94",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            animation: "fadeUp 0.8s ease 0.3s both",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Crafting high-performance, pixel-perfect mobile applications with Flutter.
          Passionate about clean architecture, smooth animations, and seamless user experiences.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.8s ease 0.4s both",
          }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/huzaifa_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
        </div>

        {/* Social quick links */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            marginTop: 48,
            animation: "fadeUp 0.8s ease 0.5s both",
          }}
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/shuzaifak",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/shuzaifak",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
            },
            {
              label: "Email",
              href: "mailto:shuzaifak@gmail.com",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              style={{
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#8892a4",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#8892a4";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          animation: "fadeIn 1s ease 1s both",
        }}
      >
        <span style={{ fontSize: 11, color: "#4a5568", letterSpacing: "0.2em", fontFamily: "Poppins, sans-serif" }}>
          SCROLL
        </span>
        <div
          style={{
            width: 1.5,
            height: 40,
            background: "linear-gradient(to bottom, #00d4ff, transparent)",
            borderRadius: 1,
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
