import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services"  },
  { label: "Work",     href: "#portfolio" },
  { label: "Team",     href: "#team"      },
  { label: "Contact",  href: "#contact"   },
];

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar({ scrolled, theme, toggleTheme }) {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const ids = ["services", "portfolio", "team", "contact"];
    const onScroll = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)", marginInline: "auto",
          paddingInline: "1.5rem", height: "66px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center", gap: "1rem",
        }}
      >
        {/* LEFT — Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="0"  y="0"  width="10" height="10" rx="3" fill="#00E5A0" opacity="0.95"/>
            <rect x="12" y="0"  width="10" height="10" rx="3" fill="#00E5A0" opacity="0.5"/>
            <rect x="0"  y="12" width="10" height="10" rx="3" fill="#00E5A0" opacity="0.4"/>
            <rect x="12" y="12" width="10" height="10" rx="3" fill="#00E5A0" opacity="0.2"/>
          </svg>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
            DevSquad
          </span>
        </a>

        {/* CENTER — Nav links */}
        <nav className="hidden md:block">
          <ul style={{ display: "flex", alignItems: "center", gap: "0.2rem", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const id       = link.href.replace("#", "");
              const isActive = activeLink === id;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      display: "inline-flex", alignItems: "center",
                      padding: "0.45rem 0.95rem", borderRadius: "100px",
                      fontFamily: "var(--font-display)", fontSize: "0.85rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      textDecoration: "none",
                      background: isActive ? "var(--accent-soft)" : "transparent",
                      border: isActive ? "1px solid var(--border-hover)" : "1px solid transparent",
                      transition: "all 0.22s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text-primary)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT — Theme toggle + CTA + hamburger */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.6rem" }}>

          {/* Dark/light toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle hidden md:flex"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.55rem 1.25rem", borderRadius: "100px",
              border: "1.5px solid var(--border-hover)",
              background: "transparent", color: "var(--text-primary)",
              fontFamily: "var(--font-display)", fontSize: "0.82rem",
              fontWeight: 700, letterSpacing: "0.01em",
              textDecoration: "none", transition: "all 0.22s ease", whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background   = "var(--accent-soft)";
              e.currentTarget.style.borderColor  = "var(--accent)";
              e.currentTarget.style.color        = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background   = "transparent";
              e.currentTarget.style.borderColor  = "var(--border-hover)";
              e.currentTarget.style.color        = "var(--text-primary)";
            }}
          >
            Start Project
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ transform: "rotate(-45deg)" }}>
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: "22px", height: "1.5px",
                background: "var(--text-primary)", borderRadius: "2px",
                transition: "all 0.3s ease",
                transform:
                  menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)"
                  : menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "340px" : "0px",
          transition: "max-height 0.4s ease",
          background: "rgba(0,0,0,0.97)",
          borderTop: menuOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <ul style={{ listStyle: "none", padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.2rem", margin: 0 }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "0.75rem 1rem", borderRadius: "10px", fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--accent-soft)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: "0.75rem", display: "flex", gap: "0.6rem" }}>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>
              Start Project ↗
            </a>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}