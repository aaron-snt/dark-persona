# Dark Persona - 나의 어두운 자아

AI 기반 다크 성향 성격 테스트 웹앱입니다. Claude API를 이용해 사용자 입력을 분석하고, 시적이고 날카로운 페르소나 결과를 생성합니다.

## 🎯 주요 기능

- **AI 기반 성격 분석**: Claude API를 통한 깊이 있는 성향 분석
- **인터랙티브 UX**: 단계별 질문과 선택을 통한 몰입감 있는 경험
- **감성적 결과**: 시적이고 감정적인 표현으로 제공되는 다크 페르소나
- **소셜 공유**: 결과 공유 기능으로 바이럴 확산 유도
- **다크 테마**: 컨셉에 맞는 어두운 UI/UX 디자인

## 🛠 기술 스택

- **Frontend**: Next.js 15 + TypeScript
- **Styling**: TailwindCSS
- **AI API**: Anthropic Claude 3.5 Sonnet
- **배포**: Vercel (예정)

## 🚀 시작하기

### 환경 설정

1. 저장소 클론
```bash
git clone https://github.com/aaron-snt/dark-persona.git
cd dark-persona
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env.local` 파일에 Claude API 키를 설정하세요:
```bash
ANTHROPIC_API_KEY=your_claude_api_key_here
```

4. 개발 서버 실행
```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 앱을 확인할 수 있습니다.

## 📱 사용자 흐름

1. **온보딩**: "당신의 어두운 면을 AI가 읽습니다"
2. **질문 단계**: 5개의 선택형 질문 응답
3. **성향 선택**: 최대 3개의 성향 키워드 선택
4. **감정 선택**: 현재 감정 상태 선택
5. **결과 확인**: AI가 생성한 다크 페르소나 확인
6. **공유**: 결과 공유 및 재시도

## 🎨 주요 컴포넌트

- `OnboardingPage`: 시작 페이지 및 앱 소개
- `QuestionForm`: 질문, 성향, 감정 선택 폼
- `ResultPage`: 생성된 페르소나 결과 표시
- `API Route`: Claude API 연동 및 프롬프트 처리

## 💡 개발 참고사항

- Claude API 호출은 `/api/generate` 엔드포인트를 통해 처리
- 결과는 JSON 형태로 구조화되어 반환
- 광고 삽입 위치가 미리 준비되어 있음
- SEO 최적화된 메타데이터 포함

## 📈 향후 계획

- Google AdSense 광고 연동
- 다국어 지원 (영어, 일본어, 스페인어)
- 결과 이미지 저장 기능
- 사용자 통계 및 분석
- 소셜 미디어 최적화

## 🔧 배포

Vercel을 통한 배포:

```bash
npm run build
```

환경 변수 `ANTHROPIC_API_KEY`를 Vercel 대시보드에서 설정해야 합니다.
