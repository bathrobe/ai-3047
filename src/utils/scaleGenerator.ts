type ScaleContent = {
  macro: string;
  meso: string;
  micro: string;
};

export function generateScaleContent(userChoices: Record<number, string>): ScaleContent {
  const choiceValues = Object.values(userChoices);
  const hasCircleChoice = choiceValues.includes('circle');
  const hasSquareChoice = choiceValues.includes('square');
  const hasTriangleChoice = choiceValues.includes('triangle');
  const hasLoveChoice = choiceValues.includes('love');
  const hasInterestingChoice = choiceValues.includes('interesting');
  const hasConfusedChoice = choiceValues.includes('confused');

  return {
    macro: hasLoveChoice
      ? "Global cooperation networks flourishing across continents"
      : hasTriangleChoice
      ? "Planetary systems undergoing rapid transformation"
      : hasSquareChoice
      ? "World infrastructure stabilizing into new patterns"
      : hasConfusedChoice
      ? "International tensions creating uncertainty"
      : "Earth's climate patterns shifting toward balance",

    meso: hasLoveChoice
      ? "Communities building stronger bonds and shared resources"
      : hasInterestingChoice
      ? "Local networks expanding with curious experimentation"
      : hasTriangleChoice
      ? "Regional power structures reshaping rapidly"
      : hasSquareChoice
      ? "Cities organizing into efficient districts"
      : hasConfusedChoice
      ? "Neighborhoods struggling with changing dynamics"
      : "Social groups adapting to new circumstances",

    micro: hasLoveChoice
      ? "Individuals finding deeper purpose and connection"
      : hasInterestingChoice
      ? "People exploring new possibilities with enthusiasm"
      : hasTriangleChoice
      ? "Personal transformations accelerating dramatically"
      : hasSquareChoice
      ? "Daily routines becoming more structured and purposeful"
      : hasConfusedChoice
      ? "Personal identity questions creating inner conflict"
      : "Individual awareness gradually expanding"
  };
}