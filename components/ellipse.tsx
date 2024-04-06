"use client";

// Ellipse.tsx
import React from "react";
import Image from "next/image";

const Ellipse = () => {
  return (
    <Image
      src="/assets/illustration/ellipse.svg"
      alt="Earth"
      width={200}
      height={800}
      style={{
        marginBottom: "10px",
        marginTop: "10px",
      }}
    />
  );
};

export default Ellipse;
