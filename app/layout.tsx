import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata = {
  title: 'Amazon Product Recommendations | Top Picks for Smart Shopping',
  description:
    'Discover handpicked Amazon product recommendations across tech, home, gadgets, and more. Honest reviews, top deals, and smart shopping guides all in one place.',
  keywords: [
    'amazon product recommendations',
    'best amazon products',
    'top amazon finds',
    'amazon deals 2025',
    'amazon gadgets',
    'home essentials amazon',
    'tech accessories',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yourdomain.com/',
  },
  icons:'/logo/logo.svg'
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2658298007378339"
     crossOrigin="anonymous"></script>
    </html>
  );
}
