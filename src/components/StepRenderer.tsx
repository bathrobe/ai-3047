'use client';

import { Step } from '@/types/content';
import MultipleChoice from './MultipleChoice';
import FreeForm from './FreeForm';

interface StepRendererProps {
  step: Step;
  userAnswers: Record<number, string>;
  onAnswer: (stepId: number, answerId: string) => void;
}

export default function StepRenderer({ 
  step, 
  userAnswers,
  onAnswer 
}: StepRendererProps) {
  switch (step.type) {
    case 'static':
      return (
        <p className="text-lg leading-relaxed">
          {step.content}
        </p>
      );
      
    case 'multiple-choice':
      return (
        <MultipleChoice
          question={step.question}
          choices={step.choices}
          selectedAnswer={userAnswers[step.id]}
          onAnswer={(answerId) => onAnswer(step.id, answerId)}
        />
      );

    case 'free-form':
      return (
        <FreeForm
          question={step.question}
          placeholder={step.placeholder}
          userAnswer={userAnswers[step.id]}
          onAnswer={(answer) => onAnswer(step.id, answer)}
        />
      );
      
    default:
      return null;
  }
}