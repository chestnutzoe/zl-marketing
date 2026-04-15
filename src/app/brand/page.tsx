import Image from "next/image";
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

export default function BrandPage() {
  return (
    <>
      <Nav active="/brand" />
      <main className="flex-1">
        <Container>
          {/* HERO — split */}
          <section className="pt-20 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <Eyebrow>For founder-led brands</Eyebrow>
                <H1>
                  Turn RedNote attention into <I>inquiries and sales</I> in
                  China.
                </H1>
                <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px] mb-3">
                  You don&apos;t need louder marketing. You need the right
                  creators, speaking your visual and emotional language,
                  inside China&apos;s internet culture, in a way that
                  actually converts.
                </p>
                <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px] mb-3">
                  ZL Marketing helps global lifestyle brands launch
                  culturally fluent, ROI-driven KOL campaigns on RedNote.
                </p>
                <p className="text-[15px] italic text-ink-soft leading-[1.85] max-w-[540px]">
                  Because in China, attention isn&apos;t bought. It&apos;s
                  felt.
                </p>
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

          {/* PROBLEM */}
          <section>
            <Eyebrow>The problem</Eyebrow>
            <H2>
              Why most RedNote KOL campaigns <I>waste budget</I>
            </H2>
            <Body>
              It&apos;s rarely about follower count. It&apos;s about
              alignment, translation, and execution.
            </Body>
            <div className="flex flex-col gap-3 my-6">
              {[
                {
                  title: "01 · The vibe's off",
                  body:
                    "The content looks aesthetic. But the creator doesn't actually live your brand's world. So the audience scrolls. You paid for exposure. You didn't earn trust — and trust is what drives saves, comments, and purchase intent on RedNote.",
                },
                {
                  title: "02 · Cultural disconnects",
                  body:
                    "China isn't just another market. It's a different digital ecosystem. Different humor. Different buying triggers. What feels aspirational on Instagram can feel staged or irrelevant on RedNote. Without cultural fluency, even good ideas lose their spark.",
                },
                {
                  title: "03 · Empty numbers",
                  body:
                    "If you can't whitelist the content. If you can't repurpose it into ads. If you can't measure lift beyond likes — you're not running a growth campaign. You're running a one-off test. And one-off tests don't build long-term brand equity in China.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-white border border-border p-6"
                >
                  <p className="font-italic italic text-[20px] text-ink leading-[1.4] mb-2">
                    {p.title}
                  </p>
                  <p className="text-[14px] text-ink-soft leading-[1.75]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* SOLUTION */}
          <section>
            <Eyebrow>Our solution</Eyebrow>
            <H2>
              The <I>Essence-Match</I> System™
            </H2>
            <Body>
              We don&apos;t &ldquo;run influencer campaigns.&rdquo; We design
              culturally aligned RedNote ecosystems that turn attention into
              demand.
            </Body>
            <div className="flex flex-col gap-3 my-6">
              {[
                [
                  "01 · Essence matching",
                  "We handpick creators who naturally embody your brand's design language, values, and lifestyle. No forced fits. No transactional placements. When the alignment is real, the audience feels it instantly. Result: higher saves, deeper engagement, stronger purchase intent.",
                ],
                [
                  "02 · Cultural translation",
                  "We reframe your brand story so it moves naturally inside RedNote culture. Subtle. Context-aware. Native to the platform. Not copy-pasted from Western campaigns. Result: content that feels local without losing your identity.",
                ],
                [
                  "03 · Creator-led content",
                  "We guide creators strategically — but we don't script them. Because authenticity cannot be art-directed. Result: content that performs organically and feels trustworthy.",
                ],
                [
                  "04 · Content amplification & whitelisting",
                  "We secure usage rights upfront. Your best-performing posts don't stop at organic reach — they evolve into paid ads. Real creators. Real social proof. Lower acquisition cost.",
                ],
                [
                  "05 · UGC content assets",
                  "Every campaign becomes part of your brand's reusable content library. For paid ads. For your website. For future launches. Result: compounding brand equity, not disposable content.",
                ],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="bg-white border border-border p-6"
                >
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

          <Divider />

          {/* PACKAGE 1 */}
          <section>
            <Eyebrow>Ways to work together</Eyebrow>
            <H2>
              1 — KOL Campaign <I>Blueprint + Launch Plan</I>
            </H2>
            <Body>
              A focused, paid strategy project for brands entering or
              optimizing RedNote. You walk away with a clear, executable
              campaign plan your team can run internally.
            </Body>
            <div className="bg-white border border-border p-7 my-6 max-w-[640px]">
              <p className="text-[14px] font-medium text-ink mb-3">
                Includes
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Campaign goal clarity: awareness vs sales",
                  "Creator mix strategy: KOC vs mid-tier vs top",
                  "Budget allocation + testing timeline",
                  "Creative angles + briefing concepts",
                  "Tracking framework + performance benchmarks",
                  "Shortlist criteria (optional creator shortlist)",
                ].map((t) => (
                  <li
                    key={t}
                    className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-border p-6">
                <p className="text-[11px] uppercase tracking-[0.1em] text-ink-muted mb-2">
                  Investment
                </p>
                <p className="font-italic italic text-[22px] text-ink mb-2">
                  From $1,500
                </p>
                <p className="text-[13px] text-ink-soft leading-[1.65]">
                  The fee is credited toward future execution if we continue
                  working together.
                </p>
              </div>
              <div className="bg-white border border-border p-6">
                <p className="text-[11px] uppercase tracking-[0.1em] text-ink-muted mb-2">
                  Best for
                </p>
                <p className="font-italic italic text-[22px] text-ink mb-2">
                  Direction without commitment
                </p>
                <p className="text-[13px] text-ink-soft leading-[1.65]">
                  Brands who want expert direction without committing to
                  full management yet.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* PACKAGE 2 */}
          <section>
            <Eyebrow>Ways to work together</Eyebrow>
            <H2>
              2 — Strategy + <I>Full Execution</I>
            </H2>
            <Body>
              For brands who want end-to-end support. After strategy
              alignment, we manage everything — you stay focused on brand
              direction, we handle the cultural and operational complexity.
            </Body>
            <div className="bg-white border border-border p-7 my-6 max-w-[640px]">
              <p className="text-[14px] font-medium text-ink mb-3">
                We handle
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Creator sourcing & vetting",
                  "Outreach & negotiation",
                  "Contracting & usage rights",
                  "Content review & optimization",
                  "Campaign reporting & insights",
                ].map((t) => (
                  <li
                    key={t}
                    className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[13px] italic text-ink-muted">
              Pricing is quoted after a fit call.
            </p>
          </section>

          <Divider />

          {/* FIT CHECK */}
          <section>
            <Eyebrow>Fit check</Eyebrow>
            <H2>
              For brands with <I>a point of view</I>
            </H2>
            <Body>You&apos;re a strong fit if:</Body>
            <div className="bg-white border border-border p-7 my-6 max-w-[640px]">
              <ul className="flex flex-col gap-3">
                {[
                  "You're a founder-led brand with a distinct point of view — and you refuse generic influencer spam",
                  "You sell a world — ritual, aesthetics, meaning — not just products",
                  "You have healthy margins and real budget for KOL testing",
                  "You're planning a RedNote campaign in the next 1–3 months",
                  "You don't want to waste five figures on creators who \"look right\" but don't convert",
                ].map((t) => (
                  <li
                    key={t}
                    className="text-[15px] text-ink-soft leading-[1.65] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[15px] italic text-ink-soft max-w-[560px]">
              Your goal isn&apos;t quick virality. It&apos;s cultural
              resonance that drives long-term relevance in China.
            </p>
          </section>

          <Divider />

          {/* NETWORK */}
          <section>
            <Eyebrow>The network</Eyebrow>
            <H2>
              52,000+ vetted Chinese KOLs <I>on RedNote</I>
            </H2>
            <Body>
              Creators filtered for aesthetic alignment, audience quality,
              engagement integrity, and brand compatibility. This isn&apos;t
              mass outreach — it&apos;s precision matching backed by deep
              ecosystem knowledge.
            </Body>
          </section>

          <Divider />

          {/* WHY ME */}
          <section>
            <Eyebrow>Why work with Zoe</Eyebrow>
            <H2>
              We&apos;re not a <I>middleman agency</I>
            </H2>
            <Body>
              We&apos;re creators ourselves, living inside China&apos;s
              RedNote ecosystem, curating a network who care about design,
              culture, and honesty.
            </Body>
            <Body>
              We know what lands. We know what feels fake. And we&apos;ll
              make sure your brand shows up in China{" "}
              <strong>the way it deserves</strong> — raw, resonant, and real.
            </Body>
            <div className="bg-accent-soft border-l-2 border-accent p-5 my-6">
              <p className="text-[16px] italic text-accent leading-[1.75]">
                Because the best marketing isn&apos;t polished. It&apos;s
                true.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-ink text-cream text-center py-14 px-8 my-16">
            <p className="font-display text-[clamp(24px,4vw,34px)] text-cream mb-3 leading-tight">
              Have questions? Book a fit call.
            </p>
            <p className="text-[15px] text-cream/65 mb-8 leading-[1.7] max-w-[540px] mx-auto">
              If you&apos;re an indie, lifestyle, or founder-led brand ready
              to launch RedNote the right way — book a 15-min fit call with
              Zoe to see if we&apos;re a creative match.
            </p>
            <a
              href="mailto:zoe@chinamarketingzl.com?subject=Brand fit call"
              className="inline-block bg-cream text-ink px-10 py-4 text-[15px] font-medium no-underline hover:opacity-90"
            >
              Book a 15-min call →
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
