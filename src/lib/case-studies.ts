export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export type ImageRef = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  brand: string;
  title: string;
  cardTagline: string;
  brandIntro: string;
  hero?: ImageRef;
  gallery?: ImageRef[];
  galleryCaption?: string;
  challenge: { body: string; bullets?: string[] };
  strategy: Array<{ heading?: string; body?: string; bullets?: string[] }>;
  execution: Array<{ heading: string; body: string; bullets?: string[] }>;
  stats: Stat[];
  resultsBullets?: string[];
  conclusion: string;
};

const CDN = "https://assets.zyrosite.com/cdn-cgi/image/format=auto";
const SITE_ID = "mePnnVMeZvsXRp2Y";
const wide = (file: string) =>
  `${CDN},w=2000/${SITE_ID}/${file}`;
const post = (file: string) =>
  `${CDN},w=900/${SITE_ID}/${file}`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "st-michel",
    brand: "St Michel",
    title:
      "How We Helped a French Biscuit Brand Use RedNote to Drive Offline Sales at Sam's Club in China",
    cardTagline:
      "How we drove offline sales at Sam's Club through 300+ KOL partnerships across major Chinese cities.",
    brandIntro:
      "St Michel, a renowned French biscuit brand established in 1905, partnered with Sam's Club in China to bring its iconic products to a wider audience. Sam's Club, a global membership-based retail chain, operates 34 locations across major Chinese cities like Beijing, Shanghai, and Shenzhen (as of 2023). These clubs serve urban middle and upper-class consumers with premium products and services.",
    hero: {
      src: wide("screenshot-2024-08-03-at-23.26.41-mP4QQV8aLecLNLVl.png"),
      alt: "St Michel × Sam's Club RedNote campaign",
      width: 2800,
      height: 1153,
    },
    gallery: [
      {
        src: post("1-ALpoo4KaGlUjr3rE.png"),
        alt: "RedNote KOL post featuring St Michel Petites Galettes",
        width: 375,
        height: 603,
      },
      {
        src: post("2-Y4LJJe1qaVfr6OV1.png"),
        alt: "RedNote KOL post featuring St Michel Petites Galettes",
        width: 375,
        height: 603,
      },
      {
        src: post("5-m6LJJBaepJuD9Ol7.png"),
        alt: "RedNote KOL post featuring St Michel Petites Galettes",
        width: 375,
        height: 603,
      },
    ],
    galleryCaption:
      "Selected KOL posts. Comments are full of readers calling out how good the biscuits taste — the kind of word-of-mouth that drives Sam's Club foot traffic.",
    challenge: {
      body:
        "Before working with us, St Michel had a limited digital presence in China, relying primarily on in-store promotions. They needed a stronger online strategy to raise awareness and drive foot traffic to Sam's Club locations.",
      bullets: [
        "Build brand awareness on RedNote (Xiaohongshu)",
        "Highlight the Petites Galettes product line",
        "Drive offline sales at Sam's Club stores",
      ],
    },
    strategy: [
      {
        body:
          "We designed a RedNote KOL marketing campaign to position Petites Galettes as the must-have snack for anyone shopping at Sam's Club.",
      },
      {
        heading: "Tactics Used",
        bullets: [
          "Geo-targeted KOL selection — Partnered with influencers in cities with Sam's Club stores",
          "Food & Beverage Niche — Collaborated with creators who resonate with the brand's target audience",
          "Engaging, sales-driven content — Crafted image and video posts showcasing the product's key benefits and in-store shopping experiences",
        ],
      },
    ],
    execution: [
      {
        heading: "KOL tier mix for maximum reach and authentic engagement",
        body:
          "We strategically selected KOLs based on audience size and content style, ensuring a diverse mix of large, mid-tier, and micro-influencers.",
        bullets: [
          "Mega KOLs (500k+ followers) to enhance brand image",
          "Small to mid-sized KOLs (10k–100k followers) focused on creating high-quality brand content",
          "Key Opinion Consumers (KOCs) with thousands of followers who played a pivotal role in sharing genuine user experiences, generating buzz for the product",
        ],
      },
    ],
    stats: [
      { value: 300, suffix: "+", label: "KOLs activated" },
      { value: 1.3, suffix: "M+", label: "People reached", decimals: 1 },
      { value: 60, suffix: "k+", label: "Engagements" },
    ],
    resultsBullets: [
      "Increased awareness for Petites Galettes, driving more foot traffic to Sam's Club stores",
      "Limited brand awareness — overcome by partnering with influencers who had strong credibility within the target audience",
      "Offline conversion tracking — addressed with Sam's Club-specific promotions to link online engagement with in-store sales",
    ],
    conclusion:
      "This campaign not only boosted brand awareness for St Michel but also helped drive offline sales at Sam's Club, solidifying their position in the competitive Chinese market.",
  },
  {
    slug: "hondajet",
    brand: "HondaJet",
    title: "How We Promoted Business Jets to High-Net-Worth Chinese Clients",
    cardTagline:
      "Ranked #1 on Zhihu and top-3 on Baidu for the keyword Chinese HNW buyers actually search.",
    brandIntro:
      "HondaJet is the world's most advanced light business jet aircraft, offering exceptional performance, comfort, and efficiency. Its Elite S model is designed to meet the needs of high-net-worth individuals, boasting industry-leading technology and top-tier luxury.",
    hero: {
      src: wide("screenshot-2024-08-03-at-23.46.27-m6LJJazlMpUX9wRj.png"),
      alt: "HondaJet Elite S — RedNote and Zhihu campaign",
      width: 1024,
      height: 582,
    },
    gallery: [
      {
        src: post("11-m5Kbb1B0oJCwq4vK.png"),
        alt: "Zhihu / RedNote post on choosing a business jet",
        width: 375,
        height: 531,
      },
      {
        src: post("12-ALpoo4KaQ9cQM1aN.png"),
        alt: "Zhihu / RedNote post on choosing a business jet",
        width: 375,
        height: 531,
      },
      {
        src: post("13-Yyv77RrN9Ei4GDQg.png"),
        alt: "Zhihu / RedNote post on choosing a business jet",
        width: 375,
        height: 531,
      },
    ],
    galleryCaption:
      "Long-form Zhihu answers and RedNote posts that ranked #1 for “如何选购适合自己的私人飞机” — the exact query Chinese HNW buyers search before a purchase decision.",
    challenge: {
      body:
        "HondaJet had achieved strong success in the U.S. market, but struggled to build the same level of recognition and demand in China. The goal was to strengthen HondaJet's presence in the Chinese luxury aviation market and position the Elite S as the go-to choice for those seeking the best in business jets.",
    },
    strategy: [
      {
        heading: "KOL Selection",
        body:
          "We carefully selected KOLs to create content that would resonate with China's high-net-worth audience, bringing deep expertise and credibility to the campaign.",
        bullets: [
          "Aviation Industry Experts — KOLs who work in the aviation industry",
          "Experienced Business Jet Users — KOLs who have first-hand experience with business jets",
          "Honda Enthusiasts — KOLs with deep knowledge of the Honda brand",
        ],
      },
      {
        heading: "Content Creation",
        body:
          "To engage the target audience, we created a detailed 4,000-word article on the business jet industry. The article highlighted the Elite S's standout features and benefits, positioning it as the go-to choice for luxury business jet buyers. This content was shared on Zhihu and RedNote.",
      },
      {
        heading: "PR Distribution",
        body:
          "In addition to publishing the post on Zhihu and RedNote, we distributed the PR content to top media outlets on Weibo, amplifying the reach and boosting visibility across multiple platforms.",
      },
    ],
    execution: [
      {
        heading: "Initial Campaign — Building Awareness",
        body:
          "Collaborated with aviation experts, seasoned jet users, and Honda enthusiasts to answer the question “如何选购适合自己的私人飞机” (How to choose the right business jet) on Zhihu — with in-depth articles and insightful answers about the benefits of owning a business jet, focused on the Elite S model.",
      },
      {
        heading: "Extended Campaign — Boosting Recognition",
        body:
          "Repurposed the Zhihu content on RedNote to expand reach to a broader audience of luxury consumers.",
      },
    ],
    stats: [
      { value: 10.5, suffix: "k", label: "Likes", decimals: 1 },
      { value: 2194, label: "Saves" },
      { value: 10.9, suffix: "k", label: "Comments", decimals: 1 },
    ],
    resultsBullets: [
      "On Zhihu, the post ranked #1 for “如何选购适合自己的私人飞机”, establishing HondaJet's authority in aviation",
      "On Baidu, the article secured a top-3 ranking, amplifying HondaJet's online presence",
      "On RedNote, the content went viral, greatly enhancing brand awareness",
    ],
    conclusion:
      "By leveraging KOL marketing and strategic content distribution on Zhihu and RedNote, we elevated the Elite S model within China's luxury market. The campaign effectively boosted brand visibility, engaged a targeted audience, and positioned the Elite S as the top choice for high-net-worth individuals.",
  },
  {
    slug: "dubai-real-estate",
    brand: "National Properties — Dubai Real Estate",
    title:
      "How RedNote UGC Content Marketing Helped Generate High-Quality Leads of Chinese Real Estate Investors",
    cardTagline:
      "100+ qualified leads and 1M impressions for a Dubai developer entering the Chinese investor market.",
    brandIntro:
      "National Properties Corporation, a subsidiary of National Bonds Corporation, is a leading developer of commercial and residential real estate projects in Dubai. Known for high-end living and workspaces, National Properties owns prominent developments such as The Motorcity Green Community, Skycourts Towers, Andalusia, and Sulafa Tower. The company's mission is to create innovative, high-standard, affordable real estate projects that cater to diverse needs, offering comprehensive services across the real estate value chain.",
    hero: {
      src: wide("np_banner-A8544PjRPBTpW92l.jpg"),
      alt: "National Properties Dubai banner",
      width: 1024,
      height: 402,
    },
    gallery: [
      {
        src: post("1-AoPq9ealGDT7lD2Q.png"),
        alt: "RedNote post on Dubai real estate from National Properties campaign",
        width: 375,
        height: 405,
      },
      {
        src: post("2-YKbERJVp34H0Ga5X.png"),
        alt: "RedNote post on Dubai real estate from National Properties campaign",
        width: 375,
        height: 405,
      },
      {
        src: post("3-YleqwM7jvPSlkpJN.png"),
        alt: "RedNote post on 399 Hills Park from “nana在迪拜” account",
        width: 375,
        height: 405,
      },
    ],
    galleryCaption:
      "RedNote posts mixing brand-account content with the marketing-manager “nana在迪拜” persona — a UGC-native voice that earned trust before pitching the project.",
    challenge: {
      body:
        "National Properties wanted to reach more Chinese investors interested in Dubai real estate. The goal was to establish a solid presence on RedNote, introduce flagship projects like the 399 Hills Park, and drive leads through content marketing and KOL collaborations.",
    },
    strategy: [
      {
        heading: "RedNote Account Management",
        body:
          "We started by creating and managing an official brand account for National Properties on RedNote. The idea was simple: give the Chinese audience useful insights about Dubai's real estate market, trends, and policies, while also showcasing National Properties' key projects. We shared practical tips, market insights, and in-depth looks at their developments, building trust along the way.",
      },
      {
        body:
          "Since RedNote is a UGC content platform, having a real user account felt more authentic and engaging for the audience. So, we created and managed the marketing manager account “nana在迪拜” (Nana at Dubai), specifically for 399 Hills Park. This account offered exclusive content about the project's features, benefits, and why Dubai is an amazing place to invest and live.",
      },
      {
        heading: "KOL Campaigns",
        body:
          "To maximize exposure and engagement, we partnered with Key Opinion Leaders (KOLs) who have a strong following in the travel, investment, and Dubai niche. Their influence helped us reach a larger audience and build trust, ensuring the brand's messaging resonated with potential investors.",
      },
    ],
    execution: [
      {
        heading: "Initial Campaign — Raising Awareness",
        body:
          "Collaborated with 181 KOLs, reaching a total of 1.9 million followers. Content focused on Dubai's lifestyle, real estate insights, and National Properties' key projects. Result: over 6,500 engagements, which laid the foundation for building trust with the audience.",
      },
      {
        heading: "Second Campaign — Driving Conversions",
        body:
          "Continued managing both the National Properties and “nana在迪拜” accounts, shifting focus to 399 Hills Park. Partnered with 231 KOLs, expanding reach to 1.2 million followers. Delivered in-depth content on property insights, market trends, and the advantages of 399 Hills Park. Result: over 5,100 engagements, helping us shift from awareness to actual interest.",
      },
    ],
    stats: [
      { value: 10, suffix: "k+", label: "Engagements" },
      { value: 100, suffix: "+", label: "Qualified leads" },
      { value: 1, suffix: "M", label: "Impressions" },
    ],
    resultsBullets: [
      "10,000+ engagements across both campaigns",
      "1 million impressions, putting National Properties on the map for a Chinese audience",
      "100+ qualified leads generated during the second campaign, turning engagement into serious interest",
      "Sustained visibility through strategic content and keyword targeting, driving leads over time from organic RedNote searches related to Dubai real estate",
    ],
    conclusion:
      "By tapping into the power of RedNote UGC content and collaborating with influential KOLs, we engaged a targeted audience of Chinese real estate investors, boosted brand visibility, and ultimately generated valuable leads for National Properties. The strategy proved to be a strong foundation for ongoing success and future campaigns.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
