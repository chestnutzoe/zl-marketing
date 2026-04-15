import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink-muted mb-6 block">
      {children}
    </p>
  );
}

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-[clamp(40px,5vw,60px)] leading-[1.1] tracking-[-0.005em] text-ink mb-7 max-w-[720px] font-normal">
      {children}
    </h1>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(30px,3.6vw,46px)] leading-[1.15] tracking-[-0.005em] text-ink mb-5 font-normal">
      {children}
    </h2>
  );
}

export function Body({ children }: { children: ReactNode }) {
  return (
    <p className="text-[14px] text-ink-soft leading-[1.85] mb-5 max-w-[560px]">
      {children}
    </p>
  );
}

export function HeroSub({ children }: { children: ReactNode }) {
  return (
    <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px] mb-4">
      {children}
    </p>
  );
}

export function Divider() {
  return <hr className="border-0 border-t border-border my-20" />;
}

export function Container({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-6 ${wide ? "max-w-[1080px]" : "max-w-[880px]"}`}
    >
      {children}
    </div>
  );
}

/** Italic accent: same family as parent heading by default — never coloured. */
export function I({ children }: { children: ReactNode }) {
  return <em className="not-italic text-inherit">{children}</em>;
}
