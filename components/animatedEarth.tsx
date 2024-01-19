"use client";
// animatedEarth.tsx

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedEarth = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  const animationVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, rotate: 720 },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
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
