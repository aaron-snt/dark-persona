'use client';

import { useState, useEffect } from 'react';
import { UserAnswers } from '@/app/page';

interface ResultPageProps {
  answers: UserAnswers;
  onRestart: () => void;
}

interface PersonaResult {
  title: string;
  description: string[];
  warning: string;
  hashtags: string[];
}

export default function ResultPage({ answers, onRestart }: ResultPageProps) {
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
          throw new Error('페르소나 생성에 실패했습니다');
        }

        const result = await response.json();
        setPersona(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : '오류가 발생했습니다');
      } finally {
        setLoading(false);
      }
    };

    generatePersona();
  }, [answers]);

  const handleShare = async () => {
    if (!persona) return;

    const shareText = `${persona.title}\n\n${persona.description.join('\n')}\n\n${persona.warning}\n\n#DarkPersona #AI성격테스트`;
    
    // Web Share API 지원 확인
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Dark Persona 테스트 결과',
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch (err) {
        console.log('공유 취소됨');
      }
    }
    
    // Clipboard API 지원 확인
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('결과가 클립보드에 복사되었습니다!');
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
      alert('결과가 클립보드에 복사되었습니다!');
    } catch (err) {
      console.error('복사 실패:', err);
      // 최종 폴백: 수동 복사 안내
      prompt('다음 텍스트를 복사하세요:', shareText);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h2 className="text-2xl font-semibold">당신의 어두운 면을 분석 중...</h2>
          <p className="text-gray-400">AI가 깊이 들여다보고 있습니다</p>
          
          <div className="mt-8 bg-gray-800/50 p-6 rounded-lg max-w-md mx-auto">
            <p className="text-sm text-gray-300 mb-4">광고 삽입 위치</p>
            <div className="h-20 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-500 text-xs">Advertisement</span>
            </div>
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
          <h2 className="text-2xl font-semibold text-red-400">오류가 발생했습니다</h2>
          <p className="text-gray-400">{error}</p>
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg font-semibold hover:from-purple-700 hover:to-red-700 transition-all duration-200"
          >
            다시 시도하기
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

          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl border border-gray-700 space-y-6">
            <div className="space-y-4">
              {persona.description.map((line, index) => (
                <p key={index} className="text-lg leading-relaxed text-gray-200">
                  {line}
                </p>
              ))}
            </div>

            <div className="border-t border-gray-600 pt-6">
              <p className="text-red-400 font-medium text-lg">
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
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleShare}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              결과 공유하기
            </button>
            <button
              onClick={onRestart}
              className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
            >
              다시 테스트하기
            </button>
          </div>

          <div className="mt-8 bg-gray-800/50 p-6 rounded-lg">
            <p className="text-sm text-gray-300 mb-4">광고 삽입 위치</p>
            <div className="h-24 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-500 text-xs">Advertisement Banner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}