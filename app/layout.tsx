import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modelling 2D materials",
  description:
    "Modelling 2D materials workshop in Zadar, Croatia."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-lavender text-ink antialiased">{children}</body>
    </html>
  );
}
