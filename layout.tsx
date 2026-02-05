import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOPASUPA KOPI - Kopi Premium Indonesia",
  description: "LOPASUPA KOPI menyajikan kopi premium berkualitas tinggi dari biji kopi pilihan terbaik Indonesia.",
  keywords: ["Lopasupa", "Kopi", "Indonesia", "Arabica", "Robusta", "Kopi Premium", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Lopasupa Kopi" }],
  icons: {
    icon: "/lopasupa-logo.png",
  },
  openGraph: {
    title: "LOPASUPA KOPI",
    description: "Kopi premium berkualitas tinggi dari biji kopi pilihan terbaik Indonesia",
    url: "",
    siteName: "LOPASUPA KOPI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOPASUPA KOPI",
    description: "Kopi premium berkualitas tinggi dari biji kopi pilihan terbaik Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
