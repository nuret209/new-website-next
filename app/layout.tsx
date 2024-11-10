import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import Apps from "@/components/Apps";
export const metadata: Metadata = {
  title: "Nurettin Öğüç",
  description: "Nurettin Öğüç Personal Website",
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
        </div>
      </body>
    </html>
  );
}
