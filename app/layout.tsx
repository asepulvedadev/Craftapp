import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { Navbar, Footer } from "./components/shared"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRAFTIA - Soluciones Digitales Profesionales",
  description: "Agencia de soluciones digitales en San Nicolás, Nuevo León. Desarrollo web, branding, impresión gran formato y corte láser. Resultados en 5-7 días.",
  keywords: "desarrollo web, branding, impresión, corte laser, san nicolas, nuevo leon, mexico",
  authors: [{ name: "CRAFTIA" }],
  openGraph: {
    title: "CRAFTIA - Soluciones Digitales Profesionales",
    description: "Transformamos ideas en experiencias digitales que generan resultados reales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
