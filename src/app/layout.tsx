import type { Metadata } from "next";
import { Lora, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dreamAvenue = localFont({
  src: "../../public/fonts/DreamAvenue-Regular.woff2",
  variable: "--font-dream",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZL Marketing Studio — A China Launch Studio for Creators & Brands",
  description:
    "I help creators, experts, and founder-led brands turn RedNote attention into inquiries, bookings, and sales in China.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${cormorant.variable} ${dreamAvenue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
