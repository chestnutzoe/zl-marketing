import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";
import {
  Container,
  Eyebrow,
  H1,
  H2,
  Body,
  Divider,
  I,
} from "@/components/Type";

// Tally form ID — from https://tally.so/r/J9J5DK
const TALLY_FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID || "J9J5DK";

export default function ContactPage() {
  return (
    <>
      <Nav active="/contact" />
      <main className="flex-1">
        <Container>
          {/* HERO */}
          <section className="pt-20 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-start">
              <div>
                <Eyebrow>Get in touch</Eyebrow>
                <H1>
                  Let&apos;s see if we&apos;re <I>a creative match.</I>
                </H1>
                <Body>
                  Whether you&apos;re a creator with a proven offer, a
                  founder-led brand planning a China launch, or just curious
                  — tell me a little about what you&apos;re building and
                  I&apos;ll come back with honest thoughts on fit.
                </Body>
                <Body>
                  I typically reply within <strong>48 hours</strong> on
                  weekdays.
                </Body>
                <div className="mt-6 pt-6 border-t border-border max-w-[420px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
                    Prefer email?
                  </p>
                  <a
                    href="mailto:zoe@chinamarketingzl.com"
                    className="text-[15px] text-accent no-underline border-b border-accent-line pb-0.5 hover:text-ink hover:border-ink"
                  >
                    zoe@chinamarketingzl.com →
                  </a>
                </div>
              </div>

              {/* FORM */}
              <div className="bg-white border border-border p-7">
                <p className="font-italic italic text-[20px] text-ink mb-4">
                  Tell me about your project
                </p>
                {TALLY_FORM_ID ? (
                  <TallyForm formId={TALLY_FORM_ID} title="ZL Marketing contact form" />
                ) : (
                  <div className="text-[13px] text-ink-muted leading-[1.7]">
                    <p className="mb-3">
                      Form not configured yet. See the setup instructions
                      below to connect a Tally form.
                    </p>
                    <a
                      href="mailto:zoe@chinamarketingzl.com"
                      className="inline-block bg-ink text-cream px-6 py-3 text-[14px] font-medium no-underline hover:opacity-90"
                    >
                      Email Zoe instead →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          <Divider />

          <section>
            <Eyebrow>Also find me here</Eyebrow>
            <H2>
              Follow the <I>quieter corners.</I>
            </H2>
            <div className="flex flex-wrap gap-6 mt-6">
              {[
                [
                  "RedNote",
                  "https://www.xiaohongshu.com/user/profile/6527ed3a000000002b003d8c",
                ],
                ["Instagram", "https://www.instagram.com/chinamarketingzl/"],
                ["YouTube", "https://www.youtube.com/@chinamarketingzl"],
                ["LinkedIn", "https://www.linkedin.com/in/chinamarketingzl"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] text-accent no-underline border-b border-accent-line pb-0.5 hover:text-ink hover:border-ink"
                >
                  {label} →
                </a>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
