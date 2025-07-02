import { ReactElement } from 'react';

export interface ShapeData {
  id: number;
  shape: ReactElement;
  name: string;
}

export const shapes: ShapeData[] = [
  {
    id: 0,
    name: 'circle',
    shape: <circle cx="50" cy="50" r="40" fill="#3b82f6" />
  },
  {
    id: 1,
    name: 'square',
    shape: <rect x="20" y="20" width="60" height="60" fill="#10b981" />
  },
  {
    id: 2,
    name: 'triangle',
    shape: <polygon points="50,10 90,90 10,90" fill="#f59e0b" />
  },
  {
    id: 3,
    name: 'rounded-square',
    shape: <rect x="20" y="20" width="60" height="60" rx="30" fill="#ef4444" />
  },
  {
    id: 4,
    name: 'pentagon',
    shape: <polygon points="50,10 90,40 70,90 30,90 10,40" fill="#8b5cf6" />
  }
];