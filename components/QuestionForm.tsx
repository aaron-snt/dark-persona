'use client';

import { useState } from 'react';
import { UserAnswers } from '@/app/page';
import AdSenseUnit from './AdSenseUnit';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/utils/translations';

interface QuestionFormProps {
  onSubmit: (answers: UserAnswers) => void;
}


export default function QuestionForm({ onSubmit }: QuestionFormProps) {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState('');
  const [step, setStep] = useState<'questions' | 'traits' | 'mood'>('questions');

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < translatedQuestions.length - 1) {
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
        mood: selectedMood,
        language
      });
    }
  };

  // 번역된 질문들 
  const translatedQuestions = [
    {
      id: 1,
      question: t.questions.conflict,
      options: t.options.conflict
    },
    {
      id: 2,
      question: t.questions.relationship,
      options: t.options.relationship
    },
    {
      id: 3,
      question: t.questions.goals,
      options: t.options.goals
    },
    {
      id: 4,
      question: t.questions.emotions,
      options: t.options.emotions
    },
    {
      id: 5,
      question: t.questions.power,
      options: t.options.power
    }
  ];

  if (step === 'questions') {
    const question = translatedQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / translatedQuestions.length) * 100;

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
              {currentQuestion + 1} / {translatedQuestions.length}
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
            {t.traits.title}
          </h2>
          <p className="text-gray-400">{t.traits.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {t.traitsList.map((trait) => (
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
            {t.traits.selected}: {selectedTraits.length}/3
          </div>

          <button
            onClick={handleTraitsNext}
            disabled={selectedTraits.length === 0}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-red-700 transition-all duration-200"
          >
            {t.traits.next}
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
            {t.mood.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.moodsList.map((mood) => (
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
            {t.result.submit}
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