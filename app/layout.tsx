import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { sitePath } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cine Glam | We create. We capture. We grow.",
    template: "%s | Cine Glam",
  },
  description:
    "A creative, content, production and digital growth studio built around one connected ecosystem.",
  icons: {
    icon: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
