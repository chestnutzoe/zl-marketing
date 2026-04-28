import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  Container,
  Eyebrow,
  H1,
  Divider,
  I,
} from "@/components/Type";
import { products, formatPrice } from "@/lib/products";

export const metadata = {
  title: "Store — Blueprints, Guides & Done-For-You Services | ZL Marketing",
  description:
    "Self-serve blueprints and done-for-you services to launch and grow on RedNote — built from 8+ years of hands-on experience.",
};

export default function StorePage() {
  const digital = products.filter((p) => p.type === "digital");
  const services = products.filter((p) => p.type === "service");

  return (
    <>
      <Nav active="/store" />
      <main className="flex-1">
        <Container>
          <section className="pt-24 pb-12 text-center">
            <Eyebrow>Store</Eyebrow>
            <H1>
              Blueprints & <I>done-for-you</I> services for RedNote.
            </H1>
            <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[560px] mx-auto">
              Self-serve playbooks if you want to learn it yourself, or hand
              the whole process to me if you want it done right the first
              time.
            </p>
          </section>

          <Divider />

          {digital.length > 0 && (
            <section className="pb-4">
              <Eyebrow>Self-serve playbooks</Eyebrow>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {digital.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          )}

          {services.length > 0 && (
            <section className="pt-12 pb-12">
              <Eyebrow>Done-for-you</Eyebrow>
              <div className="grid grid-cols-1 gap-8 mt-6">
                {services.map((p) => (
                  <ProductCard key={p.slug} product={p} featured />
                ))}
              </div>
            </section>
          )}

          <div className="bg-brand text-cream text-center py-14 px-8 my-8 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Need something custom?
            </p>
            <p className="text-[15px] text-cream/70 mb-8 leading-[1.7] max-w-[520px] mx-auto">
              Tell me about your brand or category and I&apos;ll send back the
              right combination of strategy, services, or KOL campaigns.
            </p>
            <a
              href="mailto:zoe@chinamarketingzl.com?subject=Custom%20RedNote%20engagement"
              className="group inline-flex items-center gap-2 bg-cream text-brand px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-soft hover:-translate-y-0.5 active:translate-y-0"
            >
              Email Zoe
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function ProductCard({
  product: p,
  featured = false,
}: {
  product: (typeof products)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={`/${p.slug}`}
      className="group block overflow-hidden bg-white border border-border/60 rounded-xl shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5"
    >
      {p.image && (
        <div className="overflow-hidden bg-cream/40">
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            className={`w-full block object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] ${
              featured ? "aspect-[16/9]" : "aspect-square"
            }`}
            unoptimized
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-start justify-between gap-6 mb-5">
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-muted mb-2">
              {p.type === "digital" ? "Digital download" : "Done-for-you service"}
            </p>
            <p
              className={`font-display ${
                featured
                  ? "text-[clamp(24px,2.6vw,32px)]"
                  : "text-[clamp(22px,2.4vw,28px)]"
              } text-ink leading-[1.25]`}
            >
              {p.name}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-display text-[28px] text-brand leading-none">
              {formatPrice(p.price)}
            </p>
          </div>
        </div>
        <p className="text-[14px] text-ink-soft leading-[1.75] mb-6">
          {p.cardTagline}
        </p>
        <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-brand transition-transform duration-300 group-hover:translate-x-1">
          Learn more
          <span>→</span>
        </span>
      </div>
    </Link>
  );
}
