import type { Metadata } from "next";
import { Geist_Mono, Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fraunces — warm boutique serif for display / headlines
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Nunito Sans — clean, readable sans for UI, body, labels
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cocos-brand-portal.vercel.app"),
  title: "Coco's Coffee",
  description: "Brand identity system for a warm, playful coffee trailer in Tampa, FL.",
  openGraph: {
    title: "Coco's Coffee",
    description: "Brand identity system for a warm, playful coffee trailer in Tampa, FL.",
    url: "https://cocos-brand-portal.vercel.app",
    siteName: "Coco's Coffee",
    images: [{ url: "/cocos/cocos-og-share-card-tampa-navy-coral.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coco's Coffee",
    description: "Brand identity system for a warm, playful coffee trailer in Tampa, FL.",
    images: ["/cocos/cocos-og-share-card-tampa-navy-coral.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
