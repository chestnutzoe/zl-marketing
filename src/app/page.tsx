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
                className="inline-block bg-ink text-cream px-8 py-3 text-[13px] uppercase tracking-[0.15em] no-underline hover:opacity-90"
              >
                For Creators
              </Link>
              <Link
                href="/brand"
                className="inline-block border border-ink text-ink px-8 py-3 text-[13px] uppercase tracking-[0.15em] no-underline hover:bg-ink hover:text-cream transition-colors"
              >
                For Brands
              </Link>
            </div>
          </section>

          <div className="h-20" />

          {/* ABOUT SPLIT */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <Image
                src={`${IMG}/img_6972-dOqZO7KJ75sylOMn.jpg`}
                alt="Zoe Li"
                width={500}
                height={625}
                className="w-full aspect-[4/5] object-cover"
                unoptimized
              />
              <div>
                <Eyebrow>About</Eyebrow>
                <H2>
                  I&apos;m Zoe — a <I>RedNote creator</I> and brand
                  storyteller.
                </H2>
                <Body>
                  For the past <strong>8 years</strong>, I&apos;ve helped{" "}
                  <strong>100+ brands</strong> in lifestyle, design, and
                  creative industries grow in China with clarity and taste.
                  As a creator with <strong>160K+ followers</strong>,
                  I&apos;ve seen firsthand what moves people on RedNote — and
                  what gets ignored.
                </Body>
                <Body>
                  Today at ZL Marketing Studio, I partner with two kinds of
                  clients:
                </Body>
                <ul className="flex flex-col gap-2 mb-4">
                  <li className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent">
                    <strong>Creators &amp; experts</strong> with a proven
                    offer who want to publish and sell in China.
                  </li>
                  <li className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent">
                    <strong>Founder-led brands</strong> who want a KOL
                    campaign plan they trust — and a launch they can execute.
                  </li>
                </ul>
                <Link
                  href="/about"
                  className="inline-block mt-2 text-[14px] text-accent no-underline border-b border-accent-line pb-0.5 hover:text-ink hover:border-ink"
                >
                  More about me →
                </Link>
              </div>
            </div>
          </section>

          <Divider />

          {/* SERVICES — Saffron-style numbered editorial list */}
          <section>
            <Eyebrow>Services</Eyebrow>
            <H2>
              How we can <I>create together</I>
            </H2>
            <div className="mt-12 border-t border-border">
              {[
                {
                  n: "01",
                  title: "Digital Resources",
                  tagline:
                    "For creators and small teams building at your own pace.",
                  desc: "RedNote Blueprint · Business Account DIY Guide · Creator Pitch Kit",
                  href: "/store",
                  cta: "Store",
                },
                {
                  n: "02",
                  title: "For Creators & Experts",
                  tagline:
                    "Publish your proven offer in China.",
                  desc: "Requires an existing offer and an active RedNote audience. I build the store, payments, and delivery — you keep creating.",
                  href: "/creator",
                  cta: "See details",
                },
                {
                  n: "03",
                  title: "For Brands",
                  tagline:
                    "KOL Campaign Launch Plan + Execute.",
                  desc: "Project-based. No monthly management required. Strategy, creator selection, briefing, execution, and reporting — end to end.",
                  href: "/brand",
                  cta: "See details",
                },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[110px_1fr_auto] gap-x-8 md:gap-x-12 gap-y-3 items-start py-10 md:py-14 border-b border-border no-underline transition-colors hover:bg-white/40 px-2"
                >
                  <span className="font-display text-[clamp(40px,5vw,64px)] leading-none text-ink">
                    {s.n}.
                  </span>
                  <div>
                    <p className="font-display text-[clamp(24px,3vw,34px)] leading-[1.1] text-ink mb-2">
                      {s.title}
                    </p>
                    <p className="font-italic italic text-[16px] text-ink-soft leading-snug mb-3">
                      {s.tagline}
                    </p>
                    <p className="text-[13px] text-ink-muted leading-[1.7] max-w-[520px]">
                      {s.desc}
                    </p>
                  </div>
                  <span className="hidden md:block self-center text-[12px] uppercase tracking-[0.15em] text-accent border-b border-accent-line pb-0.5 whitespace-nowrap group-hover:text-ink group-hover:border-ink">
                    {s.cta} →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <Divider />

          {/* STATS SPLIT */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <Eyebrow>By the numbers</Eyebrow>
                <H2>
                  Proven across <I>70+ brands</I> and 130+ projects.
                </H2>
                <Body>
                  Eight years building campaigns and publishing strategy in
                  China. The same hands that wrote your plan have run it.
                </Body>
                <div className="flex flex-col gap-5 mt-8">
                  {[
                    ["70+", "Happy clients"],
                    ["130+", "Projects completed"],
                    ["100%", "Job success rate"],
                  ].map(([num, label]) => (
                    <div key={num} className="flex gap-5 items-start">
                      <p className="font-display text-[36px] text-ink leading-none min-w-[80px]">
                        {num}
                      </p>
                      <p className="text-[15px] text-ink-soft leading-[1.65] pt-1.5">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Image
                src={`${IMG}/img_0098-mxB26b1ok2UaMx1R.jpg`}
                alt=""
                width={500}
                height={625}
                className="w-full aspect-[4/5] object-cover"
                unoptimized
              />
            </div>
          </section>

          <Divider />

          {/* TESTIMONIALS */}
          <section>
            <Eyebrow>Kind words</Eyebrow>
            <H2>
              What clients <I>say</I>
            </H2>
            <div className="text-center max-w-[640px] mx-auto my-10">
              <blockquote className="font-italic italic text-[clamp(22px,3vw,30px)] text-ink leading-[1.4]">
                &ldquo;Did an excellent job{" "}
                <strong>helping us understand the Chinese market</strong>.
                Professional, knowledgeable, excellent communication.&rdquo;
              </blockquote>
              <cite className="block not-italic text-[12px] uppercase tracking-[0.1em] text-ink-muted mt-4">
                Qgenics — Paid Ads
              </cite>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {[
                ["Some of the best content we've had. The quality is great.", "Daniel — KOL Marketing"],
                ["Overdelivered. Definitely exceeded my expectations.", "Mike — KOL Marketing"],
                ["Quickly provided actionable consultancy. Very good value.", "Matt — Consultation"],
                ["I highly recommend her and would use her services again.", "Ray — Consultation"],
              ].map(([q, who]) => (
                <div key={who} className="bg-white border border-border p-6">
                  <blockquote className="font-italic italic text-[17px] text-ink leading-[1.5]">
                    &ldquo;{q}&rdquo;
                  </blockquote>
                  <cite className="block not-italic text-[11px] uppercase tracking-[0.1em] text-accent mt-3">
                    {who}
                  </cite>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* TRIPTYCH 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr_1fr] gap-6 items-center my-12">
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
          <div className="bg-ink text-cream text-center py-14 px-8 my-12">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Ready to launch in China?
            </p>
            <p className="text-[15px] text-cream/65 mb-8 leading-[1.7]">
              Tell me about your offer or brand. I&apos;ll come back with
              honest thoughts on fit and approach.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/creator"
                className="inline-block bg-cream text-ink px-10 py-4 text-[15px] font-medium no-underline hover:opacity-90"
              >
                For Creators →
              </Link>
              <Link
                href="/brand"
                className="inline-block bg-cream text-ink px-10 py-4 text-[15px] font-medium no-underline hover:opacity-90"
              >
                For Brands →
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
