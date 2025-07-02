type DomainStates = {
  somatic: string;
  epistemic: string;
  economic: string;
  political: string;
  aesthetic: string;
  relational: string;
};

export function generateDomainStates(userChoices: Record<number, string>): DomainStates {
  const choiceValues = Object.values(userChoices);
  const hasCircleChoice = choiceValues.includes('circle');
  const hasSquareChoice = choiceValues.includes('square');
  const hasTriangleChoice = choiceValues.includes('triangle');
  const hasLoveChoice = choiceValues.includes('love');
  const hasInterestingChoice = choiceValues.includes('interesting');
  
  return {
    somatic: hasCircleChoice 
      ? "Body flows in harmony" 
      : hasSquareChoice 
      ? "Structured movement patterns"
      : "Physical systems adapting",
      
    epistemic: hasTriangleChoice
      ? "Sharp insights emerging"
      : hasSquareChoice
      ? "Knowledge systematically organized"
      : "Information networks forming",
      
    economic: hasLoveChoice
      ? "Abundance mindset prevailing"
      : hasInterestingChoice
      ? "Market curiosity growing"
      : "Resource flows stabilizing",
      
    political: hasSquareChoice
      ? "Institutional frameworks solidifying"
      : hasTriangleChoice
      ? "Power dynamics shifting rapidly"
      : "Governance patterns evolving",
      
    aesthetic: hasLoveChoice
      ? "Beauty radiating outward"
      : hasTriangleChoice
      ? "Artistic expressions intensifying"
      : "Creative energies emerging",
      
    relational: hasLoveChoice
      ? "Deep connections flourishing"
      : hasInterestingChoice
      ? "Social networks expanding"
      : "Community bonds strengthening"
  };
}