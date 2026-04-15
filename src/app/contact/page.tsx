import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  Container,
  Eyebrow,
  H1,
  Body,
  Divider,
  I,
} from "@/components/Type";

export default function ContactPage() {
  return (
    <>
      <Nav active="/contact" />
      <main className="flex-1">
        <Container>
          <section className="pt-24 pb-16">
            <Eyebrow>Get in touch</Eyebrow>
            <H1>
              Let&apos;s see if we&apos;re <I>a creative match.</I>
            </H1>
            <Body>
              Whether you&apos;re a creator with a proven offer, a founder-led
              brand planning a China launch, or just curious — tell me a
              little about what you&apos;re building and I&apos;ll come back
              with honest thoughts on fit.
            </Body>
            <Body>
              Email is the fastest way to reach me. I typically reply within
              48 hours on weekdays.
            </Body>
            <a
              href="mailto:zoe@chinamarketingzl.com"
              className="inline-block mt-6 bg-ink text-cream px-10 py-4 text-[15px] font-medium no-underline hover:opacity-90"
            >
              zoe@chinamarketingzl.com →
            </a>
          </section>

          <Divider />

          <section>
            <Eyebrow>Also find me here</Eyebrow>
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
