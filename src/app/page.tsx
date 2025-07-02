'use client';

import { useState } from 'react';
import ScrollamaContainer from '@/components/ScrollamaContainer';
import ScaleStack from '@/components/ScaleStack';
import { steps } from '@/data/content';

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const onStepEnter = ({ data }: { data: number }) => {
    setCurrentStepIndex(data);
  };

  const onAnswer = (stepId: number, answerId: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [stepId]: answerId
    }));
  };


  return (
    <div className="min-h-screen flex">
      {/* Main content area */}
      <div className="w-2/3 flex justify-center px-8">
        <div className="max-w-[65ch]">
          <ScrollamaContainer 
            steps={steps} 
            userAnswers={userAnswers}
            onStepEnter={onStepEnter}
            onAnswer={onAnswer}
            offset={0.5}
          />
        </div>
      </div>

      {/* Right panel with ScaleStack */}
      <ScaleStack userChoices={userAnswers} totalSteps={steps.length} />
    </div>
  );
}