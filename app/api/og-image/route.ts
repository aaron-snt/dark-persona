import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Dark Persona';
  const summary = searchParams.get('summary') || '나의 어두운 자아';

  // SVG 템플릿 생성
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1a1a2e" />
          <stop offset="33%" stop-color="#16213e" />
          <stop offset="66%" stop-color="#7c3aed" />
          <stop offset="100%" stop-color="#000000" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444" />
          <stop offset="50%" stop-color="#7c3aed" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
      </defs>
      
      <rect width="1200" height="630" fill="url(#bgGradient)" />
      
      <text x="600" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="url(#textGradient)">
        ${title.length > 20 ? title.substring(0, 20) + '...' : title}
      </text>
      
      <text x="600" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" fill="#d1d5db">
        ${summary.length > 30 ? summary.substring(0, 30) + '...' : summary}
      </text>
      
      <text x="600" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af">
        AI가 읽어주는 당신의 숨겨진 어두운 면
      </text>
      
      <text x="600" y="420" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#6b7280">
        dark-persona.vercel.app
      </text>
      
      <circle cx="150" cy="150" r="3" fill="#7c3aed" opacity="0.7" />
      <circle cx="1050" cy="480" r="4" fill="#ef4444" opacity="0.5" />
      <circle cx="200" cy="500" r="2" fill="#3b82f6" opacity="0.6" />
      <circle cx="1000" cy="150" r="3" fill="#7c3aed" opacity="0.8" />
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}