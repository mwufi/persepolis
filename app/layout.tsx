import type { Metadata } from "next";
import { Geist, Geist_Mono, Sail, Afacad } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sail = Sail({
  variable: "--font-sail",
  subsets: ["latin"],
  weight: "400",
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Persepolis",
  description: "Home of Zen The Great",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Sail&display=swap');
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sail.variable} ${afacad.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
