'use client';

import { useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'es';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    // 클라이언트 사이드에서만 브라우저 언어 감지
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.toLowerCase();
      
      if (browserLang.startsWith('ko')) return 'ko';
      if (browserLang.startsWith('en')) return 'en';
      if (browserLang.startsWith('ja')) return 'ja';
      if (browserLang.startsWith('es')) return 'es';
    }
    
    return 'en'; // 기본값을 영어로 변경
  });

  useEffect(() => {
    // 브라우저 언어 감지 (한 번 더 확인)
    const detectLanguage = (): Language => {
      if (typeof window === 'undefined') return 'en';
      
      const browserLang = navigator.language.toLowerCase();
      
      if (browserLang.startsWith('ko')) return 'ko';
      if (browserLang.startsWith('en')) return 'en';
      if (browserLang.startsWith('ja')) return 'ja';
      if (browserLang.startsWith('es')) return 'es';
      
      return 'en'; // 기본값을 영어로 변경
    };

    const detectedLang = detectLanguage();
    if (detectedLang !== language) {
      setLanguage(detectedLang);
    }
  }, [language]);

  return { language };
};