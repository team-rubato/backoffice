import type { Metadata } from "next";
import "./globals.css";
import AppSidebarProvider from "@/provider/app-sidebar-provider";

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
      <body>
        <AppSidebarProvider>{children}</AppSidebarProvider>
      </body>
    </html>
  );
}
