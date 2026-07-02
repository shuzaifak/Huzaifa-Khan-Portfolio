"use client";
import AnimatedSection from "./AnimatedSection";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: "https://linkedin.com/in/huzaifa-khan-", icon: <LinkedInIcon />, label: "LinkedIn" },
    { href: "https://github.com/shuzaifak", icon: <GitHubIcon />, label: "GitHub" },
    { href: "mailto:shuzaifak35@gmail.com", icon: <EmailIcon />, label: "Email" }
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95))",
        padding: "80px 24px 40px",
        position: "relative",
        zIndex: 1,
        overflow: "hidden"
      }}
    >
      {/* Decorative top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.1), transparent)",
          filter: "blur(0.5px)"
        }}
      />

      <AnimatedSection variant="fadeIn">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid">
            {/* Column 1: Info & Brand */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
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
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Huzaifa Khan<span style={{ color: "#ffffff" }}>.</span>
                </div>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#555555",
                  lineHeight: 1.7,
                  maxWidth: 380,
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                Flutter developer specializing in building beautiful, production-ready, cross-platform mobile experiences that scale.
              </p>

              {/* Social quick links */}
              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      color: "#555555",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#555555";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.06)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.03)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#cccccc",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                Navigation
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["About", "Experience", "Projects"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontSize: 14,
                      color: "#444444",
                      textDecoration: "none",
                      fontFamily: "Poppins, sans-serif",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#444444"; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Resources */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#cccccc",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                Expertise
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Skills", "Education", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontSize: 14,
                      color: "#444444",
                      textDecoration: "none",
                      fontFamily: "Poppins, sans-serif",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#444444"; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "rgba(255, 255, 255, 0.04)",
              margin: "40px 0 30px"
            }}
          />

          {/* Bottom line */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16
            }}
            className="footer-bottom"
          >
            <p
              style={{
                fontSize: 13,
                color: "#3a3a3a",
                fontFamily: "Poppins, sans-serif",
                margin: 0
              }}
            >
              © {year} Huzaifa Khan. All rights reserved.
            </p>
            <a
              href="/huzaifa_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "#777777",
                textDecoration: "none",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 4
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#ffffff"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#777777"; }}
            >
              View CV Resume ↗
            </a>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}
