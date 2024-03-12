import type { Metadata } from "next";
import "../globals.css";
import "@/public/icons/lineicons.css";
import { inter, montserrat } from "@/src/utils/fonts/fonts";
import Sidebar from "./template/Sidebar";

export const metadata: Metadata = {
  title: "Extranet | Tours made adventures",
  description: "Explore the unforgettable adventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-mont">
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
