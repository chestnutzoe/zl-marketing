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

export default function CreatorPage() {
  return (
    <>
      <Nav active="/creator" />
      <main className="flex-1">
        <Container>
          {/* HERO — split */}
          <section className="pt-20 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <Eyebrow>For creators who already have an offer</Eyebrow>
                <H1>
                  Your Chinese audience is asking{" "}
                  <I>&ldquo;how can I buy it?&rdquo;</I> — and you have no
                  way to answer them.
                </H1>
                <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px] mb-4">
                  Every day you don&apos;t have a China checkout, you&apos;re
                  leaving real money on the table. I fix that in weeks, not
                  months.
                </p>
                <Link
                  href="#apply"
                  className="group inline-flex items-center gap-2 mt-4 bg-brand text-cream px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0"
                >
                  Apply
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="group overflow-hidden rounded-xl shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(26,26,26,0.28)]">
                <Image
                  src={`${IMG}/img_9728-mP43xNlQg3UBqePE.jpg`}
                  alt=""
                  width={500}
                  height={625}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  unoptimized
                />
              </div>
            </div>
          </section>

          <Divider />

          {/* FIT CHECK */}
          <section>
            <Eyebrow>Fit check</Eyebrow>
            <H2>
              This is <I>for you if</I>
            </H2>
            <div className="bg-white border border-border/60 rounded-xl p-8 my-6 max-w-[640px] shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5">
              <ul className="flex flex-col gap-3">
                {[
                  "You have a course or digital program — selling somewhere, or ready to launch",
                  "You have an active RedNote presence and Chinese followers commenting, saving, or DMing you",
                  "You know there's money in your audience — you just haven't captured it yet",
                  "You want to monetize without spending months figuring out China infrastructure",
                ].map((t) => (
                  <li
                    key={t}
                    className="text-[15px] text-ink-soft leading-[1.65] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[14px] italic text-ink-muted max-w-[560px]">
              If that&apos;s you — read on. If not, you&apos;re not ready yet,
              and that&apos;s okay.
            </p>
          </section>

          <Divider />

          {/* PROBLEM — split */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-start">
              <div className="group overflow-hidden rounded-xl shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(26,26,26,0.28)] sticky top-8">
                <Image
                  src={`${IMG}/11-AoP4L4BzMLi078bR.jpeg`}
                  alt=""
                  width={500}
                  height={625}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  unoptimized
                />
              </div>
              <div>
                <Eyebrow>Why it&apos;s harder than it looks</Eyebrow>
                <H2>
                  It&apos;s not one problem. <I>It&apos;s a cascade</I> — and
                  every layer costs you sales.
                </H2>
                <div className="flex flex-col gap-3 my-6">
                  {[
                    {
                      title: "Your digital product is on an international platform",
                      body:
                        "Teachable, Gumroad, Etsy, Payhip, your own site — your Chinese audience can't easily access or pay on these. They use WeChat Pay and Alipay. They don't have Stripe. The sale dies at checkout. You already have buyers. You just can't collect the money.",
                    },
                    {
                      title: "Selling off-platform risks your account",
                      body:
                        "Redirect people elsewhere and RedNote flags it. Traffic drops. In the worst case, your account gets restricted — and the audience you built disappears with it.",
                    },
                    {
                      title: "Setting up a store isn't one step — it's months of friction",
                      body:
                        "Entity verification, store deposit, listing design, payment integration, delivery — months of work, in Chinese, on a platform with rules you're still learning.",
                    },
                    {
                      title: "So it stays on the \"I'll figure this out later\" list",
                      body:
                        "Your audience keeps growing, but your revenue stays flat.",
                    },
                  ].map((p) => (
                    <div
                      key={p.title}
                      className="bg-white border border-border/60 rounded-xl p-5 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1"
                    >
                      <p className="font-italic italic text-[19px] text-ink leading-[1.4] mb-2">
                        {p.title}
                      </p>
                      <p className="text-[14px] text-ink-soft leading-[1.7]">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* THE SHIFT */}
          <section>
            <Eyebrow>The shift</Eyebrow>
            <H2>
              What changes when <I>we work together</I>
            </H2>
            <div className="flex flex-col gap-3 my-6">
              {[
                [
                  "Course on an international platform your Chinese audience can't access",
                  "Listed natively on RedNote, paid in CNY via WeChat Pay / Alipay — you receive in your local currency",
                ],
                [
                  "No clean way to monetize without risking your account",
                  "Selling compliantly inside the platform, no account risk / block",
                ],
                [
                  "Audience growing, revenue stuck at zero",
                  "A repeatable path from content to paid product",
                ],
                [
                  "Months of RedNote setup you don't have time for",
                  "I build it. You focus on content and your offer.",
                ],
              ].map(([before, after]) => (
                <div
                  key={before}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-start bg-white border border-border/60 rounded-xl p-5 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1"
                >
                  <p className="text-[14px] text-ink-muted line-through leading-[1.5]">
                    {before}
                  </p>
                  <p className="text-ink-muted">→</p>
                  <p className="text-[14px] text-ink font-medium leading-[1.5]">
                    {after}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[15px] italic text-ink-soft mt-4 max-w-[560px]">
              The week we go live, your Chinese audience can finally pay you.
              WeChat Pay. Alipay. In CNY. Deposited to your account in your
              currency.
            </p>
          </section>

          <Divider />

          {/* WHAT I HANDLE */}
          <section>
            <Eyebrow>The work</Eyebrow>
            <H2>
              I build the system that lets your RedNote audience{" "}
              <I>actually pay you.</I>
            </H2>
            <Body>
              You bring the course and the audience. I build everything
              needed to sell it in China.
            </Body>
            <div className="flex flex-col gap-3 my-6">
              {[
                [
                  "Store + native payments + delivery",
                  "Set up under a China partner entity. WeChat Pay and Alipay built in. Your audience buys exactly the way they buy everything else online. Need course hosting? I've got that covered.",
                ],
                [
                  "Offer localization",
                  "Not just translation. I adapt your course positioning and listing page so it makes sense — and converts — for a Chinese buyer. Culturally and algorithmically.",
                ],
                [
                  "Ongoing operations",
                  "Payment collection, customer support flow, monthly reporting. The backend runs — you keep creating.",
                ],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="bg-white border border-border/60 rounded-xl p-7 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5"
                >
                  <p className="font-italic italic text-[20px] text-ink leading-snug mb-2">
                    {title}
                  </p>
                  <p className="text-[14px] text-ink-soft leading-[1.7]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* MODEL */}
          <section>
            <Eyebrow>The deal</Eyebrow>
            <H2>
              Partnership <I>model</I>
            </H2>
            <Body>
              Setup fee to build everything, then revenue share — I only get
              paid when you get paid.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-border/60 rounded-xl p-7 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.1em] text-ink-muted mb-2">
                  One-time
                </p>
                <p className="font-italic italic text-[22px] text-ink mb-2">
                  Setup — $500
                </p>
                <p className="text-[13px] text-ink-soft leading-[1.65]">
                  Early access pricing (increases as capacity fills). Store,
                  payments, course localization, delivery setup. Everything
                  to get you live and selling in China.
                </p>
              </div>
              <div className="bg-white border border-border/60 rounded-xl p-7 shadow-[0_4px_20px_-6px_rgba(26,26,26,0.08)] transition-all duration-400 ease-out hover:shadow-[0_18px_44px_-8px_rgba(26,26,26,0.14)] hover:-translate-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.1em] text-ink-muted mb-2">
                  Ongoing
                </p>
                <p className="font-italic italic text-[22px] text-ink mb-2">
                  Revenue share only
                </p>
                <p className="text-[13px] text-ink-soft leading-[1.65]">
                  A % of RedNote sales. No monthly retainer. No flat fee on
                  top. If you don&apos;t make money, I don&apos;t make money
                  — that&apos;s the entire structure.
                </p>
              </div>
            </div>
            <p className="text-[13px] italic text-ink-muted">
              Exact revenue share confirmed after your application — based on
              your offer, pricing, and current RedNote traction.
            </p>
            <div className="bg-accent-soft border-l-2 border-accent rounded-r-xl p-6 my-8 shadow-[0_8px_32px_-10px_rgba(93,118,139,0.25)] transition-all duration-400 ease-out hover:shadow-[0_16px_44px_-10px_rgba(93,118,139,0.35)] hover:-translate-y-1">
              <p className="text-[11px] uppercase tracking-[0.1em] text-accent mb-2">
                Bonus
              </p>
              <p className="text-[14px] italic text-accent leading-[1.75]">
                For select creators, I help unlock invite-only RedNote
                monetization features — including brand deals and internal
                traffic access most international creators never get. If you
                qualify, this alone can change your earning potential on the
                platform.
              </p>
            </div>
          </section>

          <Divider />

          {/* WHY ME — split */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-center">
              <div className="group overflow-hidden rounded-xl shadow-[0_24px_60px_-16px_rgba(26,26,26,0.2)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(26,26,26,0.28)]">
                <Image
                  src={`${IMG}/img_6972-dOqZO7KJ75sylOMn.jpg`}
                  alt="Zoe Li"
                  width={500}
                  height={625}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  unoptimized
                />
              </div>
              <div>
                <Eyebrow>Why me</Eyebrow>
                <H2>
                  I&apos;m not an agency <I>guessing from the outside.</I>
                </H2>
                <div className="flex flex-col gap-6 mt-6">
                  {[
                    [
                      "70K+",
                      "RedNote followers. I'm a creator inside the platform — I know what actually converts, culturally and algorithmically. Not theory.",
                    ],
                    [
                      "170K+",
                      "Across Chinese social platforms. I'm not guessing from the outside. I'm inside the ecosystem you're trying to reach.",
                    ],
                    [
                      "5-figure",
                      "Monthly revenue from my own digital products on RedNote. I built this system for myself first. Now I'm opening it to select creators.",
                    ],
                  ].map(([num, desc]) => (
                    <div key={num} className="flex gap-5 items-start">
                      <p className="font-display text-[36px] text-brand leading-none min-w-[100px] tabular-nums">
                        {num}
                      </p>
                      <p className="text-[14px] text-ink-soft leading-[1.65] pt-1.5">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div
            id="apply"
            className="bg-brand text-cream text-center py-14 px-8 my-16 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]"
          >
            <p className="font-display text-[clamp(24px,4vw,34px)] text-cream mb-3 leading-tight">
              Ready to finally monetize your RedNote audience?
            </p>
            <p className="text-[15px] text-cream/70 mb-8 leading-[1.7] max-w-[520px] mx-auto">
              Apply — I&apos;ll review your offer and RedNote presence within
              48 hours. I only take on creators where I can see a clear path
              to sales. If it&apos;s not the right fit, I&apos;ll tell you.
            </p>
            <a
              href="mailto:zoe@chinamarketingzl.com?subject=Creator partnership application"
              className="group inline-flex items-center gap-2 bg-cream text-brand px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-soft hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply to partner
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
