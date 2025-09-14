import Header from "@/components/header/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Buscar Vagas",
  description: "Encontre vagas de emprego de diversas fontes em um só lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <Toaster />
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
