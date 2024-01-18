import React from "react";
import Image from "next/image";
const AnimatedEarth = () => {
  return (
    <>
      <Image
        src="assets/illustration/earth.svg"
        alt="Earth"
        width={700}
        height={700}
        style={{ bottom: "0", left: "0" }}
      />
    </>
  );
};

export default AnimatedEarth;
