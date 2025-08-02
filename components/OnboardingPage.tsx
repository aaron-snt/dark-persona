import AdSenseUnit from './AdSenseUnit';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/utils/translations';

interface OnboardingPageProps {
  onStart: () => void;
}

export default function OnboardingPage({ onStart }: OnboardingPageProps) {
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-2xl text-center space-y-8">
        {/* 언어 선택 */}
        <div className="mb-4 flex justify-center space-x-2">
          {['ko', 'en', 'ja', 'es'].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as any)}
              className={`px-3 py-1 rounded text-sm transition-all ${
                language === lang 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-6 text-lg text-gray-200">
          <p className="leading-relaxed">
            {t.description}
          </p>
          
          <p className="text-base text-gray-400">
            {t.detailedDescription.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.detailedDescription.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onStart}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">{t.startButton}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </button>
          
          <p className="text-sm text-gray-500">
            {t.duration}
          </p>
        </div>

        <div className="mt-12 text-xs text-gray-600 space-y-2">
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