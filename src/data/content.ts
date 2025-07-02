import { Step } from '@/types/content';

export const steps: Step[] = [
  { 
    id: 0,
    type: 'static',
    content: "Welcome to our interactive story. As you scroll, you'll encounter both text and questions that affect what you see on the right."
  },
  { 
    id: 1,
    type: 'static',
    content: "The shape on the right changes as you progress through the story. But sometimes, your choices will determine what shape appears."
  },
  { 
    id: 2,
    type: 'multiple-choice',
    question: "What shape do you prefer?",
    choices: [
      { id: 'circle', text: 'A perfect circle', shapeIndex: 0 },
      { id: 'square', text: 'A solid square', shapeIndex: 1 },
      { id: 'triangle', text: 'A sharp triangle', shapeIndex: 2 }
    ]
  },
  { 
    id: 3,
    type: 'static',
    content: "Great choice! Notice how the shape changed based on your answer. This is just the beginning of what's possible with interactive scrollytelling." 
  },
  { 
    id: 4,
    type: 'multiple-choice',
    question: "How are you enjoying this experience?",
    choices: [
      { id: 'love', text: 'I love it!', shapeIndex: 4 },
      { id: 'interesting', text: 'It\'s interesting', shapeIndex: 3 },
      { id: 'confused', text: 'I\'m a bit confused', shapeIndex: 0 }
    ]
  },
  {
    id: 5,
    type: 'free-form',
    question: "Imagine you're looking at the world in 2074. What's the first thing that comes to mind?",
    placeholder: "Describe what you see, feel, or imagine..."
  }
];

// Export for backwards compatibility
export type { Step as StepContent };