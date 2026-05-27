import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Siadis Media — Digital Marketing Agency",
  description: "Full-stack digital marketing agency. Campaign strategy, paid social, retargeting, email, content, video, analytics, web development and more.",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-HK4DFCD601" />
    </html>
  );
}
