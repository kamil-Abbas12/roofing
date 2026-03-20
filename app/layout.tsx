import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import DiscountPopup from "./component/DiscountPopup";
import { Poppins } from "next/font/google";
import Script from "next/script";
const poppins = Poppins({
  weight: ['400', '600', '700'], // regular, semi-bold, bold
  subsets: ['latin'],
  display: 'swap'
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata  = {
  title: "Top Roofing Services | Professional Roofing Experts",
  description:
    "Get professional roofing services with certified experts. Protect your home with reliable roofing solutions.",
  keywords: [
    "roofing services",
    "roof repair",
    "roof replacement",
    "professional roofing",
  ],
  authors: [{ name: "TopDogLead" }],
  openGraph: {
    title: "Professional Roofing Services",
    description: "Shield your home with roofing experts",
    url: "https://roofing.topdoglead.com/",
    siteName: "TopDogLead",
    images: [
      {
        url: "/roof2.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "TopDogLead Roofing",
      telephone: "+18669644568",
      url: "https://roofing.topdoglead.com/",
      description: "Professional roofing services",
    }),
  }}
/>
        <Navbar/>
              <DiscountPopup />

        {children}

              <Footer/>

      </body>
    </html>
  );
}
