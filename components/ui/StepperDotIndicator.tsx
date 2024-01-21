// components/StepperDotIndicator.tsx
import React from "react";

interface StepperDotIndicatorProps {
  totalSteps: number;
  currentStep: number;
  // setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepperDotIndicator: React.FC<StepperDotIndicatorProps> = ({
  totalSteps,
  currentStep,
  // setCurrentStep,
}) => {
  // const handleDotClick = (index: number) => {
  //   setCurrentStep(index + 1);
  // };

  return (
    <div>
      <div>
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            key={index}
            // onClick={() => handleDotClick(index)}
            style={{
              marginRight: "8px",
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: index + 1 === currentStep ? "#F49E4C" : "#eaeaea",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StepperDotIndicator;
