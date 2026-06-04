import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iwarai.com"),
  title: "IWARAI — The Future of Smart Kitchen Storage",
  description:
    "IWARAI is a smart kitchen inventory platform. Track spices, sugar, flour and rice automatically with IoT-enabled smart containers, real-time monitoring, and low-stock alerts.",
  keywords: [
    "smart kitchen storage",
    "IoT kitchen inventory",
    "smart spice container",
    "pantry tracking",
    "IWARAI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "IWARAI — The Future of Smart Kitchen Storage",
    description:
      "Track spices, sugar, flour and pantry essentials automatically with intelligent IoT containers and real-time inventory monitoring.",
    url: "https://www.iwarai.com",
    siteName: "IWARAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IWARAI — The Future of Smart Kitchen Storage",
    description:
      "Smart IoT containers that track your kitchen ingredients in real time and alert you before you run out.",
  },
  robots: { index: true, follow: true },
  verification: { google: "A0MbER3W75aTIRAGETXKYf2Wxl_EihagpQtmWSHElVE" },
};
//c
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="bg-white text-zinc-900 antialiased selection:bg-amber-200/60">
        {children}
      </body>
    </html>
  );
}