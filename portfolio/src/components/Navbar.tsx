"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled
            ? "rgba(6, 9, 18, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontSize: 22,
              fontWeight: 800,
              textDecoration: "none",
              background: "linear-gradient(135deg, #00d4ff, #7b2fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.03em",
            }}
          >
            HK.
          </a>

          {/* Desktop Links */}
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    color: isActive ? "#00d4ff" : "#8892a4",
                    borderRadius: 8,
                    transition: "all 0.2s",
                    background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color = "#f0f4ff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color = "#8892a4";
                    }
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/huzaifa_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 8,
                padding: "8px 20px",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                background: "linear-gradient(135deg, #00d4ff, #7b2fff)",
                color: "white",
                borderRadius: 50,
                transition: "all 0.3s",
                fontFamily: "Poppins, sans-serif",
                boxShadow: "0 2px 12px rgba(0,212,255,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,212,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,212,255,0.25)";
              }}
            >
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "#f0f4ff",
              flexDirection: "column",
              gap: 5,
            }}
            className="hamburger"
          >
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#f0f4ff", borderRadius: 2,
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              transition: "all 0.3s",
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#f0f4ff", borderRadius: 2,
              opacity: menuOpen ? 0 : 1,
              transition: "all 0.3s",
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "#f0f4ff", borderRadius: 2,
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              transition: "all 0.3s",
            }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              padding: "16px 24px 24px",
              background: "rgba(6,9,18,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 16px",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#8892a4",
                  textDecoration: "none",
                  borderRadius: 8,
                  fontFamily: "Poppins, sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/huzaifa_cv.pdf"
              target="_blank"
              style={{
                marginTop: 8,
                padding: "12px 16px",
                fontSize: 15,
                fontWeight: 600,
                color: "#00d4ff",
                textDecoration: "none",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Download Resume ↗
            </a>
          </div>
        )}
      </nav>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
