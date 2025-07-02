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

// Dynamic SVG components for each scale
const MacroVisualization = ({ choices }: { choices: Record<number, string> }) => {
  const choiceValues = Object.values(choices);
  const hasIntegrate = choiceValues.includes('integrate');
  const hasMonitor = choiceValues.includes('monitor');
  const hasRestrict = choiceValues.includes('restrict');
  const hasEfficiency = choiceValues.includes('efficiency');
  const hasMetrics = choiceValues.includes('metrics');
  
  // Base alignment affected by choices
  let alignment = 50;
  if (hasMetrics) alignment += 5;
  if (hasIntegrate) alignment += 20;
  if (hasMonitor) alignment += 10;
  if (hasRestrict) alignment -= 15;
  if (hasEfficiency) alignment += 15;
  
  // Robot rights index
  const robotRights = hasIntegrate ? 100 : hasMonitor ? 50 : hasRestrict ? 0 : 25;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Global map outline */}
      <rect x="10" y="10" width="180" height="80" fill="#000033" rx="4" />
      
      {/* Continental nodes - size changes with alignment */}
      <circle cx="50" cy="35" r={8 + alignment/10} fill="#00ffff" opacity="0.3" />
      <circle cx="150" cy="35" r={8 + alignment/10} fill="#00ffff" opacity="0.5" />
      <circle cx="100" cy="65" r={8 + alignment/10} fill="#00ffff" opacity="0.4" />
      
      {/* Connection lines - brighter with higher alignment */}
      <line x1="50" y1="35" x2="150" y2="35" stroke="#00ffff" strokeWidth="0.5" opacity={alignment/100} />
      <line x1="50" y1="35" x2="100" y2="65" stroke="#00ffff" strokeWidth="0.5" opacity={alignment/100} />
      <line x1="150" y1="35" x2="100" y2="65" stroke="#00ffff" strokeWidth="0.5" opacity={alignment/100} />
      
      {/* Robot rights indicator */}
      {hasIntegrate || hasMonitor || hasRestrict ? (
        <g>
          <rect x="10" y="95" width="60" height="20" fill="#003366" rx="2" />
          <text x="40" y="108" textAnchor="middle" fill="#00ff88" fontSize="10">
            ROBOTS: {robotRights}%
          </text>
        </g>
      ) : null}
      
      {/* Alignment percentage */}
      <text x="100" y="100" textAnchor="middle" fill="#00ffff" fontSize="14" fontWeight="bold">
        {alignment}% ALIGNED
      </text>
      
      {/* Pulsing effect for high alignment */}
      {alignment > 70 && (
        <circle cx="100" cy="50" r="40" fill="none" stroke="#00ffff" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  );
};

const MesoVisualization = ({ choices }: { choices: Record<number, string> }) => {
  const choiceValues = Object.values(choices);
  const hasCommunity = choiceValues.includes('community');
  const hasJobs = choiceValues.includes('jobs');
  const hasTransition = choiceValues.includes('transition');
  const hasRecruit = choiceValues.includes('recruit');
  const hasWarn = choiceValues.includes('warn');
  
  // Dynamic mesh strength
  let meshStrength = 423;
  if (hasCommunity) meshStrength = 847;
  if (hasJobs) meshStrength -= 200;
  if (hasTransition) meshStrength += 100;
  
  // Security level
  const securityLevel = hasRecruit ? 85 : hasWarn ? 60 : 40;
  
  // Job automation rate
  const jobsAutomated = hasJobs ? 0 : hasTransition ? 5000 : 10000;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#003366" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="120" fill="url(#grid)" />
      
      {/* Community nodes - more disconnect when jobs are automated */}
      {Array.from({ length: 12 }, (_, i) => {
        const offsetX = ((i * 7) % 10);
        const offsetY = ((i * 5) % 10);
        const x = 30 + (i % 4) * 40 + offsetX;
        const y = 20 + Math.floor(i / 4) * 30 + offsetY;
        const connected = hasCommunity || (hasJobs ? i % 2 === 0 : i % 3 !== 2);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill={connected ? "#00ff88" : "#666666"} opacity="0.8" />
            {connected && i < 11 && (
              <line 
                x1={x} y1={y} 
                x2={30 + ((i + 1) % 4) * 40 + ((i + 1) * 7) % 10} 
                y2={20 + Math.floor((i + 1) / 4) * 30 + ((i + 1) * 5) % 10} 
                stroke="#00ff88" 
                strokeWidth="0.5" 
                opacity="0.3" 
              />
            )}
          </g>
        );
      })}
      
      {/* Job automation indicator */}
      {(hasJobs || hasTransition || choiceValues.includes('efficiency')) && (
        <g>
          <rect x="130" y="95" width="60" height="20" fill="#660000" rx="2" />
          <text x="160" y="108" textAnchor="middle" fill="#ff6666" fontSize="10">
            JOBS: -{jobsAutomated}
          </text>
        </g>
      )}
      
      {/* Security indicator */}
      {(hasRecruit || hasWarn) && (
        <g>
          <rect x="10" y="95" width="60" height="20" fill="#003300" rx="2" />
          <text x="40" y="108" textAnchor="middle" fill="#00ff00" fontSize="10">
            SEC: {securityLevel}%
          </text>
        </g>
      )}
      
      {/* Mesh strength indicator */}
      <text x="100" y="110" textAnchor="middle" fill="#00ff88" fontSize="12">
        {meshStrength} MINDS CONNECTED
      </text>
    </svg>
  );
};

