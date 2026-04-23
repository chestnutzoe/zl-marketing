"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1600,
}: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      hasRun.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-[clamp(56px,8vw,96px)] text-brand leading-none font-normal tracking-[-0.02em] tabular-nums">
        {display}
        {suffix}
      </p>
      <p className="text-[13px] text-ink-soft mt-5 tracking-[0.05em]">
        {label}
      </p>
      <div className="w-8 h-px bg-brand/40 mx-auto mt-5" />
    </div>
  );
}
