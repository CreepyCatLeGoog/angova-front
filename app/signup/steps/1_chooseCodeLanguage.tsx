"use client";

import DotsStepper from "@/components/ui/StepperDotIndicator";
import { StepperProvider } from "@/contexts/stepper/StepperContext";
import React from "react";

const ChooseCodeLanguage = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <StepperProvider>
        <DotsStepper
          totalSteps={4}
          currentStep={currentStep}
          // setCurrentStep={setCurrentStep}
        />
      </StepperProvider>

      <h1>Choose Code Language</h1>
    </div>
  );
};

export default ChooseCodeLanguage;
