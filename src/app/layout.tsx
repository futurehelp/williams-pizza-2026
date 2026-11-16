import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://williams-pizza-2026.vercel.app"),
  title: "William’s Pizza | Gramado",
  description:
    "Thin, crisp pizzas made to arrive hot in Gramado and Canela.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "William’s Pizza | Gramado",
    description: "Thin crust, generous ingredients, and flavor that arrives hot.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "William’s Pizza — crisp by design, generous by nature.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William’s Pizza | Gramado",
    description: "Thin crust, generous ingredients, and flavor that arrives hot.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
