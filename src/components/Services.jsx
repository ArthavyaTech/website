import { useEffect, useRef, useState } from "react";

const services = [

   {
    number: "01",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive UIs built with React. Fast load times, smooth animations.",
    color: "#f7b733",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Robust APIs and scalable backend systems that power your apps reliably.",
    color: "#ff6a3d",
  },
  {
    number: "03",
    title: "Machine Learning Systems",
    description:
      "Custom ML models, prediction systems, and data-driven automation pipelines.",
    color: "#22c55e",
  },
  {
    number: "04",
    title: "Full Stack Apps",
    description:
      "Complete end-to-end applications with frontend + backend integration.",
    color: "#7c3aed",
  },
  {
    number: "05",
    title: "AI-Powered Interfaces",
    description:
      "Smart UI systems with AI-driven personalization, chatbots, and dynamic UX.",
    color: "#00E5A0",
  },
  {
    number: "06",
    title: "Real-time Data Systems",
    description:
      "Streaming dashboards, analytics, and high-performance data pipelines.",
    color: "#06b6d4",
  },
];

const whyChooseUs = [
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    description: "We ship quality code faster than traditional agencies.",
  },
  {
    icon: "🎯",
    title: "Pixel-Perfect Design",
    description: "Every detail matters. We craft experiences, not just websites.",
  },
  {
    icon: "💬",
    title: "Direct Communication",
    description: "Work directly with developers, no project managers in between.",
  },
  {
    icon: "🔄",
    title: "Unlimited Revisions",
    description: "We iterate until you're 100% satisfied with the result.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#000",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      {/* 🔥 Fade edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #000 0%, transparent 20%, transparent 80%, #000 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "auto", padding: "0 1.5rem" }}>
        
        {/* ═══ Header Section ═══ */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              fontWeight: "600",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "1.5px",
                background: "var(--accent)",
              }}
            />
            WHAT WE DO
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "800",
              color: "var(--text-primary)",
              marginBottom: "1rem",
              fontFamily: "var(--font-display)",
            }}
          >
            Services We <span style={{ color: "var(--accent)" }}>Offer</span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            From a landing page to a full product — we handle everything with care.
          </p>
        </div>

        {/* ═══ Service Cards ═══ */}
        <div
          style={{
            padding: "clamp(1.5rem, 4vw, 4rem)",
            background: "rgba(15, 15, 15, 0.4)",
            borderRadius: "clamp(16px, 4vw, 28px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 229, 160, 0.1)",
            position: "relative",
            zIndex: 1,
            marginBottom: "5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>

        {/* ═══ Why Choose Us Section ═══ */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                fontWeight: "600",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "1.5px",
                  background: "var(--accent)",
                }}
              />
              WHY CHOOSE US
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: "800",
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              Better Than <span style={{ color: "var(--accent)" }}>Traditional Agencies</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {whyChooseUs.map((item, i) => (
              <WhyCard key={i} item={item} index={i} />
            ))}
          </div>
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
          setTimeout(() => setVisible(true), index * 120);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
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
        borderRadius: "22px",
        padding: "2rem",
        background: "rgba(20, 20, 20, 0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: hovered
          ? `1px solid ${service.color}`
          : "1px solid rgba(255, 255, 255, 0.08)",
        minHeight: "220px",
        overflow: "visible",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-8px)"
            : "translateY(0)"
          : "translateY(50px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: hovered
          ? `0 0 0 1px ${service.color}, 
             0 0 20px ${service.color}40,
             0 20px 40px rgba(0, 0, 0, 0.3)`
          : "0 8px 24px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
      }}
    >
      {/* Depth layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "22px",
          transform: "translate(8px, 8px)",
          background: "rgba(10, 10, 10, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.04)",
          zIndex: -1,
        }}
      />

      {/* Floating gradient strip */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "-14px",
          width: "60px",
          height: "88%",
          borderRadius: "16px",
          background: `linear-gradient(180deg, ${service.color}, #ffb347)`,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "12px",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "0.9rem",
          boxShadow: hovered
            ? `0 8px 24px ${service.color}60`
            : "0 8px 16px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
        }}
      >
        {service.number}
      </div>

      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "rgba(30, 30, 30, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          fontSize: "20px",
        }}
      >
        💡
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          color: "#F0FFF8",
          paddingRight: "3rem",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "#9CA3AF",
          lineHeight: "1.6",
        }}
      >
        {service.description}
      </p>
    </div>
  );
}

function WhyCard({ item, index }) {
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
      { threshold: 0.2 }
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
        padding: "1.8rem",
        background: "rgba(15, 15, 15, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: hovered
          ? "1px solid var(--accent)"
          : "1px solid rgba(0, 229, 160, 0.15)",
        borderRadius: "18px",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(30px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: hovered
          ? "0 0 0 1px var(--accent), 0 0 20px rgba(0, 229, 160, 0.2)"
          : "0 4px 16px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "rgba(0, 229, 160, 0.1)",
          border: "1px solid rgba(0, 229, 160, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          fontSize: "22px",
        }}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
          lineHeight: "1.6",
        }}
      >
        {item.description}
      </p>
    </div>
  );
}