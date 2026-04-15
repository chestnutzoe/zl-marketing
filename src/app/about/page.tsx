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
          {/* HERO */}
          <section className="pt-20 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <Eyebrow>About Zoe</Eyebrow>
                <H1>
                  Meet Zoe — <I>the bridge between your brand and China.</I>
                </H1>
                <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px]">
                  RedNote Creator · Brand Strategist · China Launch Specialist
                </p>
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

          {/* STORY */}
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
                <Eyebrow>My story</Eyebrow>
                <H2>
                  8 years. 100+ brands. <I>One constant:</I> cultural
                  clarity.
                </H2>
                <Body>
                  I didn&apos;t start as a marketer. I started as someone who
                  lived between two cultures — watching Western brands
                  struggle to say the right thing in China, and Chinese
                  consumers quietly scroll past content that didn&apos;t
                  speak to them.
                </Body>
                <Body>
                  Over the past <strong>8 years</strong>, I&apos;ve helped
                  more than <strong>100 brands</strong> in lifestyle, design,
                  and creative industries build a real presence on RedNote —
                  not a translated presence, a felt one.
                </Body>
                <Body>
                  As a creator with <strong>160K+ followers</strong> across
                  two accounts, I know what stops the scroll and what gets
                  ignored. That lived knowledge is what I bring to every
                  client engagement.
                </Body>
                <Body>
                  Today, ZL Marketing Studio works with two kinds of people:
                  creators and experts who want to publish a proven offer in
                  China, and founder-led brands who want a KOL strategy they
                  can actually execute.
                </Body>
              </div>
            </div>
          </section>

          <Divider />

          {/* APPROACH */}
          <section>
            <Eyebrow>How I work</Eyebrow>
            <H2>
              Quiet strategy. Clear decisions. <I>Taste over noise.</I>
            </H2>
            <div className="flex flex-col gap-3 my-6">
              {[
                [
                  "01 · Cultural fluency first",
                  "Before strategy comes understanding. I read the room — RedNote's moods, the aesthetics that resonate, the language that lands. No templates. No copy-paste from Western playbooks.",
                ],
                [
                  "02 · Specificity over scale",
                  "I work with a small number of clients at a time. Not because I can't handle volume — because doing fewer things well is how you build something that lasts.",
                ],
                [
                  "03 · Plans you can execute",
                  "My job isn't to hand you a deck and disappear. Every strategy I build is designed to be understood, owned, and acted on — by you or your team.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="bg-white border border-border p-6">
                  <p className="font-italic italic text-[20px] text-ink leading-snug mb-2">
                    {title}
                  </p>
                  <p className="text-[14px] text-ink-soft leading-[1.75]">
                    {body}
                  </p>
                </div>
              ))}
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
