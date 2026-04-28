import type { NextConfig } from "next";

const ARCHIVED_PRODUCT_PATHS = [
  "/pitch-kit",
  "/-the-rednote-business-account-diy-guide-email-support",
  "/-the-rednote-business-account-diy-guide",
  "/rednote-consultation-book",
  "/custom-rednote-strategy",
];

const CASE_STUDY_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: "/rednote-case-study", to: "/work" },
  { from: "/st-michel", to: "/work/st-michel" },
  { from: "/hondajet", to: "/work/hondajet" },
  { from: "/dubai-real-estate", to: "/work/dubai-real-estate" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediumvioletred-cheetah-959805.hostingersite.com",
      },
      {
        protocol: "https",
        hostname: "assets.zyrosite.com",
      },
      {
        protocol: "https",
        hostname: "cdn.zyrosite.com",
      },
    ],
  },
  async redirects() {
    return [
      ...ARCHIVED_PRODUCT_PATHS.map((path) => ({
        source: path,
        destination: "/store",
        permanent: true,
      })),
      ...CASE_STUDY_REDIRECTS.map(({ from, to }) => ({
        source: from,
        destination: to,
        permanent: true,
      })),
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
