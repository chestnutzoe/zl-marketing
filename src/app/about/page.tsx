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

export default function AboutPage() {
  return (
    <>
      <Nav active="/about" />
      <main className="flex-1">
        <Container>
          {/* HERO — split */}
          <section className="pt-20 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <Eyebrow>My story</Eyebrow>
                <H1>
                  Hey, I&apos;m Zoe Li — ex-corporate marketer turned
                  creator and founder of <I>ZL Marketing.</I>
                </H1>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 mt-4 bg-brand text-cream px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0"
                >
                  Contact
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="group overflow-hidden rounded-xl shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(26,26,26,0.28)]">
                <Image
                  src={`${IMG}/fotos-profissionais-_-marketing-_-posicionamento-_-autenticidade-_-lanasancost-Awv8N8nVWlfgQkBN.jpeg`}
                  alt="Zoe Li"
                  width={500}
                  height={625}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  unoptimized
                />
              </div>
            </div>
          </section>

          <Divider />

          {/* STORY — image left, long text right */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-center">
              <div className="group overflow-hidden rounded-xl shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(26,26,26,0.28)]">
                <Image
                  src={`${IMG}/img_6972-dOqZO7KJ75sylOMn.jpg`}
                  alt=""
                  width={500}
                  height={625}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  unoptimized
                />
              </div>
              <div>
                <Eyebrow>Where I&apos;m writing from</Eyebrow>
                <H2>
                  From a coworking space <I>in Lisbon.</I>
                </H2>
                <Body>
                  Yes, I&apos;m a digital nomad, working from anywhere in
                  the world. Before all this, I was just another marketing
                  specialist sitting at a desk in China, helping brands run
                  campaigns that looked good on paper but rarely felt real.
                </Body>
                <Body>
                  Then 2020 happened. <strong>I left my 9–5</strong>, packed
                  up everything I knew about marketing, and started my own
                  thing — one client, one experiment at a time.
                </Body>
                <Body>
                  Over time, I noticed a pattern: Western brands wanted to
                  connect with Chinese audiences, but they were trying to{" "}
                  <em className="not-italic">translate</em>, not{" "}
                  <em className="not-italic">resonate.</em>
                </Body>
                <Body>
                  That&apos;s how <strong>ZL Marketing</strong> was born — a
                  small studio blending East and West, strategy and story,
                  logic and flow.
                </Body>
                <Body>
                  Now I work with global, lifestyle, and creative brands to
                  build connection, engagement, and growth in China —
                  through RedNote (Xiaohongshu), my favorite corner of the
                  internet.
                </Body>
                <Body>
                  Outside the studio, I&apos;m also a creator with over{" "}
                  <strong>150K followers</strong> sharing my journey of
                  entrepreneurship, travel, and philosophy — the real
                  behind-the-scenes of building a one-person business and
                  creating a life that feels free and meaningful.
                </Body>
                <Body>
                  For me, this isn&apos;t just about marketing. It&apos;s
                  about culture, feeling, and creating meaning that lasts.
                </Body>
              </div>
            </div>
          </section>

          <Divider />

          {/* MATCH */}
          <section>
            <Eyebrow>Who we work best with</Eyebrow>
            <H2>
              We&apos;re a great marketing match <I>if you…</I>
            </H2>
            <div className="bg-white border border-border/60 rounded-xl p-8 my-6 max-w-[640px] shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5">
              <ul className="flex flex-col gap-3">
                {[
                  <>
                    See business as a <strong>creative language</strong> — a
                    force for good that inspires change.
                  </>,
                  <>
                    Want your brand to feel <strong>human</strong>, calm,
                    and intentional.
                  </>,
                  <>
                    Seek a partner who understands both art and analytics,{" "}
                    <strong>East and West.</strong>
                  </>,
                  <>
                    Crave collaboration that feels like creative{" "}
                    <strong>alignment</strong>, not just service delivery.
                  </>,
                ].map((node, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-ink-soft leading-[1.65] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[15px] italic text-ink-soft max-w-[560px]">
              If that feels true — we&apos;ll craft stories for the China
              market that stay <strong>in hearts</strong>, not just feeds.
            </p>
          </section>

          <Divider />

          {/* MANIFESTO */}
          <section>
            <Eyebrow>The manifesto</Eyebrow>
            <H2>
              For global brands <I>who believe in meaning.</I>
            </H2>
            <Body>
              At ZL Marketing, we believe{" "}
              <strong>marketing is the medium</strong> — where your
              brand&apos;s truth flows across cultures and connects with
              hearts.
            </Body>
            <Body>
              Storytelling creates <strong>meaning</strong> — meaning moves
              people — and when people are moved,{" "}
              <strong>sales follow naturally.</strong>
            </Body>
            <Body>
              We help global brands express their{" "}
              <strong>belief, beauty, and purpose</strong> in a way that
              resonates with Chinese audiences — building trust, not noise.
            </Body>
            <Body>
              We don&apos;t run campaigns. We craft{" "}
              <em className="not-italic">stories that stay.</em> We turn
              brand essence into cultural resonance.
            </Body>
            <div className="bg-accent-soft border-l-2 border-accent rounded-r-xl p-6 my-8 max-w-[600px] shadow-[0_8px_32px_-10px_rgba(93,118,139,0.25)] transition-all duration-400 ease-out hover:shadow-[0_16px_44px_-10px_rgba(93,118,139,0.35)] hover:-translate-y-1">
              <p className="text-[15px] italic text-accent leading-[1.85]">
                Branding is your poetry. Marketing is your storytelling
                medium. Product is your language — how you communicate your
                truth to the world.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-brand text-cream text-center py-14 px-8 my-16 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Ready to launch in China?
            </p>
            <p className="text-[15px] text-cream/70 mb-8 leading-[1.7] max-w-[540px] mx-auto">
              Whether you&apos;re a creator with a proven offer or a brand
              planning your first KOL campaign — let&apos;s see if
              we&apos;re a good fit.
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
