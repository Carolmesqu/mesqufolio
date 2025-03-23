import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const fonte = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mesqufolio",
  description: "Portfólio de projetos de desenvolvimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fonte.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
