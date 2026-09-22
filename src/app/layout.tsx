import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bjbeyond.pro"),
  title: {
    default: "BJ Beyond Pro | Smart tech, gifts and digital tools",
    template: "%s | BJ Beyond Pro",
  },
  description:
    "BJ Beyond Pro is an editorial portal for smarter buying decisions: tech, gift ideas, digital tools and affiliate notes with clear disclosures.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BJ Beyond Pro",
    description: "Smart tech, gifts and digital tools curated with clear affiliate disclosures.",
    url: "https://bjbeyond.pro",
    siteName: "BJ Beyond Pro",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
