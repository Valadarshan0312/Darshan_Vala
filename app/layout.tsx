import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarBackground";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darshan Vala Portfolio",
  description: "Welcome to the portfolio of Darshan Vala, a passionate UI/UX designer dedicated to creating intuitive and engaging digital experiences. Explore a diverse collection of projects showcasing expertise in user-centric design, from innovative mobile applications to immersive web interfaces. Each project highlights a meticulous approach to usability, aesthetics, and functionality, demonstrating a commitment to enhancing user satisfaction and achieving business goals through thoughtful design solutions.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />

        {children}
      </body>
    </html>
  );
}
