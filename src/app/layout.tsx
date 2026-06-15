import type { ReactNode } from "react";

import "./globals.css";

export const metadata = {
  title: "Abdullah Jan Portfolio",
  description: "Full-stack developer portfolio.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
