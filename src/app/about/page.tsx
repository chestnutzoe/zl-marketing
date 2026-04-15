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
                  className="inline-block mt-4 bg-ink text-cream px-8 py-3 text-[14px] font-medium no-underline hover:opacity-90"
                >
                  Contact →
                </Link>
              </div>
              <Image
                src={`${IMG}/fotos-profissionais-_-marketing-_-posicionamento-_-autenticidade-_-lanasancost-Awv8N8nVWlfgQkBN.jpeg`}
                alt="Zoe Li"
                width={500}
                height={625}
                className="w-full aspect-[4/5] object-cover"
                unoptimized
              />
            </div>
          </section>

          <Divider />

          {/* STORY — image left, long text right */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-start">
              <Image
                src={`${IMG}/img_6972-dOqZO7KJ75sylOMn.jpg`}
                alt=""
                width={500}
                height={625}
                className="w-full aspect-[4/5] object-cover"
                unoptimized
              />
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
            <div className="bg-white border border-border p-7 my-6 max-w-[640px]">
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
                    className="text-[15px] text-ink-soft leading-[1.65] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent"
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
            <div className="bg-accent-soft border-l-2 border-accent p-5 my-8 max-w-[600px]">
              <p className="text-[15px] italic text-accent leading-[1.85]">
                Branding is your poetry. Marketing is your storytelling
                medium. Product is your language — how you communicate your
                truth to the world.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-ink text-cream text-center py-14 px-8 my-16">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Ready to launch in China?
            </p>
            <p className="text-[15px] text-cream/65 mb-8 leading-[1.7] max-w-[540px] mx-auto">
              Whether you&apos;re a creator with a proven offer or a brand
              planning your first KOL campaign — let&apos;s see if
              we&apos;re a good fit.
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
