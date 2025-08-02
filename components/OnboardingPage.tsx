import AdSenseUnit from './AdSenseUnit';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/utils/translations';

interface OnboardingPageProps {
  onStart: () => void;
}

export default function OnboardingPage({ onStart }: OnboardingPageProps) {
  const { language, isClient } = useLanguage();
  const t = getTranslation(language);

  // 클라이언트 사이드 렌더링이 완료될 때까지 기다림
  if (!isClient) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black"></div>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl text-center space-y-6 sm:space-y-8 w-full">

        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-200 px-2 sm:px-0">
          <p className="leading-relaxed">
            {t.description}
          </p>
          
          <p className="text-sm sm:text-base text-gray-400">
            {t.detailedDescription.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.detailedDescription.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="space-y-4 px-2 sm:px-0">
          <button
            onClick={onStart}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <span className="relative z-10">{t.startButton}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </button>
          
          <p className="text-xs sm:text-sm text-gray-500">
            {t.duration}
          </p>
        </div>

        <div className="mt-8 sm:mt-12 text-xs text-gray-600 space-y-2 px-2 sm:px-0">
          <p>{t.disclaimer}</p>
          <p>{t.notDiagnosis}</p>
        </div>

        {/* 하단 배너 광고 */}
        <div className="mt-8">
          <AdSenseUnit 
            adSlot="4444444444"
            adFormat="horizontal"
            className="bg-gray-800/30 p-2 rounded-lg"
            adStyle={{ display: 'block', height: '60px' }}
          />
        </div>
      </div>
    </div>
  );
}