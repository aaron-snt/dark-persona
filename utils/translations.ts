import { Language } from '@/hooks/useLanguage';

export const translations = {
  ko: {
    title: 'Dark Persona',
    subtitle: '나의 어두운 자아',
    description: '당신의 내면에 숨겨진 어두운 면을 AI가 읽어드립니다.',
    detailedDescription: '몇 가지 질문과 선택을 통해 당신만의 다크 페르소나를 발견해보세요.\n결과는 시적이고 감성적인 표현으로 제공됩니다.',
    startButton: '내 어두운 면 탐험하기',
    duration: '약 3-5분 소요됩니다',
    disclaimer: '⚠️ 이 테스트는 엔터테인먼트 목적입니다',
    notDiagnosis: '실제 심리 진단이 아닙니다',
    questions: {
      conflict: '갈등 상황에서 당신은?',
      relationship: '사람들과의 관계에서 당신은?',
      goals: '목표 달성을 위해서라면?',
      emotions: '감정 표현에 대해서는?',
      power: '권력이나 통제에 대해?'
    },
    options: {
      conflict: [
        '직접적으로 맞서서 해결한다',
        '조용히 관찰하며 기회를 기다린다',
        '감정을 숨기고 피한다',
        '상대방의 약점을 파악한다'
      ],
      relationship: [
        '진심으로 다가가려 노력한다',
        '필요할 때만 관계를 유지한다',
        '상대방을 분석하고 이용한다',
        '거리를 두고 관찰만 한다'
      ],
      goals: [
        '정직하고 노력하는 방법만 사용한다',
        '약간의 속임수는 괜찮다고 생각한다',
        '수단과 방법을 가리지 않는다',
        '다른 사람을 이용할 수도 있다'
      ],
      emotions: [
        '솔직하게 감정을 드러낸다',
        '상황에 따라 조절해서 표현한다',
        '거의 표현하지 않는다',
        '계산적으로 감정을 연출한다'
      ],
      power: [
        '별로 관심이 없다',
        '때로는 필요하다고 생각한다',
        '은밀하게 통제하는 것을 좋아한다',
        '명확한 권력을 갖고 싶어한다'
      ]
    },
    traits: {
      title: '당신의 성향을 선택하세요',
      subtitle: '최대 3개까지 선택 가능',
      selected: '선택됨',
      next: '다음'
    },
    mood: {
      title: '현재 당신의 감정은?'
    },
    result: {
      analyzing: '당신의 어두운 면을 분석 중...',
      subtitle: 'AI가 깊이 들여다보고 있습니다',
      share: '결과 공유하기',
      restart: '다시 테스트하기',
      submit: '결과 확인하기',
      error: '페르소나 생성에 실패했습니다',
      generalError: '오류가 발생했습니다',
      retry: '다시 시도하기',
      shareSuccess: '결과가 클립보드에 복사되었습니다!',
      shareCanceled: '공유 취소됨',
      copyManual: '다음 텍스트를 복사하세요:'
    },
    traitsList: [
      '강박적', '냉정한', '조작적', '고독한', '완벽주의자',
      '의심 많은', '감정적', '지배적', '신비로운', '복수심 강한',
      '직관적', '계산적'
    ],
    moodsList: [
      { emoji: '😵‍💫', text: '혼란스러운' },
      { emoji: '😤', text: '분노하는' },
      { emoji: '😔', text: '우울한' },
      { emoji: '😈', text: '악독한' },
      { emoji: '🤔', text: '회의적인' },
      { emoji: '😶‍🌫️', text: '공허한' },
      { emoji: '🔥', text: '열정적인' },
      { emoji: '🌙', text: '몽환적인' }
    ]
  },
  en: {
    title: 'Dark Persona',
    subtitle: 'My Dark Self',
    description: 'AI reveals the hidden dark aspects within you.',
    detailedDescription: 'Discover your unique dark persona through questions and choices.\nResults are presented in poetic and emotional expressions.',
    startButton: 'Explore My Dark Side',
    duration: 'Takes about 3-5 minutes',
    disclaimer: '⚠️ This test is for entertainment purposes',
    notDiagnosis: 'Not an actual psychological diagnosis',
    questions: {
      conflict: 'In conflict situations, you:',
      relationship: 'In relationships with people, you:',
      goals: 'To achieve your goals:',
      emotions: 'Regarding emotional expression:',
      power: 'About power or control:'
    },
    options: {
      conflict: [
        'Confront directly to solve',
        'Quietly observe and wait for opportunity',
        'Hide emotions and avoid',
        'Identify the opponent\'s weaknesses'
      ],
      relationship: [
        'Try to approach genuinely',
        'Maintain relationships only when needed',
        'Analyze and use others',
        'Keep distance and just observe'
      ],
      goals: [
        'Use only honest and hardworking methods',
        'Think some deception is okay',
        'Use any means necessary',
        'May use other people'
      ],
      emotions: [
        'Express emotions honestly',
        'Control expression according to situation',
        'Rarely express emotions',
        'Calculatedly perform emotions'
      ],
      power: [
        'Not really interested',
        'Sometimes think it\'s necessary',
        'Like to control secretly',
        'Want clear power'
      ]
    },
    traits: {
      title: 'Select your traits',
      subtitle: 'Up to 3 selections allowed',
      selected: 'Selected',
      next: 'Next'
    },
    mood: {
      title: 'What is your current emotion?'
    },
    result: {
      analyzing: 'Analyzing your dark side...',
      subtitle: 'AI is looking deep inside',
      share: 'Share Result',
      restart: 'Test Again',
      submit: 'Check Result',
      error: 'Failed to generate persona',
      generalError: 'An error occurred',
      retry: 'Try Again',
      shareSuccess: 'Result copied to clipboard!',
      shareCanceled: 'Share canceled',
      copyManual: 'Copy this text:'
    },
    traitsList: [
      'Obsessive', 'Cold', 'Manipulative', 'Solitary', 'Perfectionist',
      'Suspicious', 'Emotional', 'Dominant', 'Mysterious', 'Vengeful',
      'Intuitive', 'Calculating'
    ],
    moodsList: [
      { emoji: '😵‍💫', text: 'Confused' },
      { emoji: '😤', text: 'Angry' },
      { emoji: '😔', text: 'Depressed' },
      { emoji: '😈', text: 'Wicked' },
      { emoji: '🤔', text: 'Skeptical' },
      { emoji: '😶‍🌫️', text: 'Empty' },
      { emoji: '🔥', text: 'Passionate' },
      { emoji: '🌙', text: 'Dreamy' }
    ]
  },
  ja: {
    title: 'Dark Persona',
    subtitle: '私のダークな自己',
    description: 'AIがあなたの内面に隠されたダークな面を読み取ります。',
    detailedDescription: 'いくつかの質問と選択を通じて、あなただけのダークペルソナを発見してください。\n結果は詩的で感情的な表現で提供されます。',
    startButton: '私のダークサイドを探索する',
    duration: '約3-5分かかります',
    disclaimer: '⚠️ このテストは娯楽目的です',
    notDiagnosis: '実際の心理診断ではありません',
    questions: {
      conflict: '対立状況では、あなたは：',
      relationship: '人との関係では、あなたは：',
      goals: '目標達成のためなら：',
      emotions: '感情表現については：',
      power: '権力や統制について：'
    },
    options: {
      conflict: [
        '直接的に対峙して解決する',
        '静かに観察して機会を待つ',
        '感情を隠して避ける',
        '相手の弱点を把握する'
      ],
      relationship: [
        '真心で近づこうと努力する',
        '必要な時だけ関係を維持する',
        '相手を分析して利用する',
        '距離を置いて観察するだけ'
      ],
      goals: [
        '正直で努力する方法のみ使用',
        '少しの騙しは大丈夫だと思う',
        '手段と方法を選ばない',
        '他人を利用することもある'
      ],
      emotions: [
        '正直に感情を表現する',
        '状況に応じて調節して表現',
        'ほとんど表現しない',
        '計算的に感情を演出する'
      ],
      power: [
        'あまり興味がない',
        '時には必要だと思う',
        '密かに統制するのが好き',
        '明確な権力を持ちたい'
      ]
    },
    traits: {
      title: 'あなたの性向を選択してください',
      subtitle: '最大3つまで選択可能',
      selected: '選択済み',
      next: '次へ'
    },
    mood: {
      title: '現在のあなたの感情は？'
    },
    result: {
      analyzing: 'あなたのダークサイドを分析中...',
      subtitle: 'AIが深く見つめています',
      share: '結果を共有',
      restart: '再テスト',
      submit: '結果確認',
      error: 'ペルソナ生成に失敗しました',
      generalError: 'エラーが発生しました',
      retry: '再試行',
      shareSuccess: '結果がクリップボードにコピーされました！',
      shareCanceled: '共有がキャンセルされました',
      copyManual: '次のテキストをコピーしてください：'
    },
    traitsList: [
      '強迫的', '冷静', '操作的', '孤独', '完璧主義者',
      '疑い深い', '感情的', '支配的', '神秘的', '復讐心強い',
      '直感的', '計算的'
    ],
    moodsList: [
      { emoji: '😵‍💫', text: '混乱した' },
      { emoji: '😤', text: '怒っている' },
      { emoji: '😔', text: '憂鬱な' },
      { emoji: '😈', text: '邪悪な' },
      { emoji: '🤔', text: '懐疑的な' },
      { emoji: '😶‍🌫️', text: '空虚な' },
      { emoji: '🔥', text: '情熱的な' },
      { emoji: '🌙', text: '夢想的な' }
    ]
  },
  es: {
    title: 'Dark Persona',
    subtitle: 'Mi Yo Oscuro',
    description: 'La IA revela los aspectos oscuros ocultos dentro de ti.',
    detailedDescription: 'Descubre tu persona oscura única a través de preguntas y elecciones.\nLos resultados se presentan en expresiones poéticas y emocionales.',
    startButton: 'Explorar Mi Lado Oscuro',
    duration: 'Toma aproximadamente 3-5 minutos',
    disclaimer: '⚠️ Esta prueba es para fines de entretenimiento',
    notDiagnosis: 'No es un diagnóstico psicológico real',
    questions: {
      conflict: 'En situaciones de conflicto, tú:',
      relationship: 'En las relaciones con personas, tú:',
      goals: 'Para lograr tus objetivos:',
      emotions: 'Respecto a la expresión emocional:',
      power: 'Sobre el poder o control:'
    },
    options: {
      conflict: [
        'Confrontas directamente para resolver',
        'Observas en silencio y esperas la oportunidad',
        'Ocultas emociones y evitas',
        'Identificas las debilidades del oponente'
      ],
      relationship: [
        'Intentas acercarte genuinamente',
        'Mantienes relaciones solo cuando es necesario',
        'Analizas y usas a otros',
        'Mantienes distancia y solo observas'
      ],
      goals: [
        'Usas solo métodos honestos y trabajadores',
        'Piensas que algo de engaño está bien',
        'Usas cualquier medio necesario',
        'Puedes usar a otras personas'
      ],
      emotions: [
        'Expresas emociones honestamente',
        'Controlas la expresión según la situación',
        'Rara vez expresas emociones',
        'Realizas emociones calculadamente'
      ],
      power: [
        'No muy interesado',
        'A veces piensas que es necesario',
        'Te gusta controlar en secreto',
        'Quieres poder claro'
      ]
    },
    traits: {
      title: 'Selecciona tus rasgos',
      subtitle: 'Hasta 3 selecciones permitidas',
      selected: 'Seleccionado',
      next: 'Siguiente'
    },
    mood: {
      title: '¿Cuál es tu emoción actual?'
    },
    result: {
      analyzing: 'Analizando tu lado oscuro...',
      subtitle: 'La IA está mirando profundamente',
      share: 'Compartir Resultado',
      restart: 'Probar de Nuevo',
      submit: 'Verificar Resultado',
      error: 'Error al generar persona',
      generalError: 'Ocurrió un error',
      retry: 'Intentar de Nuevo',
      shareSuccess: '¡Resultado copiado al portapapeles!',
      shareCanceled: 'Compartir cancelado',
      copyManual: 'Copia este texto:'
    },
    traitsList: [
      'Obsesivo', 'Frío', 'Manipulativo', 'Solitario', 'Perfeccionista',
      'Suspicaz', 'Emocional', 'Dominante', 'Misterioso', 'Vengativo',
      'Intuitivo', 'Calculador'
    ],
    moodsList: [
      { emoji: '😵‍💫', text: 'Confundido' },
      { emoji: '😤', text: 'Enojado' },
      { emoji: '😔', text: 'Deprimido' },
      { emoji: '😈', text: 'Malvado' },
      { emoji: '🤔', text: 'Escéptico' },
      { emoji: '😶‍🌫️', text: 'Vacío' },
      { emoji: '🔥', text: 'Apasionado' },
      { emoji: '🌙', text: 'Soñador' }
    ]
  }
};

export const getTranslation = (language: Language) => translations[language];