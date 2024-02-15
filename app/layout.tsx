import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "WeatherApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
