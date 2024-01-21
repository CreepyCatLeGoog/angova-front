// components/Stepper.tsx
import React, { useState } from "react";

interface StepperProps {
  totalSteps: number;
}

const Stepper: React.FC<StepperProps> = ({ totalSteps }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <div>
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            key={index}
            style={{
              marginRight: "8px",
              display: "inline-block",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: index + 1 <= currentStep ? "#0070f3" : "#eaeaea",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <div>
        <button onClick={handlePrev} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentStep === totalSteps}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
