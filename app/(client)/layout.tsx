import Client_Footer from "@/src/components/client/footer/footer.component";
import "../globals.css";
import ClientStoreProvider from "@/src/providers/redux-providers/client-store-provider";
import Client_Header from "@/src/components/client/header/header.component";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientStoreProvider>
        {/* <ReactQueryProvider> */}
        <Client_Header />
        {children}
        <Client_Footer />
        {/* </ReactQueryProvider> */}
      </ClientStoreProvider>
    </>
  );
}
