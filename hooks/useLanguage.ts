'use client';

import { useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'es';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 클라이언트 사이드임을 확인
    setIsClient(true);
    
    // 브라우저 언어 감지
    const detectLanguage = (): Language => {
      const browserLang = navigator.language.toLowerCase();
      console.log('Detected browser language:', browserLang); // 디버깅용
      
      if (browserLang.startsWith('ko')) return 'ko';
      if (browserLang.startsWith('en')) return 'en';
      if (browserLang.startsWith('ja')) return 'ja';
      if (browserLang.startsWith('es')) return 'es';
      
      return 'en'; // 기본값
    };

    const detectedLang = detectLanguage();
    console.log('Setting language to:', detectedLang); // 디버깅용
    setLanguage(detectedLang);
  }, []);

  return { language, isClient };
};