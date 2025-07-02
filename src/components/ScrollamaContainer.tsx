'use client';

import { Scrollama, Step } from "react-scrollama";
import { Step as StepType } from "@/types/content";
import StepRenderer from "./StepRenderer";
import { getVisibleSteps } from "@/utils/visibility";

interface ScrollamaContainerProps {
  steps: StepType[];
  userAnswers: Record<number, string>;
  onStepEnter: (data: { data: number }) => void;
  onAnswer: (stepId: number, answerId: string) => void;
  offset?: number;
}

export default function ScrollamaContainer({
  steps,
  userAnswers,
  onStepEnter,
  onAnswer,
  offset = 0.5,
}: ScrollamaContainerProps) {
  const visibleSteps = getVisibleSteps(steps, userAnswers);
  const hasHiddenContent = visibleSteps.length < steps.length;

  return (
    <>
      <h1 className="text-4xl font-bold my-16">Interactive Scrollytelling</h1>

      <Scrollama offset={offset} onStepEnter={onStepEnter}>
        {visibleSteps.map((step) => (
          <Step data={step.id} key={step.id}>
            <div className="min-h-[80vh] flex items-center">
              <StepRenderer 
                step={step} 
                userAnswers={userAnswers}
                onAnswer={onAnswer}
              />
            </div>
          </Step>
        ))}
      </Scrollama>

      {hasHiddenContent && (
        <div className="h-[40vh] flex items-center justify-center">
          <p className="text-gray-400 italic">
            Continue answering to reveal more content...
          </p>
        </div>
      )}

      {!hasHiddenContent && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-gray-500">End of story</p>
        </div>
      )}
    </>
  );
}