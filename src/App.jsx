import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme]       = useState("dark"); // "dark" | "light"

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Apply theme to <html> ── */
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme]);

  /* ── Restore saved theme ── */
  useEffect(() => {
    const saved = localStorage.getItem("devsquad-theme");
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("devsquad-theme", next);
  };

  return (
    <div style={{ position: "relative" }}>

      {/* ── Ambient glow blobs — mint tinted ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0,
          pointerEvents: "none", zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: "-10%", left: "-5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)",
        }}/>
        <div style={{
          position: "absolute", top: "45%", right: "-10%",
          width: "580px", height: "580px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,160,0.04) 0%, transparent 70%)",
        }}/>
        <div style={{
          position: "absolute", bottom: "5%", left: "25%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,184,122,0.04) 0%, transparent 70%)",
        }}/>
      </div>

      {/* ── Main content ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar
          scrolled={scrolled}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}