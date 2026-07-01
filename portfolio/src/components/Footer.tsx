"use client";

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 24px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: 1,
          background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
          opacity: 0.5,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Logo */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            background: "linear-gradient(135deg, #00d4ff, #7b2fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Poppins, sans-serif",
            marginBottom: 16,
            letterSpacing: "-0.03em",
          }}
        >
          HK.
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          {["About", "Experience", "Projects", "Skills", "Education", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: 13,
                color: "#4a5568",
                textDecoration: "none",
                fontFamily: "Poppins, sans-serif",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#8892a4"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#4a5568"; }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: 13,
            color: "#2d3748",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          © {year} Huzaifa Khan. Built with{" "}
          <span style={{ color: "#7b2fff" }}>♥</span> using Next.js &{" "}
          <span style={{ color: "#00d4ff" }}>Three.js</span>
        </p>
      </div>
    </footer>
  );
}
