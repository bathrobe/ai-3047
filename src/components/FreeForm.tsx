'use client';

import { useState } from 'react';

interface FreeFormProps {
  question: string;
  placeholder?: string;
  userAnswer?: string;
  onAnswer: (answer: string) => void;
}

export default function FreeForm({ 
  question, 
  placeholder = "Type your answer here...",
  userAnswer = "",
  onAnswer 
}: FreeFormProps) {
  const [inputValue, setInputValue] = useState(userAnswer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAnswer(inputValue.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{question}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full p-4 border-2 border-gray-200 rounded-lg resize-none h-32 focus:border-blue-500 focus:outline-none transition-colors"
          rows={4}
        />
        
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className={`
            px-6 py-2 rounded-lg font-medium transition-all
            ${inputValue.trim() 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          Submit
        </button>
      </form>
      
      {userAnswer && (
        <div className="mt-4 p-3 bg-gray-50 rounded border">
          <p className="text-sm text-gray-600 mb-1">Your answer:</p>
          <p className="text-sm">{userAnswer}</p>
        </div>
      )}
    </div>
  );
}