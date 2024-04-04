import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  stepperIndex: number;
}

const EarthStepperAnimation: React.FC<Props> = ({ stepperIndex }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    // Calculate the new rotation angle based on the index
    if (stepperIndex == 1) {
      return;
    }
    const newRotationAngle = stepperIndex * 20; // Adjust the increment value as needed
    setRotationAngle(newRotationAngle);
  }, [stepperIndex]);

  const animationVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, rotate: rotationAngle },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Image
        src="/assets/illustration/earth.svg"
        alt="Earth"
        width={700}
        height={700}
        style={{
          marginBottom: "10px",
          marginTop: "10px",
        }}
      />
    </motion.div>
  );
};

export default EarthStepperAnimation;
