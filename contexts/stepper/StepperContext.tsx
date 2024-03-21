// contexts/StepperContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StepperContextProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

interface StepperProviderProps {
  children: ReactNode;
}

const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);

export const StepperProvider: React.FC<StepperProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};
