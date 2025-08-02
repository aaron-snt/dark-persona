'use client';

import { useState, useEffect } from 'react';
import { UserAnswers } from '@/app/page';
import AdSenseUnit from './AdSenseUnit';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/utils/translations';

interface ResultPageProps {
  answers: UserAnswers;
  onRestart: () => void;
}

interface PersonaResult {
  title: string;
  summary: string;
  highlight: string;
  description: string[];
  advice: string;
  warning: string;
  hashtags: string[];
  relatedFigures: string[];
}

export default function ResultPage({ answers, onRestart }: ResultPageProps) {
  const { language, isClient } = useLanguage();
  const t = getTranslation(language);
  const [persona, setPersona] = useState<PersonaResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generatePersona = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(answers),
        });

        if (!response.ok) {
          throw new Error(t.result.error);
        }

        const result = await response.json();
        setPersona(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : t.result.generalError);
      } finally {
        setLoading(false);
      }
    };

    generatePersona();
  }, [answers, t.result.error, t.result.generalError]);

  // 클라이언트 사이드 렌더링이 완료될 때까지 기다림
  if (!isClient) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black"></div>;
  }

  const handleShare = async () => {
    if (!persona) return;

    const shareText = `${persona.title}\n\n${persona.highlight}\n\n${persona.description.join('\n')}\n\n${persona.advice}\n\n${persona.warning}\n\n#DarkPersona #AI성격테스트 #${persona.hashtags.join(' #')}`;
    
    // Web Share API 지원 확인
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${persona.title} | Dark Persona`,
          text: `${persona.highlight}\n\n${shareText}`,
          url: window.location.origin,
        });
        return;
      } catch {
        console.log(t.result.shareCanceled);
      }
    }
    
    // Clipboard API 지원 확인
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(t.result.shareSuccess);
        return;
      } catch (err) {
        console.error('클립보드 복사 실패:', err);
      }
    }
    
    // 폴백: 텍스트 선택 방식
    try {
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(t.result.shareSuccess);
    } catch (err) {
      console.error('복사 실패:', err);
      // 최종 폴백: 수동 복사 안내
      prompt(t.result.copyManual, shareText);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h2 className="text-2xl font-semibold">{t.result.analyzing}</h2>
          <p className="text-gray-400">{t.result.subtitle}</p>
          
          <div className="mt-8 max-w-md mx-auto">
            <AdSenseUnit 
              adSlot="1234567890"
              adFormat="rectangle"
              className="bg-gray-800/50 p-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-semibold text-red-400">{t.result.generalError}</h2>
          <p className="text-gray-400">{error}</p>
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg font-semibold hover:from-purple-700 hover:to-red-700 transition-all duration-200"
          >
            {t.result.retry}
          </button>
        </div>
      </div>
    );
  }

  if (!persona) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {persona.title}
            </h1>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-6 sm:p-8 rounded-2xl border border-gray-700 space-y-6">
            {/* Summary */}
            <div className="text-center">
              <p className="text-purple-300 font-medium text-lg sm:text-xl">
                {persona.summary}
              </p>
            </div>

            {/* Highlight */}
            <div className="text-center bg-gradient-to-r from-red-900/30 to-purple-900/30 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-300 font-semibold text-base sm:text-lg italic">
                &ldquo;{persona.highlight}&rdquo;
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              {persona.description.map((line, index) => (
                <p key={index} className="text-base sm:text-lg leading-relaxed text-gray-200">
                  {line}
                </p>
              ))}
            </div>

            {/* Advice */}
            <div className="border-t border-gray-600 pt-6">
              <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4">
                <p className="text-blue-300 font-medium text-sm sm:text-base">
                  💡 {persona.advice}
                </p>
              </div>
            </div>

            {/* Warning */}
            <div className="border-t border-gray-600 pt-6">
              <p className="text-red-400 font-medium text-base sm:text-lg">
                {persona.warning}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {persona.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Related Figures */}
            {persona.relatedFigures && persona.relatedFigures.length > 0 && (
              <div className="border-t border-gray-600 pt-6">
                <h3 className="text-center text-gray-400 text-sm mb-3">비슷한 인물들</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {persona.relatedFigures.map((figure, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600"
                    >
                      {figure}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleShare}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              {t.result.share}
            </button>
            <button
              onClick={onRestart}
              className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
            >
              {t.result.restart}
            </button>
          </div>

          <div className="mt-8">
            <AdSenseUnit 
              adSlot="0987654321"
              adFormat="horizontal"
              className="bg-gray-800/50 p-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}