import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import DiscountPopup from "./component/DiscountPopup";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roofing.topdoglead.com"),
  title: {
    default: "TopDog Roofing | Roof Repair & Replacement Experts",
    template: "%s | TopDog Roofing",
  },
  description:
    "TopDog Roofing provides professional roof repair, roof replacement, roof inspections, and reliable roofing solutions to protect your home and property.",
  keywords: [
    "roofing services",
    "roof repair",
    "roof replacement",
    "roof inspection",
    "emergency roof repair",
    "professional roofing contractors",
    "residential roofing",
    "commercial roofing",
    "TopDog Roofing",
  ],
  applicationName: "TopDog Roofing",
  authors: [{ name: "TopDog Roofing" }],
  creator: "TopDog Roofing",
  publisher: "TopDog Roofing",
  category: "Roofing Services",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "TopDog Roofing | Roof Repair & Replacement Experts",
    description:
      "Professional roofing services for homeowners and businesses, including roof repair, replacement, and inspections.",
    url: "/",
    siteName: "TopDog Roofing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/roof2.webp",
        width: 1200,
        height: 630,
        alt: "TopDog Roofing professional roofing services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TopDog Roofing | Roof Repair & Replacement Experts",
    description:
      "Professional roofing services for homeowners and businesses, including roof repair, replacement, and inspections.",
    images: ["/roof2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://roofing.topdoglead.com/#organization",
        name: "TopDog Roofing",
        url: "https://roofing.topdoglead.com/",
        logo: "https://roofing.topdoglead.com/icon.png",
        telephone: "+1-866-964-4568",
        description:
          "Professional roofing services including roof repair, replacement, and inspections.",
      },
      {
        "@type": "WebSite",
        "@id": "https://roofing.topdoglead.com/#website",
        url: "https://roofing.topdoglead.com/",
        name: "TopDog Roofing",
        publisher: {
          "@id": "https://roofing.topdoglead.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        serviceType: "Roofing Services",
        provider: {
          "@id": "https://roofing.topdoglead.com/#organization",
        },
        areaServed: "US",
        url: "https://roofing.topdoglead.com/",
        description:
          "Roof repair, roof replacement, roof inspection, and professional roofing solutions.",
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable}`}>
        <Script
          id="topdog-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navbar />
        <DiscountPopup />
        {children}
        <Footer />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="JkhARxLMNh+CptEmB0KYzw" async></script>
      </body>
    </html>
  );
}
