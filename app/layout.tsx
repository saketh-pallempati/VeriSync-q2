import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export const metadata: Metadata = {
  title: "ZK Authentication",
  description: "Zero Knowledge Proof Authentication System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}