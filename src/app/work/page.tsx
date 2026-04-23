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

          <div className="bg-brand text-cream text-center py-14 px-8 my-8 rounded-2xl shadow-[0_20px_60px_-20px_rgba(79,105,126,0.45)]">
            <p className="font-display text-[clamp(24px,4vw,32px)] text-cream mb-3 leading-tight">
              Want to see relevant case studies?
            </p>
            <p className="text-[15px] text-cream/70 mb-8 leading-[1.7] max-w-[520px] mx-auto">
              Tell me about your brand or offer and I&apos;ll share the
              studies most relevant to your category.
            </p>
            <a
              href="mailto:zoe@chinamarketingzl.com?subject=Case study request"
              className="group inline-flex items-center gap-2 bg-cream text-brand px-9 py-3.5 text-[12px] uppercase tracking-[0.18em] no-underline rounded-full transition-all duration-300 hover:bg-brand-soft hover:-translate-y-0.5 active:translate-y-0"
            >
              Email Zoe
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
