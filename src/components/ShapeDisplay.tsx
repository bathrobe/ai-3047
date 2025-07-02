'use client';

import { ShapeData } from '@/data/shapes';

interface ShapeDisplayProps {
  shapes: ShapeData[];
  currentIndex: number;
  className?: string;
}

export default function ShapeDisplay({ 
  shapes, 
  currentIndex, 
  className = '' 
}: ShapeDisplayProps) {
  const currentShape = shapes[currentIndex] || shapes[0];
  
  return (
    <div className={`fixed right-0 top-0 w-64 h-screen flex items-center justify-center ${className}`}>
      <svg 
        width="100" 
        height="100" 
        className="transition-all duration-500"
        aria-label={`Shape: ${currentShape.name}`}
      >
        {currentShape.shape}
      </svg>
    </div>
  );
}