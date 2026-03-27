import { useState, useEffect } from "react";

const projects = [
  {
    type: "Web App",
    date: "Jan 2026",
    title: "FinTrack Dashboard",
    description:
      "A personal finance tracker with real-time charts, budget planning, and expense categorization built for a startup client.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#6A5447",
    bgColor: "linear-gradient(135deg, #1a1412 0%, #0f0a08 100%)",
    number: "01",
  },
  {
    type: "E-Commerce",
    date: "Dec 2025",
    title: "ShopEase Store",
    description:
      "Full-featured e-commerce platform with cart, payment integration, admin panel, and order tracking for a retail brand.",
    tags: ["React", "Express", "Stripe"],
    color: "#5A463B",
    bgColor: "linear-gradient(135deg, #1a1511 0%, #0d0a08 100%)",
    number: "02",
  },
  {
    type: "Landing Page",
    date: "Nov 2025",
    title: "LaunchPad Agency",
    description:
      "High-converting landing page for a digital marketing agency. Smooth animations, mobile-first, and blazing fast load times.",
    tags: ["React", "Framer Motion", "Tailwind"],
    color: "#285A48",
    bgColor: "linear-gradient(135deg, #0a1914 0%, #050c0a 100%)",
    number: "03",
  },
  {
    type: "Web App",
    date: "Oct 2025",
    title: "TaskFlow SaaS",
    description:
      "Project management tool with drag-and-drop boards, team collaboration, and real-time notifications for remote teams.",
    tags: ["React", "Socket.io", "PostgreSQL"],
    color: "#393E46",
    bgColor: "linear-gradient(135deg, #12141a 0%, #080a0e 100%)",
    number: "04",
  },
  {
    type: "Portfolio",
    date: "Sep 2025",
    title: "Studio Minimal",
    description:
      "Award-winning portfolio for a photographer. Lazy-loaded gallery, smooth page transitions, and full CMS integration.",
    tags: ["React", "Sanity CMS", "GSAP"],
    color: "#408A71",
    bgColor: "linear-gradient(135deg, #0f1e1a 0%, #070f0d 100%)",
    number: "05",
  },
  {
    type: "Web App",
    date: "Aug 2025",
    title: "MediBook Clinic",
    description:
      "Online appointment booking system for a medical clinic with patient portal, SMS reminders, and doctor dashboard.",
    tags: ["React", "Node.js", "Twilio"],
    color: "#6A5447",
    bgColor: "linear-gradient(135deg, #1a1412 0%, #0f0a08 100%)",
    number: "06",
  },
];

export default function Portfolio() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.15 }
    );
    const section = document.getElementById("portfolio");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="section">
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
            Our Work
          </div>
          <h2 className="section-title">
            Projects we're <span>proud of</span>
          </h2>
        </div>

        {/* Grid of projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      style={{
        position: "relative",
        background: project.bgColor,
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colored top bar */}
      <div
        style={{
          height: "6px",
          background: project.color,
          transition: "height 0.3s ease",
          ...(isHovered && { height: "8px" }),
        }}
      />

      {/* Card content */}
      <div style={{ padding: "2rem" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              fontFamily: "var(--font-display)",
              color: project.color,
              opacity: 0.15,
              lineHeight: 1,
            }}
          >
            {project.number}
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: project.color,
                marginBottom: "0.25rem",
              }}
            >
              {project.type}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              {project.date}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.75rem",
          }}
        >
          {project.tags.map((tag, j) => (
            <span
              key={j}
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.35rem 0.85rem",
                borderRadius: "6px",
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Project Link */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.85rem",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            color: project.color,
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "gap 0.3s ease",
            ...(isHovered && { gap: "0.75rem" }),
          }}
        >
          View Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transition: "transform 0.3s ease",
              ...(isHovered && { transform: "translateX(3px)" }),
            }}
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Hover gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${project.color}08 0%, transparent 100%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}