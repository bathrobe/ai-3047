type ScaleContent = {
  macro: string;
  meso: string;
  micro: string;
};

export function generateScaleContent(userChoices: Record<number, string>): ScaleContent {
  const choiceValues = Object.values(userChoices);
  
  // Count choice categories
  const proTechCount = choiceValues.filter(c => 
    ['metrics', 'integrate', 'efficiency', 'health', 'embrace', 'artificial', 'yes'].includes(c)
  ).length;
  
  const proHumanCount = choiceValues.filter(c => 
    ['community', 'monitor', 'jobs', 'privacy', 'preserve', 'natural', 'no'].includes(c)
  ).length;
  
  const balancedCount = choiceValues.filter(c => 
    ['calibrate', 'sandbox', 'transition', 'choice', 'hybrid', 'both', 'unsure', 'middle', 'warn', 'freedom', 'safety', 'learn'].includes(c)
  ).length;
  
  // Latest significant choices
  const hasEmbrace = choiceValues.includes('embrace');
  const hasPreserve = choiceValues.includes('preserve');
  const hasEfficiency = choiceValues.includes('efficiency');
  const hasJobs = choiceValues.includes('jobs');
  const hasStrict = choiceValues.includes('strict');
  const hasLearn = choiceValues.includes('learn');

  // Determine dominant path
  const techDominant = proTechCount > proHumanCount && proTechCount > balancedCount;
  const humanDominant = proHumanCount > proTechCount && proHumanCount > balancedCount;
  
  return {
    macro: techDominant
      ? `AI integration at 85%. ${hasEfficiency ? 'Automation replacing millions of jobs daily.' : 'Digital consciousness expanding globally.'}`
      : humanDominant
      ? `Human autonomy zones growing. ${hasJobs ? 'Work preservation laws enacted worldwide.' : 'Biological heritage protected by law.'}`
      : hasLearn
      ? "Hacker collectives now run global security. Chaos becoming order."
      : hasStrict
      ? "Security state tightening. Freedom index dropping to 43%."
      : "World in flux. Integration at 67%, resistance at 33%.",

    meso: hasEmbrace
      ? "Your district converting to thought-sharing network. Privacy extinct."
      : hasPreserve
      ? "Neighborhood forming analog sanctuary. Tech-free zones expanding."
      : hasLearn
      ? "Local youth recruited for cyber defense. Crime down 67%."
      : techDominant
      ? "847 minds merged in district mesh. Individual thought fading."
      : humanDominant
      ? "Community centers bustling. Human connection revival movement growing."
      : "Your area split: 423 connected, 424 resisting. Tension rising.",

    micro: hasEmbrace
      ? "Your thoughts merging with collective. Self dissolving into we."
      : hasPreserve
      ? "You feel more human today. Dreams return after years of silence."
      : hasEfficiency
      ? "Productivity up 340%. Empathy markers showing steady decline."
      : hasJobs
      ? "You saved 47 jobs today. Sleep comes easier now."
      : techDominant
      ? "Neural optimization complete. Emotions simplified to binary states."
      : humanDominant
      ? "Augmentations powered down. Rediscovering forgotten sensations."
      : "Mind caught between worlds. Neither fully human nor machine."
  };
}