import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Tshakazi Consulting | Corporate Governance & Secretarial Services',
  description: 'Tshakazi Consulting provides expert corporate secretarial, governance advisory, and regulatory compliance support to boards and executives across South Africa.',
  keywords: ["Corporate Governance, Company Secretarial, Board Support, Compliance, King IV, Tshakazi Consulting"],
  openGraph: {
    "title": "Tshakazi Consulting | Corporate Governance & Secretarial Services",
    "description": "Professional governance advisory and secretarial services for South African boards and executives.",
    "siteName": "Tshakazi Consulting (PTY) LTD",
    "type": "website"
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
