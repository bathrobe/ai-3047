declare module 'react-scrollama' {
  import { ReactNode } from 'react';

  interface ScrollamaProps {
    onStepEnter?: (data: { data: any; }) => void;
    onStepExit?: (data: { data: any; }) => void;
    onStepProgress?: (data: { data: any; progress: number; }) => void;
    offset?: number | string;
    progress?: boolean;
    threshold?: number;
    debug?: boolean;
    children?: ReactNode;
  }

  interface StepProps {
    data?: any;
    children?: ReactNode;
  }

  export const Scrollama: React.FC<ScrollamaProps>;
  export const Step: React.FC<StepProps>;
}