'use client';

import { generateScaleContent } from '@/utils/scaleGenerator';

interface ScaleStackProps {
  userChoices: Record<number, string>;
  totalSteps: number;
}

interface ScaleSection {
  label: string;
  content: string;
}

export default function ScaleStack({ userChoices, totalSteps }: ScaleStackProps) {
  const scaleContent = generateScaleContent(userChoices);
  const completedSteps = Object.keys(userChoices).length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  const sections: ScaleSection[] = [
    { label: 'MACRO', content: scaleContent.macro },
    { label: 'MESO', content: scaleContent.meso },
    { label: 'MICRO', content: scaleContent.micro }
  ];

  return (
    <div className="fixed right-0 top-0 w-1/3 h-screen p-6 border-l border-gray-200 bg-white overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <h1 className="text-lg font-bold mb-4 text-center">WORLD 2074</h1>

        {/* Scale sections */}
        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {sections.map((section) => (
            <div key={section.label} className="border border-gray-200 p-3 flex-1 min-h-0 flex flex-col">
              <h2 className="text-sm font-semibold mb-2 text-gray-800">
                {section.label}
              </h2>
              
              {/* Placeholder box */}
              <div className="w-full flex-1 bg-gray-100 border border-gray-200 mb-2 min-h-0" />
              
              {/* Dynamic text */}
              <p className="text-xs text-gray-600 leading-tight">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-3 flex-shrink-0">
          <div className="w-full bg-gray-200 h-2">
            <div 
              className="bg-gray-800 h-2 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">
            {progressPercentage}% complete
          </p>
        </div>
      </div>
    </div>
  );
}