import { ReactElement } from 'react';

export interface ShapeData {
  id: number;
  shape: ReactElement;
  name: string;
}

export const shapes: ShapeData[] = [
  {
    id: 0,
    name: 'alignment-core',
    shape: (
      <g>
        <defs>
          <radialGradient id="alignGrad">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0066ff" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="35" fill="url(#alignGrad)" className="animate-pulse" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#00ffff" strokeWidth="0.5" />
      </g>
    )
  },
  {
    id: 1,
    name: 'mesh-network',
    shape: (
      <g>
        <circle cx="50" cy="20" r="4" fill="#00ff88" opacity="0.8" />
        <circle cx="20" cy="50" r="4" fill="#00ff88" opacity="0.8" />
        <circle cx="80" cy="50" r="4" fill="#00ff88" opacity="0.8" />
        <circle cx="50" cy="80" r="4" fill="#00ff88" opacity="0.8" />
        <circle cx="50" cy="50" r="6" fill="#00ffff" />
        <line x1="50" y1="50" x2="50" y2="20" stroke="#00ff88" strokeWidth="0.5" opacity="0.4" />
        <line x1="50" y1="50" x2="20" y2="50" stroke="#00ff88" strokeWidth="0.5" opacity="0.4" />
        <line x1="50" y1="50" x2="80" y2="50" stroke="#00ff88" strokeWidth="0.5" opacity="0.4" />
        <line x1="50" y1="50" x2="50" y2="80" stroke="#00ff88" strokeWidth="0.5" opacity="0.4" />
      </g>
    )
  },
  {
    id: 2,
    name: 'calibration-wave',
    shape: (
      <g>
        <path d="M 10 50 Q 25 20, 50 50 T 90 50" stroke="#ff00ff" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M 10 50 Q 25 80, 50 50 T 90 50" stroke="#00ffff" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="50" cy="50" r="3" fill="#ffffff" />
      </g>
    )
  },
  {
    id: 3,
    name: 'harmony-balance',
    shape: (
      <g>
        <circle cx="35" cy="50" r="20" fill="#00ff00" opacity="0.3" />
        <circle cx="65" cy="50" r="20" fill="#00ffff" opacity="0.3" />
        <circle cx="50" cy="50" r="8" fill="#ffffff" opacity="0.9" />
      </g>
    )
  },
  {
    id: 4,
    name: 'integration-matrix',
    shape: (
      <g>
        <rect x="20" y="20" width="15" height="15" fill="#00ffff" opacity="0.6" />
        <rect x="42.5" y="20" width="15" height="15" fill="#0088ff" opacity="0.6" />
        <rect x="65" y="20" width="15" height="15" fill="#00ffff" opacity="0.6" />
        <rect x="20" y="42.5" width="15" height="15" fill="#0088ff" opacity="0.6" />
        <rect x="42.5" y="42.5" width="15" height="15" fill="#00ffff" opacity="0.9" />
        <rect x="65" y="42.5" width="15" height="15" fill="#0088ff" opacity="0.6" />
        <rect x="20" y="65" width="15" height="15" fill="#00ffff" opacity="0.6" />
        <rect x="42.5" y="65" width="15" height="15" fill="#0088ff" opacity="0.6" />
        <rect x="65" y="65" width="15" height="15" fill="#00ffff" opacity="0.6" />
      </g>
    )
  },
  {
    id: 5,
    name: 'transcendence-spiral',
    shape: (
      <g>
        <path d="M 50 50 m -30 0 a 30 30 0 1 1 60 0 a 25 25 0 1 0 -50 0 a 20 20 0 1 1 40 0 a 15 15 0 1 0 -30 0 a 10 10 0 1 1 20 0" 
          stroke="#ff00ff" strokeWidth="1.5" fill="none" opacity="0.7" />
        <circle cx="50" cy="50" r="3" fill="#ffffff" className="animate-pulse" />
      </g>
    )
  }
];