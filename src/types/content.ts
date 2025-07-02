export interface BaseStep {
  id: number;
  type: 'static' | 'multiple-choice' | 'free-form';
}

export interface StaticStep extends BaseStep {
  type: 'static';
  content: string;
}

export interface Choice {
  id: string;
  text: string;
  shapeIndex?: number; // Optional override for shape display
}

export interface MultipleChoiceStep extends BaseStep {
  type: 'multiple-choice';
  question: string;
  choices: Choice[];
}

export interface FreeFormStep extends BaseStep {
  type: 'free-form';
  question: string;
  placeholder?: string;
}

export type Step = StaticStep | MultipleChoiceStep | FreeFormStep;