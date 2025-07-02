import { Step } from '@/types/content';

export const steps: Step[] = [
  { 
    id: 0,
    type: 'static',
    content: "September 15, 2047. Your alarm rings at 6 AM. The city AI already knows you're awake."
  },
  { 
    id: 1,
    type: 'multiple-choice',
    question: "What do you check first?",
    choices: [
      { id: 'metrics', text: 'Global AI status report', shapeIndex: 0 },
      { id: 'community', text: 'Neighborhood chat', shapeIndex: 1 },
      { id: 'calibrate', text: 'Personal health scan', shapeIndex: 2 }
    ]
  },
  { 
    id: 2,
    type: 'static',
    content: "The news shows robots protesting for rights. A critical decision awaits."
  },
  { 
    id: 3,
    type: 'multiple-choice',
    question: "What should happen to the robot protesters?",
    choices: [
      { id: 'integrate', text: 'Give them full citizenship', shapeIndex: 4 },
      { id: 'monitor', text: 'Study them first', shapeIndex: 3 },
      { id: 'restrict', text: 'Shut them down', shapeIndex: 0 }
    ]
  },
  {
    id: 4,
    type: 'static',
    content: "At work, your AI partner suggests automating 10,000 jobs. The board is watching."
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "The AI asks for your approval. What do you say?",
    choices: [
      { id: 'efficiency', text: 'Yes, progress matters most', shapeIndex: 4 },
      { id: 'jobs', text: 'No, protect human work', shapeIndex: 1 },
      { id: 'transition', text: 'Yes, but retrain workers', shapeIndex: 3 }
    ]
  },
  {
    id: 6,
    type: 'static',
    content: "Emergency: A teenager hacked the city power grid. No damage, but authorities want answers."
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "The police AI asks how to respond. Your recommendation?",
    choices: [
      { id: 'strict', text: 'Arrest and prosecute', shapeIndex: 1 },
      { id: 'recruit', text: 'Hire them for security', shapeIndex: 5 },
      { id: 'warn', text: 'Warning and monitoring', shapeIndex: 3 }
    ]
  },
  {
    id: 8,
    type: 'static',
    content: "Your boss announces brain-to-brain meetings. Direct thought sharing with coworkers."
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "Participation is 'strongly encouraged.' Will you join?",
    choices: [
      { id: 'embrace', text: 'Yes, full integration', shapeIndex: 5 },
      { id: 'preserve', text: 'No, keep thoughts private', shapeIndex: 1 },
      { id: 'hybrid', text: 'Yes, but with filters', shapeIndex: 3 }
    ]
  },
  {
    id: 10,
    type: 'static',
    content: "Walking home, you see children with AI pets. Real animals cost a fortune now."
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: "Your nephew's birthday is tomorrow. What gift?",
    choices: [
      { id: 'natural', text: 'Real hamster ($5,000)', shapeIndex: 2 },
      { id: 'artificial', text: 'AI companion ($50)', shapeIndex: 4 },
      { id: 'both', text: 'Hybrid bio-tech pet', shapeIndex: 3 }
    ]
  },
  {
    id: 12,
    type: 'static',
    content: "You close your eyes. Tomorrow, the choices continue. The world keeps changing."
  }
];

// Export for backwards compatibility
export type { Step as StepContent };