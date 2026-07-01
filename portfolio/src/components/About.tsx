"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "+", label: "Live Apps on Play Store" },
  { value: 1, suffix: "+", label: "Years Professional Exp." },
  { value: 10, suffix: "+", label: "Projects Delivered" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = target / 40;
          const interval = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(interval);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="label">About Me</span>
          <h2>
            Crafting Experiences,{" "}
            <span className="gradient-text">One Pixel at a Time</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: bio */}
          <div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#8892a4",
                marginBottom: 20,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Hi! I&apos;m <strong style={{ color: "#f0f4ff" }}>Huzaifa Khan</strong>, a Flutter
              Developer currently working at{" "}
              <strong style={{ color: "#00d4ff" }}>Surge</strong> in Karachi, Pakistan. I specialize
              in building polished, high-performance cross-platform mobile applications using
              Flutter &amp; Dart.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#8892a4",
                marginBottom: 20,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              With experience across diverse industries — from{" "}
              <span style={{ color: "#f0f4ff" }}>POS systems</span> to{" "}
              <span style={{ color: "#f0f4ff" }}>e-commerce</span>,{" "}
              <span style={{ color: "#f0f4ff" }}>ride-sharing</span>, and{" "}
              <span style={{ color: "#f0f4ff" }}>sustainability platforms</span> — I thrive on turning
              complex problems into elegant, user-friendly solutions.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#8892a4",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              I&apos;m passionate about clean architecture, state management patterns, seamless
              Firebase integrations, and delivering pixel-perfect UIs that users love.
            </p>

            {/* Key highlights */}
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "🎓 BS Software Engineering — FAST-NUCES Islamabad Campus",
                "📍 Islamabad, Pakistan",
                "⚡ Flutter · Dart · Firebase · REST APIs",
                "🚀 2 Live Apps on Google Play Store",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: "#8892a4",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 20,
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(36px, 5vw, 52px)",
                    fontWeight: 800,
                    fontFamily: "Poppins, sans-serif",
                    background: "linear-gradient(135deg, #00d4ff, #7b2fff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    minWidth: 80,
                  }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "#8892a4",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
