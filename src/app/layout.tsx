import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yakir / dev",
  description:
    "Yakir Rabinovich — Senior Full-Stack Engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-bg text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
