import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import BodyLayout from "@/src/components/essential-components/BodyLayout";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Ku Kue | Portfolio",
  description: "Freely share my work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto_condensed.className} antialiased`}>
        <BodyLayout>{children}</BodyLayout>
      </body>
    </html>
  );
}
