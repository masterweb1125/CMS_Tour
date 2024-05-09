import Client_Footer from "@/src/components/client/footer/footer.component";
import Client_Header from "@/src/components/client/header/header.component";
import { inter, montserrat } from "@/src/utils/fonts/fonts";
import "../globals.css";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable} ${inter.variable}`}>
      <Client_Header text="text-black" />
      <br />
      <br />
      <br />
      {children}
      <Client_Footer />
    </div>
  );
}
