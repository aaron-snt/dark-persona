import AdSenseUnit from './AdSenseUnit';

interface OnboardingPageProps {
  onStart: () => void;
}

export default function OnboardingPage({ onStart }: OnboardingPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Dark Persona
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            나의 어두운 자아
          </p>
        </div>

        <div className="space-y-6 text-lg text-gray-200">
          <p className="leading-relaxed">
            당신의 내면에 숨겨진 어두운 면을 AI가 읽어드립니다.
          </p>
          
          <p className="text-base text-gray-400">
            몇 가지 질문과 선택을 통해 당신만의 다크 페르소나를 발견해보세요.
            <br />
            결과는 시적이고 감성적인 표현으로 제공됩니다.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onStart}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">내 어두운 면 탐험하기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </button>
          
          <p className="text-sm text-gray-500">
            약 3-5분 소요됩니다
          </p>
        </div>

        <div className="mt-12 text-xs text-gray-600 space-y-2">
          <p>⚠️ 이 테스트는 엔터테인먼트 목적입니다</p>
          <p>실제 심리 진단이 아닙니다</p>
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