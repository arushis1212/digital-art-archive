import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://digital250.com'),
  title: "The Digital 250 | Complete AP Art History Archive & Study Guide",
  description: "The ultimate interactive archive of the 250 required works for AP Art History. Featuring high-resolution images, FFCC analysis, and curator notes for every masterpiece from Global Prehistory to Contemporary Art.",
  keywords: [
    "AP Art History",
    "Art History 250",
    "AP Art History study guide",
    "SmartHistory alternative",
    "global prehistory",
    "ancient mediterranean",
    "250 artworks",
    "FFCC analysis",
    "art history exam prep",
    "College Board art history"
  ],
  openGraph: {
    title: "The Digital 250 | Complete AP Art History Archive & Study Guide",
    description: "The ultimate interactive archive of the 250 required works for AP Art History. Featuring high-resolution images, FFCC analysis, and curator notes.",
    type: "website",
    siteName: "The Digital 250",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Digital 250 | Complete AP Art History Archive & Study Guide",
    description: "The ultimate interactive archive of the 250 required works for AP Art History.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
