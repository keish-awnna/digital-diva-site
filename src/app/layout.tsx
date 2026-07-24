import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Sans,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerBanner } from "@/components/common/DisclaimerBanner";
import { SmoothScroll } from "@/components/common/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Digital Diva Academy By Vee™ | Legal & Credit Empowerment",
  description:
    "Legal education, court process coaching, credit empowerment, and financial education built for everyday people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col font-sans bg-brand-ivory text-brand-burgundy selection:bg-brand-burgundy selection:text-brand-gold"
        suppressHydrationWarning
      >
        {/* Skip to main content — WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-brand-gold focus:text-brand-burgundy focus:font-bold focus:text-sm focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <DisclaimerBanner />
          <Navbar />
          <main id="main-content" className="grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
