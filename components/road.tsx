"use client";

// road.tsx
import React from "react";
import Image from "next/image";

const Road = () => {
  return (
    <Image
      src="/assets/illustration/road.svg"
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

export default Road;
