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
  metadataBase: new URL('https://dark-persona.vercel.app'),
  title: "Dark Persona - 나의 어두운 자아",
  description: "AI가 읽어주는 당신의 숨겨진 어두운 면. 시적이고 감성적인 다크 페르소나를 발견해보세요.",
  keywords: ["AI 성격테스트", "다크 페르소나", "심리테스트", "성격 분석", "Claude AI", "어두운 면", "성격 진단"],
  authors: [{ name: "Dark Persona Team" }],
  creator: "Dark Persona",
  publisher: "Dark Persona",
  robots: "index, follow",
  openGraph: {
    title: "Dark Persona - 나의 어두운 자아",
    description: "AI가 읽어주는 당신의 숨겨진 어두운 면. 몇 분만에 당신만의 다크 페르소나를 발견하세요.",
    url: "https://dark-persona.vercel.app",
    siteName: "Dark Persona",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/api/og-image",
        width: 1200,
        height: 630,
        alt: "Dark Persona - AI 다크 성격 테스트",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Persona - 나의 어두운 자아",
    description: "AI가 읽어주는 당신의 숨겨진 어두운 면. 지금 테스트해보세요!",
    images: ["/api/og-image"],
    creator: "@darkpersona",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#7c3aed',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728610817834974"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Dark Persona",
              "description": "AI가 읽어주는 당신의 숨겨진 어두운 면. 시적이고 감성적인 다크 페르소나를 발견해보세요.",
              "url": "https://dark-persona.vercel.app",
              "applicationCategory": "PersonalityTest",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "KRW"
              },
              "author": {
                "@type": "Organization",
                "name": "Dark Persona Team"
              },
              "datePublished": "2025-01-01",
              "inLanguage": "ko-KR",
              "keywords": "AI 성격테스트, 다크 페르소나, 심리테스트, 성격 분석, Claude AI"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
