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
  I,
} from "@/components/Type";

const IMG =
  "https://mediumvioletred-cheetah-959805.hostingersite.com/wp-content/uploads/2026/04";

export default function Home() {
  return (
    <>
      <Nav active="/" />
      <main className="flex-1">
        <Container>
          {/* HERO — single confident block, Saffron style */}
          <section className="pt-32 pb-10 text-center">
            <p className="text-[12px] uppercase tracking-[0.2em] text-accent mb-8">
              A China Launch Studio
            </p>
            <h1 className="font-display text-[clamp(44px,6vw,76px)] leading-[1.02] tracking-[-0.01em] text-ink max-w-[900px] mx-auto font-normal">
              Turn RedNote attention into{" "}
              <I>inquiries, bookings, and sales.</I>
            </h1>
            <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[560px] mx-auto mt-8">
              For creators, experts, and founder-led brands ready to publish
              in China — quietly, with taste, and with infrastructure that
              actually converts.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/creator"
                className="group inline-flex items-center gap-2 bg-brand text-cream px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                For Creators
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/brand"
                className="group inline-flex items-center gap-2 border border-brand text-brand px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand hover:text-cream hover:-translate-y-0.5 active:translate-y-0"
              >
                For Brands
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </section>

          <div className="h-20" />

          {/* ABOUT SPLIT — editorial: text left, portrait right, vertically centered */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-center">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.32em] text-ink-muted mb-10">
                  About Zoe
                </p>
                <h2 className="font-display text-[clamp(44px,7vw,88px)] leading-[0.92] tracking-[-0.02em] text-ink font-normal mb-10">
                  You work directly<br />with Zoe.
                </h2>
                <Body>
                  I&apos;m Zoe — founder of ZL Marketing, RedNote creator, and
                  brand storyteller. For the past <strong>8 years</strong>,
                  I&apos;ve helped <strong>100+ brands</strong> in lifestyle,
                  design, and creative industries grow in China with clarity
                  and taste. As a creator with <strong>160K+ followers</strong>,
                  I&apos;ve seen firsthand what moves people on RedNote — and
                  what gets ignored.
                </Body>
                <Body>
                  Today at ZL Marketing Studio, I partner with two kinds of
                  clients:
                </Body>
                <ul className="flex flex-col gap-2 mb-8">
                  <li className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                    <strong>Creators &amp; experts</strong> with a proven
                    offer who want to publish and sell in China.
                  </li>
                  <li className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                    <strong>Founder-led brands</strong> who want a KOL
                    campaign plan they trust — and a launch they can execute.
                  </li>
                </ul>
                <div className="flex items-center gap-5 mb-8">
                  <a
                    href="https://www.instagram.com/chinamarketingzl/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-ink-soft hover:text-accent transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@chinamarketingzl"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="text-ink-soft hover:text-accent transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chinamarketingzl"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-ink-soft hover:text-accent transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-[14px] text-accent no-underline border-b border-accent-line pb-0.5 transition-colors duration-300 hover:text-ink hover:border-ink"
                >
                  More about me
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div>
                <div className="group overflow-hidden rounded-xl shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(26,26,26,0.28)]">
                  <Image
                    src={`${IMG}/img_6972-dOqZO7KJ75sylOMn.jpg`}
                    alt="Zoe Li — Founder of ZL Marketing Studio"
                    width={500}
                    height={625}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    unoptimized
                  />
                </div>
                <p className="font-italic italic text-[13px] text-ink-muted mt-3">
                  Zoe Li — Founder &amp; RedNote Strategist
                </p>
              </div>
            </div>
          </section>

          {/* PRINCIPLES — navy band with line-drawn icons */}
          <section className="my-20 md:my-24">
            <div className="bg-brand text-cream rounded-2xl px-6 py-16 md:px-12 md:py-20 shadow-[0_24px_70px_-24px_rgba(79,105,126,0.5)]">
              <div className="text-center mb-14 md:mb-16">
                <p className="text-[12px] uppercase tracking-[0.22em] text-cream/60 mb-5">
                  A creative studio built on taste
                </p>
                <h2 className="font-display text-[clamp(28px,3.6vw,46px)] leading-[1.18] text-cream max-w-[700px] mx-auto font-normal">
                  Every launch is guided by <I>three quiet principles.</I>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                <div className="text-center px-2">
                  <svg
                    aria-hidden
                    className="mx-auto mb-7 text-cream/85"
                    width="64"
                    height="64"
                    viewBox="0 0 80 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="40" cy="40" r="28" />
                    <path d="M40 14 L45 40 L40 66 L35 40 Z" />
                    <circle cx="40" cy="40" r="1.8" fill="currentColor" />
                    <line x1="40" y1="8" x2="40" y2="12" />
                    <line x1="40" y1="68" x2="40" y2="72" />
                    <line x1="8" y1="40" x2="12" y2="40" />
                    <line x1="68" y1="40" x2="72" y2="40" />
                  </svg>
                  <p className="font-display text-[20px] text-cream mb-2.5">
                    Cultural clarity
                  </p>
                  <p className="text-[13px] text-cream/65 leading-[1.75] max-w-[240px] mx-auto">
                    I translate taste, not just words. Every launch is built
                    on what actually resonates on RedNote.
                  </p>
                </div>
                <div className="text-center px-2">
                  <svg
                    aria-hidden
                    className="mx-auto mb-7 text-cream/85"
                    width="64"
                    height="64"
                    viewBox="0 0 80 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M40 10 L58 46 L40 70 L22 46 Z" />
                    <line x1="40" y1="32" x2="40" y2="62" />
                    <circle cx="40" cy="44" r="2.8" />
                    <path d="M30 16 L50 16" />
                  </svg>
                  <p className="font-display text-[20px] text-cream mb-2.5">
                    Editorial craft
                  </p>
                  <p className="text-[13px] text-cream/65 leading-[1.75] max-w-[240px] mx-auto">
                    No templates. No generic agency decks. Every deliverable
                    is designed to look as good as it performs.
                  </p>
                </div>
                <div className="text-center px-2">
                  <svg
                    aria-hidden
                    className="mx-auto mb-7 text-cream/85"
                    width="64"
                    height="64"
                    viewBox="0 0 80 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="66" x2="68" y2="66" />
                    <path d="M16 56 L30 42 L42 50 L62 22" />
                    <polyline points="50,22 62,22 62,34" />
                  </svg>
                  <p className="font-display text-[20px] text-cream mb-2.5">
                    Honest proof
                  </p>
                  <p className="text-[13px] text-cream/65 leading-[1.75] max-w-[240px] mx-auto">
                    Clear scope. Real metrics. Reports you can bring to a
                    stakeholder meeting without a translator.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES — editorial numbered list with (01) parentheses + tag pills */}
          <section>
            <Eyebrow>Services</Eyebrow>
            <h2 className="font-display text-[clamp(36px,5vw,68px)] leading-[0.95] tracking-[-0.02em] text-ink font-normal mb-12">
              How we can <em className="not-italic">create together</em>
            </h2>
            <div className="border-t border-border">
              {[
                {
                  n: "01",
                  title: "Digital Resources",
                  tagline:
                    "For creators and small teams building at your own pace.",
                  desc: "Self-serve guides and templates — RedNote Blueprint, Business Account DIY Guide, and the Creator Pitch Kit.",
                  tags: ["Blueprint", "DIY Guide", "Pitch Kit"],
                  href: "/store",
                  cta: "Store",
                },
                {
                  n: "02",
                  title: "For Creators & Experts",
                  tagline: "Publish your proven offer in China.",
                  desc: "Requires an existing offer and an active RedNote audience. I build the store, payments, and delivery — you keep creating.",
                  tags: ["Store Setup", "Payments", "Delivery", "Launch"],
                  href: "/creator",
                  cta: "See details",
                },
                {
                  n: "03",
                  title: "For Brands",
                  tagline: "KOL Campaign Launch Plan + Execute.",
                  desc: "Project-based. No monthly retainer. Strategy, creator selection, briefing, execution, and reporting — end to end.",
                  tags: ["Strategy", "KOL Selection", "Briefing", "Reporting"],
                  href: "/brand",
                  cta: "See details",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[70px_1fr_auto] gap-x-6 md:gap-x-10 gap-y-4 items-start py-12 md:py-16 border-b border-border no-underline px-4 md:px-6 rounded-xl transition-all duration-400 ease-out hover:bg-white hover:shadow-[0_16px_44px_-12px_rgba(26,26,26,0.14)] hover:border-b-transparent hover:-translate-y-0.5"
                >
                  <span className="font-display text-[clamp(16px,1.8vw,22px)] leading-none text-ink-muted tracking-[0.05em] pt-2">
                    ({s.n})
                  </span>
                  <div className="max-w-[600px]">
                    <p className="font-display text-[clamp(26px,3.2vw,38px)] leading-[1.08] text-ink mb-2 tracking-[-0.015em]">
                      {s.title}.
                    </p>
                    <p className="font-italic italic text-[16px] text-ink-soft leading-snug mb-4">
                      {s.tagline}
                    </p>
                    <p className="text-[13px] text-ink-muted leading-[1.75] mb-5">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-block text-[11px] tracking-[0.05em] text-ink-soft px-3 py-1 rounded-full border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="hidden md:flex items-center gap-2 self-center text-[12px] uppercase tracking-[0.15em] text-accent whitespace-nowrap group-hover:text-ink transition-colors">
                    {s.cta}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* STATS — editorial: 3 big serif numbers animated into view */}
          <section className="pt-20 md:pt-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              <StatCounter value={70} suffix="+" label="International brands helped" />
              <StatCounter value={130} suffix="+" label="Campaigns executed" />
              <StatCounter value={100} suffix="%" label="Client satisfaction rate" />
            </div>
          </section>

          <Divider />

          {/* TESTIMONIALS — 3D cards with shadow pop + hover lift */}
          <section>
            <div className="text-center mb-12">
              <Eyebrow>Kind words</Eyebrow>
              <H2>
                What clients <I>say</I>
              </H2>
            </div>
            {/* Hero quote — bigger standout card */}
            <div className="relative max-w-[760px] mx-auto mb-14">
              <span
                aria-hidden
                className="absolute -top-6 -left-2 font-display text-[140px] leading-none text-accent/20 pointer-events-none select-none"
              >
                &ldquo;
              </span>
              <div className="relative bg-white rounded-2xl p-10 md:p-14 text-center border border-border/60 shadow-[0_10px_50px_-10px_rgba(26,26,26,0.12)] transition-all duration-500 ease-out hover:shadow-[0_20px_70px_-10px_rgba(26,26,26,0.18)] hover:-translate-y-1">
                <blockquote className="font-italic italic text-[clamp(20px,2.6vw,28px)] text-ink leading-[1.45]">
                  Did an excellent job{" "}
                  <strong>helping us understand the Chinese market</strong>.
                  Professional, knowledgeable, excellent communication.
                </blockquote>
                <cite className="block not-italic text-[11px] uppercase tracking-[0.18em] text-ink-muted mt-6">
                  Qgenics — Paid Ads
                </cite>
              </div>
            </div>
            {/* Small cards grid — 3D pop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {[
                ["Some of the best content we've had. The quality is great.", "Daniel — KOL Marketing"],
                ["Overdelivered. Definitely exceeded my expectations.", "Mike — KOL Marketing"],
                ["Quickly provided actionable consultancy. Very good value.", "Matt — Consultation"],
                ["I highly recommend her and would use her services again.", "Ray — Consultation"],
              ].map(([q, who]) => (
                <div
                  key={who}
                  className="bg-white rounded-xl p-7 md:p-8 border border-border/60 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5 cursor-default"
                >
                  <blockquote className="font-italic italic text-[17px] text-ink leading-[1.55]">
                    &ldquo;{q}&rdquo;
                  </blockquote>
                  <cite className="block not-italic text-[11px] uppercase tracking-[0.15em] text-accent mt-4">
                    {who}
                  </cite>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* TRIPTYCH 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr_1fr] gap-6 items-center mt-12 mb-20 md:mb-24">
            <Image
              src={`${IMG}/how-to-thrive-as-a-coach-or-digital-entrepreneur-showit-website-templates-A3QlLl04w2caDl75.jpeg`}
              alt=""
              width={400}
              height={500}
              className="w-full aspect-[3/4] object-cover"
              unoptimized
            />
            <div className="text-center">
              <Eyebrow>Manifesto</Eyebrow>
              <H2>
                A quiet China launch, <I>built with taste.</I>
              </H2>
              <p className="text-[14px] text-ink-soft leading-[1.85] max-w-[480px] mx-auto">
                No loud marketing. No generic agency templates. Just cultural
                clarity, clear decisions, and a launch plan your team can
                execute.
              </p>
            </div>
            <Image
              src={`${IMG}/fotos-profissionais-_-marketing-_-posicionamento-_-autenticidade-_-lanasancost-Awv8N8nVWlfgQkBN.jpeg`}
              alt=""
              width={400}
              height={500}
              className="w-full aspect-[3/4] object-cover"
              unoptimized
            />
          </div>

          {/* CTA */}
          <div className="bg-brand text-cream text-center py-14 px-8 mt-0 mb-24 md:mb-32 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Ready to launch in China?
            </p>
            <p className="text-[15px] text-cream/70 mb-8 leading-[1.7] max-w-[480px] mx-auto">
              Tell me about your offer or brand. I&apos;ll come back with
              honest thoughts on fit and approach.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/creator"
                className="group inline-flex items-center gap-2 bg-cream text-brand px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-soft hover:-translate-y-0.5 active:translate-y-0"
              >
                For Creators
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/brand"
                className="group inline-flex items-center gap-2 border border-cream text-cream px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-cream hover:text-brand hover:-translate-y-0.5 active:translate-y-0"
              >
                For Brands
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
