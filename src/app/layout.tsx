import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "60 років ФМЦТ | Квитки на концерт",
  description: "Святковий концерт до 60-річчя ФМЦТ.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${unbounded.variable} h-full bg-[#050507] antialiased`}
    >
      <body className="min-h-full bg-[#050507] font-(family-name:--font-manrope) text-[#f5f5f5] selection:bg-violet-500/40 selection:text-white">
        <Header/>
        {children}
      </body>
    </html>
  );
}
