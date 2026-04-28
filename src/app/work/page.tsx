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
import { caseStudies } from "@/lib/case-studies";

export default function WorkPage() {
  return (
    <>
      <Nav active="/work" />
      <main className="flex-1">
        <Container>
          <section className="pt-24 pb-12 text-center">
            <Eyebrow>Selected work</Eyebrow>
            <H1>
              Case studies — <I>proven on RedNote.</I>
            </H1>
            <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[560px] mx-auto">
              From a French biscuit brand at Sam&apos;s Club to a Dubai
              real-estate developer reaching Chinese investors — here&apos;s
              what culturally fluent RedNote campaigns look like in practice.
            </p>
          </section>

          <Divider />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
            {caseStudies.map((c, idx) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className={`group block overflow-hidden bg-white border border-border/60 rounded-xl shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5 ${
                  idx === 0 ? "md:col-span-2" : ""
                }`}
              >
                {c.hero && (
                  <div className="overflow-hidden bg-cream/40">
                    <Image
                      src={c.hero.src}
                      alt={c.hero.alt}
                      width={c.hero.width}
                      height={c.hero.height}
                      className={`w-full block object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] ${
                        idx === 0 ? "aspect-[21/9]" : "aspect-[16/9]"
                      }`}
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-8">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-ink-muted mb-4">
                    {c.brand}
                  </p>
                  <p className="font-display text-[clamp(22px,2.4vw,30px)] text-ink leading-[1.25] mb-4">
                    {c.title}
                  </p>
                  <p className="text-[14px] text-ink-soft leading-[1.75] mb-5">
                    {c.cardTagline}
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
                    {c.stats.map((s) => (
                      <div key={s.label} className="text-[13px] text-ink-soft">
                        <span className="font-display text-[18px] text-brand mr-1.5">
                          {s.decimals
                            ? s.value.toFixed(s.decimals)
                            : s.value}
                          {s.suffix}
                        </span>
                        {s.label}
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-brand transition-transform duration-300 group-hover:translate-x-1">
                    Read case study
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </section>

          <div className="bg-brand text-cream text-center py-14 px-8 my-8 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Want a case study relevant to <I>your</I> category?
            </p>
            <p className="text-[15px] text-cream/70 mb-8 leading-[1.7] max-w-[520px] mx-auto">
              Tell me about your brand or offer and I&apos;ll share the
              studies most relevant to your category — including ones not
              published here.
            </p>
            <a
              href="mailto:zoe@chinamarketingzl.com?subject=Case study request"
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
