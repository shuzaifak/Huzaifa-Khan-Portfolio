"use client";
import { useState } from "react";

const contacts = [
  {
    id: "email",
    label: "Email",
    value: "shuzaifak@gmail.com",
    href: "mailto:shuzaifak@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    accent: "#00d4ff",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/shuzaifak",
    href: "https://linkedin.com/in/shuzaifak",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    accent: "#0077b5",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/shuzaifak",
    href: "https://github.com/shuzaifak",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    accent: "#f0f4ff",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("shuzaifak@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 0 160px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="label">Get In Touch</span>
          <h2>
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p>
            Open to exciting opportunities, freelance projects, and collaborations.
            Drop me a message and I&apos;ll get back to you soon!
          </p>
        </div>

        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
          className="contact-grid"
        >
          {/* Main CTA */}
          <div
            className="glass-card"
            style={{
              gridColumn: "1 / -1",
              padding: "48px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(123,47,255,0.06) 100%)",
              borderColor: "rgba(0,212,255,0.15)",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>👋</div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#f0f4ff",
                fontFamily: "Poppins, sans-serif",
                marginBottom: 12,
              }}
            >
              Ready to Collaborate?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "#8892a4",
                fontFamily: "Poppins, sans-serif",
                marginBottom: 32,
                maxWidth: 400,
                margin: "0 auto 32px",
              }}
            >
              Whether you have a project in mind, need a Flutter developer for your team,
              or just want to say hello — my inbox is always open.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:shuzaifak@gmail.com"
                className="btn-primary"
                style={{ fontSize: 15 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send an Email
              </a>
              <button
                onClick={copyEmail}
                className="btn-outline"
                style={{ fontSize: 15 }}
              >
                {copied ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                    </svg>
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact cards */}
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "20px 24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${contact.accent}40`;
                (e.currentTarget as HTMLElement).style.background = `${contact.accent}06`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${contact.accent}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${contact.accent}12`,
                  border: `1px solid ${contact.accent}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: contact.accent,
                  flexShrink: 0,
                }}
              >
                {contact.icon}
              </div>
              <div>
                <p style={{ fontSize: 13, color: "#4a5568", fontFamily: "Poppins, sans-serif", marginBottom: 2 }}>
                  {contact.label}
                </p>
                <p style={{ fontSize: 14, color: "#e2e8f0", fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
                  {contact.value}
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={contact.accent}
                strokeWidth="2"
                style={{ marginLeft: "auto" }}
              >
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
