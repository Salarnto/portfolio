import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ShaderGradientBackground from "../components/shader-gradient";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salar Barzegar • Software Developer",
  description: "Guilan, Iran",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative font-light overflow-y-scroll`}>
        <ShaderGradientBackground />
        <div className="relative z-10 px-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
