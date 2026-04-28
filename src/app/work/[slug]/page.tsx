import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StatCounter from "@/components/StatCounter";
import {
  Container,
  Eyebrow,
  H1,
  H2,
  Body,
  Divider,
} from "@/components/Type";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.brand} — Case Study | ZL Marketing`,
    description: study.cardTagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Nav active="/work" />
      <main className="flex-1">
        <Container>
          <section className="pt-20 pb-12">
            <Eyebrow>Case study · {study.brand}</Eyebrow>
            <H1>{study.title}</H1>
            {study.hero && (
              <div className="mt-10 mb-10 overflow-hidden rounded-xl shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)]">
                <Image
                  src={study.hero.src}
                  alt={study.hero.alt}
                  width={study.hero.width}
                  height={study.hero.height}
                  className="w-full h-auto block"
                  priority
                  unoptimized
                />
              </div>
            )}
            <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[640px] mt-2">
              {study.brandIntro}
            </p>
          </section>

          <Divider />

          <section>
            <Eyebrow>Challenge</Eyebrow>
            <Body>{study.challenge.body}</Body>
            {study.challenge.bullets && (
              <ul className="mt-6 space-y-3 max-w-[560px]">
                {study.challenge.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[14px] text-ink-soft leading-[1.75]"
                  >
                    <span className="text-brand mt-[2px]">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <Divider />

          <section>
            <Eyebrow>Strategy</Eyebrow>
            <div className="space-y-10">
              {study.strategy.map((block, idx) => (
                <div key={idx}>
                  {block.heading && (
                    <H2>{block.heading}</H2>
                  )}
                  {block.body && <Body>{block.body}</Body>}
                  {block.bullets && (
                    <ul className="mt-4 space-y-3 max-w-[620px]">
                      {block.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-[14px] text-ink-soft leading-[1.75]"
                        >
                          <span className="text-brand mt-[2px]">◆</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {study.gallery && study.gallery.length > 0 && (
            <section className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {study.gallery.map((img) => (
                  <div
                    key={img.src}
                    className="overflow-hidden rounded-lg bg-white border border-border/40 shadow-[0_8px_28px_-10px_rgba(26,26,26,0.18)]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto block"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              {study.galleryCaption && (
                <p className="text-[13px] italic text-ink-muted leading-[1.7] max-w-[680px] mx-auto mt-6 text-center">
                  {study.galleryCaption}
                </p>
              )}
            </section>
          )}

          <Divider />

          <section>
            <Eyebrow>Execution</Eyebrow>
            <div className="space-y-8">
              {study.execution.map((block) => (
                <div
                  key={block.heading}
                  className="bg-white border border-border/60 rounded-xl p-7 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)]"
                >
                  <p className="font-display text-[20px] text-ink leading-[1.4] mb-3">
                    {block.heading}
                  </p>
                  <p className="text-[14px] text-ink-soft leading-[1.75] mb-3">
                    {block.body}
                  </p>
                  {block.bullets && (
                    <ul className="mt-3 space-y-2">
                      {block.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-[14px] text-ink-soft leading-[1.75]"
                        >
                          <span className="text-brand mt-[2px]">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <Divider />

          <section>
            <Eyebrow>Results</Eyebrow>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
              {study.stats.map((s) => (
                <StatCounter
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  decimals={s.decimals}
                />
              ))}
            </div>
            {study.resultsBullets && (
              <ul className="mt-10 space-y-3 max-w-[640px] mx-auto">
                {study.resultsBullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[14px] text-ink-soft leading-[1.75]"
                  >
                    <span className="text-brand mt-[2px]">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <Divider />

          <section className="pb-8">
            <Eyebrow>Conclusion</Eyebrow>
            <Body>{study.conclusion}</Body>
          </section>

          <div className="bg-brand text-cream text-center py-14 px-8 my-8 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Want results like this for your brand?
            </p>
            <p className="text-[15px] text-cream/70 mb-8 leading-[1.7] max-w-[520px] mx-auto">
              Tell me about your brand or category and I&apos;ll share the
              studies and strategies most relevant to you.
            </p>
            <a
              href={`mailto:zoe@chinamarketingzl.com?subject=${encodeURIComponent(
                `Inspired by ${study.brand} case study`
              )}`}
              className="group inline-flex items-center gap-2 bg-cream text-brand px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-soft hover:-translate-y-0.5 active:translate-y-0"
            >
              Email Zoe
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="text-center pb-12">
            <Link
              href="/work"
              className="text-[13px] uppercase tracking-[0.18em] text-ink-muted hover:text-brand transition-colors"
            >
              ← All case studies
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
