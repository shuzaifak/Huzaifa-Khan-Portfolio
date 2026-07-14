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
      <header className="site-header">
        <div
          className={`nav-shell ${menuOpen ? "menu-active" : ""}`}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 1200,
            margin: "0 auto",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: menuOpen ? "24px" : "999px",
            minHeight: menuOpen ? "auto" : "76px",
            padding: menuOpen ? "16px 20px" : "12px 24px",
            position: "relative",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Main Top Row */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Brand Logo */}
            <a
              href="#"
              className="brand"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
                color: "#ffffff",
                fontFamily: "Poppins, sans-serif",
                minWidth: "max-content",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/logo.svg"
                  alt="HK Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                />
              </div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Huzaifa Khan<span style={{ color: "#ffffff" }}>.</span>
                </strong>
                <small
                  style={{
                    color: "#777777",
                    display: "block",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    lineHeight: 1.2,
                    marginTop: 4,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Flutter Developer
                </small>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="desktop-nav"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(12px, 1.8vw, 28px)",
              }}
            >
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions (CTA & Hamburger) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <a
                href="/huzaifa_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="menu-button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Expanded Menu Drawer */}
          {menuOpen && (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: "20px 8px 10px 8px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                marginTop: 16,
              }}
            >
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: isActive ? "#ffffff" : "#9b9d9d",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      padding: "10px 12px",
                      borderRadius: 8,
                      background: isActive ? "rgba(255, 255, 255, 0.05)" : "transparent",
                      transition: "all 0.2s",
                      fontFamily: "Poppins, sans-serif",
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
                  marginTop: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px 16px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#000000",
                  background: "#ffffff",
                  textDecoration: "none",
                  borderRadius: 999,
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
      </header>

    </>
  );
}

