import type { Metadata } from "next";
import { jostFont } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Feedback Me",
  description: "App to manage feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jostFont.className}>{children}</body>
    </html>
  );
}
