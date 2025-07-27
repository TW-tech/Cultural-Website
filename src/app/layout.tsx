import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cultural Heritage - 文化傳承網站",
  description: "保存和分享世界文化多樣性，透過數位說故事和社群參與來傳承文化",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body
        className={`${fontVariables} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}