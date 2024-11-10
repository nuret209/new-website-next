import type { Metadata } from "next";

import "./globals.css";
import Menu from "@/components/Menu";
import Apps from "@/components/Apps";
import Head from "next/head";
import Link from "next/link";
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
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`antialiased relative`}
      >
        <div className=" root relative h-full">
          <Menu />
          <Apps />
          {children}
        </div>
      </body>
    </html>
  );
}
