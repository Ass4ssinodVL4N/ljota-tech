import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ljotatech.com.br"),

  title: {
    default: "LJota Tech | Criação de Sites Profissionais",
    template: "%s | LJota Tech",
  },

  description:
    "Criamos sites institucionais profissionais para empresas e prestadores de serviços. Sites modernos, responsivos e preparados para apresentar sua empresa e gerar novos contatos.",

  keywords: [
    "criação de sites",
    "site profissional",
    "site institucional",
    "site para empresas",
    "site para prestadores de serviços",
    "desenvolvimento de sites",
    "criação de site empresarial",
    "Site Express",
    "LJota Tech",
  ],

  authors: [
    {
      name: "LJota Tech",
    },
  ],

  creator: "LJota Tech",
  publisher: "LJota Tech",

  category: "technology",

  applicationName: "LJota Tech",

  openGraph: {
    title: "LJota Tech | Criação de Sites Profissionais",
    description:
      "Sites institucionais modernos para empresas e prestadores de serviços que querem transmitir confiança e fortalecer sua presença digital.",
    url: "/",
    siteName: "LJota Tech",
    locale: "pt_BR",
    type: "website",

    images: [
      {
        url: "/logo-ljota.png",
        width: 1200,
        height: 630,
        alt: "LJota Tech - Conectando empresas à tecnologia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LJota Tech | Criação de Sites Profissionais",
    description:
      "Sites profissionais para empresas e prestadores de serviços.",
    images: ["/logo-ljota.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#020408] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}