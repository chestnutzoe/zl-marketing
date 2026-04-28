export type ProductSection = {
  eyebrow: string;
  body?: string;
  bullets?: { title: string; body?: string }[];
};

export type ProductFAQ = { q: string; a: string };

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Product = {
  slug: string;
  name: string;
  fullTitle: string;
  tagline: string;
  cardTagline: string;
  price: number;
  type: "digital" | "service";
  ctaLabel: string;
  image?: ProductImage;
  /** Stripe Payment Link URL — set after Stripe Payment Link is created. */
  stripeUrl?: string;
  intro: string;
  sections: ProductSection[];
  faq?: ProductFAQ[];
  closingNote?: string;
};

const STORE_CDN =
  "https://cdn.zyrosite.com/cdn-ecommerce/store_01J4C2DEC3KZ7FHY2HMTT8XX5B/assets";

export const products: Product[] = [
  {
    slug: "rednote-blueprint-for-creator",
    name: "RedNote Blueprint — Creator",
    fullTitle:
      "「Creator」RedNote Blueprint: From Zero to Monetization in 30 Days",
    tagline:
      "From zero to monetization in 30 days — the same playbook I used to grow from 0 to 70k followers, organically.",
    cardTagline: "From zero to monetization in 30 days, organically.",
    price: 49,
    type: "digital",
    ctaLabel: "Get the Blueprint",
    image: {
      src: `${STORE_CDN}/71823d0b-5c42-4958-8387-057917d82027.png`,
      alt: "RedNote Blueprint for Creator — cover",
      width: 2160,
      height: 2160,
    },
    intro:
      "Are you ready to grow your RedNote presence and start earning from your content? Creators are using this guide to skyrocket their followers and turn their passion into profit — now it's your chance to do the same.",
    sections: [
      {
        eyebrow: "Why Choose This Blueprint",
        bullets: [
          {
            title: "Built by an 8+ year RedNote expert",
            body: "Created by a marketing expert with 8+ years helping international businesses market their brands and products on RedNote.",
          },
          {
            title: "Battle-tested on my own account",
            body: "This guide helped me grow my personal account from 0 to 70k followers — entirely organically, with no paid ads.",
          },
        ],
      },
      {
        eyebrow: "What You'll Learn",
        bullets: [
          { title: "Master RedNote's algorithm", body: "Work with the platform to maximize engagement and visibility." },
          { title: "Find your niche & build your personal brand", body: "Position yourself as a standout creator with a loyal audience." },
          { title: "Create scroll-stopping content", body: "Develop a winning content strategy and craft posts your audience loves." },
          { title: "Repurpose & monetize content", body: "Turn one post into multiple streams of content and income." },
          { title: "Avoid common pitfalls", body: "Steer clear of rookie mistakes that could get your account banned (it happened to one of my previous clients)." },
          { title: "Step-by-step monetization guide", body: "Learn exactly how to earn from brand collaborations, affiliate marketing, and more." },
          { title: "30-Day Action Plan + Success Checklist", body: "Stay on track with clear, actionable steps every day." },
        ],
      },
      {
        eyebrow: "Perfect For You If",
        bullets: [
          { title: "You're starting from scratch", body: "And want to grow your RedNote presence quickly." },
          { title: "You're a seasoned creator", body: "Looking to expand into the Chinese market." },
          { title: "You're tired of trial-and-error", body: "And want proven strategies that work." },
          { title: "You dream of making money doing what you love", body: "And potentially traveling the world like me." },
        ],
      },
      {
        eyebrow: "What You Get",
        bullets: [
          { title: "Immediate access to the RedNote Blueprint" },
          { title: "BONUS: An affiliate link", body: "Earn commissions when you share the blueprint with others." },
        ],
      },
    ],
    faq: [
      {
        q: "Is this blueprint suitable for beginners?",
        a: "Absolutely. It's designed for creators at all levels, from beginners to intermediates.",
      },
      {
        q: "Can I use this for a personal brand?",
        a: "Yes. The strategies work perfectly for personal brands, helping you stand out and grow.",
      },
      {
        q: "What if I don't speak Chinese?",
        a: "No problem — the guide is tailored for English speakers, with tips to succeed even if you don't know the language.",
      },
    ],
    closingNote:
      "For the price of one dinner ($49), unlock everything you need to start monetizing your RedNote account today.",
  },
  {
    slug: "rednote-blueprint-for-brand",
    name: "RedNote Blueprint — Brand",
    fullTitle:
      "「Brand」RedNote Blueprint: Reach Millions of Potential Customers",
    tagline:
      "A 120+ page playbook for international brands launching, scaling, and selling on RedNote.",
    cardTagline: "120+ pages for brands launching and scaling on RedNote.",
    price: 79,
    type: "digital",
    ctaLabel: "Get the Blueprint",
    image: {
      src: `${STORE_CDN}/48d6d338-1bbb-4e45-a835-8dc65a9273c6.png`,
      alt: "RedNote Blueprint for Brand — cover",
      width: 2160,
      height: 2160,
    },
    intro:
      "Are you ready to expand your brand and reach millions of potential customers on RedNote? This 120+ page blueprint is your one-stop guide to mastering RedNote and making it work for your brand — whether you're starting fresh or have already dabbled on the platform.",
    sections: [
      {
        eyebrow: "Why Choose This Blueprint",
        bullets: [
          {
            title: "Designed by a RedNote expert",
            body: "I've spent years helping international brands scale and succeed on the platform. Let me show you the ropes.",
          },
          {
            title: "Proven strategies",
            body: "I've helped countless brands grow their presence on RedNote, turning curiosity into loyal followers and sales.",
          },
        ],
      },
      {
        eyebrow: "What You'll Learn",
        bullets: [
          { title: "Master RedNote's algorithm", body: "Understand how the platform works to boost your visibility and engagement like a pro." },
          { title: "Tailor your content for the Chinese market", body: "Learn the ins and outs of creating content that resonates with RedNote's audience." },
          { title: "Build your brand presence from scratch", body: "Step-by-step guidance to create a unique brand strategy and stand out in a crowded market." },
          { title: "Leverage RedNote's features for sales", body: "Use tools like live streaming, store setup, KOL marketing, paid ads and more to convert followers into paying customers." },
          { title: "Grow a community of loyal followers", body: "Best practices for engagement that turn followers into brand advocates." },
          { title: "Avoid common mistakes", body: "Discover the pitfalls that often trip up international brands — and how to avoid them." },
          { title: "3-Month Actionable Plan", body: "A practical, structured roadmap to help you build and grow your RedNote presence." },
        ],
      },
      {
        eyebrow: "Perfect For You If",
        bullets: [
          { title: "You're an international brand just starting on RedNote", body: "And need a clear strategy to grow." },
          { title: "You want to expand into the Chinese market", body: "But are unsure where to begin." },
          { title: "You're a marketer", body: "Eager to understand how RedNote works for business." },
          { title: "You need a simple, step-by-step guide", body: "To build your brand presence without wasting time." },
        ],
      },
      {
        eyebrow: "What You Get",
        bullets: [
          { title: "Immediate access to the RedNote Blueprint for Brand" },
          { title: "BONUS: An affiliate link", body: "Earn commissions when you share the blueprint with others." },
        ],
      },
    ],
    faq: [
      {
        q: "Is this guide suitable for brands completely new to RedNote?",
        a: "Absolutely. This blueprint is tailored for international brands at any stage, including beginners.",
      },
      {
        q: "Can I use this for a personal brand?",
        a: "For personal brand strategies, I recommend the «RedNote Blueprint for Creators».",
      },
    ],
    closingNote: "Ready to transform your brand's presence on RedNote?",
  },
  {
    slug: "rednote-business-account-verification-done-for-you",
    name: "RedNote Business Account Verification",
    fullTitle: "RedNote Business Account Verification (Done For You)",
    tagline:
      "I'll handle the entire verification process for you — including the 600 RMB annual fee. 100% success rate across 50+ brands.",
    cardTagline: "100% success rate across 50+ brands. End-to-end, in 7 working days.",
    price: 500,
    type: "service",
    ctaLabel: "Start Verification",
    image: {
      src: `${STORE_CDN}/d3be77af-fb26-4bd9-9eeb-ca2be6fe5124.png`,
      alt: "RedNote Business Account Verification (Done For You) — cover",
      width: 2160,
      height: 2160,
    },
    intro:
      "Many brands don't realize that selling or heavily promoting products on RedNote using a personal account can trigger restrictions — including permanent bans. I've worked with brands who only came to me after their account was permanently disabled, after months of content and campaign work. There is often no reliable way to reverse it once it happens. If you plan to market in China seriously, the safest move is to get your account verified the right way from the start.",
    sections: [
      {
        eyebrow: "All-Inclusive Service",
        body:
          "Let me take care of the entire process for you — from start to finish. I'll handle everything you need to get your RedNote Business Account verified and running smoothly, including the 600 RMB ($83) annual verification fee.",
      },
      {
        eyebrow: "What's Included",
        bullets: [
          { title: "Document Prep", body: "I'll ensure all documents are formatted and translated into Chinese (if needed)." },
          { title: "Smooth Application Submission", body: "I'll handle the submission process on RedNote and double-check everything to avoid delays." },
          { title: "Direct Communication with RedNote", body: "I'll handle all communication with RedNote's agents, addressing any issues directly." },
          { title: "Troubleshooting", body: "If anything unexpected comes up, I'll resolve it so you can stay focused on your business." },
          { title: "Support Every Step of the Way", body: "I'll be with you throughout the entire process, ensuring a hassle-free experience." },
        ],
      },
      {
        eyebrow: "Documents You'll Provide",
        bullets: [
          { title: "Original business license" },
          { title: "Brand trademark license", body: "If any." },
        ],
      },
      {
        eyebrow: "What to Expect After Ordering",
        bullets: [
          {
            title: "1. Receive the document checklist",
            body: "On the order confirmation page, you'll automatically receive a document with the full list of required items for verification. Once you have them ready, email the documents to zoe@chinamarketingzl.com — and I'll guide you from there.",
          },
          {
            title: "2. Verification process begins",
            body: "Once I've received all the necessary documents, I'll start the verification process. You can expect your RedNote business account to be verified within 7 working days.",
          },
        ],
      },
    ],
    closingNote:
      "Get verified the right way from the start — and stay safe to market in China for the long run.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}
