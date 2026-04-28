import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  Container,
  Eyebrow,
  H1,
  H2,
  Body,
  Divider,
} from "@/components/Type";
import { products, getProduct, formatPrice } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;
  const p = getProduct(product);
  if (!p) return {};
  return {
    title: `${p.name} — ${formatPrice(p.price)} | ZL Marketing`,
    description: p.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const p = getProduct(product);
  if (!p) notFound();

  const typeLabel = p.type === "digital" ? "Digital download" : "Done-for-you service";

  return (
    <>
      <Nav active="/store" />
      <main className="flex-1">
        <Container>
          <section className="pt-20 pb-10">
            <Eyebrow>{typeLabel} · {formatPrice(p.price)}</Eyebrow>
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center mt-2">
              <div>
                <H1>{p.fullTitle}</H1>
                <p className="text-[16px] text-ink-soft leading-[1.7] max-w-[560px]">
                  {p.tagline}
                </p>
              </div>
              {p.image && (
                <div className="overflow-hidden rounded-xl bg-cream/40 shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)]">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    className="w-full h-auto block aspect-square object-cover"
                    priority
                    unoptimized
                  />
                </div>
              )}
            </div>

            <div className="bg-brand text-cream py-9 px-8 mt-12 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)] flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-cream/60 mb-1">
                  Price
                </p>
                <p className="font-display text-[44px] text-cream leading-none">
                  {formatPrice(p.price)}
                  <span className="text-[15px] text-cream/60 font-italic italic ml-2">
                    USD
                  </span>
                </p>
              </div>
              <BuyButton url={p.stripeUrl} label={p.ctaLabel} />
            </div>
          </section>

          <Divider />

          <section>
            <Body>{p.intro}</Body>
          </section>

          {p.sections.map((s, idx) => (
            <section key={idx} className="mt-16">
              <Eyebrow>{s.eyebrow}</Eyebrow>
              {s.body && <Body>{s.body}</Body>}
              {s.bullets && (
                <div className="mt-6 space-y-5 max-w-[700px]">
                  {s.bullets.map((b) => (
                    <div key={b.title} className="flex gap-4">
                      <span className="text-brand mt-[6px] flex-shrink-0">◆</span>
                      <div>
                        <p className="font-display text-[17px] text-ink leading-[1.4] mb-1">
                          {b.title}
                        </p>
                        {b.body && (
                          <p className="text-[14px] text-ink-soft leading-[1.75]">
                            {b.body}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {p.faq && p.faq.length > 0 && (
            <>
              <Divider />
              <section>
                <Eyebrow>FAQ</Eyebrow>
                <H2>Questions, answered.</H2>
                <div className="mt-8 space-y-6 max-w-[680px]">
                  {p.faq.map((q) => (
                    <div
                      key={q.q}
                      className="bg-white border border-border/60 rounded-xl p-6 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.06)]"
                    >
                      <p className="font-display text-[17px] text-ink leading-[1.4] mb-2">
                        {q.q}
                      </p>
                      <p className="text-[14px] text-ink-soft leading-[1.75]">
                        {q.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          <Divider />

          <section className="bg-brand text-cream text-center py-14 px-8 my-8 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]">
            {p.closingNote && (
              <p className="font-display text-[clamp(22px,3vw,28px)] text-cream mb-6 leading-tight max-w-[640px] mx-auto">
                {p.closingNote}
              </p>
            )}
            <BuyButton
              url={p.stripeUrl}
              label={`${p.ctaLabel} — ${formatPrice(p.price)}`}
              variant="onBrand"
            />
          </section>

          <div className="text-center pb-12">
            <Link
              href="/store"
              className="text-[13px] uppercase tracking-[0.18em] text-ink-muted hover:text-brand transition-colors"
            >
              ← All products
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function BuyButton({
  url,
  label,
  variant = "default",
}: {
  url?: string;
  label: string;
  variant?: "default" | "onBrand";
}) {
  const onBrand = variant === "onBrand";
  if (!url) {
    return (
      <span
        className={`inline-flex items-center gap-2 px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] rounded-full ${
          onBrand
            ? "bg-cream/30 text-cream/70 cursor-not-allowed"
            : "bg-cream/30 text-cream/70 cursor-not-allowed"
        }`}
        title="Stripe Payment Link not yet configured"
      >
        Coming soon
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
        onBrand
          ? "bg-cream text-brand hover:bg-brand-soft"
          : "bg-cream text-brand hover:bg-brand-soft"
      }`}
    >
      {label}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
