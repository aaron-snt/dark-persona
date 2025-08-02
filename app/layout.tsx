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
  title: "Dark Persona - 나의 어두운 자아",
  description: "AI가 읽어주는 당신의 숨겨진 어두운 면. 시적이고 감성적인 다크 페르소나를 발견해보세요.",
  keywords: ["AI 성격테스트", "다크 페르소나", "심리테스트", "성격 분석", "Claude AI"],
  openGraph: {
    title: "Dark Persona - 나의 어두운 자아",
    description: "AI가 읽어주는 당신의 숨겨진 어두운 면",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Persona - 나의 어두운 자아",
    description: "AI가 읽어주는 당신의 숨겨진 어두운 면",
  },
};

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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
