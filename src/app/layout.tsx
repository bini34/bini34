import type { Metadata } from "next";
import { Geist, Geist_Mono, Amatic_SC } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { BackgroundBeams } from "@/components/ui/background-beams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amatic = Amatic_SC({
  weight: "700", // or ["400", "700"] if you need multiple weights
  subsets: ["latin"],
  variable: "--font-amatic",
});


export const metadata: Metadata = {
  title: "Biniyam",
  description: "Biniyam Ambachew Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amatic.variable}  antialiased`}
      >
        <div className="absolute top-0 -z-10">
        <BackgroundBeams />

        </div>
        <Header/>
          {children}
        <Footer/>
      </body>

    </html>
  );
}
