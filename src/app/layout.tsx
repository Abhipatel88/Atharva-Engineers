import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: "../../public/fonts/Helvetica_Now_Display.ttf",
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "Atharva Engineers",
  description: "Delivering excellence in engineering, structural design, and turnkey execution.",
};

import { Footer } from "@/components/footer";

import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${helvetica.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
