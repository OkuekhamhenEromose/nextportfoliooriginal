import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Charles Eromose - Full Stack Engineer",
  description: "Full Stack Engineer with 4+ years of experience in React, Next.js, Django, and cloud solutions",
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon.ico',
  //       sizes: 'any',
  //     }
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}