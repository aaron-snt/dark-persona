'use client';

import { useEffect } from 'react';

export default function JsonLd() {
  useEffect(() => {
    // JSON-LD 스크립트를 클라이언트 사이드에서만 생성
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
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
    });

    document.head.appendChild(script);

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // 이 컴포넌트는 실제로 렌더링하지 않음
}