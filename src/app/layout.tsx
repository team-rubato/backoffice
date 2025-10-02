import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BackOffice",
  description: "BackOffice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}
