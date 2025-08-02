import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface PersonaRequest {
  traits: string[];
  mood: string;
  answers: string[];
}

export interface PersonaResponse {
  title: string;
  description: string[];
  warning: string;
  hashtags: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { traits, mood, answers }: PersonaRequest = await request.json();

    const prompt = `You are a dark personality profiler.
Based on the user's traits, emotional state, and behavior choices, generate a unique persona description.
Make it poetic, emotionally intense, and a little unnerving. 
Respond in Korean language.

Input:
- Traits: ${traits.join(', ')}
- Mood: ${mood}
- Choices: ${answers.join(', ')}

Output format (JSON):
{
  "title": "One poetic line title in quotes",
  "description": ["3-5 lines of persona description", "as separate array elements"],
  "warning": "One warning line starting with ⚠️",
  "hashtags": ["3 hashtags", "without # symbol", "in Korean"]
}

Generate the persona now:`;

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
        description: lines.slice(1, -2),
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