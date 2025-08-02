'use client';

import { useState } from 'react';
import { UserAnswers } from '@/app/page';
import AdSenseUnit from './AdSenseUnit';

interface QuestionFormProps {
  onSubmit: (answers: UserAnswers) => void;
}

const questions = [
  {
    id: 1,
    question: "갈등 상황에서 당신은?",
    options: [
      "직접적으로 맞서서 해결한다",
      "조용히 관찰하며 기회를 기다린다", 
      "감정을 숨기고 피한다",
      "상대방의 약점을 파악한다"
    ]
  },
  {
    id: 2,
    question: "사람들과의 관계에서 당신은?",
    options: [
      "진심으로 다가가려 노력한다",
      "필요할 때만 관계를 유지한다",
      "상대방을 분석하고 이용한다",
      "거리를 두고 관찰만 한다"
    ]
  },
  {
    id: 3,
    question: "목표 달성을 위해서라면?",
    options: [
      "정직하고 노력하는 방법만 사용한다",
      "약간의 속임수는 괜찮다고 생각한다",
      "수단과 방법을 가리지 않는다",
      "다른 사람을 이용할 수도 있다"
    ]
  },
  {
    id: 4,
    question: "감정 표현에 대해서는?",
    options: [
      "솔직하게 감정을 드러낸다",
      "상황에 따라 조절해서 표현한다",
      "거의 표현하지 않는다",
      "계산적으로 감정을 연출한다"
    ]
  },
  {
    id: 5,
    question: "권력이나 통제에 대해?",
    options: [
      "별로 관심이 없다",
      "때로는 필요하다고 생각한다",
      "은밀하게 통제하는 것을 좋아한다",
      "명확한 권력을 갖고 싶어한다"
    ]
  }
];

const traitOptions = [
  "강박적", "냉정한", "조작적", "고독한", "완벽주의자",
  "의심 많은", "감정적", "지배적", "신비로운", "복수심 강한",
  "직관적", "계산적"
];

const moodOptions = [
  { emoji: "😵‍💫", text: "혼란스러운" },
  { emoji: "😤", text: "분노하는" },
  { emoji: "😔", text: "우울한" },
  { emoji: "😈", text: "악독한" },
  { emoji: "🤔", text: "회의적인" },
  { emoji: "😶‍🌫️", text: "공허한" },
  { emoji: "🔥", text: "열정적인" },
  { emoji: "🌙", text: "몽환적인" }
];

export default function QuestionForm({ onSubmit }: QuestionFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState('');
  const [step, setStep] = useState<'questions' | 'traits' | 'mood'>('questions');

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('traits');
    }
  };

  const handleTraitToggle = (trait: string) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter(t => t !== trait));
    } else if (selectedTraits.length < 3) {
      setSelectedTraits([...selectedTraits, trait]);
    }
  };

  const handleTraitsNext = () => {
    if (selectedTraits.length > 0) {
      setStep('mood');
    }
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      onSubmit({
        answers,
        traits: selectedTraits,
        mood: selectedMood
      });
    }
  };

  if (step === 'questions') {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-purple-500 to-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-center">
              {currentQuestion + 1} / {questions.length}
            </p>
          </div>

          <div className="text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className="w-full p-4 text-left border border-gray-600 rounded-lg hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-200 group"
                >
                  <span className="group-hover:text-purple-300 transition-colors">
                    {option}
                  </span>
                </button>
              ))}
            </div>
            
            {/* 질문 페이지 하단 배너 */}
            <div className="mt-8">
              <AdSenseUnit 
                adSlot="5555555555"
                adFormat="horizontal"
                className="bg-gray-800/30 p-2 rounded-lg"
                adStyle={{ display: 'block', height: '60px' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'traits') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-2xl text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            당신의 성향을 선택하세요
          </h2>
          <p className="text-gray-400">최대 3개까지 선택 가능</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {traitOptions.map((trait) => (
              <button
                key={trait}
                onClick={() => handleTraitToggle(trait)}
                className={`p-3 rounded-lg border transition-all duration-200 ${
                  selectedTraits.includes(trait)
                    ? 'border-purple-500 bg-purple-900/50 text-purple-300'
                    : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/50'
                }`}
                disabled={!selectedTraits.includes(trait) && selectedTraits.length >= 3}
              >
                {trait}
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-500">
            선택됨: {selectedTraits.length}/3
          </div>

          <button
            onClick={handleTraitsNext}
            disabled={selectedTraits.length === 0}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-red-700 transition-all duration-200"
          >
            다음
          </button>

          {/* 성향 선택 하단 배너 */}
          <div className="mt-8">
            <AdSenseUnit 
              adSlot="6666666666"
              adFormat="horizontal"
              className="bg-gray-800/30 p-2 rounded-lg"
              adStyle={{ display: 'block', height: '60px' }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (step === 'mood') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-2xl text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            현재 당신의 감정은?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moodOptions.map((mood) => (
              <button
                key={mood.text}
                onClick={() => handleMoodSelect(mood.text)}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  selectedMood === mood.text
                    ? 'border-purple-500 bg-purple-900/50 text-purple-300'
                    : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/50'
                }`}
              >
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="text-sm">{mood.text}</div>
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedMood}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-red-700 transition-all duration-200"
          >
            결과 확인하기
          </button>

          {/* 감정 선택 하단 배너 */}
          <div className="mt-8">
            <AdSenseUnit 
              adSlot="7777777777"
              adFormat="horizontal"
              className="bg-gray-800/30 p-2 rounded-lg"
              adStyle={{ display: 'block', height: '60px' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}