import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  Container,
  Eyebrow,
  H1,
  Divider,
  I,
} from "@/components/Type";

export default function WorkPage() {
  return (
    <>
      <Nav active="/work" />
      <main className="flex-1">
        <Container>
          <section className="pt-24 pb-16 text-center">
            <Eyebrow>Selected work</Eyebrow>
            <H1>
              Case studies — <I>coming soon.</I>
            </H1>
            <p className="text-[15px] text-ink-soft leading-[1.85] max-w-[540px] mx-auto">
              I&apos;m currently curating a handful of recent client stories
              to share publicly. In the meantime, if you&apos;d like to hear
              about specific engagements or see proof relevant to your
              category, send me a note.
            </p>
          </section>

          <Divider />

          <div className="bg-ink text-cream text-center py-14 px-8 my-8">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Want to see relevant case studies?
            </p>
            <p className="text-[15px] text-cream/65 mb-8 leading-[1.7] max-w-[520px] mx-auto">
              Tell me about your brand or offer and I&apos;ll share the
              studies most relevant to your category.
            </p>
            <a
              href="mailto:zoe@chinamarketingzl.com?subject=Case study request"
              className="inline-block bg-cream text-ink px-10 py-4 text-[15px] font-medium no-underline hover:opacity-90"
            >
              Email Zoe →
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
