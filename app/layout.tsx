import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DomainGuard – Safe Domain Availability Checker",
  description: "Check domain availability without triggering registrar sniping or domain parking. Protect your domain ideas with anonymous WHOIS lookups."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0bc22d99-1780-491e-937c-11cda2196bba"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
