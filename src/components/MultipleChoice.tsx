'use client';

import { Choice } from '@/types/content';

interface MultipleChoiceProps {
  question: string;
  choices: Choice[];
  selectedAnswer?: string;
  onAnswer: (choiceId: string) => void;
}

export default function MultipleChoice({ 
  question, 
  choices, 
  selectedAnswer,
  onAnswer 
}: MultipleChoiceProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{question}</h2>
      
      <div className="space-y-3">
        {choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onAnswer(choice.id)}
            className={`
              w-full text-left p-4 rounded-lg border-2 transition-all
              ${selectedAnswer === choice.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <span className="text-lg">{choice.text}</span>
          </button>
        ))}
      </div>
      
      {selectedAnswer && (
        <p className="text-sm text-gray-600 italic">
          You selected: {choices.find(c => c.id === selectedAnswer)?.text}
        </p>
      )}
    </div>
  );
}