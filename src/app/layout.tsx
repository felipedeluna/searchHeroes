import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Search Heroes",
  description: "Generated by Felipe de Luna",
  icons:{
    icon: '/assets/logo/logo.png'
  }
};

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Pesos que você precisa
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  );
}
