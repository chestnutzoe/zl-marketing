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
          className="font-display text-[18px] tracking-tight text-ink no-underline transition-opacity duration-300 hover:opacity-70"
        >
          ZL Marketing
        </Link>
        <div className="hidden md:flex justify-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-[12px] uppercase tracking-[0.15em] no-underline transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-[1px] after:bg-current after:transition-[width] after:duration-300 ${
                active === l.href
                  ? "text-ink after:w-full"
                  : "text-ink-soft hover:text-ink after:w-0 hover:after:w-full"
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
