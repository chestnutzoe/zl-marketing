import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/creator", label: "Creator" },
  { href: "/brand", label: "Brand" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav({ active }: { active?: string }) {
  return (
    <nav className="py-6">
      <div className="mx-auto max-w-[1200px] px-8 grid grid-cols-[auto_1fr_auto] items-center gap-8">
        <Link
          href="/"
          className="font-display text-[18px] tracking-tight text-ink no-underline"
        >
          ZL Marketing
        </Link>
        <div className="hidden md:flex justify-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[12px] uppercase tracking-[0.15em] no-underline transition-colors ${
                active === l.href
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div />
      </div>
    </nav>
  );
}
