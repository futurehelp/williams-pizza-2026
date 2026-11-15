import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://williams-pizza-2026.vercel.app"),
  title: "William’s Pizza | Gramado",
  description:
    "Pizzas com massa fininha e crocante, preparadas para chegar quentinhas em Gramado e Canela.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "William’s Pizza | Gramado",
    description:
      "Massa fininha, ingredientes generosos e sabor que chega quente.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
