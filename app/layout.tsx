import type { Metadata } from "next";
import "./globals.css";
import "@/public/icons/lineicons.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Extranet | Tours made adventures",
  description: "Explore the unforgettable adventures",
};

const inter = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="font-mont">{children}</body>
    </html>
  );
}
