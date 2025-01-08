import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sail, Afacad } from "next/font/google";
import "@/app/globals.css";
import HomeLink from "@/components/HomeLink";
import Environment from "@/components/3d/Environment";
import { Panel } from "@/components/3d/Panel";

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
  weight: ["400", "500", "600", "700"],
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
        <style>{`
          html {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          html::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sail.variable} ${afacad.variable} antialiased h-screen`}
      >
        <Environment bgImage="url(/2.png)">
          <Panel title="Zentomorrow">
            <article className="reader prose prose-lg prose-invert font-afacad max-w-[600px] mx-auto">
              {children}
            </article>
            <HomeLink />
          </Panel>
        </Environment>
      </body>
    </html>
  );
}