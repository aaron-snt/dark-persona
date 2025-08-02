import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface PersonaRequest {
  traits: string[];
  mood: string;
  answers: string[];
  language?: string;
}

export interface PersonaResponse {
  title: string;
  summary: string;
  highlight: string;
  description: string[];
  advice: string;
  warning: string;
  hashtags: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { traits, mood, answers, language = 'en' }: PersonaRequest = await request.json();

    const languageMap = {
      ko: 'Korean',
      en: 'English', 
      ja: 'Japanese',
      es: 'Spanish'
    };

    const responseLanguage = languageMap[language as keyof typeof languageMap] || 'English';

    const prompt = `
You are a dark personality profiler.
Based on the user's traits, emotional state, and behavior choices, generate a unique persona description.

Tone:
- Emotionally engaging but easy to understand
- Avoid overly abstract or cryptic language
- Hook the user with clarity and self-recognition

Respond in ${responseLanguage} language.

Input:
- Traits: ${traits.join(', ')}
- Mood: ${mood}
- Choices: ${answers.join(', ')}

Output format (JSON):
{
  "title": "A short, poetic title in quotes",
  "summary": "One-line summary for fast understanding",
  "highlight": "One emotionally sharp sentence that hooks attention",
  "description": [
    "3–5 short lines describing personality",
    "Focus on observable behavior, internal logic, and social tendencies",
    "Each line must be clear, relatable, and avoid excessive metaphor"
  ],
  "advice": "One actionable sentence the user can apply",
  "warning": "A behavioral warning starting with ⚠️",
  "hashtags": [
    "3 short tags without # symbol",
    "Describe personality type or behavioral patterns"
  ]
}`;

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    
    let personaData: PersonaResponse;
    try {
      personaData = JSON.parse(responseText);
    } catch {
      const lines = responseText.split('\n').filter(line => line.trim());
      personaData = {
        title: lines[0] || "알 수 없는 페르소나",
        summary: lines[1] || "복잡한 성격",
        highlight: lines[2] || "당신의 내면이 복잡합니다.",
        description: lines.slice(3, -3),
        advice: lines[lines.length - 3] || "자신을 더 이해해보세요.",
        warning: lines[lines.length - 2] || "⚠️ 주의가 필요합니다.",
        hashtags: (lines[lines.length - 1] || "").split(' ').filter(h => h.startsWith('#')).map(h => h.slice(1))
      };
    }

    return NextResponse.json(personaData);
  } catch (error) {
    console.error('Claude API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate persona' },
      { status: 500 }
    );
  }
}