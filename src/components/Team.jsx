import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Your Name",
    role: "Full Stack Developer",
    bio: "Loves building end-to-end products. Obsessed with clean architecture and fast APIs.",
    skills: ["React", "Node.js", "MongoDB"],
    accent: "var(--accent)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    github: "#",
    linkedin: "#",
    position: "center 15%",
  },
  {
    name: "Friend Two",
    role: "Frontend Developer",
    bio: "Pixel-perfect UI is the mission. Turns Figma designs into smooth, responsive interfaces.",
    skills: ["React", "Tailwind", "Framer Motion"],
    accent: "var(--accent2)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    github: "#",
    linkedin: "#",
    position: "center 14%",
  },
  {
    name: "Friend Three",
    role: "Backend Developer",
    bio: "The engine builder. Crafts robust APIs, handles databases, and keeps servers happy.",
    skills: ["Node.js", "Express", "PostgreSQL"],
    accent: "#7dafc9",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    github: "#",
    linkedin: "#",
    position: "center 15%",
  },
  {
    name: "Friend Four",
    role: "UI / UX Designer",
    bio: "Design is not decoration — it's communication. Creates interfaces people actually enjoy using.",
    skills: ["Figma", "Prototyping", "Design Systems"],
    accent: "#a89ec9",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    github: "#",
    linkedin: "#",
    position: "center 28%",
  },
];

// Modern solid GitHub icon
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Modern solid LinkedIn icon
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Team() {
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
    <section id="team" className="section" ref={sectionRef}>
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
            The Team
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
              4 friends, <span>1 mission</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                maxWidth: "340px",
                lineHeight: 1.7,
              }}
            >
              We're not a big agency — we're a tight-knit team that cares
              deeply about every project we take on.
            </p>
          </div>
        </div>

        {/* Team cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ member, index }) {
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
        height: "420px",
        borderRadius: "20px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        cursor: "pointer",
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? member.accent + "60" : "var(--border)"}`,
      }}
    >
      {/* Background image - starts at top half, expands to full on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: hovered ? "100%" : "50%",
          backgroundImage: `url(${member.image})`,
          backgroundSize: "cover",
          backgroundPosition: member.position ||"center",
          transition: "height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          zIndex: 1,
        }}
      >
        {/* Gradient overlay - only visible on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      </div>

      {/* Content container */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
          zIndex: 2,
          background: hovered ? "transparent" : "var(--bg-card)",
          transition: "background 0.4s ease",
        }}
      >
        {/* Name and role */}
        <div style={{ marginBottom: hovered ? "0.75rem" : "1rem", transition: "margin 0.3s ease" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "0.3rem",
              letterSpacing: "-0.02em",
              textShadow: hovered ? "0 2px 8px rgba(0,0,0,0.6)" : "none",
              transition: "text-shadow 0.3s ease",
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: member.accent,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textShadow: hovered ? "0 1px 4px rgba(0,0,0,0.4)" : "none",
              transition: "text-shadow 0.3s ease",
            }}
          >
            {member.role}
          </p>
        </div>

        {/* Bio - only visible on hover */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 1.6,
            marginBottom: hovered ? "0.75rem" : "0",
            maxHeight: hovered ? "100px" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.4s ease",
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          {member.bio}
        </p>

        {/* Skills - visible on hover */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: hovered ? "1rem" : "0",
            maxHeight: hovered ? "100px" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.4s ease",
          }}
        >
          {member.skills.map((skill, j) => (
            <span
              key={j}
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.25rem 0.65rem",
                borderRadius: "100px",
                border: `1px solid ${member.accent}50`,
                color: "#fff",
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social icons - always visible */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <a
            href={member.github}
            aria-label="GitHub"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${hovered ? "rgba(255,255,255,0.18)" : member.accent + "30"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: hovered ? "#fff" : member.accent,
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = member.accent;
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.color = hovered ? "#fff" : member.accent;
            }}
          >
            <GithubIcon />
          </a>

          <a
            href={member.linkedin}
            aria-label="LinkedIn"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${hovered ? "rgba(255,255,255,0.18)" : member.accent + "30"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: hovered ? "#fff" : member.accent,
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = member.accent;
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.color = hovered ? "#fff" : member.accent;
            }}
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>

      {/* Accent line at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: member.accent,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          zIndex: 3,
        }}
      />
    </div>
  );
}