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
          {/* HERO */}
          <section className="pt-24 pb-20 text-center">
            <Eyebrow>A China Launch Studio</Eyebrow>
            <H1>
              Turn RedNote attention into{" "}
              <I>inquiries, bookings, and sales.</I>
            </H1>
            <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px] mx-auto">
              For creators, experts, and founder-led brands ready to publish
              in China — quietly, with taste, and with infrastructure that
              actually converts.
            </p>
          </section>

          {/* TRIPTYCH 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr_1fr] gap-6 items-center my-12">
            <Image
              src={`${IMG}/11-AoP4L4BzMLi078bR.jpeg`}
              alt=""
              width={400}
              height={500}
              className="w-full aspect-[3/4] object-cover"
              unoptimized
            />
            <div className="text-center">
              <Eyebrow>Welcome</Eyebrow>
              <H2>
                Quiet strategy. <I>Built with taste.</I>
              </H2>
            </div>
            <Image
              src={`${IMG}/14-YNqMabDGnkF96nlj.jpeg`}
              alt=""
              width={400}
              height={500}
              className="w-full aspect-[3/4] object-cover"
              unoptimized
            />
          </div>

          <Divider />

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

          {/* SERVICES */}
          <section>
            <Eyebrow>Services</Eyebrow>
            <H2>
              How we can <I>create together</I>
            </H2>
            <div className="my-8">
              {[
                {
                  label: "Digital Resources",
                  name: "For creators and small teams building at your own pace.",
                  small:
                    "RedNote Blueprint · Business Account DIY Guide · Creator Pitch Kit",
                  href: "/store",
                  cta: "Store →",
                },
                {
                  label: "For Creators & Experts",
                  name: "Publish your proven offer in China.",
                  small: "Requires an existing offer + audience.",
                  href: "/creator",
                  cta: "See details →",
                },
                {
                  label: "For Brands",
                  name: "KOL Campaign Launch Plan + Execute",
                  small: "Project-based. No monthly management required.",
                  href: "/brand",
                  cta: "See details →",
                },
              ].map((s) => (
                <div
                  key={s.href}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 items-center py-6 border-b border-border last:border-0"
                >
                  <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                    {s.label}
                  </div>
                  <div className="font-italic italic text-[19px] text-ink leading-snug">
                    {s.name}
                    <small className="block font-body not-italic text-[13px] text-ink-muted mt-1 leading-[1.6]">
                      {s.small}
                    </small>
                  </div>
                  <Link
                    href={s.href}
                    className="text-[13px] text-accent no-underline border-b border-accent-line pb-0.5 hover:text-ink hover:border-ink"
                  >
                    {s.cta}
                  </Link>
                </div>
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
