import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TallyForm from "@/components/TallyForm";
import {
  Container,
  Eyebrow,
  H1,
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
          {/* HERO + FORM */}
          <section className="pt-20 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-14 items-start">
              <div>
                <Eyebrow>Work with Zoe</Eyebrow>
                <H1>
                  Let&apos;s create something <I>that lasts.</I>
                </H1>
                <Body>
                  I only take on two types of 1:1 projects. If neither fits,
                  this is probably not the right studio.
                </Body>
                <Body>
                  You can still explore my{" "}
                  <Link
                    href="/store"
                    className="text-accent border-b border-accent-line hover:text-ink hover:border-ink"
                  >
                    ready-to-use digital resources
                  </Link>{" "}
                  instead, and my RedNote management course is coming soon.
                </Body>

                <div className="mt-8 pt-8 border-t border-border max-w-[520px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-4">
                    Make sure you are applying as
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                      <strong className="text-ink">Creator</strong> — digital
                      products, courses, and paid memberships. See{" "}
                      <Link
                        href="/creator"
                        className="text-accent border-b border-accent-line hover:text-ink hover:border-ink"
                      >
                        the Creator page
                      </Link>
                      .
                    </li>
                    <li className="text-[15px] text-ink-soft leading-[1.6] pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                      <strong className="text-ink">Brand</strong> — KOL
                      campaigns, launch plans, execution. See{" "}
                      <Link
                        href="/brand"
                        className="text-accent border-b border-accent-line hover:text-ink hover:border-ink"
                      >
                        the Brand page
                      </Link>
                      .
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-border max-w-[520px]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-3">
                    Other enquiries
                  </p>
                  <p className="text-[14px] text-ink-soft leading-[1.75]">
                    For sponsorships, guest education, and live event
                    speaking, please email me directly at{" "}
                    <a
                      href="mailto:zoe@chinamarketingzl.com"
                      className="text-accent border-b border-accent-line hover:text-ink hover:border-ink"
                    >
                      zoe@chinamarketingzl.com
                    </a>
                    .
                  </p>
                  <p className="text-[14px] text-ink-soft leading-[1.75] mt-3">
                    FYI, here is my{" "}
                    <a
                      href="https://chestnutzoe.my.canva.site/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent border-b border-accent-line hover:text-ink hover:border-ink"
                    >
                      creator portfolio →
                    </a>
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div className="bg-white border border-border/60 rounded-xl p-7 md:p-9 shadow-[0_10px_40px_-12px_rgba(79,105,126,0.12)] transition-all duration-400 ease-out hover:shadow-[0_20px_60px_-16px_rgba(79,105,126,0.22)] hover:-translate-y-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
                  Application
                </p>
                <p className="font-italic italic text-[22px] text-ink mb-5 leading-snug">
                  Tell me about your project
                </p>
                <TallyForm
                  formId={TALLY_FORM_ID}
                  title="ZL Marketing application form"
                />
              </div>
            </div>
          </section>

          <Divider />

          <section>
            <Eyebrow>Also find me here</Eyebrow>
            <div className="flex flex-wrap gap-6 mt-4">
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
                  className="group inline-flex items-center gap-2 text-[14px] text-accent no-underline border-b border-accent-line pb-0.5 transition-colors duration-300 hover:text-ink hover:border-ink"
                >
                  {label}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
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
