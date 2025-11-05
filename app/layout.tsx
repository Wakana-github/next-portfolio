import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import { Russo_One,Abril_Fatface  } from "next/font/google";
import "./globals.css";
import site_img from "@/site_img.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const russo = Russo_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-russo-one', 
  display: 'swap',
});

export const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400', 
  variable: '--font-abril-fatface', 
  display: 'swap',
});

export const metadata: Metadata = { 
  title: "Wakana Gushi | Portfolio",
  description: "This is a Wakana's Portfolio website showcasing her skills and projects.",
  openGraph: {
    title: "Wakana Gushi | Portfolio",
    description: "Wakana's portfolio, including her skills and proijects.",
    url: "https://www.wakanagushi.dev/",
    images: [
      {
        url: "https://www.wakanagushi.dev/site_img.png",
        width: 1200,
        height: 630,
        alt: "Wakana Gushi Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",   //large img
    title: "Wakana Gushi | Portfolio",
    description: "Wakana's portfolio, including her skills and proijects.",
    images: ["/https://www.wakanagushi.dev/site_img.png"],
    site: "https://www.wakanagushi.dev/",
    creator: "@wakana_g", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${russo.variable} ${abril.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased` }
      >
          {children}
      </body>
    </html>
  );
}
