import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaryan Sharma | CS & Strategy",
  description: "Portfolio of a UIUC CS & Kellogg MiM Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning fixes the extension error.
        bg-[#0F172A] ensures the 'overscroll' area (like pulling down on mobile) matches your theme.
      */}
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F172A] text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}