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
    title: "Full Stack Apps",
    description:
      "Complete end-to-end applications with frontend + backend integration.",
    color: "#7c3aed",
  },
];

export default function Services() {
  return (
    <section
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

      {/* 🔥 Center band */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "clamp(1.5rem, 4vw, 4rem)",
          background: "rgba(223,230,235,0.9)",
          borderRadius: "clamp(16px, 4vw, 28px)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 1,
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
        background: "#eef2f5",
        minHeight: "220px", // ✅ FIX: bottom visibility
        overflow: "visible", // ✅ FIX: allow strip overflow
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-12px) scale(1.03)"
            : "translateY(0)"
          : "translateY(50px)",
        transition: "all 0.5s ease",
        boxShadow: hovered
          ? `0 20px 40px rgba(0,0,0,0.2),
             0 0 0 1px ${service.color}55,
             0 0 25px ${service.color}55`
          : `10px 10px 25px rgba(0,0,0,0.08),
             -10px -10px 25px rgba(255,255,255,0.9)`,
        cursor: "pointer",
      }}
    >
      {/* 🔹 Depth layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "22px",
          transform: "translate(10px, 10px)",
          background: "#d6dde3",
          zIndex: -1,
        }}
      />

      {/* 🔹 Floating gradient strip */}
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
            ? `0 10px 30px ${service.color}80`
            : "0 10px 20px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
        }}
      >
        {service.number}
      </div>

      {/* 🔹 Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#e3e8ec",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          fontSize: "20px",
        }}
      >
        💡
      </div>

      {/* 🔹 Title */}
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          color: "#333",
          paddingRight: "3rem",
        }}
      >
        {service.title}
      </h3>

      {/* 🔹 Description */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "#666",
          lineHeight: "1.6",
        }}
      >
        {service.description}
      </p>
    </div>
  );
}