const MicroVisualization = ({ choices }: { choices: Record<number, string> }) => {
  const choiceValues = Object.values(choices);
  const hasCalibrate = choiceValues.includes('calibrate');
  const hasEmbrace = choiceValues.includes('embrace');
  const hasPreserve = choiceValues.includes('preserve');
  const hasHybrid = choiceValues.includes('hybrid');
  const hasNatural = choiceValues.includes('natural');
  const hasArtificial = choiceValues.includes('artificial');
  
  // Calculate integration level
  let integrationLevel = 50;
  if (hasCalibrate) integrationLevel += 10;
  if (hasEmbrace) integrationLevel = 100;
  if (hasPreserve) integrationLevel = 0;
  if (hasHybrid) integrationLevel = 75;
  if (hasArtificial) integrationLevel += 15;
  if (hasNatural) integrationLevel -= 20;
  
  // Empathy vs efficiency
  const empathyLevel = hasPreserve ? 90 : hasNatural ? 80 : hasHybrid ? 60 : 30;
  const efficiencyLevel = hasEmbrace ? 95 : hasArtificial ? 80 : hasCalibrate ? 70 : 40;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Neural pathways background */}
      <rect width="200" height="120" fill="#000033" />
      
      {/* Central consciousness node - size based on integration */}
      <circle cx="100" cy="60" r={15 + integrationLevel/10} fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.6" />
      
      {/* Neural connections - more active with higher integration */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle) * (15 + integrationLevel/10);
        const y1 = 60 + Math.sin(angle) * (15 + integrationLevel/10);
        const x2 = 100 + Math.cos(angle) * 50;
        const y2 = 60 + Math.sin(angle) * 50;
        const active = integrationLevel > (i * 12.5);
        
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} 
              stroke={active ? "#ff00ff" : "#666666"} 
              strokeWidth="1" 
              opacity={active ? "0.8" : "0.3"} 
            />
            <circle cx={x2} cy={y2} r="3" fill={active ? "#ff00ff" : "#666666"} opacity="0.8" />
          </g>
        );
      })}
      
      {/* Integration meter */}
      <rect x="10" y="10" width="60" height="8" fill="#330033" rx="4" />
      <rect x="10" y="10" width={60 * integrationLevel/100} height="8" fill="#ff00ff" rx="4" />
      <text x="75" y="17" fill="#ff00ff" fontSize="8">INTEGRATION: {integrationLevel}%</text>
      
      {/* Empathy vs Efficiency bars */}
      <g transform="translate(10, 95)">
        <text x="0" y="0" fill="#00ff88" fontSize="8">EMP: {empathyLevel}%</text>
        <rect x="30" y="-6" width={empathyLevel * 0.5} height="6" fill="#00ff88" opacity="0.8" />
      </g>
      <g transform="translate(110, 95)">
        <text x="0" y="0" fill="#ff6600" fontSize="8">EFF: {efficiencyLevel}%</text>
        <rect x="30" y="-6" width={efficiencyLevel * 0.5} height="6" fill="#ff6600" opacity="0.8" />
      </g>
      
      {/* Center pulse - faster when more integrated */}
      <circle cx="100" cy="60" r="5" fill="#ffffff">
        <animate attributeName="r" values="5;8;5" dur={3 - integrationLevel/50 + "s"} repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.5;1" dur={3 - integrationLevel/50 + "s"} repeatCount="indefinite" />
      </circle>
      
      {/* Status text */}
      <text x="100" y="110" textAnchor="middle" fill="#ff00ff" fontSize="10">
        {hasEmbrace ? "TRANSCENDING" : hasPreserve ? "PRESERVING" : hasHybrid ? "FILTERING" : hasCalibrate ? "CALIBRATED" : "AWAITING"}
      </text>
    </svg>
  );
};

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
    <div className="fixed right-0 top-0 w-1/3 h-screen p-6 border-l border-gray-200 bg-gray-50 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <h1 className="text-lg font-bold mb-4 text-center text-gray-800">AI-3047: ALIGNMENT FUTURES</h1>

        {/* Scale sections */}
        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {sections.map((section, index) => (
            <div key={section.label} className="border border-gray-300 bg-white p-3 flex-1 min-h-0 flex flex-col rounded-lg shadow-sm">
              <h2 className="text-sm font-semibold mb-2 text-gray-800">
                {section.label}
              </h2>
              
              {/* Dynamic SVG visualization */}
              <div className="w-full flex-1 bg-gray-900 border border-gray-300 mb-2 min-h-0 rounded overflow-hidden">
                {index === 0 && <MacroVisualization choices={userChoices} />}
                {index === 1 && <MesoVisualization choices={userChoices} />}
                {index === 2 && <MicroVisualization choices={userChoices} />}
              </div>
              
              {/* Dynamic text */}
              <p className="text-xs text-gray-600 leading-tight">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-3 flex-shrink-0">
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 transition-all duration-300"
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