import { Step } from '@/types/content';

export function getVisibleSteps(
  steps: Step[], 
  userAnswers: Record<number, string>
): Step[] {
  const visibleSteps: Step[] = [];
  
  for (const step of steps) {
    visibleSteps.push(step);
    
    // If this is an unanswered interactive question, stop here
    if ((step.type === 'multiple-choice' || step.type === 'free-form') && !userAnswers[step.id]) {
      break;
    }
  }
  
  return visibleSteps;
}