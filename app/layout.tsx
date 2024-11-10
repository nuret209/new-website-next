import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Menu from "@/components/Menu";
import Apps from "@/components/Apps";

export const metadata: Metadata = {
  title: "Nurettin Öğüç",
  description: "Nurettin Öğüç Personal Website",
  icons: {
    icon: "/images/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative`}
      >
        <div className=" root relative h-full">
          <Menu />
          <Apps />
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
