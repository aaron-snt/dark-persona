'use client';

import { useState } from 'react';
import OnboardingPage from '@/components/OnboardingPage';
import QuestionForm from '@/components/QuestionForm';
import ResultPage from '@/components/ResultPage';

export type Step = 'onboarding' | 'questions' | 'result';

export interface UserAnswers {
  traits: string[];
  mood: string;
  answers: string[];
  language?: string;
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>('onboarding');
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({
    traits: [],
    mood: '',
    answers: []
  });

  const handleStartTest = () => {
    setCurrentStep('questions');
  };

  const handleSubmitAnswers = (answers: UserAnswers) => {
    setUserAnswers(answers);
    setCurrentStep('result');
  };

  const handleRestart = () => {
    setCurrentStep('onboarding');
    setUserAnswers({ traits: [], mood: '', answers: [], language: undefined });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {currentStep === 'onboarding' && (
        <OnboardingPage onStart={handleStartTest} />
      )}
      {currentStep === 'questions' && (
        <QuestionForm onSubmit={handleSubmitAnswers} />
      )}
      {currentStep === 'result' && (
        <ResultPage answers={userAnswers} onRestart={handleRestart} />
      )}
    </div>
  );
}
