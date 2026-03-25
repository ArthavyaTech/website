import { useState } from "react";
import { useReveal, revealStyle } from "../hooks/useReveal";
import footerIllustration from "../assets/footer-illustration.svg";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Frontend Dev",    href: "#services" },
      { label: "Backend Dev",     href: "#services" },
      { label: "Full Stack Apps", href: "#services" },
      { label: "UI / UX Design",  href: "#services" },
      { label: "Landing Pages",   href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Work",   href: "#portfolio" },
      { label: "The Team",   href: "#team"      },
      { label: "Contact Us", href: "#contact"   },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "GitHub",    href: "#" },
      { label: "LinkedIn",  href: "#" },
      { label: "Twitter/X", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

const socialIcons = [
  { label: "GitHub",    href: "#", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
  { label: "LinkedIn",  href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "Twitter",   href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);
  const [error, setError] = useState("");

  const { ref: topRef,    visible: topVisible    } = useReveal({ threshold: 0.05 });
  const { ref: midRef,    visible: midVisible    } = useReveal({ threshold: 0.05 });
  const { ref: bottomRef, visible: bottomVisible } = useReveal({ threshold: 0.05 });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", marginTop: "2rem" }}>

      {/* ══ BAND 1: Brand + Newsletter ══ */}
      <div
        ref={topRef}
        style={{
          ...revealStyle(topVisible),
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            paddingTop: "3rem",
            paddingBottom: "2.5rem",
          }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}
            className="md:grid-cols-[1fr_1.5fr]"
          >
            {/* Brand */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="0"  y="0"  width="10" height="10" rx="3" fill="var(--accent)"  opacity="0.9"/>
                  <rect x="12" y="0"  width="10" height="10" rx="3" fill="var(--accent2)" opacity="0.7"/>
                  <rect x="0"  y="12" width="10" height="10" rx="3" fill="var(--accent2)" opacity="0.6"/>
                  <rect x="12" y="12" width="10" height="10" rx="3" fill="var(--accent)"  opacity="0.4"/>
                </svg>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
                  DevSquad
                </span>
              </a>
              <p style={{ fontSize: "0.87rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "300px" }}>
                4 friends. 1 mission. We build fast, beautiful, and scalable web products for clients worldwide.
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {socialIcons.map(({ label, href, path }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{ width: "34px", height: "34px", borderRadius: "9px", border: "1px solid var(--border)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", transition: "all 0.2s ease", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "var(--accent-soft)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent"; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={path}/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div className="eyebrow">Newsletter</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Stay in the loop
              </h3>
              <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Get updates on new projects, tech articles, and when we open slots for new clients.
              </p>
              {sent ? (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem", borderRadius: "100px", background: "rgba(160,210,235,0.1)", border: "1px solid rgba(160,210,235,0.2)", color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  You're subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <div style={{ display: "flex", alignItems: "center", background: "var(--bg)", border: "1px solid var(--border-hover)", borderRadius: "100px", padding: "5px 5px 5px 1.25rem" }}>
                    <input
                      type="email" placeholder="Enter your email..." value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: "0.88rem", padding: "0.4rem 0" }}
                    />
                    <button type="submit"
                      style={{ padding: "0.6rem 1.2rem", borderRadius: "100px", background: "var(--accent)", border: "none", color: "var(--bg)", fontFamily: "var(--font-display)", fontSize: "0.8rem", fontWeight: 700, cursor: "pointer", transition: "all 0.2s ease", display: "flex", alignItems: "center", gap: "0.3rem", whiteSpace: "nowrap" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
                    >
                      Subscribe
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ transform: "rotate(-45deg)" }}>
                        <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  {error && <p style={{ fontSize: "0.73rem", color: "#f87171", marginTop: "0.4rem", paddingLeft: "1rem" }}>{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ══ BAND 2: Links + SVG (SVG lives HERE now) ══ */}
      <div
        ref={midRef}
        style={{
          ...revealStyle(midVisible, { delay: 100 }),
          borderBottom: "1px solid var(--border)",
          position: "relative",   /* SVG is positioned inside this band */
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              /* 3 link cols + status col + illustration col */
              gridTemplateColumns: "repeat(3, minmax(120px, 1fr)) minmax(160px, 1fr) minmax(220px, 1.2fr)",
              gap: "2rem",
              paddingTop: "2.5rem",
              paddingBottom: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.heading} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  {col.heading}
                </span>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}
                        style={{ fontSize: "0.87rem", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Status column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Status
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block", flexShrink: 0, animation: "pulse 2s ease-in-out infinite" }}/>
                <span style={{ fontSize: "0.83rem", color: "#4ade80", fontWeight: 600 }}>Open for work</span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Taking on new projects for Q2 2026.
              </p>
              <a href="#contact"
                style={{ fontSize: "0.82rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.3rem", transition: "gap 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.55rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.3rem")}
              >
                Get in touch →
              </a>
            </div>

            {/* ── SVG column — sits as a real grid cell ── */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                alignSelf: "stretch",   /* stretch to full band height */
              }}
            >
              <img
                src={footerIllustration}
                alt=""
                aria-hidden="true"
                style={{
                  width: "100%",
                  maxWidth: "260px",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom right",
                  opacity: midVisible ? 1 : 0,
                  transform: midVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s",
                  display: "block",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══ BAND 3: Bottom bar — copyright only, no SVG ══ */}
      <div ref={bottomRef} style={revealStyle(bottomVisible, { delay: 150 })}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
              paddingTop: "1.25rem",
              paddingBottom: "1.25rem",
            }}
          >
            <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>
              © 2026 DevSquad. All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
              {[
                { label: "Privacy Policy", href: "#"        },
                { label: "Terms of Use",   href: "#"        },
                { label: "Support",        href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href}
                  style={{ fontSize: "0.76rem", color: "var(--text-muted)", textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: "0.04em", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1;   transform: scale(1);   }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </footer>
  );
}