import Client_Footer from "@/src/components/client/footer/footer.component";
import "../globals.css";
import Client_Header from "@/src/components/client/header/header.component";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        {/* <ReactQueryProvider> */}
        <Client_Header />
        {children}
        <Client_Footer />
        {/* </ReactQueryProvider> */}
    </>
  );
}
