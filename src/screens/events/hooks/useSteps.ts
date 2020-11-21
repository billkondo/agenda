import { useState } from 'react';

export const useSteps = () => {
  const [step, setStep] = useState(0);

  const moveNextStep = () => setStep(step + 1);
  const movePreviousStep = () => setStep(step - 1);

  return {
    step,
    moveNextStep,
    movePreviousStep,
  };
};
