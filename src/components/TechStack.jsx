import { useEffect, useRef, useState } from "react";

const techStack = [
  {
    category: "Frontend",
    icon: "⚛️",
    color: "#61DAFB",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "📜" },
      { name: "Vite", icon: "⚡" },
    ],
  },
  {
    category: "Backend",
    icon: "🚀",
    color: "#68A063",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "Python", icon: "🐍" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "#4DB33D",
    technologies: [
      { name: "MongoDB", icon: "🍃" },
      { name: "SQL", icon: "🐘" },
      { name: "Neon", icon: "🔷" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    category: "AI & ML",
    icon: "🤖",
    color: "#FF6B6B",
    technologies: [
      { name: "AI/ML", icon: "✨" },
    ],
  },
  {
    category: "Deployment",
    icon: "☁️",
    color: "#A0D2EB",
    technologies: [
      { name: "Railway", icon: "🚄" },
      { name: "Vercel", icon: "▲" },
      { name: "Render", icon: "🎯" },
    ],
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack" className="section" ref={sectionRef}>
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
            Tech Stack
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
              Technologies we <span>master</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                maxWidth: "380px",
                lineHeight: 1.7,
              }}
            >
              Modern tools and frameworks we use to build fast, scalable, and
              beautiful applications.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {techStack.map((stack, i) => (
            <TechCard key={i} stack={stack} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ stack, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
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
        border: `1px solid ${hovered ? stack.color + "60" : "var(--border)"}`,
        borderRadius: "20px",
        padding: "2rem",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-8px)"
            : "translateY(0)"
          : "translateY(30px)",
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${stack.color}08 0%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          borderRadius: "20px",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            background: `${stack.color}15`,
            border: `1px solid ${stack.color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            transition: "all 0.3s ease",
            transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          }}
        >
          {stack.icon}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: hovered ? stack.color : "var(--text-primary)",
            transition: "color 0.3s ease",
            letterSpacing: "-0.02em",
          }}
        >
          {stack.category}
        </h3>
      </div>

      {/* Technologies */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0.75rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stack.technologies.map((tech, j) => (
          <div
            key={j}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              background: hovered ? "var(--bg-surface)" : "var(--bg)",
              border: `1px solid ${hovered ? stack.color + "20" : "var(--border)"}`,
              borderRadius: "12px",
              transition: "all 0.3s ease",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transitionDelay: `${j * 0.05}s`,
            }}
          >
            <span style={{ fontSize: "20px", flexShrink: 0 }}>
              {tech.icon}
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-display)",
              }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: stack.color,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />

      {/* Corner decoration */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: `${stack.color}10`,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.5)",
          transition: "all 0.4s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}