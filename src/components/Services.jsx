import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive UIs built with React. Fast load times, smooth animations, and clean code that scales with your product.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#00E5A0",   /* mint */
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Robust APIs, databases, and server-side logic. We build the engine that powers your product reliably at any scale.",
    tags: ["Node.js", "Express", "MongoDB"],
    color: "#FF5E00",   /* orange */
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M17.5 14v7M14 17.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Full Stack Web Apps",
    description:
      "End-to-end web applications from database to UI. We own the entire stack so nothing falls through the cracks.",
    tags: ["MERN Stack", "REST APIs", "Auth"],
    color: "#7C3AED",   /* violet */
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "UI / UX Design",
    description:
      "Clean, modern interfaces designed for real users. From wireframes to high-fidelity prototypes that look great and feel intuitive.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    color: "#FF007A",   /* pink */
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Landing Pages",
    description:
      "High-converting landing pages that load fast, look stunning, and turn visitors into clients. Delivered in days, not weeks.",
    tags: ["React", "SEO Ready", "Fast Delivery"],
    color: "#00B4D8",   /* cyan blue */
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "We don't disappear after launch. Ongoing support, bug fixes, updates, and performance monitoring — always there for you.",
    tags: ["Bug Fixes", "Updates", "Monitoring"],
    color: "#F59E0B",   /* amber */
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section" ref={sectionRef}>
      <div className="container">

        {/* Section header */}
        <div
          style={{
            marginBottom: "4rem",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>
            What We Do
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <h2 className="section-title">
              Services we <span>offer</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "340px", lineHeight: 1.7 }}>
              From a single landing page to a full product — we handle
              everything with the same care and attention to detail.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 90);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "var(--bg-card)",
        borderRadius: "18px",
        padding: "2rem 1.75rem 1.75rem",
        overflow: "hidden",
        border: `1px solid ${hovered ? service.color + "50" : "var(--border)"}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, background 0.3s ease",
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        cursor: "default",
      }}
    >
      {/* ── Colored number tab — top right (reference style) ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "52px",
          height: "64px",
          background: service.color,
          borderBottomLeftRadius: "18px",
          borderTopRightRadius: "17px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: hovered ? `0 4px 20px ${service.color}40` : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 800,
            color: "#000",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {service.number}
        </span>
      </div>

      {/* ── Top accent line on hover ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: "52px",   /* stop where the tab starts */
          height: "3px",
          background: service.color,
          borderTopLeftRadius: "18px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Icon ── */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: `${service.color}15`,
          border: `1px solid ${service.color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: service.color,
          marginBottom: "1.25rem",
          transition: "background 0.3s ease, transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        {service.icon}
      </div>

      {/* ── Title ── */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.65rem",
          paddingRight: "3.5rem",   /* don't overlap number tab */
          lineHeight: 1.3,
          transition: "color 0.2s ease",
        }}
      >
        {service.title}
      </h3>

      {/* ── Description ── */}
      <p
        style={{
          fontSize: "0.87rem",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          marginBottom: "1.5rem",
        }}
      >
        {service.description}
      </p>

      {/* ── Divider ── */}
      <div style={{ height: "1px", background: "var(--border)", marginBottom: "1rem" }} />

      {/* ── Tags ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {service.tags.map((tag, j) => (
          <span
            key={j}
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.25rem 0.7rem",
              borderRadius: "100px",
              border: `1px solid ${service.color}35`,
              color: service.color,
              background: `${service.color}0d`,
              transition: "background 0.2s ease",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}