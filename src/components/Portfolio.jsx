import { useRef, useState, useEffect } from "react";

const projects = [
  {
    type: "Web App",
    date: "Jan 2026",
    title: "FinTrack Dashboard",
    description:
      "A personal finance tracker with real-time charts, budget planning, and expense categorization built for a startup client.",
    tags: ["React", "Node.js", "MongoDB"],
    accent: "var(--accent)",
    gradient: "linear-gradient(135deg, #0c0e14 0%, #162030 100%)",
    borderColor: "rgba(160,210,235,0.18)",
  },
  {
    type: "E-Commerce",
    date: "Dec 2025",
    title: "ShopEase Store",
    description:
      "Full-featured e-commerce platform with cart, payment integration, admin panel, and order tracking for a retail brand.",
    tags: ["React", "Express", "Stripe"],
    accent: "var(--accent2)",
    gradient: "linear-gradient(135deg, #0f0c1d 0%, #1a1630 100%)",
    borderColor: "rgba(208,189,244,0.18)",
  },
  {
    type: "Landing Page",
    date: "Nov 2025",
    title: "LaunchPad Agency",
    description:
      "High-converting landing page for a digital marketing agency. Smooth animations, mobile-first, and blazing fast load times.",
    tags: ["React", "Framer Motion", "Tailwind"],
    accent: "#7dafc9",
    gradient: "linear-gradient(135deg, #0c1218 0%, #101c24 100%)",
    borderColor: "rgba(125,175,201,0.18)",
  },
  {
    type: "Web App",
    date: "Oct 2025",
    title: "TaskFlow SaaS",
    description:
      "Project management tool with drag-and-drop boards, team collaboration, and real-time notifications for remote teams.",
    tags: ["React", "Socket.io", "PostgreSQL"],
    accent: "#a89ec9",
    gradient: "linear-gradient(135deg, #0f0d18 0%, #181526 100%)",
    borderColor: "rgba(168,158,201,0.18)",
  },
  {
    type: "Portfolio",
    date: "Sep 2025",
    title: "Studio Minimal",
    description:
      "Award-winning portfolio for a photographer. Lazy-loaded gallery, smooth page transitions, and full CMS integration.",
    tags: ["React", "Sanity CMS", "GSAP"],
    accent: "var(--accent)",
    gradient: "linear-gradient(135deg, #0c0e14 0%, #141e28 100%)",
    borderColor: "rgba(160,210,235,0.18)",
  },
  {
    type: "Web App",
    date: "Aug 2025",
    title: "MediBook Clinic",
    description:
      "Online appointment booking system for a medical clinic with patient portal, SMS reminders, and doctor dashboard.",
    tags: ["React", "Node.js", "Twilio"],
    accent: "var(--accent2)",
    gradient: "linear-gradient(135deg, #0f0c1d 0%, #1a1630 100%)",
    borderColor: "rgba(208,189,244,0.18)",
  },
];

export default function Portfolio() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="section" ref={sectionRef}
      style={{ overflow: "hidden" }}
    >
      <div className="container">

        {/* Section header */}
        <div
          style={{
            marginBottom: "3rem",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>
            Our Work
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
              Projects we're <span>proud of</span>
            </h2>

            {/* Scroll buttons */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {[
                { dir: -1, label: "←" },
                { dir:  1, label: "→" },
              ].map(({ dir, label }) => (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "1px solid var(--border-hover)",
                    background: "transparent",
                    color:
                      (dir === -1 && !canScrollLeft) ||
                      (dir === 1 && !canScrollRight)
                        ? "var(--text-muted)"
                        : "var(--text-primary)",
                    cursor:
                      (dir === -1 && !canScrollLeft) ||
                      (dir === 1 && !canScrollRight)
                        ? "not-allowed"
                        : "pointer",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    opacity:
                      (dir === -1 && !canScrollLeft) ||
                      (dir === 1 && !canScrollRight)
                        ? 0.3
                        : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (
                      (dir === -1 && canScrollLeft) ||
                      (dir === 1 && canScrollRight)
                    ) {
                      e.currentTarget.style.background = "var(--accent-soft)";
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "1.25rem",
          overflowX: "auto",
          paddingLeft: "max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
          paddingRight: "max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
          paddingBottom: "1.5rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
        }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          el.style.cursor = "grabbing";
          const startX = e.pageX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const onMove = (ev) => {
            const x = ev.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            el.style.cursor = "grab";
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* Hide scrollbar webkit */}
      <style>{`
        #portfolio [style*="overflow-x: auto"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
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
      style={{
        minWidth: "300px",
        maxWidth: "300px",
        background: project.gradient,
        border: `1px solid ${project.borderColor}`,
        borderRadius: "16px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        flexShrink: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = project.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = project.borderColor;
      }}
    >
      {/* Top meta */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.25rem",
        }}
      >
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: project.accent,
          }}
        >
          {project.type}
        </span>
        <span
          style={{
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}
        >
          {project.date}
        </span>
      </div>

      {/* Mock screen placeholder */}
      <div
        style={{
          width: "100%",
          height: "140px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${project.borderColor}`,
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Fake UI lines */}
        <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ height: "8px", borderRadius: "4px", background: project.accent, opacity: 0.3, width: "60%" }} />
          <div style={{ height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.08)", width: "90%" }} />
          <div style={{ height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.06)", width: "75%" }} />
          <div style={{ height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.05)", width: "85%" }} />
          <div style={{ marginTop: "4px", height: "24px", borderRadius: "6px", background: project.accent, opacity: 0.15, width: "40%" }} />
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.83rem",
          color: "var(--text-secondary)",
          lineHeight: 1.65,
          marginBottom: "1.25rem",
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tags row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((tag, j) => (
          <span
            key={j}
            style={{
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.2rem 0.6rem",
              borderRadius: "100px",
              border: `1px solid ${project.accent}30`,
              color: project.accent,
              background: `${project.accent}0d`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}