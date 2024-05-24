import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatButton from "@/components/chatBot/chatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SR AI-Portfolio",
  description: "A Portfolio showcasing skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar/>
       <ChatButton/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
