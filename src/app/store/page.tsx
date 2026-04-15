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

export default function StorePage() {
  const products = [
    {
      label: "Most popular",
      title: "RedNote Blueprint",
      tagline:
        "Your complete guide to launching on 小红书 — from zero to first inquiry.",
      desc: "A step-by-step playbook covering platform mechanics, content strategy, account setup, niche positioning, and how to convert followers into clients. Built from 8 years of hands-on RedNote experience.",
      includes: [
        "60+ page strategy guide",
        "Content pillar framework",
        "Posting cadence templates",
        "Caption formula examples",
        "Niche positioning worksheet",
      ],
      mailto: "RedNote Blueprint — waitlist",
    },
    {
      label: "For teams",
      title: "Business Account DIY Guide",
      tagline:
        "Set up and run a RedNote business account — without an agency.",
      desc: "Everything your team needs to configure, verify, and operate a brand account on RedNote. Includes compliance notes, content rules, and common mistakes to avoid.",
      includes: [
        "Account setup walkthrough",
        "Verification requirements",
        "Content compliance checklist",
        "Post scheduling framework",
        "Platform policy summary",
      ],
      mailto: "Business Account Guide — waitlist",
    },
    {
      label: "For creators",
      title: "Creator Pitch Kit",
      tagline:
        "A professional media kit template — ready to customise and send to brands.",
      desc: "Designed for English-speaking creators who want to pitch Chinese brands or work with Chinese clients. Bilingual layout, rate card structure, pitch email examples.",
      includes: [
        "Canva media kit template",
        "Bilingual (EN/CN) layout",
        "Rate card framework",
        "Pitch email templates",
        "KOL contract checklist",
      ],
      mailto: "Creator Pitch Kit — waitlist",
    },
  ];

  return (
    <>
      <Nav active="/store" />
      <main className="flex-1">
        <Container>
          {/* HERO */}
          <section className="pt-24 pb-16 text-center">
            <Eyebrow>Digital Resources</Eyebrow>
            <H1>
              Build at <I>your own pace.</I>
            </H1>
            <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px] mx-auto">
              Practical, ready-to-use guides and kits for creators and small
              teams who want to move on China — independently.
            </p>
          </section>

          <Divider />

          {products.map((p, i) => (
            <section key={p.title}>
              <Eyebrow>{p.label}</Eyebrow>
              <H2>{p.title}</H2>
              <p className="text-[15px] italic text-ink-soft mb-4">
                {p.tagline}
              </p>
              <Body>{p.desc}</Body>
              <div className="bg-white border border-border p-6 my-5 max-w-[560px]">
                <ul className="flex flex-col gap-2">
                  {p.includes.map((t) => (
                    <li
                      key={t}
                      className="text-[15px] text-ink-soft leading-[1.65] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-italic italic text-[18px] text-ink">
                  Coming soon
                </p>
                <a
                  href={`mailto:zoe@chinamarketingzl.com?subject=${encodeURIComponent(
                    p.mailto
                  )}`}
                  className="text-[13px] text-accent no-underline border-b border-accent-line pb-0.5 hover:text-ink hover:border-ink"
                >
                  Join waitlist →
                </a>
              </div>
              {i < products.length - 1 && <Divider />}
            </section>
          ))}

          {/* CTA */}
          <div className="bg-ink text-cream text-center py-14 px-8 my-16">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Not ready for a product?
            </p>
            <p className="text-[15px] text-cream/65 mb-8 leading-[1.7] max-w-[520px] mx-auto">
              Start with the free 6-day RedNote Marketing 101 email course.
              One email a day. Practical, specific, no fluff.
            </p>
            <a
              href="mailto:zoe@chinamarketingzl.com?subject=Free email course"
              className="inline-block bg-cream text-ink px-10 py-4 text-[15px] font-medium no-underline hover:opacity-90"
            >
              Sign me up →
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
