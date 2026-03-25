import { useEffect, useRef, useState } from "react";

/**
 * useReveal — triggers a visible state when element enters viewport
 *
 * Usage:
 *   const { ref, visible } = useReveal();
 *   <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "all 0.7s ease" }}>
 *
 * Options:
 *   threshold  — 0 to 1, how much of element must be visible (default 0.12)
 *   delay      — ms delay before triggering (default 0)
 *   once       — stop observing after first trigger (default true)
 */
export function useReveal({ threshold = 0.12, delay = 0, once = true } = {}) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay, once]);

  return { ref, visible };
}

/**
 * revealStyle — convenience helper for common reveal styles
 *
 * Usage:
 *   <div style={revealStyle(visible, { delay: 200 })}>
 */
export function revealStyle(visible, { delay = 0, distance = "28px", duration = 700 } = {}) {
  return {
    opacity:    visible ? 1 : 0,
    transform:  visible ? "translateY(0)" : `translateY(${distance})`,
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
  };
}