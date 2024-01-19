"use client";
// AnimatedEarth.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedEarth = ({
  shouldAnimate,
  shouldAnimateFailed,
}: {
  shouldAnimate: boolean;
  shouldAnimateFailed: boolean;
}) => {
  const animationVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, rotate: 360 },
  };

  const formInvalidVariants = {
    hidden: { opacity: 1, x: [0, -10, 10, -5, 5, 0], rotate: 0 },
    visible: {
      opacity: 1,
      x: [0, -10, 10, -5, 5, 0],
      rotate: shouldAnimateFailed ? [0, -5, 5, -2, 2, 0] : 0,
    },
  };

  return (
    <motion.div
      variants={shouldAnimateFailed ? formInvalidVariants : animationVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      transition={{
        duration: shouldAnimateFailed ? 0.5 : 6,
        ease: "easeInOut",
        repeat: shouldAnimateFailed ? 0.2 : 1,
      }}
    >
      <Image
        src="/assets/illustration/earth.svg"
        alt="Earth"
        width={700}
        height={700}
      />
    </motion.div>
  );
};

export default AnimatedEarth;
