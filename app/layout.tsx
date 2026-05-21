import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PULS Retreat 2026",
  description:
    "Physics Underlying Life Sciences Retreat 2026 in Zadar, Croatia."
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
