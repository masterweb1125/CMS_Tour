"use client";
import Client_Footer from "@/src/components/client/footer/footer.component";
import "../globals.css";
import Client_Header from "@/src/components/client/header/header.component";
import { GetSettings } from "@/src/redux/service/AdminApi";
import { useEffect, useState } from "react";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [setting, setSetting] = useState(null);

  const fetchSettings = async () => {
    try {
      const settingData = await GetSettings();
      if (settingData && settingData.data) {
        setSetting(settingData.data);
      }
    } catch (error) {
      console.error("Failed to fetch settings:", error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <>
      {/* <ReactQueryProvider> */}
      <Client_Header />
      {children}
      <Client_Footer setting={setting} />
      {/* </ReactQueryProvider> */}
    </>
  );
}
