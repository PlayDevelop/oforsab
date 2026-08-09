"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function ParallaxMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;
      const mobileFactor = window.innerWidth < 768 ? 0.45 : 1;
      const heroProgress = clamp(window.scrollY, 0, 900);
      const statement = document.querySelector<HTMLElement>(".statement");
      const scrollRange =
        document.documentElement.scrollHeight - window.innerHeight;

      root.style.setProperty(
        "--scroll-progress",
        `${scrollRange > 0 ? window.scrollY / scrollRange : 0}`,
      );

      root.style.setProperty(
        "--parallax-grid",
        `${heroProgress * 0.1 * mobileFactor}px`,
      );
      root.style.setProperty(
        "--parallax-glow",
        `${heroProgress * 0.055 * mobileFactor}px`,
      );
      if (statement) {
        const rect = statement.getBoundingClientRect();
        const progress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const shift = clamp((progress - 0.5) * 100, -50, 50);
        root.style.setProperty(
          "--parallax-texture",
          `${shift * mobileFactor}px`,
        );
      }
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      revealObserver.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--parallax-grid");
      root.style.removeProperty("--parallax-glow");
      root.style.removeProperty("--parallax-texture");
    };
  }, []);

  return null;
}
