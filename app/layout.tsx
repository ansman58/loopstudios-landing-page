import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans, Alata } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: ["200", "300"],
});

const alata = Alata({
  subsets: ["latin"],
  variable: "--font-alata",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Loopstudios",
  description: "Loopstudios landing page by frontend mentors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${alata.variable}`}>
        {children}
      </body>
    </html>
  );
}
