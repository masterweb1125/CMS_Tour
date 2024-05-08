import type { Metadata } from "next";
import "./globals.css";
import "@/public/icons/lineicons.css";
import { inter, montserrat } from "@/src/utils/fonts/fonts";
import { Providers } from "@/src/redux/Provider";
import ToastNotification from "@/src/utils/ToastNotification";

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
        <Providers>
          <ToastNotification />
          {children}
        </Providers>
      </body>
    </html>
  );
}
