import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Luma Dental",
  description: "Modern dental care for every smile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}