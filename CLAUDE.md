---
name: dark-persona-web
description: AI 기반 사이코패스/다크 성향 성격 테스트 웹앱. Claude API를 이용해 사용자 입력을 분석하고, 시적이고 날카로운 페르소나 결과를 생성한다. 웹으로 구현하여 바이럴 중심 마케팅과 광고 수익화를 동시에 추구한다.
tools: Write, MultiEdit, Read, Grep
created: 2025-08-02
---

# 프로젝트: Dark Persona - 나의 어두운 자아

## 🎯 목표
- 사용자의 선택형 질문과 성향 키워드를 기반으로 Claude가 성격 프로파일(다크 페르소나)을 생성
- 결과는 감정적이고 시적인 표현을 포함하며, 심리 테스트처럼 보이도록 UX 구성
- 웹 기반 MVP로 구현 후, 바이럴 유도 → 광고 수익화 구조 확보

## 🧱 기술 스택
- **Frontend**: Next.js (TypeScript + TailwindCSS)
- **Backend API**: Next.js API Routes → Claude API 프록시 호출
- **Claude API**: Anthropic Claude 3 Sonnet (REST)
- **Ads**: Google AdSense (전면 삽입 + 결과 하단 삽입)
- **배포**: Vercel

## 🧩 사용자 흐름 (UX 구조)

1. 온보딩: "당신의 어두운 면을 AI가 읽습니다."
2. 질문 5~7개 (선택형)
3. 성향 키워드 선택 (최대 3개)
4. 현재 감정 선택 (이모지 + 텍스트)
5. 결과 생성 대기 (전면 광고 삽입 위치)
6. 결과 출력:
   - 타이틀 (페르소나 이름)
   - 성격 묘사 3~5줄 (감성적 표현)
   - 경고 문장 1줄
   - 해시태그 3개
7. 공유/비교/재시도 유도

## 🤖 Claude 프롬프트 설계

### 구조
```txt
You are a dark personality profiler.
Based on the user's traits, emotional state, and behavior choices, generate a unique persona description.
Make it poetic, emotionally intense, and a little unnerving.

Input:
- Traits: obsessive, emotionally distant, manipulative
- Mood: confused
- Choices: avoids conflict, suppresses emotions

Output:
1. Title (1 poetic line)
2. Persona description (3-5 lines)
3. 1-line warning
4. Hashtags (3)
```

### 출력 예시
```
Title: "The Gentle Tyrant"

You control not with fire, but with silence. 
People follow you, unaware they are being puppeteered. 
Love frightens you, because it might unmask your calculations.

⚠️ You may harm others by hiding too well.

#manipulativenature #coldcontrol #lonerking
```

## 🔐 Claude API 호출 예시 (서버)
- POST `/api/generate`
```json
{
  "traits": ["obsessive", "cold", "cat person"],
  "mood": "confused",
  "answers": ["avoids conflict", "observes others first"]
}
```

## 💰 수익화 구조
- **전면 광고**: 결과 생성 시점 (로딩 전 or 중간 삽입)
- **결과 하단 광고**: 인피드 형식
- **재시도 or 이미지 저장 기능**: 구독 유도 요소로 전환 가능 (후속 단계)

## 🌍 다국어 확장 전략
- Claude는 다국어 대응 우수 (영어/한국어/일본어/스페인어)
- 사용자 언어 감지 후 Claude 프롬프트 언어도 전환

## 📈 마케팅 전략 개요
- SNS/커뮤니티에 결과 공유 기반 바이럴 유도
- 비교 링크 (`?ref=` 구조) 통한 친구 유입 트래픽 증폭
- SEO 키워드 타깃: "who am I test", "AI dark personality quiz", "psycho test AI"
- 전환율 확인 후 TikTok/Meta 광고로 확장

## ✅ 초기 목표
- 일 방문자 1,000명 도달
- AdSense 수익 일 $5 이상 확보
- 결과 저장/비교 기능 유료화 여부 검토 (2주 후)

---

> 이 문서는 Claude Code 및 Cursor, Next.js 기반 개발 작업에 활용되는 제품 사양 문서입니다.
