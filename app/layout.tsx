"use client";

import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
