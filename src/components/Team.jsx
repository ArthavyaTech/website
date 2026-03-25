import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Your Name",
    role: "Full Stack Developer",
    bio: "Loves building end-to-end products. Obsessed with clean architecture and fast APIs.",
    skills: ["React", "Node.js", "MongoDB"],
    accent: "var(--accent)",
    initials: "YN",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Friend Two",
    role: "Frontend Developer",
    bio: "Pixel-perfect UI is the mission. Turns Figma designs into smooth, responsive interfaces.",
    skills: ["React", "Tailwind", "Framer Motion"],
    accent: "var(--accent2)",
    initials: "FT",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Friend Three",
    role: "Backend Developer",
    bio: "The engine builder. Crafts robust APIs, handles databases, and keeps servers happy.",
    skills: ["Node.js", "Express", "PostgreSQL"],
    accent: "#7dafc9",
    initials: "FH",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Friend Four",
    role: "UI / UX Designer",
    bio: "Design is not decoration — it's communication. Creates interfaces people actually enjoy using.",
    skills: ["Figma", "Prototyping", "Design Systems"],
    accent: "#a89ec9",
    initials: "FF",
    github: "#",
    linkedin: "#",
  },
];

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
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
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? member.accent + "55" : "var(--border)"}`,
        borderRadius: "18px",
        padding: "2rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "2px",
          background: member.accent,
          borderRadius: "0 0 4px 4px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Avatar + name row */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Avatar circle */}
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: `${member.accent}18`,
            border: `1.5px solid ${member.accent}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "border-color 0.3s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.85rem",
              fontWeight: 800,
              color: member.accent,
              letterSpacing: "0.04em",
            }}
          >
            {member.initials}
          </span>
        </div>

        {/* Name + role */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.15rem",
              letterSpacing: "-0.01em",
            }}
          >
            {member.name}
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: member.accent,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {member.role}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {member.bio}
      </p>

      {/* Skills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {member.skills.map((skill, j) => (
          <span
            key={j}
            style={{
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.2rem 0.6rem",
              borderRadius: "100px",
              border: `1px solid ${member.accent}30`,
              color: member.accent,
              background: `${member.accent}0d`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Social links */}
      <div style={{ display: "flex", gap: "0.75rem" }}>
        {[
          { href: member.github, icon: <GithubIcon />, label: "GitHub" },
          { href: member.linkedin, icon: <LinkedinIcon />, label: "LinkedIn" },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = member.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}