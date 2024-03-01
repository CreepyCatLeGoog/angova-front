"use client";

import AnimatedEarth from "@/components/animatedEarth";
import EarthStepperAnimation from "@/components/earthStepperAnimation";
import DotsStepper from "@/components/ui/StepperDotIndicator";
import { Button } from "@/components/ui/button";
import { StepperProvider } from "@/contexts/stepper/StepperContext";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React from "react";

const ChooseCodeLanguage = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-72 sm:w-72 md:w-72 lg:w-96 xl:w-96">
        <div className="flex flex-col items-center justify-center h-screen ">
          <StepperProvider>
            <DotsStepper
              totalSteps={4}
              currentStep={currentStep}
              // setCurrentStep={setCurrentStep}
            />
          </StepperProvider>

          <h1>Choisi la langue du code la route</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
            hendrerit arcu, vel bibendum ligula. Cras urna enim, finibus ac
            tortor sed, laoreet iaculis turpis.
          </p>
          <Button
            variant={"orange"}
            onClick={() => {
              if (currentStep == 4) {
                return;
              }
              setCurrentStep(currentStep + 1);
              setShouldAnimate(true);
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mb-5 pb-20">
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            overflow: "hidden",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
          initial="hidden"
          animate={shouldAnimate ? "center" : "hidden"}
          variants={
            {
              // center: { y: -700, scale: 0.5 },
              // hidden: { y: -130, scale: 1.1, overflow: "hidden" },
            }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <EarthStepperAnimation stepperIndex={currentStep} />
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseCodeLanguage;
