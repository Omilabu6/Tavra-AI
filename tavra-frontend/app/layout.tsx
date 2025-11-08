// app/layout.tsx
import "@/app/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Tavra AI",
  description: "AI-powered learning platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
