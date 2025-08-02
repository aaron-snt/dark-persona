'use client';

import { useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'es';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // 브라우저 언어 감지
    const detectLanguage = (): Language => {
      if (typeof window === 'undefined') return 'en';
      
      const browserLang = navigator.language.toLowerCase();
      
      if (browserLang.startsWith('ko')) return 'ko';
      if (browserLang.startsWith('en')) return 'en';
      if (browserLang.startsWith('ja')) return 'ja';
      if (browserLang.startsWith('es')) return 'es';
      
      return 'en'; // 기본값을 영어로 변경
    };

    setLanguage(detectLanguage());
  }, []);

  return { language, setLanguage };
};