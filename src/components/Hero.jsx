import { useEffect, useRef } from "react";

const stats = [
  { value: "4",    label: "Expert Developers" },
  { value: "15+",  label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h",  label: "Response Time" },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-reveal]");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(28px)";
      item.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 80);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "5rem",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
        >
          {/* Top content */}
          <div style={{ maxWidth: "820px" }}>

            {/* Eyebrow */}
            <div data-reveal className="eyebrow" style={{ marginBottom: "1.75rem" }}>
              Web Development Agency · India
            </div>

            {/* Main heading */}
            <h1
              data-reveal
              style={{
                fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.75rem",
              }}
            >
              We build{" "}
              <span
                style={{
                  color: "var(--accent)",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                digital products
                <svg
                  viewBox="0 0 300 12"
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: 0,
                    width: "100%",
                    height: "10px",
                    opacity: 0.4,
                  }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q75 2 150 8 Q225 14 298 6"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              that clients{" "}
              <span style={{ color: "var(--text-secondary)" }}>love.</span>
            </h1>

            {/* Subtext */}
            <p
              data-reveal
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "540px",
                marginBottom: "2.5rem",
              }}
            >
              A team of 4 passionate developers turning your ideas into
              fast, beautiful, and scalable web applications — from concept
              to deployment.
            </p>

            {/* CTA Buttons */}
            <div
              data-reveal
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a href="#contact" className="btn-primary">
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#portfolio" className="btn-outline">
                See Our Work
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
            className="sm:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "1.75rem 1.5rem",
                  background: "var(--bg-card)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg-surface)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--bg-card)")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-secondary)",
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            data-reveal
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "44px",
                border: "1.5px solid var(--border-hover)",
                borderRadius: "100px",
                display: "flex",
                justifyContent: "center",
                paddingTop: "6px",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "8px",
                  background: "var(--accent)",
                  borderRadius: "100px",
                  animation: "scrollDot 1.8s ease-in-out infinite",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
              }}
            >
              Scroll to explore
            </span>
          </div>

        </div>
      </div>

      {/* Scroll dot animation */}
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0);   opacity: 1; }
          60%  { transform: translateY(10px); opacity: 0.2; }
          100% { transform: translateY(0);   opacity: 1; }
        }
      `}</style>
    </section>
  );
}