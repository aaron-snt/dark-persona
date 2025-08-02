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
  relatedFigures: string[];
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
- Use short sentences and limit line length

Respond in ${responseLanguage} language.

Input:
- Traits: ${traits.join(', ')}
- Mood: ${mood}
- Choices: ${answers.join(', ')}

Output format (JSON):
{
  "title": "A short, poetic title (under 30 characters)",
  "summary": "One-line summary for fast understanding (under 60 characters)",
  "highlight": "One emotionally sharp sentence that hooks attention (under 60 characters)",
  "description": [
    "3–4 short lines (each under 80 characters)",
    "Describe behavior, logic, and emotion clearly",
    "Avoid metaphor unless highly intuitive"
  ],
  "advice": "One clear, actionable sentence (under 50 characters)",
  "warning": "⚠️ Start with this emoji. Stay under 70 characters.",
  "hashtags": [
    "3 concise tags without #",
    "Describe the persona's key tendencies"
  ],
  "relatedFigures": [
    "List 2–3 well-known public figures or fictional characters",
    "Format each as: 'Name (Source)'",
    "They must reflect the same behavioral and emotional traits"
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
        description: lines.slice(3, -4),
        advice: lines[lines.length - 4] || "자신을 더 이해해보세요.",
        warning: lines[lines.length - 3] || "⚠️ 주의가 필요합니다.",
        hashtags: (lines[lines.length - 2] || "").split(' ').filter(h => h.startsWith('#')).map(h => h.slice(1)),
        relatedFigures: (lines[lines.length - 1] || "").split(',').map(f => f.trim()).filter(f => f)
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