"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const stats = [
  { value: 2, suffix: "+", label: "Live Apps on Play Store" },
  { value: 10, suffix: "+", label: "Apps Shipped" },
  { value: 3, suffix: "+", label: "Years Flutter Development" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const highlights = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    text: "BS Software Engineering — FAST NUCES Islamabad",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Islamabad, Pakistan",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    text: "Flutter · Dart · Firebase · REST APIs",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    text: "2 Live Apps on Google Play Store",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 0", position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <AnimatedSection>
          <div className="section-heading">
            <span className="label">About Me</span>
            <h2>Crafting Experiences, <span className="gradient-text">One Pixel at a Time</span></h2>
          </div>
        </AnimatedSection>

        <div className="about-grid">
          {/* Left: bio */}
          <AnimatedSection variant="slideInLeft" delay={0.1}>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#777777", marginBottom: 20, fontFamily: "Poppins, sans-serif" }}>
                Flutter developer with <strong style={{ color: "#ededed" }}>1+ year of Job experience</strong> and{" "}
                <strong style={{ color: "#ededed" }}>3 years of total Flutter development</strong>, building cross-platform mobile
                applications that ship and get used. I have two live apps on Google Play, built and marketed my own POS product
                that digitized a fully manual business, and work part-time with an international team remotely.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#777777", marginBottom: 20, fontFamily: "Poppins, sans-serif" }}>
                My stack covers <span style={{ color: "#cccccc" }}>Flutter, Dart, Firebase, REST APIs</span>, and payment and
                mapping integrations. I write clean, maintainable code and take full ownership from design to deployment.
              </p>

              <StaggerContainer staggerDelay={0.1} style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                {highlights.map((item, i) => (
                  <StaggerItem key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#777777", fontFamily: "Poppins, sans-serif" }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center",
                        justifyContent: "center", color: "#999999", flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      {item.text}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Right: stats */}
          <StaggerContainer staggerDelay={0.12} style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="glass-card" style={{ padding: "28px 32px", display: "flex", alignItems: "center", gap: 24 }}>
                  <div style={{
                    fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, fontFamily: "Poppins, sans-serif",
                    background: "linear-gradient(135deg, #ffffff, #666666)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    lineHeight: 1, minWidth: 80,
                  }}>
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p style={{ fontSize: 14, color: "#777777", fontFamily: "Poppins, sans-serif", lineHeight: 1.4 }}>
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
