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
    <nav className="border-b border-border py-6">
      <div className="mx-auto max-w-[1080px] px-6 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="font-display text-[19px] tracking-tight text-ink no-underline"
        >
          ZL Marketing Studio
        </Link>
        <div className="hidden md:flex gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14px] no-underline transition-colors ${
                active === l.href
                  ? "text-ink font-medium"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
