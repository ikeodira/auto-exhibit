import { Navbar, Footer } from "@/components/";

import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Auto Exhibit",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
