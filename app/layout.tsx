import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://the-pool-table-store-va.vercel.app"),
  title: { default: "The Pool Table Store | Alexandria, VA", template: "%s | The Pool Table Store" },
  description: "Pool table sales, moving, recovery, repair, and restoration in Alexandria and Northern Virginia.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: { title: "The Pool Table Store", description: "Precision pool table service, sales, and restoration in Alexandria, Virginia.", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "The Pool Table Store" }] },
  twitter: { card: "summary_large_image", title: "The Pool Table Store", description: "Precision pool table service, sales, and restoration in Alexandria, Virginia.", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
