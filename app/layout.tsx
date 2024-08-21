import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YANKI MUSTU",
  description: "YANKI MUSTU portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="selection:text-primaryExtraDark selection:bg-primaryLight ">
        {children}
      </body>
    </html>
  );
}
